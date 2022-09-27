const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const PORT = 3000;

//middleware
app.use(express.json());
//import routes
const blogRoutes = require("./routes/blogsRoute");
//routes
app.use("/blogs", blogRoutes);

//redirecting to blogs get
app.get("/", (req, res) => {
  res.redirect("/blogs/get");
});

// connect to db and start server

mongoose.connect(process.env.DB_URI, () => {
  //server
  app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });
  console.log("connected to db");
});
