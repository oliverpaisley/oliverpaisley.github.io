---
layout:     post
title:      "Creating Interactive Visualizations for Cancer Rates in the US with R and rCharts"
date:       2015-08-02
summary:    "A breakdown of where to find the cancer data, how to transform it into an applicable format, and how to create and customize interactive visualizations that can be easily shared."
permalink:  /cancer-how-to/
---

{% highlight r linenos %}
library(dplyr)
library(rCharts)
library(RColorBrewer)

site_data <- read.table("data/BYSITE.TXT",
                        sep = '|',
                        header = TRUE,
                        stringsAsFactors = FALSE)
names(site_data) <- tolower(names(site_data))
{% endhighlight %}
