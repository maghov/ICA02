const express = require ("express");
const body_parser = require ("body-parser");
const morgan = require ("morgan");

const app = express();
app.use(body_parser.urlencoded({ extented: true}));
app.use(body_parser.json());

let router = express.Router();

process.env.PORT = process.env.PORT || 8080;

app.use(function(req, res, next)) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let user = [];
users[0] = {"name" : "Mohammad"};

let nodes = [];
nodes[0] = {"ip" : "158.39.77.210", "port" : process.env.PORT};

router.get("/list", funtion (req, res)) {
  res.json({users:users});
})

app.use("/", router);

app.listen(process.env.PORT);
console.log("Server is listenting to port", process.env.PORT);
module.exports = app;
