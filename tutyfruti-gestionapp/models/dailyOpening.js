const mongoose = require('mongoose');

const DailyOpeningSchema = new mongoose.Schema({
  openingAmount: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DailyOpening', DailyOpeningSchema);