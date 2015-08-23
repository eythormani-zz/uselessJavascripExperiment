var eat = document.getElementById('eat');
var yEatLocation = 100;
var xEatLocation = 100;
var div = document.getElementById('move');
var ySpeed = (window.innerHeight-div.clientHeight)/50;//vantar minus width/height
var xSpeed = (window.innerWidth-div.clientWidth)/50;
var upPos = 0;
var leftPos = 0;
var stig = 0;
moveThing();
//eventlistener sem hlustar eftir því hvort ýtt sé á W, A, S eða D
document.addEventListener("keypress", function(){
	if (event.which == 119) {
		moveUp();
		//console.log("UP");
	};
	if (event.which == 115) {
		moveDown();
		//console.log("DOWN");
	};
	if (event.which == 97) {
		moveLeft();
		//console.log("LEFT");
	};
	if (event.which == 100) {
		moveRight();
		//console.log("RIGHT");
	};
});
//Functionar sem sjá um að hreyfa spriteinn í þá átt sem beðið er um að hann fari og sjá um að teleporta hann ef hann kemur út í hornaaaaaaa
function moveUp () {
	if (upPos < 0) {
		upPos = window.innerHeight - div.clientHeight;
		div.style.top = upPos + "px";
		return false;
	};
	upPos = upPos - ySpeed;
	div.style.top = upPos + "px";
}
function moveDown() {
	if (upPos > window.innerHeight - div.clientHeight) {
		upPos = 0;
		div.style.top = upPos + "px";
		return false;
	};
	upPos = upPos + ySpeed;
	div.style.top = upPos + "px";
}
function moveLeft () {
	if (leftPos <= 0) {
		leftPos = window.innerWidth-div.clientWidth;
		div.style.left = leftPos + "px";
		return false;
	};
	leftPos = leftPos - xSpeed;
	div.style.left = leftPos + "px";
}
function moveRight () {
	if (leftPos > window.innerWidth-div.clientWidth) {
		leftPos = 0;
		div.style.left = leftPos + "px";
		return false;
	};
	leftPos = leftPos + xSpeed;
	div.style.left = leftPos + "px";
}
function thing () {
	//console.log('Works');
	if (yEatLocation >= upPos) {
		console.log('collided');
	};
}
function moveThing () {
	yEatLocation = cSharpHasABetterRandomNumberGenerator(0, (window.innerHeight - 60));
	xEatLocation = cSharpHasABetterRandomNumberGenerator(0, (window.innerWidth - eat.clientWidth));
	eat.style.top = yEatLocation + "px";
	eat.style.left = xEatLocation + "px";
}

function cSharpHasABetterRandomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var gameLoop = setInterval(function(){
	thing();
}, 1000/60);