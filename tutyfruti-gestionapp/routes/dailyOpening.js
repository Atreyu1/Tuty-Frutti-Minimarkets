const express = require('express');
const router = express.Router();
const DailyOpening = require('../models/dailyOpening');

router.get('/', async (req, res) => {
  try {
    const info = await DailyOpening.findOne().sort({ date: -1 });
    res.json(info);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add more routes as needed

module.exports = router;