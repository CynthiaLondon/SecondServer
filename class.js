// Require dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

     // Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;
  // console.log(path);
  // Depending on the URL, display a different HTML file.

  switch (path) {

  case "/foods.html":
       fs.readFile(__dirname + "/foods.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
   break;    

    case "/movies.html":
       fs.readFile(__dirname + "/movies.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
       break;
    case "/css.html":
      console.log('route hit');
       fs.readFile(__dirname + "/css.html", function(err, data) {
        // console.log(JSON.stringify(data));
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
       break;
    // default to rendering index.html, if none of above cases are hit
    default:
       fs.readFile(__dirname + "/index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    break;   
  }

}
// function displayRoot(url, req, res) {
//   var myHTML = "<html>" +
//     "<body><h1>Home Page</h1>" +
//     "<a href='/index.html'>Index</a>" +
//     "</body></html>";

//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(myHTML);
// }

// function displayindex(url, req, res) {
//   var myHTML = "<html>" +
//     "<body><h1>Index</h1>" +
//     "<a href='/index'>Go Home</a>" +
//     "</body></html>";

//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(myHTML);
// }

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  var myHTML =  "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(myHTML);
}
var server = http.createServer(handleRequest);

// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});

