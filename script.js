var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

var keys = [],
	width = 500,
	height = 400,
	speed = 4;

var player = {
	x: 10,
	y: 10,
	width: 20,
	height: 20
};

window.addEventListener("keydown", function(e){
	keys[e.keyCode] = true;
}, false);

window.addEventListener("keyup", function(e){
	delete keys[e.keyCode];
}, false);

/*
KeyCodes
up - 38
down - 40
left - 37
right - 39
*/

function game(){
	update();
	render();
}

function update(){
	if(keys[38]) player.y-= speed;
	if(keys[40]) player.y+= speed;
	if(keys[37]) player.x-= speed;
	if(keys[39]) player.x+= speed;
}

function render(){
	context.clearRect(0, 0, width, height);
	context.fillRect(player.x,player.y,player.width,player.height);
}

setInterval(function(){
	game();
}, 1000/30); // 30fps