var express = require('express');
var router = express.Router();
var sharedInventory = require('../app');

/* GET users listing. */
router.get('/:item', function(req, res, next) {
  var item = req.params.item;
  var itemsInInventory = sharedInventory.app.inventory.get(item);

  console.log(req.params.item);
  console.log(itemsInInventory);

  res.render('index', { quantity: itemsInInventory, item: item });
});

module.exports = router;
