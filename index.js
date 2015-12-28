var user = {}
var ajdi = 0;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/public/Scripts/')); //js folder
app.use(express.static(__dirname + '/public/Styles/'));  //css folder
app.get('/',function(req, res){							//get,put,post,delete   
      res.sendFile(__dirname + '/public/game.html');	//main file
    });
io.sockets.on('connection', function(socket){					//nasluchiwanie nawiązania połączenia
	if(!user['first']){
		user['first'] = socket.id
		socket.emit('alert', {idd: user['first'], p: 0} );
		console.log(user['first']+ " is connected");
	}
	else if(!user['second']){
		user['second'] = socket.id
		socket.emit('alert', {idd: user['second'], p: 1} );
		console.log(user['second']+ " is connected");
	}
	else{
		socket.disconnect;
	}
	
	
	socket.on('disconnect', function(){
	if(socket.id == user['first']){
		delete user['first'];
	}
	else if(socket.id == user['second']){
		delete user['second']
	}
	});

	/*socket.on('key', function(result){
	var up2 = result.up2;
	var down2 = result.down2;
	socket.emit('key2', {up2: up2,
						 down2: down2
				});
	});


	socket.on('dane', function(result){

	socket.emit('dane2', {gk1: result.gk1, gk2: result.gk2,
						 ball: result.ball, pkt1: result.pkt1, pkt2: result.pkt2, e: result.e});
	});
	*/

	
	socket.on('dane3', function(result){
	socket.broadcast.emit('dane4',{
								gk1: result.gk1, ballx: result.ballx, 
								bally: result.bally, pkt1: result.pkt1, pkt2: result.pkt2, 
								ex: result.ex, ey: result.ey, et: result.et, ep: result.ep,
								gk1ry: result.gk1ry, gk2ry: result.gk2ry
								});
	});

	socket.on('dane5', function(result){
	socket.broadcast.emit('dane6', {gk2y: result.gk2y, gk2f: result.gk2f})
	})	



	
});



http.listen(3001, function(){
  console.log('listening on *:3001');
});
