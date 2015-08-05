---
layout:     post
title:      "Using R and rCharts to Visualize Cancer Rates in the US"
date:       2015-08-02
summary:    "A breakdown of where to find the cancer data, how to transform it into an applicable format, and how to create and customize interactive visualizations that can be easily shared."
permalink:  /cancer-how-to/
---

OK heres a test

test


{% highlight ruby lineanchors %}
library(dplyr)
library(rCharts)
library(RColorBrewer)

site_data <- read.table("data/BYSITE.TXT",
                        sep = '|',
                        header = TRUE,
                        stringsAsFactors = FALSE)
names(site_data) <- tolower(names(site_data))
{% endhighlight %}
