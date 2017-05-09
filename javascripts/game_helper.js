function createPlayer(context){
	var player = {
		color: "#00A",
	    x: 50,
	    y: 50,
   		width: 30,
    	height: 30,
    	draw: function() {
  	  		context.fillStyle = this.color;
	        context.fillRect(this.x, this.y, this.width, this.height);
		}
	};
	return player;
}

function createObstacle(context,posX,posY){
	var obstacle = {
		color: "green",
		x:posX,
		y:posY,
		centerX:100,
		centerY:100,
		radius: 25,
		draw:function(){
			//context.fillStyle = this.color;
			context.beginPath();
			context.arc(this.centerX,this.centerY, this.radius, 0, 2 * Math.PI, false);
			context.fillStyle = this.color;
	        context.fill();
		},
		vibrate:function(){
			for(i =0;i>5;i++){
				this.x+=5;
				this.x-=5;
			}
		}
	};
	return obstacle;
}