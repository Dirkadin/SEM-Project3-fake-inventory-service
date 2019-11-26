var express = require('express');
var router = express.Router();
var sharedInventory = require('../app');

router.get('/:item', function(req, res, next) {
  var item = req.params.item;
  var itemsInInventory = sharedInventory.app.inventory.get(item);

  // res.json({'\"item\"': '\"' +item + '\"', '\"itemsInInventory\"': '\"' + itemsInInventory + '\"'});
  // res.json({'item': item, 'itemsInInventory': itemsInInventory});
  res.send(itemsInInventory);
});

module.exports = router;
