const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5050;

const items = require("./routes/api/items");
// middleware
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(err => console.log(err));
// use routes
app.use("/api/items", items);
app.get("/api/news");
app.listen(port, () => {
  console.log(`server lisening on port ${port}`);
});
