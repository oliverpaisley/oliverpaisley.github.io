---
layout:     post
title:      How has Cancer in the United States Changed from 1999 to 2011?
date:       2014-06-08 11:21:29
summary:    This is an empty post to illustrate the pagination component with Pixyll.
categories: jekyll pixyll
---
<link rel='stylesheet' href=http://nvd3.org/assets/css/nv.d3.css>
<script type='text/javascript' src=http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js></script>
<script type='text/javascript' src=http://d3js.org/d3.v3.min.js></script>
<script type='text/javascript' src=http://timelyportfolio.github.io/rCharts_nvd3_tests/libraries/widgets/nvd3/js/nv.d3.min-new.js></script>
<script type='text/javascript' src=http://nvd3.org/assets/lib/fisheye.js></script> 
 <style>
  .rChart {
    display: block;
    margin-left: auto; 
    margin-right: auto;
    width: 800px;
    height: 400px;
  }  
  </style>
<div id = 'chart193c47207c88' class = 'rChart nvd3'></div>
<script type='text/javascript'>
 $(document).ready(function(){
      drawchart193c47207c88()
    });
    function drawchart193c47207c88(){  
      var opts = {
 "dom": "chart193c47207c88",
"width":    800,
"height":    400,
"x": "year",
"y": "norm_count",
"group": "sex",
"type": "lineChart",
"disabled": [ false, false, true ],
"id": "chart193c47207c88" 
},
        data = [
 {
 "year": "1999",
"sex": "Female",
"norm_count":          5.876 
},
{
 "year": "2000",
"sex": "Female",
"norm_count":           6.09 
},
{
 "year": "2001",
"sex": "Female",
"norm_count":          6.201 
},
{
 "year": "2002",
"sex": "Female",
"norm_count":          6.316 
},
{
 "year": "2003",
"sex": "Female",
"norm_count":          6.609 
},
{
 "year": "2004",
"sex": "Female",
"norm_count":          6.841 
},
{
 "year": "2005",
"sex": "Female",
"norm_count":          6.981 
},
{
 "year": "2006",
"sex": "Female",
"norm_count":          7.092 
},
{
 "year": "2007",
"sex": "Female",
"norm_count":          7.242 
},
{
 "year": "2008",
"sex": "Female",
"norm_count":          7.405 
},
{
 "year": "2009",
"sex": "Female",
"norm_count":          7.518 
},
{
 "year": "2010",
"sex": "Female",
"norm_count":          7.456 
},
{
 "year": "2011",
"sex": "Female",
"norm_count":           7.46 
},
{
 "year": "1999",
"sex": "Male",
"norm_count":          6.238 
},
{
 "year": "2000",
"sex": "Male",
"norm_count":          6.534 
},
{
 "year": "2001",
"sex": "Male",
"norm_count":          6.683 
},
{
 "year": "2002",
"sex": "Male",
"norm_count":          6.855 
},
{
 "year": "2003",
"sex": "Male",
"norm_count":          7.138 
},
{
 "year": "2004",
"sex": "Male",
"norm_count":           7.38 
},
{
 "year": "2005",
"sex": "Male",
"norm_count":          7.496 
},
{
 "year": "2006",
"sex": "Male",
"norm_count":          7.726 
},
{
 "year": "2007",
"sex": "Male",
"norm_count":          7.997 
},
{
 "year": "2008",
"sex": "Male",
"norm_count":          8.002 
},
{
 "year": "2009",
"sex": "Male",
"norm_count":          8.001 
},
{
 "year": "2010",
"sex": "Male",
"norm_count":           7.89 
},
{
 "year": "2011",
"sex": "Male",
"norm_count":          7.861 
},
{
 "year": "1999",
"sex": "Male and Female",
"norm_count":         12.114 
},
{
 "year": "2000",
"sex": "Male and Female",
"norm_count":         12.624 
},
{
 "year": "2001",
"sex": "Male and Female",
"norm_count":         12.884 
},
{
 "year": "2002",
"sex": "Male and Female",
"norm_count":         13.171 
},
{
 "year": "2003",
"sex": "Male and Female",
"norm_count":         13.747 
},
{
 "year": "2004",
"sex": "Male and Female",
"norm_count":         14.221 
},
{
 "year": "2005",
"sex": "Male and Female",
"norm_count":         14.477 
},
{
 "year": "2006",
"sex": "Male and Female",
"norm_count":         14.819 
},
{
 "year": "2007",
"sex": "Male and Female",
"norm_count":          15.24 
},
{
 "year": "2008",
"sex": "Male and Female",
"norm_count":         15.407 
},
{
 "year": "2009",
"sex": "Male and Female",
"norm_count":         15.519 
},
{
 "year": "2010",
"sex": "Male and Female",
"norm_count":         15.347 
},
{
 "year": "2011",
"sex": "Male and Female",
"norm_count":         15.321 
} 
]
  
      if(!(opts.type==="pieChart" || opts.type==="sparklinePlus" || opts.type==="bulletChart")) {
        var data = d3.nest()
          .key(function(d){
            //return opts.group === undefined ? 'main' : d[opts.group]
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
          
        if (opts.type != "bulletChart"){
          chart
            .x(function(d) { return d[opts.x] })
            .y(function(d) { return d[opts.y] })
        }
          
         
        chart
  .color([ "hotpink", "blue", "black" ])
  .tooltipContent( function(key, x, y){
        return '<h3>' + key + '</h3>' + 
              '<p>' + y + ' per 100,000 diagnosed in ' + x + '</p>'
              } )
          
        chart.xAxis
  .showMaxMin(false)

        
        
        chart.yAxis
  .showMaxMin(false)
  .axisLabel("Count (per 100,000)")
  .width(    40)
      
       d3.select("#" + opts.id)
        .append('svg')
        .datum(data)
        .transition().duration(500)
        .call(chart);

       nv.utils.windowResize(chart.update);
       return chart;
      });
    };
</script>
