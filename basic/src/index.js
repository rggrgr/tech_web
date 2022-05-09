//const http = require("http")
//import http from "http"

//const server = http.createServer((req, res) => {
//	res.end('Hello')
//})

import express from "express"
import {respond} from "./responder.js"

const app = express()

app.use(express.urlencoded())

app.get('/', function (req, res) {
  //respond(res)
  res.sendFile('pages/index.html', {root: './src'})
})

app.post('/search', (req, res) => {
	res.send(req.body)
})

app.listen(3000)