$( document ).ready(function() {
var CANVAS_WIDTH = 1000;
var CANVAS_HEIGHT = 1000;
var FPS = 30;

var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
          "' height='" + CANVAS_HEIGHT + "'></canvas");
        
var context = canvasElement.get(0).getContext("2d");
        context.fillStyle = "#e6e6ff";
        canvasElement.appendTo('body');
        
var player = createPlayer(context);
var obstacle = createObstacle(context,50,50);
     
setInterval(function() {
          update();
          draw();
}, 1000/60);

function draw() {
	//context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	context.fillStyle = "#e6e6ff";
	context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    player.draw();
    obstacle.draw();
}

function update() {
	if(keydown.left) {
    	player.x -= 5;
    }
        
    if(keydown.right) {
      player.x += 5;
    }
    if(keydown.left) {
    	player.x -= 5;
    }
    if(keydown.up) {
      player.y -= 5;
    }
    if(keydown.down) {
      player.y += 5;
    }
    if(keydown.space){
    	for(i=0;i<5;i++){
    		obstacle.x += 5;
    		obstacle.y += 5;
    	}
    	//obstacle.vibrate();
    }
    
}
});