const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ message: "Welcome to lab terminal backend." })
);

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));
