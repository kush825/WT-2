const eventmitter = require('events');

class mymitter extends eventmitter{}

const ticker = new mymitter();

ticker.on("videouploaded",()=>{
    console.log("notification received");
})

setInterval(() => {
    ticker.emit("videouploaded");
},1000)
