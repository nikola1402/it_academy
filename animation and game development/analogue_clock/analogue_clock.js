var clock = null;
var	hours_hand = null;
var	minutes_hand = null;
var	seconds_hand = null;
var	ctx = null;
var	degrees = 0;
var height = 500;
var width = 500;
var half_height = height / 2;
var half_width = width / 2;
var hours_in_circle = 360 / 12;
var minutes_in_circle = 360 / 60;
var miliseconds_in_circle = 360 / 60000;
var degrees_to_rad = Math.PI / 180;
var rad_to_degrees = 180 / Math.PI;

function clearCanvas() {
	ctx.clearRect(0, 0, height, width);
}

function getMinutesHandAngle(currentTime) {
	console.log("minute")
	console.log(Math.floor(minutes_in_circle * currentTime.getMinutes(), 0))
	return Math.floor(minutes_in_circle * currentTime.getMinutes(), 0);
}

function getHoursHandAngle(currentTime) {
	// Calculate the expected angle
	console.log("hour")
	console.log(Math.floor(hours_in_circle * currentTime.getHours(), 0))
	return Math.floor(hours_in_circle * currentTime.getHours(), 0);
}

function getSecondsHandAngle(currentTime) {
	// Calculate the expected angle
	var secondsToMilliseconds = currentTime.getSeconds() * 1000;
	var totalMilliseconds = currentTime.getMilliseconds() + secondsToMilliseconds;
	console.log("seconds")
	console.log(Math.floor(miliseconds_in_circle * totalMilliseconds, 0))
	return Math.floor(miliseconds_in_circle * totalMilliseconds, 0);
}

function rotateAndDraw(image, angle) {
	// Rotate around this point
	ctx.rotate(angle * degrees_to_rad);

	// Draw the image back and up
	ctx.drawImage(image, 0 - half_height, 0 - half_width);
}

function draw() {
	var currentTime = new Date();

	clearCanvas();

	// Draw the clock onto the canvas
	ctx.drawImage(clock, 0, 0);

	// Save the current drawing state
	ctx.save();

	// Now move across and down half way
	ctx.translate(half_height, half_width);

	rotateAndDraw(minutes_hand, getMinutesHandAngle(currentTime));
	rotateAndDraw(hours_hand, getHoursHandAngle(currentTime));
	rotateAndDraw(seconds_hand, getSecondsHandAngle(currentTime));

	// Restore the previous drawing state
	ctx.restore();

	window.requestAnimationFrame(draw, 1000 / 15);
}

function loadImage() {
	// Image loaded event complete.  Start the timer
	window.requestAnimationFrame(draw, 1000 / 15);
}

function init() {
	// Grab the clock element
	var canvas = document.getElementById('clock');

	ctx = canvas.getContext('2d');

	// Load the hor hand image
	hours_hand = new Image();
	hours_hand.src = 'hour_hand.png';

	// Load the minute hand image
	minutes_hand = new Image();
	minutes_hand.src = 'minute_hand.png';

	// Load the minute hand image
	seconds_hand = new Image();
	seconds_hand.src = 'second_hand.png';

	// Load the clock face image
	clock = new Image();
	clock.src = 'clock_face.png';
	clock.onload = loadImage;
}
