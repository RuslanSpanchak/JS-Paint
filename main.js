let canv = document.getElementById('canvas');
let ctx = canv.getContext("2d");

let color = "#000";
let lineWidth = 10;
let isMouseDown = false;
let cords = [];
let radius = 0;

canv.width = window.innerWidth;
canv.height = window.innerHeight;

canv.addEventListener("mousedown", function() {

	isMouseDown = true;

})

figures_mode = 0

canv.addEventListener("mouseup", function() {

	if (figures_mode === 0) {

		isMouseDown = false;
		ctx.beginPath();
		cords.push("mouseup");

	} else if (figures_mode === 1) {

		isMouseDown = false;
		cords.push("mouseup");

	}

})

ctx.lineWidth = lineWidth * 2;
ctx.strokeStyle = color;
ctx.fillStyle = color;

canv.addEventListener("mousemove", function(e) {

	if (isMouseDown) {

		cords.push([e.clientX, e.clientY]);
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(e.clientX, e.clientY, lineWidth, radius, Math.PI * 2);
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY)

	}

})

canv.addEventListener("mousedown", function(e) {

	if (isMouseDown) {

		cords.push([e.clientX, e.clientY]);
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(e.clientX, e.clientY, lineWidth, 0, Math.PI * 2);
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);

	}

})

function clear() {

	ctx.fillStyle = "#fff";
	ctx.fillRect(0, 0, canv.width, canv.height);
	ctx.beginPath();
	ctx.fillStyle = color;

}

function save() {

	localStorage.setItem("cords", JSON.stringify(cords));

}

let replaceSpeed = input_replay.value

function replay() {

	let timer = setInterval(function() {

		if (!cords.length) {

			clearInterval(timer);
			ctx.beginPath();
			return;

		}

		let crd = cords.shift();
		let e = {

			clientX: crd["0"],
			clientY: crd["1"]

		};

		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(e.clientX, e.clientY, lineWidth, 0, Math.PI * 2);
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);

	}, replaceSpeed)

}

document.addEventListener("keydown", function(e) {

	if (e.keyCode == 67) {

		clear();

	} else if (e.keyCode == 83) {

		save();

	} else if (e.keyCode == 82) {

		cords = JSON.parse(localStorage.getItem("cords"));
		clear();
		replay();

	}

})

color_black.onclick = function() {

	ctx.beginPath()

	color = "black";
	ctx.strokeStyle = color;
	ctx.fillStyle = color;

	$("#color_black").addClass("sections_item_active")
	$("#color_grey").removeClass("sections_item_active")
	$("#color_red").removeClass("sections_item_active")
	$("#color_green").removeClass("sections_item_active")
	$("#color_blue").removeClass("sections_item_active")
	$("#color_yellow").removeClass("sections_item_active")
	$("#sections_rubber").css("background-color", "#999")
	$("#sections_rubber").css("bottom", "15px")
	$("#sections_rubber").css("left", "525px")
	$("#sections_rubber").css("box-shadow", "3px 3px 0px #888")
	rubber_btn = 0

}

color_grey.onclick = function() {

	ctx.beginPath()

	color = "grey";
	ctx.strokeStyle = color;
	ctx.fillStyle = color;

	$("#color_black").removeClass("sections_item_active")
	$("#color_grey").addClass("sections_item_active")
	$("#color_red").removeClass("sections_item_active")
	$("#color_green").removeClass("sections_item_active")
	$("#color_blue").removeClass("sections_item_active")
	$("#color_yellow").removeClass("sections_item_active")
	$("#sections_rubber").css("background-color", "#999")
	$("#sections_rubber").css("bottom", "15px")
	$("#sections_rubber").css("left", "525px")
	$("#sections_rubber").css("box-shadow", "3px 3px 0px #888")
	rubber_btn = 0
	
}

color_red.onclick = function() {

	ctx.beginPath()

	color = "red";
	ctx.strokeStyle = color;
	ctx.fillStyle = color;

	$("#color_black").removeClass("sections_item_active")
	$("#color_grey").removeClass("sections_item_active")
	$("#color_red").addClass("sections_item_active")
	$("#color_green").removeClass("sections_item_active")
	$("#color_blue").removeClass("sections_item_active")
	$("#color_yellow").removeClass("sections_item_active")
	$("#sections_rubber").css("background-color", "#999")
	$("#sections_rubber").css("bottom", "15px")
	$("#sections_rubber").css("left", "525px")
	$("#sections_rubber").css("box-shadow", "3px 3px 0px #888")
	rubber_btn = 0

}

color_green.onclick = function() {

	ctx.beginPath()

	color = "green";
	ctx.strokeStyle = color;
	ctx.fillStyle = color;

	$("#color_black").removeClass("sections_item_active")
	$("#color_grey").removeClass("sections_item_active")
	$("#color_red").removeClass("sections_item_active")
	$("#color_green").addClass("sections_item_active")
	$("#color_blue").removeClass("sections_item_active")
	$("#color_yellow").removeClass("sections_item_active")
	$("#sections_rubber").css("background-color", "#999")
	$("#sections_rubber").css("bottom", "15px")
	$("#sections_rubber").css("left", "525px")
	$("#sections_rubber").css("box-shadow", "3px 3px 0px #888")
	rubber_btn = 0

}

color_blue.onclick = function() {

	ctx.beginPath()

	color = "blue";
	ctx.strokeStyle = color;
	ctx.fillStyle = color;

	$("#color_black").removeClass("sections_item_active")
	$("#color_grey").removeClass("sections_item_active")
	$("#color_red").removeClass("sections_item_active")
	$("#color_green").removeClass("sections_item_active")
	$("#color_blue").addClass("sections_item_active")
	$("#color_yellow").removeClass("sections_item_active")
	$("#sections_rubber").css("background-color", "#999")
	$("#sections_rubber").css("bottom", "15px")
	$("#sections_rubber").css("left", "525px")
	$("#sections_rubber").css("box-shadow", "3px 3px 0px #888")
	rubber_btn = 0

}

color_yellow.onclick = function() {

	ctx.beginPath()

	color = "yellow";
	ctx.strokeStyle = color;
	ctx.fillStyle = color;

	$("#color_black").removeClass("sections_item_active")
	$("#color_grey").removeClass("sections_item_active")
	$("#color_red").removeClass("sections_item_active")
	$("#color_green").removeClass("sections_item_active")
	$("#color_blue").removeClass("sections_item_active")
	$("#color_yellow").addClass("sections_item_active")
	$("#sections_rubber").css("background-color", "#999")
	$("#sections_rubber").css("bottom", "15px")
	$("#sections_rubber").css("left", "525px")
	$("#sections_rubber").css("box-shadow", "3px 3px 0px #888")
	rubber_btn = 0

}

color_input.onchange = function() {

	ctx.beginPath()

	color = color_input.value;
	ctx.strokeStyle = color;
	ctx.fillStyle = color;

	$("#sections_rubber").css("background-color", "#999")
	$("#sections_rubber").css("bottom", "15px")
	$("#sections_rubber").css("left", "525px")
	$("#sections_rubber").css("box-shadow", "3px 3px 0px #888")
	rubber_btn = 0

}

line_width_1.onclick = function() {

	lineWidth = 1;
	ctx.lineWidth = lineWidth * 2;

	radius = 0

	$("#line_width_1").addClass("sections_item_active")
	$("#line_width_3").removeClass("sections_item_active")
	$("#line_width_5").removeClass("sections_item_active")
	$("#line_width_10").removeClass("sections_item_active")

	$("#line_width_square_1").removeClass("sections_item_active")
	$("#line_width_square_3").removeClass("sections_item_active")
	$("#line_width_square_5").removeClass("sections_item_active")
	$("#line_width_square_10").removeClass("sections_item_active")

	$(".line_width").css("height", "50px")
	$(".line_width_square").css("display", "none")

	$("#sections_brush").css("background-color", "#999")
	$("#sections_brush").css("bottom", "15px")
	$("#sections_brush").css("left", "645px")
	$("#sections_brush").css("box-shadow", "3px 3px 0px #888")

	brush_btn = 0

}

line_width_3.onclick = function() {

	lineWidth = 3;
	ctx.lineWidth = lineWidth * 2;

	radius = 0

	$("#line_width_1").removeClass("sections_item_active")
	$("#line_width_3").addClass("sections_item_active")
	$("#line_width_5").removeClass("sections_item_active")
	$("#line_width_10").removeClass("sections_item_active")

	$("#line_width_square_1").removeClass("sections_item_active")
	$("#line_width_square_3").removeClass("sections_item_active")
	$("#line_width_square_5").removeClass("sections_item_active")
	$("#line_width_square_10").removeClass("sections_item_active")

	$(".line_width").css("height", "50px")
	$(".line_width_square").css("display", "none")

	$("#sections_brush").css("background-color", "#999")
	$("#sections_brush").css("bottom", "15px")
	$("#sections_brush").css("left", "645px")
	$("#sections_brush").css("box-shadow", "3px 3px 0px #888")

	brush_btn = 0

}

line_width_5.onclick = function() {

	lineWidth = 5;
	ctx.lineWidth = lineWidth * 2;

	radius = 0

	$("#line_width_1").removeClass("sections_item_active")
	$("#line_width_3").removeClass("sections_item_active")
	$("#line_width_5").addClass("sections_item_active")
	$("#line_width_10").removeClass("sections_item_active")

	$("#line_width_square_1").removeClass("sections_item_active")
	$("#line_width_square_3").removeClass("sections_item_active")
	$("#line_width_square_5").removeClass("sections_item_active")
	$("#line_width_square_10").removeClass("sections_item_active")

	$(".line_width").css("height", "50px")
	$(".line_width_square").css("display", "none")

	$("#sections_brush").css("background-color", "#999")
	$("#sections_brush").css("bottom", "15px")
	$("#sections_brush").css("left", "645px")
	$("#sections_brush").css("box-shadow", "3px 3px 0px #888")

	brush_btn = 0

}

line_width_10.onclick = function() {

	lineWidth = 10;
	ctx.lineWidth = lineWidth * 2;

	radius = 0

	$("#line_width_1").removeClass("sections_item_active")
	$("#line_width_3").removeClass("sections_item_active")
	$("#line_width_5").removeClass("sections_item_active")
	$("#line_width_10").addClass("sections_item_active")

	$("#line_width_square_1").removeClass("sections_item_active")
	$("#line_width_square_3").removeClass("sections_item_active")
	$("#line_width_square_5").removeClass("sections_item_active")
	$("#line_width_square_10").removeClass("sections_item_active")

	$(".line_width").css("height", "50px")
	$(".line_width_square").css("display", "none")

	$("#sections_brush").css("background-color", "#999")
	$("#sections_brush").css("bottom", "15px")
	$("#sections_brush").css("left", "645px")
	$("#sections_brush").css("box-shadow", "3px 3px 0px #888")

	brush_btn = 0

}

line_width_square_1.onclick = function() {

	lineWidth = 1;
	ctx.lineWidth = lineWidth * 2;

	radius = 100

	$(".line_width").css("height", "50px")
	$(".line_width_circle").css("display", "none")

	$("#line_width_square_1").addClass("sections_item_active")
	$("#line_width_square_3").removeClass("sections_item_active")
	$("#line_width_square_5").removeClass("sections_item_active")
	$("#line_width_square_10").removeClass("sections_item_active")

	$("#line_width_1").removeClass("sections_item_active")
	$("#line_width_3").removeClass("sections_item_active")
	$("#line_width_5").removeClass("sections_item_active")
	$("#line_width_10").removeClass("sections_item_active")

	$("#sections_brush").css("background-color", "#999")
	$("#sections_brush").css("bottom", "15px")
	$("#sections_brush").css("left", "645px")
	$("#sections_brush").css("box-shadow", "3px 3px 0px #888")

	brush_btn = 0

}

line_width_square_3.onclick = function() {

	lineWidth = 3;
	ctx.lineWidth = lineWidth * 2;

	radius = 100

	$(".line_width").css("height", "50px")
	$(".line_width_circle").css("display", "none")

	$("#line_width_square_1").removeClass("sections_item_active")
	$("#line_width_square_3").addClass("sections_item_active")
	$("#line_width_square_5").removeClass("sections_item_active")
	$("#line_width_square_10").removeClass("sections_item_active")

	$("#line_width_1").removeClass("sections_item_active")
	$("#line_width_3").removeClass("sections_item_active")
	$("#line_width_5").removeClass("sections_item_active")
	$("#line_width_10").removeClass("sections_item_active")

	$("#sections_brush").css("background-color", "#999")
	$("#sections_brush").css("bottom", "15px")
	$("#sections_brush").css("left", "645px")
	$("#sections_brush").css("box-shadow", "3px 3px 0px #888")

	brush_btn = 0

}

line_width_square_5.onclick = function() {

	lineWidth = 5;
	ctx.lineWidth = lineWidth * 2;

	$(".line_width").css("height", "50px")
	$(".line_width_circle").css("display", "none")

	$("#line_width_square_1").removeClass("sections_item_active")
	$("#line_width_square_3").removeClass("sections_item_active")
	$("#line_width_square_5").addClass("sections_item_active")
	$("#line_width_square_10").removeClass("sections_item_active")

	$("#line_width_1").removeClass("sections_item_active")
	$("#line_width_3").removeClass("sections_item_active")
	$("#line_width_5").removeClass("sections_item_active")
	$("#line_width_10").removeClass("sections_item_active")

	$("#sections_brush").css("background-color", "#999")
	$("#sections_brush").css("bottom", "15px")
	$("#sections_brush").css("left", "645px")
	$("#sections_brush").css("box-shadow", "3px 3px 0px #888")

	brush_btn = 0

}

line_width_square_10.onclick = function() {

	lineWidth = 10;
	ctx.lineWidth = lineWidth * 2;

	radius = 100

	$(".line_width").css("height", "50px")
	$(".line_width_circle").css("display", "none")

	$("#line_width_square_1").removeClass("sections_item_active")
	$("#line_width_square_3").removeClass("sections_item_active")
	$("#line_width_square_5").removeClass("sections_item_active")
	$("#line_width_square_10").addClass("sections_item_active")

	$("#line_width_1").removeClass("sections_item_active")
	$("#line_width_3").removeClass("sections_item_active")
	$("#line_width_5").removeClass("sections_item_active")
	$("#line_width_10").removeClass("sections_item_active")

	$("#sections_brush").css("background-color", "#999")
	$("#sections_brush").css("bottom", "15px")
	$("#sections_brush").css("left", "645px")
	$("#sections_brush").css("box-shadow", "3px 3px 0px #888")

	brush_btn = 0

}

let rubber_btn = 0

rubber.onclick = function() {

	if (rubber_btn === 0) {

		figures_mode = 0
		ctx.beginPath()

		color = "white";
		ctx.strokeStyle = color;
		ctx.fillStyle = color;

		lineWidth = 10;
		ctx.lineWidth = lineWidth * 2;

		$("#color_black").removeClass("sections_item_active")
		$("#color_grey").removeClass("sections_item_active")
		$("#color_red").removeClass("sections_item_active")
		$("#color_green").removeClass("sections_item_active")
		$("#color_blue").removeClass("sections_item_active")
		$("#color_yellow").removeClass("sections_item_active")

		$("#sections_rubber").css("background-color", "#888")
		$("#sections_rubber").css("bottom", "12px")
		$("#sections_rubber").css("left", "528px")
		$("#sections_rubber").css("box-shadow", "0px 0px 0px #fff")

		$("#sections_filling").css("background-color", "#999")
		$("#sections_filling").css("bottom", "15px")
		$("#sections_filling").css("left", "585px")
		$("#sections_filling").css("box-shadow", "3px 3px 0px #888")

		$("#sections_brush").css("background-color", "#999")
		$("#sections_brush").css("bottom", "15px")
		$("#sections_brush").css("left", "645px")
		$("#sections_brush").css("box-shadow", "3px 3px 0px #888")

		$("#sections_figures").css("background-color", "#999")
		$("#sections_figures").css("bottom", "15px")
		$("#sections_figures").css("left", "705px")
		$("#sections_figures").css("box-shadow", "3px 3px 0px #888")

		$(".line_width").css("height", "50px")
		$(".line_width_square").css("display", "none")
		$(".line_width_item").css("margin", "0px 5px")

		rubber_btn = 1
		fill = 0
		brush_btn = 0
		figures_btn = 0

	} else if (rubber_btn === 1) {

		color = "black";
		ctx.strokeStyle = color;
		ctx.fillStyle = color;

		lineWidth = 10;
		ctx.lineWidth = lineWidth * 2;

		$("#sections_rubber").css("background-color", "#999")
		$("#sections_rubber").css("bottom", "15px")
		$("#sections_rubber").css("left", "525px")
		$("#sections_rubber").css("box-shadow", "3px 3px 0px #888")

		$("#color_black").addClass("sections_item_active")
		$("#color_grey").removeClass("sections_item_active")
		$("#color_red").removeClass("sections_item_active")
		$("#color_green").removeClass("sections_item_active")
		$("#color_blue").removeClass("sections_item_active")
		$("#color_yellow").removeClass("sections_item_active")
		$("#line_width_1").removeClass("sections_item_active")
		$("#line_width_3").removeClass("sections_item_active")
		$("#line_width_5").removeClass("sections_item_active")
		$("#line_width_10").addClass("sections_item_active")

		rubber_btn = 0

	}

}

fill = 0

filling.onclick = function() {

	if (fill === 0) {

		figures_mode = 0
		ctx.beginPath()

		color = "black";
		ctx.strokeStyle = color;
		ctx.fillStyle = color;

		lineWidth = window.innerWidth;
		ctx.lineWidth = lineWidth * 2;

		$("#sections_filling").css("background-color", "#888")
		$("#sections_filling").css("bottom", "12px")
		$("#sections_filling").css("left", "588px")
		$("#sections_filling").css("box-shadow", "0px 0px 0px #fff")

		$("#sections_rubber").css("background-color", "#999")
		$("#sections_rubber").css("bottom", "15px")
		$("#sections_rubber").css("left", "525px")
		$("#sections_rubber").css("box-shadow", "3px 3px 0px #888")

		$("#sections_brush").css("background-color", "#999")
		$("#sections_brush").css("bottom", "15px")
		$("#sections_brush").css("left", "645px")
		$("#sections_brush").css("box-shadow", "3px 3px 0px #888")

		$("#sections_figures").css("background-color", "#999")
		$("#sections_figures").css("bottom", "15px")
		$("#sections_figures").css("left", "705px")
		$("#sections_figures").css("box-shadow", "3px 3px 0px #888")

		$("#color_black").addClass("sections_item_active")
		$("#color_grey").removeClass("sections_item_active")
		$("#color_red").removeClass("sections_item_active")
		$("#color_green").removeClass("sections_item_active")
		$("#color_blue").removeClass("sections_item_active")
		$("#color_yellow").removeClass("sections_item_active")
		$("#line_width_1").removeClass("sections_item_active")
		$("#line_width_3").removeClass("sections_item_active")
		$("#line_width_5").removeClass("sections_item_active")
		$("#line_width_10").addClass("sections_item_active")

		$(".line_width").css("height", "50px")
		$(".line_width_square").css("display", "none")
		$(".line_width_item").css("margin", "0px 5px")

		fill = 1
		rubber_btn = 0
		brush_btn = 0
		figures_btn = 0

	} else if (fill === 1) {

		lineWidth = 10;
		ctx.lineWidth = lineWidth * 2;

		$("#sections_filling").css("background-color", "#999")
		$("#sections_filling").css("bottom", "15px")
		$("#sections_filling").css("left", "585px")
		$("#sections_filling").css("box-shadow", "3px 3px 0px #888")

		fill = 0

	}

}

brush_btn = 0

brush.onclick = function() {

	if (brush_btn === 0) {

		figures_mode = 0
		ctx.beginPath()

		$(".line_width").css("height", "100px")
		$(".line_width_square").css("display", "flex")
		$(".line_width_circle").css("display", "flex")
		$(".line_width_item").css("margin", "5px 5px")
		$(".line_width_square_item").css("margin", "5px 5px")

		$("#sections_brush").css("background-color", "#888")
		$("#sections_brush").css("bottom", "12px")
		$("#sections_brush").css("left", "648px")
		$("#sections_brush").css("box-shadow", "0px 0px 0px #fff")

		$("#sections_rubber").css("background-color", "#999")
		$("#sections_rubber").css("bottom", "15px")
		$("#sections_rubber").css("left", "525px")
		$("#sections_rubber").css("box-shadow", "3px 3px 0px #888")

		$("#sections_filling").css("background-color", "#999")
		$("#sections_filling").css("bottom", "15px")
		$("#sections_filling").css("left", "585px")
		$("#sections_filling").css("box-shadow", "3px 3px 0px #888")

		$("#sections_figures").css("background-color", "#999")
		$("#sections_figures").css("bottom", "15px")
		$("#sections_figures").css("left", "705px")
		$("#sections_figures").css("box-shadow", "3px 3px 0px #888")

		brush_btn = 1
		fill = 0
		rubber_btn = 0
		figures_btn = 0

	} else if (brush_btn === 1) {

		$(".line_width").css("height", "50px")
		$(".line_width_square").css("display", "none")
		$(".line_width_item").css("margin", "0px 5px")

		$("#sections_brush").css("background-color", "#999")
		$("#sections_brush").css("bottom", "15px")
		$("#sections_brush").css("left", "645px")
		$("#sections_brush").css("box-shadow", "3px 3px 0px #888")

		brush_btn = 0

	}

}

figures_btn = 0

figures.onclick = function() {

	if (figures_btn === 0) {

		figures_mode = 1
		lineWidth = 10;
		ctx.lineWidth = lineWidth * 2;

		color = "black";
		ctx.strokeStyle = color;
		ctx.fillStyle = color;

		$("#color_black").addClass("sections_item_active")
		$("#color_grey").removeClass("sections_item_active")
		$("#color_red").removeClass("sections_item_active")
		$("#color_green").removeClass("sections_item_active")
		$("#color_blue").removeClass("sections_item_active")
		$("#color_yellow").removeClass("sections_item_active")

		deg = deg + 90
		$("#settings").css("transform", "rotate(" + deg + "deg)")

		$("#instruction_popup").css("opacity", "1")
		$("#instruction_popup").css("visibility", "visible")
		$(".settings_content").css("transform", "translate(0px, 0px)")
		$(".settings_content").css("opacity", "1")

		$("#sections_figures").css("background-color", "#888")
		$("#sections_figures").css("bottom", "12px")
		$("#sections_figures").css("left", "708px")
		$("#sections_figures").css("box-shadow", "0px 0px 0px #fff")

		$("#sections_rubber").css("background-color", "#999")
		$("#sections_rubber").css("bottom", "15px")
		$("#sections_rubber").css("left", "525px")
		$("#sections_rubber").css("box-shadow", "3px 3px 0px #888")

		$("#sections_filling").css("background-color", "#999")
		$("#sections_filling").css("bottom", "15px")
		$("#sections_filling").css("left", "585px")
		$("#sections_filling").css("box-shadow", "3px 3px 0px #888")

		$("#sections_brush").css("background-color", "#999")
		$("#sections_brush").css("bottom", "15px")
		$("#sections_brush").css("left", "645px")
		$("#sections_brush").css("box-shadow", "3px 3px 0px #888")

		$(".line_width").css("height", "50px")
		$(".line_width_square").css("display", "none")
		$(".line_width_item").css("margin", "0px 5px")

		figures_btn = 1
		rubber_btn = 0
		fill = 0
		brush_btn = 0

	} else if (figures_btn === 1) {

		figures_mode = 0
		ctx.beginPath()

		$("#sections_figures").css("background-color", "#999")
		$("#sections_figures").css("bottom", "15px")
		$("#sections_figures").css("left", "705px")
		$("#sections_figures").css("box-shadow", "3px 3px 0px #888")

		figures_btn = 0

	}

}

close_icon_instruction.onclick = function() {

	deg = deg + 90
	$("#settings").css("transform", "rotate(" + deg + "deg)")

	$("#instruction_popup").css("opacity", "0")
	$("#instruction_popup").css("visibility", "hidden")
	$(".settings_content").css("transform", "translate(0px, -100%)")
	$(".settings_content").css("opacity", "0")

}

deg = 0

settings.onclick = function() {

	deg = deg + 90
	$("#settings").css("transform", "rotate(" + deg + "deg)")

	$("#settings_popup").css("opacity", "1")
	$("#settings_popup").css("visibility", "visible")
	$(".settings_content").css("transform", "translate(0px, 0px)")
	$(".settings_content").css("opacity", "1")

}

close_icon.onclick = function() {

	deg = deg + 90
	$("#settings").css("transform", "rotate(" + deg + "deg)")

	$("#settings_popup").css("opacity", "0")
	$("#settings_popup").css("visibility", "hidden")
	$(".settings_content").css("transform", "translate(0px, -100%)")
	$(".settings_content").css("opacity", "0")

	replaceSpeed = input_replay.value

}