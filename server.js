// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();
/*Dependencies*/
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(function (req,res, next){
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
//
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//
//     res.setHeader('Access-Control-Allow-Credentials', true);
//
//     next();
// });

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 8000;
const server = app.listen(port, listening);
// Callback to debug
function listening(){
  console.log('server is running');
  console.log(`running on localhost ${port}`);
}
// Initialize all route with a callback function
app.get('/all', sendData);
// Callback function to complete GET '/all'
function sendData(req, res){
  res.sendData(projectData);
}
// Post Route
app.post('/addEntry', addEntry);

function addEntry(req, res){
  newEntry = {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content
  }

  entryData.push(newEntry)
  res.send(entryData)
  console.log(entryData);
}





// app.post('/date', addDate);
// function addDate(req, res){
//   projectData.push(req.body);
// };
//
// app.post('/temp', addTemp);
// function addTemp(req, res){
//   projectData.push(req.temp);
// };
//
// app.post('/content', addContent);
// function addContent(req, res){
//   projectData.push(req.content);
// };
