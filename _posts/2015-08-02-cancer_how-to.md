---
layout:     post
title:      "Using R, rCharts, and NVD3 to Visualize Cancer Rates in the US"
date:       2015-08-02
summary:    "A breakdown of where to find the data, how to transform it into an applicable format, and how to create and customize interactive visualizations that can be easily shared."
permalink:  /cancer-how-to/
tags:
  -R
  -dplyr
  -rCharts
---

* This post is an explanation on how I created the graphs [here](/visuals/cancer/).
* It is assumed that basic knowledge of [R](https://www.r-project.org/) is known.

Our goal is to create an interactive graph of cancer rates in the United States.

There are 12 years worth of data available from the Centers of Disease Control and Prevention, and it can be obtained [here](http://www.cdc.gov/cancer/npcr/uscs/download_data.htm). The data is broken up into multiple files, depending on the variables of interest. We will be using the file `BYSITE.txt` to compare sites (types of cancer), and the file `BYAGE.txt` to compare age groups.

After downloading the data, we need to load it into R. We also need to load the packages we will be using. We will be using [dplyr](https://github.com/hadley/dplyr) to process the data, [rCharts](http://rcharts.io/) to create the graphs, and [RColorBrewer](https://cran.r-project.org/web/packages/RColorBrewer/index.html) for pretty colors.

{% highlight r %}
library(dplyr)
library(rCharts)
library(RColorBrewer)

site_data <- read.table("BYSITE.TXT",
                        sep              = '|',
                        header           = TRUE,
                        stringsAsFactors = FALSE)

age_data  <- read.table("BYAGE.TXT",
                        sep              = '|',
                        header           = TRUE,
                        stringsAsFactors = FALSE)

names(age_data)  <- tolower(names(age_data))
names(site_data) <- tolower(names(site_data))
{% endhighlight %}

We now need to transform the data into a format acceptable for rCharts. rCharts connects to JavaScript libraries that utilize [D3.js](http://d3js.org/). The JavaScript library we will be connecting to is [NVD3](http://nvd3.org/).

Our first task is to create a graph where the x-axis is time (1999 to 2011), the y-axis is rate of cancer, and different colored lines represent different types of cancer. Therefore, we want 3 columns: year, cancer rate, and type of cancer. The number of rows will be equal to the number of combinations between year and type of cancer.

Since there are so many types of cancer, we will subset our data to include only the types that are most prevalent (highest rate). It is easy to see that the top 5 cancer types were the same for both 1999 and 2011.

{% highlight r %}
# Change year to 2011 to see how they compare.
site_data %>%
  filter(year       == "1999",
         sex        == "Male and Female",
         race       == "All Races",
         event_type == "Incidence",
         count      != "~",
         count      != "-",
         count      != ".") %>%
  mutate(rate = (as.integer(count) / as.integer(population)) * 1e5) %>%
  arrange(rate) %>%
  select(year,
         site) %>%
  tail(7)
{% endhighlight %}

Now we will subset our data based on those 5 cancer types, and also prepare our data for rCharts. We will include "All Cancer Sites Combined" for comparison purposes.

{% highlight r %}
sites <- c("Respiratory System",
           "Digestive System",
           "Prostate",
           "Female Breast",
           "Male Genital System",
           "All Cancer Sites Combined")

c1 <- site_data %>%
 filter(site       %in% sites
        year       != "2007-2011",
        sex        == "Male and Female",
        race       == "All Races",
        event_type == "Incidence",
        count      != "~",
        count      != "-",
        count      != ".",) %>%
 mutate(rate = (as.integer(count) / as.integer(population)) * 1e5) %>%
 select(year,
        site,
        rate)

c1$rate <- round(c1$rate,
                 digits = 2)
{% endhighlight %}

Now that our data is in the format we wanted, we can move on to creating the graph. We will first use rChart's `nPlot` function to generate an NVD3 object. We will then call specific functions from this object to customize things on our graph.

{% highlight r %}
# Creating the NVD3 object.
n1 <- nPlot(norm_count ~ year,
            data  = c1,
            group = "site",
            type  = "lineChart")

# Cleaning up the axes.
n1$yAxis(showMaxMin = FALSE,
         axisLabel  = "Rate (per 100,000)",
         width      = 47)
n1$xAxis(axisLabel = "Year")

# Setting up which features are selected by default.
disable_these <- unique(c1$site) == "All Cancer Sites Combined"
n1$set(disabled = disable_these)

# Changing the color of the lines.
n1$chart(color = c("black",
                   brewer.pal(5, "Dark2")))

# Customizing the tooltip when you hover over an observation.
n1$chart(tooltipContent = "#! function(key, x, y){
         return '<h3>' + key + '</h3>' +
         '<p>' + y + ' per 100,000 diagnosed in ' + x + '</p>'
         } !#")
{% endhighlight %}

If you are using [RStudio](https://www.rstudio.com/), you can just type `n1` to view and interact with the graph. Or, you can save the graph as an html file, which allows you to view and interact with it in a browser. Saving it as an html file also makes it easy to put it on a website.

You can also easily embed the graph into an [R Markdown](http://rmarkdown.rstudio.com/) document, or publish it for free on [RPubs](http://rpubs.com/) or [Gist](https://gist.github.com/).

Information on how to do these things is available on the [documentation for rCharts](http://rcharts.readthedocs.org/en/latest/intro/share.html).

Creating a graph comparing genders is very similar to what we did above. We first use dplyr to process the data into the format we need.

{% highlight r %}
c2 <- site_data %>%
  filter(site       == "All Cancer Sites Combined",
         year       != "2007-2011",
         race       == "All Races",
         event_type == "Incidence",
         count      != "~",
         count      != "-",
         count      != ".") %>%
  mutate(rate = (as.integer(count) / as.integer(population)) * 1e5) %>%
  select(year,
         sex,
         rate)

c2$rate <- round(c2$rate,
                 digits = 2)
{% endhighlight %}

Now we use rCharts to create and customize our graph.

{% highlight r %}
# Creating the NVD3 object.
n2 <- nPlot(norm_count ~ year,
            data  = c2,
            group = "sex",
            type  = "lineChart")

# Cleaning up the axes.
n2$yAxis(showMaxMin = FALSE,
         axisLabel  = "Rate (per 100,000)",
         width      = 47)
n2$xAxis(axisLabel = "Year")

# Setting up which features are selected by default.
disable_these <- unique(c2$sex) == "Male and Female"
n2$set(disabled = disable_these)

# Changing the color of the lines.
n2$chart(color = c("hotpink",
                   "blue",
                   "black"))

# Customizing the tooltip when you hover over an observation.
n2$chart(tooltipContent = "#! function(key, x, y){
        return '<h3>' + key + '</h3>' +
              '<p>' + y + ' per 100,000 diagnosed in ' + x + '</p>'
              } !#")
{% endhighlight %}

Creating a graph to compare races is almost exactly the same as the above code. Just replace "sex" with "race". Creating a graph that compares age, though, is a bit more tricky. There are some issues with the way R sorts the age column. We have to force factor levels on the age variable to make sure everything is sorted correctly. This is kind of tedious, but it works.

{% highlight r %}
age_data$age <- factor(age_data$age,
                       levels = c("<1", "1-4", "5-9", "10-14", "15-19", "20-24",
                                  "25-29", "30-34", "35-39", "40-44", "45-49",
                                  "50-54", "55-59", "60-64", "65-69", "70-74",
                                  "75-79", "80-84", "85+"),
                       ordered = TRUE)
{% endhighlight %}

Now we can move on to using dplyr and rCharts, and everything comes out as expected.

{% highlight r %}
c4 <- age_data %>%
  filter(site       == "All Cancer Sites Combined",
         year       != "2007-2011",
         sex        == "Male and Female",
         race       == "All Races",
         event_type == "Incidence",
         count      != "~",
         count      != "-",
         count      != ".",) %>%
  mutate(rate = (as.integer(count) / as.integer(population)) * 1e5) %>%
  select(year,
         age,
         rate) %>%
  arrange(year,
          age)

c4$rate <- round(c4$rate,
                 digits = 2)

# Creating the NVD3 object.
n4 <- nPlot(rate ~ age,
            data  = c4,
            group = "year",
            type  = "multiBarChart")

# Cleaning up the axes.
n4$yAxis(showMaxMin = FALSE,
         axisLabel  = "Rate (per 100,000)",
         width      = 47,
         tickFormat = "#! function(d) {return d} !#")
n4$xAxis(showMaxMin = FALSE,
         axisLabel  = "Age")

# Setting up which features are selected by default.
keep_these <- unique(c4$year) == "2011"
n4$set(disabled = !keep_these)

# Changing the color of the lines.
n4$chart(color = colorRampPalette(brewer.pal(8, "Dark2"))(13))

# Customizing the tooltip when you hover over an observation.
n4$chart(tooltipContent = "#! function(key, x, y){
        return '<h3>' + x + '</h3>' +
         '<p>' + y + ' per 100,000 diagnosed in ' + key + '</p>'
         } !#")
{% endhighlight %}

I would like to end this post by thanking [Ramnath Vaidyanathan](http://ramnathv.github.io/) for all the work he has put into rCharts.
