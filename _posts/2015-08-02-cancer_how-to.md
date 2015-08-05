---
layout:     post
title:      "Creating Interactive Visualizations for Cancer Rates in the US with R and rCharts"
date:       2015-08-02
summary:    "A breakdown of where to find the cancer data, how to transform it into an applicable format, and how to create and customize interactive visualizations that can be easily shared."
permalink:  /cancer-how-to/
---

{% highlight r linenos %}
setwd("topics/cancer")
library(dplyr)
library(rCharts)
library(RColorBrewer)

## Which gender gets more cancer?

site_data <- read.table("data/BYSITE.TXT",
                        sep = '|',
                        header = TRUE,
                        stringsAsFactors = FALSE)
names(site_data) <- tolower(names(site_data))

# Transforming the data to prepare for plotting.
c1 <- site_data %>%
  filter(site == "All Cancer Sites Combined",
         event_type == "Incidence",
         year != "2007-2011",
         race == "All Races",
         count != "~",
         count != "-",
         count != ".") %>%
  mutate(norm_count = (as.integer(count) / as.integer(population)) * 1e5) %>%
  select(year, sex, norm_count)

  ok ok
{% endhighlight %}

test
