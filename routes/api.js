const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({body}, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});
//http://localhost:3000/%7B%7BEXTENSION_BASE_URL%7D%7D/af7ae505a9eed503f8b8e6982036873e.woff2
router.post("/api/transaction/bulk", ({body}, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({}).sort({date: -1})
    .then(dbTransaction => {
      console.log (dbTransaction);
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});
router.use(function(req, res, next) {
  console.log ("404");
 res.status(200);
  res.send('404: File Not Found');
  });
module.exports = router;