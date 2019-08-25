const express = require('express');
const router = express.Router();
const Record = require('../models/Record');
const Error = require('../helpers/errorHandler');
const requestChecker = require('../middleware/requestChecker');

// Finds the desired records according to the given parameters.
// apiParams (Body) startDate {Date}, endDate {Date}, minCount {Number}, maxCount {Number}
router.post('/findRecords', requestChecker.verifyParams, requestChecker.verifyTypes, (req, res) => {
  var { startDate, endDate, minCount, maxCount } = req.body;
  console.log(req.body);
  // Aggregating query with params
  Record.aggregate([
    // This query for calculating sum of counts
    {
      $project: {
        _id: false,
        key: 1,
        createdAt: 1,
        totalCount: {
          $reduce: {
            input: '$counts',
            initialValue: 0,
            in: { $add: ['$$value', '$$this'] }
          }
        }
      }
    },
    // This query for filtering data
    {
      $match: {
        $and: [
          { createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } },
          { totalCount: { $gt: minCount, $lt: maxCount } }
        ]
      }
    }
  ])
    .exec()
    .then(data => {
      res.status(200).json({
        code: 0,
        msg: 'Success',
        records: data
      });
    })
    .catch(err => {
      Error.systemError(res, err);
    });
});

module.exports = router;
