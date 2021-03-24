const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "welcome to the contact keeper api" })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
