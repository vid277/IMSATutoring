const express = require("express")
const server = require("./server")

const api = express()
server.api = api
server.start()

api.get("/ping", (req, res) => res.end("pong"))
api.post("/ping", (req, res) => {
    req.pipe(res);
});

api.get("/tutors/:course", (req, res) => res.end(req.params.course))

//https://tutors.imsa.edu/api/ping
//Should return pong