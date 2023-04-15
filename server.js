const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

const PORT = 1337
app.listen(PORT, () => {
  console.log(`The server is up and running at http://localhost:${PORT}`);
});
