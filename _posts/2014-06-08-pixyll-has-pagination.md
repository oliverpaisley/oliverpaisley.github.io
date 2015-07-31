---
layout:     post
title:      How has Cancer in the United States Changed from 1999 to 2011?
date:       2014-06-08 11:21:29
summary:    This is an empty post to illustrate the pagination component with Pixyll.
categories: jekyll pixyll
---

<iframe srcdoc=' &lt;!doctype HTML&gt;
&lt;meta charset = &#039;utf-8&#039;&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;link rel=&#039;stylesheet&#039; href=&#039;http://nvd3.org/assets/css/nv.d3.css&#039;&gt;
    
    &lt;script src=&#039;http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js&#039; type=&#039;text/javascript&#039;&gt;&lt;/script&gt;
    &lt;script src=&#039;http://d3js.org/d3.v3.min.js&#039; type=&#039;text/javascript&#039;&gt;&lt;/script&gt;
    &lt;script src=&#039;http://timelyportfolio.github.io/rCharts_nvd3_tests/libraries/widgets/nvd3/js/nv.d3.min-new.js&#039; type=&#039;text/javascript&#039;&gt;&lt;/script&gt;
    &lt;script src=&#039;http://nvd3.org/assets/lib/fisheye.js&#039; type=&#039;text/javascript&#039;&gt;&lt;/script&gt;
    
    &lt;style&gt;
    .rChart {
      display: block;
      margin-left: 5%; 
      margin-right: %;
      width: 100%;
      height: 100%;
    }  
    &lt;/style&gt;
    
  &lt;/head&gt;
  &lt;body &gt;
    
    &lt;div id = &#039;chart193c47207c88&#039; class = &#039;rChart nvd3&#039;&gt;&lt;/div&gt;    
    &lt;script type=&#039;text/javascript&#039;&gt;
 $(document).ready(function(){
      drawchart193c47207c88()
    });
    function drawchart193c47207c88(){  
      var opts = {
 &quot;dom&quot;: &quot;chart193c47207c88&quot;,
&quot;x&quot;: &quot;year&quot;,
&quot;y&quot;: &quot;norm_count&quot;,
&quot;group&quot;: &quot;sex&quot;,
&quot;type&quot;: &quot;lineChart&quot;,
&quot;disabled&quot;: [ false, false, true ],
&quot;id&quot;: &quot;chart193c47207c88&quot; 
},
        data = [
 {
 &quot;year&quot;: &quot;1999&quot;,
&quot;sex&quot;: &quot;Female&quot;,
&quot;norm_count&quot;:          5.876 
},
{
 &quot;year&quot;: &quot;2000&quot;,
&quot;sex&quot;: &quot;Female&quot;,
&quot;norm_count&quot;:           6.09 
},
{
 &quot;year&quot;: &quot;2001&quot;,
&quot;sex&quot;: &quot;Female&quot;,
&quot;norm_count&quot;:          6.201 
},
{
 &quot;year&quot;: &quot;2002&quot;,
&quot;sex&quot;: &quot;Female&quot;,
&quot;norm_count&quot;:          6.316 
},
{
 &quot;year&quot;: &quot;2003&quot;,
&quot;sex&quot;: &quot;Female&quot;,
&quot;norm_count&quot;:          6.609 
},
{
 &quot;year&quot;: &quot;2004&quot;,
&quot;sex&quot;: &quot;Female&quot;,
&quot;norm_count&quot;:          6.841 
},
{
 &quot;year&quot;: &quot;2005&quot;,
&quot;sex&quot;: &quot;Female&quot;,
&quot;norm_count&quot;:          6.981 
},
{
 &quot;year&quot;: &quot;2006&quot;,
&quot;sex&quot;: &quot;Female&quot;,
&quot;norm_count&quot;:          7.092 
},
{
 &quot;year&quot;: &quot;2007&quot;,
&quot;sex&quot;: &quot;Female&quot;,
&quot;norm_count&quot;:          7.242 
},
{
 &quot;year&quot;: &quot;2008&quot;,
&quot;sex&quot;: &quot;Female&quot;,
&quot;norm_count&quot;:          7.405 
},
{
 &quot;year&quot;: &quot;2009&quot;,
&quot;sex&quot;: &quot;Female&quot;,
&quot;norm_count&quot;:          7.518 
},
{
 &quot;year&quot;: &quot;2010&quot;,
&quot;sex&quot;: &quot;Female&quot;,
&quot;norm_count&quot;:          7.456 
},
{
 &quot;year&quot;: &quot;2011&quot;,
&quot;sex&quot;: &quot;Female&quot;,
&quot;norm_count&quot;:           7.46 
},
{
 &quot;year&quot;: &quot;1999&quot;,
&quot;sex&quot;: &quot;Male&quot;,
&quot;norm_count&quot;:          6.238 
},
{
 &quot;year&quot;: &quot;2000&quot;,
&quot;sex&quot;: &quot;Male&quot;,
&quot;norm_count&quot;:          6.534 
},
{
 &quot;year&quot;: &quot;2001&quot;,
&quot;sex&quot;: &quot;Male&quot;,
&quot;norm_count&quot;:          6.683 
},
{
 &quot;year&quot;: &quot;2002&quot;,
&quot;sex&quot;: &quot;Male&quot;,
&quot;norm_count&quot;:          6.855 
},
{
 &quot;year&quot;: &quot;2003&quot;,
&quot;sex&quot;: &quot;Male&quot;,
&quot;norm_count&quot;:          7.138 
},
{
 &quot;year&quot;: &quot;2004&quot;,
&quot;sex&quot;: &quot;Male&quot;,
&quot;norm_count&quot;:           7.38 
},
{
 &quot;year&quot;: &quot;2005&quot;,
&quot;sex&quot;: &quot;Male&quot;,
&quot;norm_count&quot;:          7.496 
},
{
 &quot;year&quot;: &quot;2006&quot;,
&quot;sex&quot;: &quot;Male&quot;,
&quot;norm_count&quot;:          7.726 
},
{
 &quot;year&quot;: &quot;2007&quot;,
&quot;sex&quot;: &quot;Male&quot;,
&quot;norm_count&quot;:          7.997 
},
{
 &quot;year&quot;: &quot;2008&quot;,
&quot;sex&quot;: &quot;Male&quot;,
&quot;norm_count&quot;:          8.002 
},
{
 &quot;year&quot;: &quot;2009&quot;,
&quot;sex&quot;: &quot;Male&quot;,
&quot;norm_count&quot;:          8.001 
},
{
 &quot;year&quot;: &quot;2010&quot;,
&quot;sex&quot;: &quot;Male&quot;,
&quot;norm_count&quot;:           7.89 
},
{
 &quot;year&quot;: &quot;2011&quot;,
&quot;sex&quot;: &quot;Male&quot;,
&quot;norm_count&quot;:          7.861 
},
{
 &quot;year&quot;: &quot;1999&quot;,
&quot;sex&quot;: &quot;Male and Female&quot;,
&quot;norm_count&quot;:         12.114 
},
{
 &quot;year&quot;: &quot;2000&quot;,
&quot;sex&quot;: &quot;Male and Female&quot;,
&quot;norm_count&quot;:         12.624 
},
{
 &quot;year&quot;: &quot;2001&quot;,
&quot;sex&quot;: &quot;Male and Female&quot;,
&quot;norm_count&quot;:         12.884 
},
{
 &quot;year&quot;: &quot;2002&quot;,
&quot;sex&quot;: &quot;Male and Female&quot;,
&quot;norm_count&quot;:         13.171 
},
{
 &quot;year&quot;: &quot;2003&quot;,
&quot;sex&quot;: &quot;Male and Female&quot;,
&quot;norm_count&quot;:         13.747 
},
{
 &quot;year&quot;: &quot;2004&quot;,
&quot;sex&quot;: &quot;Male and Female&quot;,
&quot;norm_count&quot;:         14.221 
},
{
 &quot;year&quot;: &quot;2005&quot;,
&quot;sex&quot;: &quot;Male and Female&quot;,
&quot;norm_count&quot;:         14.477 
},
{
 &quot;year&quot;: &quot;2006&quot;,
&quot;sex&quot;: &quot;Male and Female&quot;,
&quot;norm_count&quot;:         14.819 
},
{
 &quot;year&quot;: &quot;2007&quot;,
&quot;sex&quot;: &quot;Male and Female&quot;,
&quot;norm_count&quot;:          15.24 
},
{
 &quot;year&quot;: &quot;2008&quot;,
&quot;sex&quot;: &quot;Male and Female&quot;,
&quot;norm_count&quot;:         15.407 
},
{
 &quot;year&quot;: &quot;2009&quot;,
&quot;sex&quot;: &quot;Male and Female&quot;,
&quot;norm_count&quot;:         15.519 
},
{
 &quot;year&quot;: &quot;2010&quot;,
&quot;sex&quot;: &quot;Male and Female&quot;,
&quot;norm_count&quot;:         15.347 
},
{
 &quot;year&quot;: &quot;2011&quot;,
&quot;sex&quot;: &quot;Male and Female&quot;,
&quot;norm_count&quot;:         15.321 
} 
]
  
      if(!(opts.type===&quot;pieChart&quot; || opts.type===&quot;sparklinePlus&quot; || opts.type===&quot;bulletChart&quot;)) {
        var data = d3.nest()
          .key(function(d){
            //return opts.group === undefined ? &#039;main&#039; : d[opts.group]
            //instead of main would think a better default is opts.x
            return opts.group === undefined ? opts.y : d[opts.group];
          })
          .entries(data);
      }
      
      if (opts.disabled != undefined){
        data.map(function(d, i){
          d.disabled = opts.disabled[i]
        })
      }
      
      nv.addGraph(function() {
        var chart = nv.models[opts.type]()
          .width(opts.width)
          .height(opts.height)
          
        if (opts.type != &quot;bulletChart&quot;){
          chart
            .x(function(d) { return d[opts.x] })
            .y(function(d) { return d[opts.y] })
        }
          
         
        chart
  .color([ &quot;hotpink&quot;, &quot;blue&quot;, &quot;black&quot; ])
  .tooltipContent( function(key, x, y){
        return &#039;&lt;h3&gt;&#039; + key + &#039;&lt;/h3&gt;&#039; + 
              &#039;&lt;p&gt;&#039; + y + &#039; per 100,000 diagnosed in &#039; + x + &#039;&lt;/p&gt;&#039;
              } )
          
        chart.xAxis
  .showMaxMin(false)

        
        
        chart.yAxis
  .showMaxMin(false)
  .axisLabel(&quot;Count (per 100,000)&quot;)
  .width(    40)
      
       d3.select(&quot;#&quot; + opts.id)
        .append(&#039;svg&#039;)
        .datum(data)
        .transition().duration(500)
        .call(chart);

       nv.utils.windowResize(chart.update);
       return chart;
      });
    };
&lt;/script&gt;
    
    &lt;script&gt;&lt;/script&gt;    
  &lt;/body&gt;
&lt;/html&gt; ' scrolling='no' frameBorder='0' seamless class='rChart  nvd3  ' id='iframe-chart193c47207c88'> </iframe>
 <style>iframe.rChart{ width: 100%; height: 400px;}</style>
 
 test test test
