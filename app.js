const express = require ("express");
const body_parser = require ("body-parser");
const morgan = require ("morgan");
const path = require ("path");
const app = express();
const http = require ("http");
app.use(body_parser.urlencoded({ extented: true}));
app.use(body_parser.json());

let router = express.Router();

process.env.PORT = process.env.PORT || 8080;
app.use(morgan("dev"));
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let users = [];
users[0] = {"name" : "Mohammad"};

let nodes = [];
nodes[0] = {"ip" : "158.37.63.8", "port" : 8000};
nodes[1] = {"ip" : "158.37.63.8", "port" : 8001};
nodes[2] = {"ip" : "158.39.77.10", "port" : 8000};
nodes[3] = {"ip" : "158.39.77.10", "port" : 8000};

let myNode = {"ip" : "158.39.77.210", "port" : process.env.PORT};

router.get("/list", function (req, res) {
  res.json({users:users});
});

router.post("/register", function (req, res) {
  let pos = users.length;
  users[pos] = req.body;
  res.status(200).send({
    success: true,
    message: "Brukernavn lagt til" +  name
  });
});

router.get("/nodes", function (req, res) {
  res.json({nodes:nodes});
});

router.post("/nodes", function (req, res) {
  let pos = nodes.length;
  nodes[pos] = req.body;
  res.status(200).send({
    success: true,
    message: "node added"
  });
});

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname+"/index.html"));
})

app.use("/", router);

app.listen(process.env.PORT);
console.log("Server finner port", process.env.PORT);

for (let i = 0; i < nodes.length; i++) {
  sendNodeInfo(myNode, nodes[i]);
}

module.exports = app;


function sendNodeInfo(node, receiver) {
    console.log(receiver);
    let ip = receiver.ip;
    let port = receiver.port;


        node = JSON.stringify(node);
        let post_options = {
            host: ip,
            port: port,
            path: '/nodes',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(node)
            }
        };

        // Set up the request
        let post_req = http.request(post_options, function (res) {

            res.setEncoding('utf8');
        });

        // post the data
        //console.log(node);
        post_req.write(node);
        post_req.end();

        post_req.on('error', function (e) {
            //  Will get a lot of errors due to inactive servers
            //  console.error(e);
        });
    
}
