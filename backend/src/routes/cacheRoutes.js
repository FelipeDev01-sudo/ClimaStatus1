const express = require('express');
const router = express.Router();
const cacheService = require('../services/cacheService');

router.get('/stats', (req, res) => {
  res.json(cacheService.getStats());
});

module.exports = router;
