const http = require('http');

// req = incoming request
// res = what we are sending back
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('this is our about page');
  }
  res.end(
    `<h1> Oops!! </h1>
      <p>We cant seem to find the page that you are looking for </p>
      <a href="/">back home</a>`
  );
});

// port
server.listen(5000);
