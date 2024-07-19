import express from "express";

const server = express();

server.listen(3000, () => {
  console.log("server listen port 3000");
});
