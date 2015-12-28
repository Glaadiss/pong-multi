var width = 1300;
var height =  700;

function Gk() {
	this.x = 100;
	this.y = height/2 - 50;
	this.r = 1
	this.ry = 100 
	this.velocity = 0.7;
	this.limit = 1100;
	this.play = true;
	this.color = 'green';
	this.lastImpress = false;
//logika sterująca obiektem
this.update = function() {
	this.y += this.velocity

}

//funkcją rysująca obiekt
this.draw = function(ctx) {

	ctx.fillStyle = this.color;	
	ctx.fillRect(this.x, this.y, this.r+4, this.ry);
	}
}

function Gk2() {
	this.x = width - 110;
	this.y = height/2 - 50;
	this.r = 1
	this.ry = 100 
	this.velocity = 0.7;
	this.limit = 1100;
	this.play = true;
	this.color = 'green';
	this.lastImpress = false;
//logika sterująca obiektem
this.update = function() {
	this.y += this.velocity

}

//funkcją rysująca obiekt
this.draw = function(ctx) {

	ctx.fillStyle = this.color;	
	ctx.fillRect(this.x, this.y, this.r+4, this.ry);
	}
}

