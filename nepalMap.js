import * as d3 from 'd3';

const svg = d3
  .select('#app')
  .append('svg')
  .attr('width', 1000)
  .attr('height', 800);

const myColor = d3.scaleLinear().domain([1, 10]).range(['white', 'blue']);
