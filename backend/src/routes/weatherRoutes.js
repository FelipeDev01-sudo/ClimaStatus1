const express = require('express');
const router = express.Router();
const weatherService = require('../services/weatherService');

router.get('/city/:city', async (req, res, next) => {
  try {
    const data = await weatherService.getCurrentWeather(req.params.city);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get('/forecast/:city', async (req, res, next) => {
  try {
    const data = await weatherService.getForecast(req.params.city);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
