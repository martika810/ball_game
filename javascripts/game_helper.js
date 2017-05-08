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