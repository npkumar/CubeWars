var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

var keys = [];

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
