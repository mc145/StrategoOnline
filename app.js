const express = require('express'); 
const app = express();

const socket = require('socket.io'); 
const http = require('http'); 
const server = http.createServer(app); 
const { Server } = require('socket.io'); 
const io = new Server(server); 


app.use(express.static('public')); 


//socket.broadcast.emit(name, data) for everyone but client
// io.sockets.emit(name, data) for everyone



let clients = []; 


io.on('connection', (socket) =>{
    console.log(`[CONNECTION] ADDRESS: ${socket.id}`); 
    clients.push(socket.id); 

    let data = {
        'id': socket.id,
        'color': 'red'
    }; 

    if(clients[1] == socket.id){
        data.color = 'blue'; 
    }

    socket.emit('PLAYERS', data); 
    console.log(`[REQUEST SENT] To User ${socket.id} for color ${data.color}`);


    socket.on('disconnect', () =>{
        console.log(`[DISCONNECTION] USER ${socket.id} DISCONNECTED`); 
        deleteClient(socket.id); 
    }); 

  

}); 


function deleteClient(id){
    for(let i = 0; i<clients.length; i++){
        if(clients[i] == id){
            clients.splice(i,1); 
        }
    }
}




server.listen(3000, () => {
    console.log("[STARTING..] LISTENING ON PORT 3000"); 
}); 