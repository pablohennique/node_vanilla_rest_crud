module.exports = (req, res) => {
  if (req.url === "/api/movies") {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.write(JSON.stringify(req.movies));
    res.end();
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(JSON.stringify({ title: "Not found", message: "Route not found" }));
  }
};
