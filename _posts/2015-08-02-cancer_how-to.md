---
layout:     post
title:      "Using R, rCharts, and NVD3 to Visualize Cancer Rates in the US"
date:       2015-08-02
summary:    "A breakdown of where to find the cancer data, how to transform it into an applicable format, and how to create and customize interactive visualizations that can be easily shared."
permalink:  /cancer-how-to/
---

Our goal is to create an interactive graph of cancer rates in the United States.

There is 12 years worth of data available from the Centers of Disease Control and Prevention, can it can be obtained [here](http://www.cdc.gov/cancer/npcr/uscs/download_data.htm). The data is broken up into multiple files, depending on the variables of interest. We will be using the file `BYSITE.txt` to compare sites (types of cancer), and the file `BYAGE.txt` to compare age groups.

After downloading the data, we need to load it into R. We also need to load the packages we will be using. We will be using [dplyr](https://github.com/hadley/dplyr) to process the data, [rCharts](http://rcharts.io/) to create the graphs, and [RColorBrewer](https://cran.r-project.org/web/packages/RColorBrewer/RColorBrewer.pdf) for pretty colors.

{% highlight r %}
library(dplyr)
library(rCharts)
library(RColorBrewer)

site_data <- read.table("data/BYSITE.TXT",
                        sep = '|',
                        header = TRUE,
                        stringsAsFactors = FALSE)

age_data  <- read.table("data/BYAGE.TXT",
                        sep = '|',
                        header = TRUE,
                        stringsAsFactors = FALSE)

names(age_data)  <- tolower(names(age_data))
names(site_data) <- tolower(names(site_data))
{% endhighlight %}

We now need to transform the data into a format acceptable for rCharts. rCharts connects to JavaScript libraries that utilize [D3.js](http://d3js.org/). The JavaScript library we will be connecting to is [NVD3](http://nvd3.org/).

Our first task is to create a graph where the x-axis is time (1999 to 2011), the y-axis is rate of cancer, and different colored lines represent different types of cancer. Therefore, we want 3 columns: year, cancer rate, and type of cancer. The number of rows will be equal to the number of combinations between year and type of cancer.

Since there are so many types of cancer, we will subset our data to include only the types that are most prevalent (highest rate). It is easy to see that the top 5 cancer types were the same for both 1999 and 2011.

{% highlight r %}
# Can change year to 2011 to see how they compare.
site_data %>%
  filter(year       == "1999",
         sex        == "Male and Female",
         race       == "All Races",
         event_type == "Incidence",
         count      != "~",
         count      != "-",
         count      != ".") %>%
  mutate(norm_count = (as.integer(count) / as.integer(population)) * 1e5) %>%
  arrange(norm_count) %>%
  select(year, site) %>%
  tail(7)
{% endhighlight %}

Now it is time to subset based on those 5 cancer types, and also prepare our data for rCharts. We will include "All Cancer Sites Combined" for comparison purposes.

{% highlight r %}
sites <- c("Respiratory System",
           "Digestive System",
           "Prostate",
           "Female Breast",
           "Male Genital System",
           "All Cancer Sites Combined")

c1 <- site_data %>%
 filter(year       != "2007-2011",
        sex        == "Male and Female",
        race       == "All Races",
        event_type == "Incidence",
        count      != "~",
        count      != "-",
        count      != ".",
        site       %in% sites) %>%
 mutate(norm_count = (as.integer(count) / as.integer(population)) * 1e5) %>%
 select(year, site, norm_count)
{% endhighlight %}
