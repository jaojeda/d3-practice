import { select } from 'd3';

console.log('test');
const svg = select('svg');

const width = +svg.attr('width');
console.log(width);
const height = +svg.attr('height');

const circle = svg.append('circle')
  .attr('r', height / 2)
  .attr('cx', width / 2)
  .attr('cy', height / 2)
  .attr('fill', 'yellow')
  .attr('stroke', 'black')