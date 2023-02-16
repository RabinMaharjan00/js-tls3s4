// Import stylesheets
import './style.css';
import * as d3 from 'd3';

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var svg = d3
  .select('#app')
  .append('svg')
  .attr('width', 1000)
  .attr('height', 400);

// Option 1: give 2 color names
var myColor = d3.scaleLinear().domain([1, 10]).range(['white', 'blue']);
svg
  .selectAll('.firstrow')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', function (d, i) {
    return 30 + i * 60;
  })
  .attr('cy', 50)
  .attr('r', 19)
  .attr('fill', function (d) {
    return myColor(d);
  });

// Option 2: Color brewer.
// Include <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script> in your code!
var myColor = d3
  .scaleSequential()
  .domain([1, 10])
  .interpolator(d3.interpolatePuRd);
svg
  .selectAll('.secondrow')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', function (d, i) {
    return 30 + i * 60;
  })
  .attr('cy', 150)
  .attr('r', 19)
  .attr('fill', function (d) {
    return myColor(d);
  });

// Option 3: Viridis.
// Include <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script> in your code!
var myColor = d3
  .scaleSequential()
  .domain([1, 10])
  .interpolator(d3.interpolateViridis);

svg
  .selectAll('.secondrow')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', function (d, i) {
    return 30 + i * 60;
  })
  .attr('cy', 250)
  .attr('r', 19)
  .attr('fill', function (d) {
    return myColor(d);
  });
