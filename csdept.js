var svgHandle = d3.select("body").select("#viz1").append("svg")
    .attr("width", 1400)
	.attr("height", 1400);

d3.json("data.json", function(error, json) {
  	if (error) return console.warn(error);

	svgHandle.selectAll("line")
		.data(json.lines)
		.enter()
		.append("line")
		.attr("x1", function(d){return d.x1;})
		.attr("y1", function(d){return d.y1;})
		.attr("x2", function(d){return d.x2;})
		.attr("y2", function(d){return d.y2;})
        .attr("stroke-width", 2)
    	.attr("stroke", "black");

	svgHandle.selectAll("ellipse")
		.data(json.ellipse)
		.enter()
		.append("ellipse")
		.attr("cx", function(d){return d.cx;})
		.attr("cy", function(d){return d.cy;})
	  	.attr("rx", function(d){return d.rx;})
		.attr("ry", function(d){return d.ry;})
		.style("stroke", "blue")
		.style("fill", "white")
		.on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
		.on("mouseout", function(){d3.select(this).style("fill", "white");})
		.on("mousedown", function(d){window.alert(d.name);});

	svgHandle.selectAll("text")
		.data(json.text)
		.enter()
		.append("text")
  		.text(function(d){return d.name;})
	  	.attr("x", function(d){return d.cx-20;})
  		.attr("y", function(d){return d.cy;})
	   	.attr("font-family", "sans-serif")
  		.attr("font-size", "11px")
	    .attr("fill", "black");


});