const express = require("express")
const server = require("./server")

const api = express()
server.api = api
server.start()


api.get("/ping", (req, res) => res.end("pong"))
api.post("/ping", (req, res) => {
    req.pipe(res);
});

// https://tutors.imsa.edu/api/ping