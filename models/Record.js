const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
  managerName: {
    key: String
  },
  value: {
    type: String
  },
  createdAt: {
    type: Date
  },
  counts: [
    {
      type: Number
    }
  ]
});

module.exports = mongoose.model('record', recordSchema);
