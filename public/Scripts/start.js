   $(document).ready(function(){
      var socket = io();
      var Chat = function(socket) {
      this.socket = socket;
      }



      socket.on('connection',function(name){
        $('#zalogowany').html(name);
      });
    






  
  });