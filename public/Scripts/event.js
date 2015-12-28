		var width = 1300;
		var height =  700;
		
		function getRandomColor() {
		    var letters = '0123456789ABCDEF'.split('');
		    var color = '#';
		    for (var i = 0; i < 6; i++ ) {
		        color += letters[Math.floor(Math.random() * 16)];
		    }
		    return color;
		}
	
		function randomx()
		{
			var x = Math.floor((Math.random() * 1290) + 10);
			return x;
		}

		function randomType(){
			var n = Math.floor(Math.random() * 3);
			return n;

		}
		function randomy()
		{
			var y = Math.floor((Math.random() * 690) + 10);
			return y;
		}


		function Event() {
			this.x = randomx()
			this.y = randomy()
			this.r = 40;
			this.velocity = 0;
			this.play = false;
			this.type = randomType();
			
			this.update = function(delta) {
			
				
			}

			//funkcją rysująca obiekt
			this.draw = function(ctx) {	
			ctx.beginPath();
			if(this.type ==0)
			ctx.fillStyle = 'yellow';
			if(this.type ==1)
			ctx.fillStyle = 'red';
			if(this.type ==2)
			ctx.fillStyle = 'blue';
			ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
			ctx.closePath();
			ctx.fill();
			}
	}