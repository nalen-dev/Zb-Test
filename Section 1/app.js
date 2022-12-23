const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const router = require("./routes");

//database url
const url = "mongodb+srv://Admin:8awxmriZ10hIGdzk@cluster0.zvhyimb.mongodb.net/?retryWrites=true&w=majority";

//connecting application with database
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Mongo DB Connected"))
  .catch((err) => console.log(err));

//middleware
app.use(express.json());

app.use(cors());
app.options("*", cors()); //handling cors

app.use("/v1", router);

// internal sever error middleware
app.use("/", (err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ msg: "Some Internal Server Error!" });
});

app.listen(3000);
