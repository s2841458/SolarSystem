var stage = document.getElementById("gameCanvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;
var ctx = stage.getContext("2d");
ctx.fillStyle = "grey";
ctx.font = GAME_FONTS;

var shipImage = new Image();
shipImage.ready = false;
shipImage.onload = setAssetReady;
shipImage.src = PATH_SHIP;

var sunImage = new Image();
sunImage.ready = false;
sunImage.onload = setAssetReady;
sunImage.src = PATH_SUN;

var mercuryImage = new Image();
mercuryImage.ready = false;
mercuryImage.onload = setAssetReady;
mercuryImage.src = PATH_MERCURY;

var venusImage = new Image();
venusImage.ready = false;
venusImage.onload = setAssetReady;
venusImage.src = PATH_VENUS;

var earthImage = new Image();
earthImage.ready = false;
earthImage.onload = setAssetReady;
earthImage.src = PATH_EARTH;

var marsImage = new Image();
marsImage.ready = false;
marsImage.onload = setAssetReady;
marsImage.src = PATH_MARS;

var jupiterImage = new Image();
jupiterImage.ready = false;
jupiterImage.onload = setAssetReady;
jupiterImage.src = PATH_JUPITER;

var saturnImage = new Image();
saturnImage.ready = false;
saturnImage.onload = setAssetReady;
saturnImage.src = PATH_SATURN;

var uranusImage = new Image();
uranusImage.ready = false;
uranusImage.onload = setAssetReady;
uranusImage.src = PATH_URANUS;

var neptuneImage = new Image();
neptuneImage.ready = false;
neptuneImage.onload = setAssetReady;
neptuneImage.src = PATH_NEPTUNE;

var plutoImage = new Image();
plutoImage.ready = false;
plutoImage.onload = setAssetReady;
plutoImage.src = PATH_PLUTO;

var kuiperImage = new Image();
kuiperImage.ready = false;
kuiperImage.onload = setAssetReady;
kuiperImage.src = PATH_KUIPER;
 
function setAssetReady() {
	this.ready = true;
}

ctx.fillRect(0,0,stage.width,stage.height);
ctx.fillStyle = "#000";
ctx.fillText(TEXT_PRELOADING, TEXT_PRELOADING_X, TEXT_PRELOADING_Y);
var preloader = setInterval(preloading, TIME_PER_FRAME);
var gameloop, currX, currY, isMoving, map, mapImage;

function preloading() {
	if ((shipImage.ready && sunImage.ready && mercuryImage.ready && venusImage.ready && earthImage.ready &&
		marsImage.ready && jupiterImage.ready && saturnImage.ready && uranusImage.ready && neptuneImage.ready &&
		plutoImage.ready && kuiperImage.ready)) {
		clearInterval(preloader);
		
		gameloop = setInterval(update, TIME_PER_FRAME);
		document.addEventListener("keydown",keyDownHandler, false);	
		document.addEventListener("keyup",keyUpHandler, false);
	}
}

function keyDownHandler(event) {
	var keyPressed = String.fromCharCode(event.keyCode);

	if (keyPressed == "W") {		
		isMoving = true;
	}
}

function keyUpHandler(event) {
	var keyPressed = String.fromCharCode(event.keyCode);
	
	if (keyPressed == "W") {
		isMoving = false;
	}
}

currX = IMAGE_START_X;
currY = IMAGE_START_Y;

charX = SHIP_START_X;
charY = SHIP_START_Y;

map = "sun";
mapImage = sunImage;

function update() {

	if (isMoving) {
		charX += CHAR_SPEED;
	}
	
	if (charX >= 1184) {
		charX = 0;
		if (map == "sun") {
			map = "mercury";
			mapImage = mercuryImage;
		} else if (map == "mercury") {
			map = "venus";
			mapImage = venusImage;
		} else if (map == "venus") {
			map = "earth";
			mapImage = earthImage;
		} else if (map == "earth") {
			map = "mars";
			mapImage = marsImage;
		} else if (map == "mars") {
			map = "jupiter";
			mapImage = jupiterImage;
		} else if (map == "jupiter") {
			map = "saturn";
			mapImage = saturnImage;
		} else if (map == "saturn") {
			map = "uranus";
			mapImage = uranusImage;
		} else if (map == "uranus") {
			map = "neptune";
			mapImage = neptuneImage;
		} else if (map == "neptune") {
			map = "pluto";
			mapImage = plutoImage;
		} else if (map == "pluto") {
			map = "kuiper";
			mapImage = kuiperImage;
		}
	}
	
	ctx.drawImage(mapImage, currX, currY, MAP_WIDTH, MAP_HEIGHT, 0, 0, MAP_WIDTH, MAP_HEIGHT);
	ctx.drawImage(shipImage, currX, currY, SHIP_WIDTH, SHIP_HEIGHT, charX, charY, SHIP_WIDTH, SHIP_HEIGHT);
}