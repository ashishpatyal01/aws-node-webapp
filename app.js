const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h1>My AWS Web App 🚀</h1>");
  res.write("<p>Successfully deployed using GitHub and EC2</p>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
