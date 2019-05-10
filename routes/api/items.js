const express = require("express");
const router = express.Router();

// Item Modal
const Item = require("../../models/Item");

// Route Get api/items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// Route Post api/items
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

module.exports = router;
