import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { hexbin as d3Hexbin } from "d3-hexbin";

const colors = [
  "#A42121",
  "#A42121",
  "#E6A740",
  "#E6A740",
  "#178247",
  "#E6A740",
  "#178247",
];

const Honeycomb = ({ width = 400, height = 380, radius = 60 }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const hexWidth = radius * Math.sqrt(3);
    const hexHeight = radius * 1.5;

    const points = [
      [0, -hexHeight],
      [hexWidth, -hexHeight], // top row
      [-hexWidth / 2, 0],
      [hexWidth / 2, 0],
      [1.5 * hexWidth, 0], // middle row
      [0, hexHeight],
      [hexWidth, hexHeight], // bottom row
    ];

    const offsetX = width / 2;
    const offsetY = height / 2;

    const hexbin = d3Hexbin()
      .radius(radius)
      .extent([
        [0, 0],
        [width, height],
      ]);

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    svg
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "rgba(245, 240, 230, 0.1)")
      .style("border-radius", "6px");

    svg
      .append("g")
      .selectAll("path")
      .data(hexbin(points.map(([x, y]) => [x + offsetX, y + offsetY])))
      .enter()
      .append("path")
      .attr("d", hexbin.hexagon())
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`)
      .attr("fill", (d, i) => colors[i])
      .attr("stroke", "#3B3B3B") 
      .attr("stroke-width", 5); 

    svg
      .append("g")
      .selectAll("text")
      .data(hexbin(points.map(([x, y]) => [x + offsetX, y + offsetY])))
      .enter()
      .append("text")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .attr("font-size", 12)
      .text("This is some text");
  }, [width, height, radius]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Honeycomb;
