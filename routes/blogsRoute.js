const express = require("express");

const router = express.Router();
const Blog = require("../model/BlogModel");

router.get("/get", (req, res) => {
  Blog.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

router.get("/get/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

router.post("/create", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

router.patch("/update/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndUpdate(id, req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
