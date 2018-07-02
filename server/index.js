const PORT = 3000;

const Koa = require("koa");
const socket = require("socket.io");
const http = require("http");
const app = new Koa();

const server = http.createServer(app.callback());
const io = new socket(server);

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("SEND_EULER_ANGLES", function(data) {
    io.emit("EULER_ANGLES", data);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
