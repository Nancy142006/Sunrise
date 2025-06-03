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

    // Create tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr(
        "class",
        "tooltip hidden absolute bg-white border border-gray-300 rounded-lg p-4 shadow-xl text-sm text-gray-900 pointer-events-none z-50 max-w-xs font-inter"
      )
      .style("opacity", 0);

    const hexData = hexbin(points.map(([x, y]) => [x + offsetX, y + offsetY]));

    // Draw hexagons
    svg
      .append("g")
      .selectAll("path")
      .data(hexData)
      .enter()
      .append("path")
      .attr("d", hexbin.hexagon())
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`)
      .attr("fill", (d, i) => colors[i])
      .attr("stroke", "#3B3B3B")
      .attr("stroke-width", 5)
      .on("mouseover", function (event, d) {
        const fillColor = d3.select(this).attr("fill");
        let sentiment = "Neutral";
        if (fillColor === "#178247") {
          sentiment = "Positive";
        } else if (fillColor === "#A42121") {
          sentiment = "Negative";
        }

        tooltip.classed("hidden", false).style("opacity", 1).html(`
            <div class="space-y-1">
              <strong class="font-semibold">${sentiment} Insight</strong>
              <p>
                Let's discuss some <span class="font-semibold">${sentiment.toLowerCase()}</span> developments happening around the world.
              </p>
              <p class="text-xs italic text-gray-600">
                Click this hexagon to get more context.
              </p>
            </div>
          `);
      })
      .on("mousemove", (event) => {
        tooltip
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY + 10 + "px");
      })
      .on("mouseout", () => {
        tooltip.classed("hidden", true).style("opacity", 0);
      });

    svg
      .append("g")
      .selectAll("text")
      .data(hexData)
      .enter()
      .append("text")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .attr("font-size", 12)
      .text("This is some text");

    return () => {
      tooltip.remove();
    };
  }, [width, height, radius]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Honeycomb;
