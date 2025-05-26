import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { hexbin as d3Hexbin } from "d3-hexbin";

// color for each hexagon
const colors = [
  "#A42121",
  "#A42121",
  "#E6A740",
  "#E6A740",
  "#178247",
  "#E6A740",
  "#178247",
];

const Honeycomb = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 500;
    const height = 500;
    const radius = 60; 

    // coordinates
    const points = [
      [200, 100], 
      [300, 100], 
      [150, 170], 
      [250, 170], 
      [350, 170], 
      [200, 240], 
      [300, 240], 
    ];

    // hexbin generator
    const hexbin = d3Hexbin()
      .radius(radius)
      .extent([
        [0, 0],
        [width, height],
      ]);

    //selects the svg element and clears to avoid duplication
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); 

    svg
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#f9f3e8");

    const hexes = svg
      .append("g")
      .selectAll("path")
      .data(hexbin(points))
      .enter()
      .append("path")
      .attr("d", hexbin.hexagon())
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`)
      .attr("fill", (d, i) => colors[i])
      .attr("stroke", "#fff")
      .attr("stroke-width", 4);

    // Add text to each hexagon
    svg
      .append("g")
      .selectAll("text")
      .data(hexbin(points))
      .enter()
      .append("text")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y + 4)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .attr("font-size", 12)
      .text("This is some text");
  }, []);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Honeycomb;
