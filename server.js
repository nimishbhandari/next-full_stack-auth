const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(5000, () => console.log(`Server Runnning on port 5000`));
