var svg = d3.select("body").select("svg");
console.log("Math");

d3.json("mathdata.json", function(error, json) {
  	if (error) return console.warn(error);

	var fromX = json.deptx,
		fromY = json.depty;

	console.log(json.conc[1].name);

  	svg.selectAll("line")
  		.data(json.conc)
	  	.enter()
		.append("line")
	  	.attr("x1", fromX)
    	.attr("y1", fromY)
        .attr("x2", function(d){return d.x;})
    	.attr("y2", function(d){return d.y;})
        .attr("stroke-width", 2)
    	.attr("stroke", "black");

	svg.selectAll("text")
		.data(json.conc)
		.enter()
		.append("text")
		.text(function(d){return d.name; console.log(d.name);});

  	svg.append("ellipse")
  		.attr("cx", json.deptx)
  		.attr("cy", json.depty)
	  	.attr("rx", 80)
  		.attr("ry", 40)
		.style("stroke", "blue")
		.style("fill", "white")
		.on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
		.on("mouseout", function(){d3.select(this).style("fill", "white");})
		.on("mousedown", function(){window.alert(json.dept);});

  	svg.append("text")
  		.text(json.dept)
	  	.attr("x", json.deptx-30)
  		.attr("y", json.depty)
	   	.attr("font-family", "sans-serif")
  		.attr("font-size", "11px")
	    .attr("fill", "black");

  	svg.selectAll("ellipse")
  		.data(json.conc)
	  	.enter()
  		.append("ellipse")
		.attr("cx", function(d){return d.x;})
		.attr("cy", function(d){return d.y;})
		.attr("rx", 40)
		.attr("ry", 20)
		.style("stroke", "blue")
		.style("fill", "white");

	svg.selectAll("text")
		.data(json.conc)
		.enter()
		.append("text")
		.text(function(d){return d.name;console.log(d.name);})
		.attr("x", function(d){return d.x-10;})
		.attr("y", function(d){return d.y;})
	 	.attr("font-family", "sans-serif")
		.attr("font-size", "10px")
    	.attr("fill", "black");
});