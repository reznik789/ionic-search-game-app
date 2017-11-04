const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const router = require("./router");
const cors = require("cors");

//App setup
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

//Server setup
const port = process.env.PORT || 3080;
const server = http.createServer(app);
server.listen(port);
console.log("Server runing on port:", port);
