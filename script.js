var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

var keys = [],
	width = 500,
	height = 400,
	speed = 4,
	score = 0;

var player = {
	x: 10,
	y: 10,
	width: 20,
	height: 20
};

var cube = {
	x: Math.random() * (width - 20),
	y: Math.random() * (height - 20),
	width: 20,
	height: 20
};

window.addEventListener("keydown", function(e) {
	keys[e.keyCode] = true;
}, false);

window.addEventListener("keyup", function(e) {
	delete keys[e.keyCode];
}, false);

/*
KeyCodes
up - 38
down - 40
left - 37
right - 39
*/

function game() {
	update();
	render();
}

function update() {
	if (keys[38]) player.y -= speed;
	if (keys[40]) player.y += speed;
	if (keys[37]) player.x -= speed;
	if (keys[39]) player.x += speed;

	if (player.x < 0) player.x = 0;
	if (player.y < 0) player.y = 0;
	if (player.x > width - player.width) player.x = width - player.width;
	if (player.y > height - player.height) player.y = height - player.height;

	if(collision(player, cube)) process();
}

function render() {
	context.clearRect(0, 0, width, height);

	context.fillStyle = "blue";
	context.fillRect(player.x, player.y, player.width, player.height);

	context.fillStyle = "red";
	context.fillRect(cube.x, cube.y, cube.width, cube.height);
}

function process(){
	score++;
	cube.x = Math.random() * (width - 20);
	cube.y = Math.random() * (height - 20);
}

function collision(one, two) {
	return !(one.x > two.x + one.width ||
		one.x + one.width < two.x ||
		one.y > two.y + height ||
		one.y + one.height < two.y);
}

setInterval(function() {
	game();
}, 1000 / 30); // 30fps