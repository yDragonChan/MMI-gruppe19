
	var can = document.getElementById("myCanvas");
	var ctx = can.getContext("2d");
	console.log(document.body.getElementsByTagName("img")[0]);
	can.width = document.body.getElementsByTagName("img")[0].width;
	can.height = document.body.getElementsByTagName("img")[0].height === 0 ? 536 : document.body.getElementsByTagName("img")[0].height;

	var areas = document.body.getElementsByTagName("map")[0].areas;
	ctx.fillStyle = "rgb(70, 70, 70)";
	ctx.fillRect(0, 0, can.width, can.height);
	for(var i = 0; i < areas.length; i++) {
		var coords = areas[i].coords.split(",");
		if(areas[i].shape === "rect") {
			ctx.fillStyle = "rgb(255, 50, 50)";
			ctx.fillRect(
				coords[0],
				coords[1],
				coords[2]-coords[0],
				coords[3]-coords[1]);
		} else {
			ctx.beginPath();
			ctx.arc(coords[0], coords[1], coords[2], 0, Math.PI*2);
			ctx.fill();
		}
	}