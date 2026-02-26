const express = require('express');
const cors = require('cors');
const { PORT } = require('./config/env');
const weatherRoutes = require('./routes/weatherRoutes');
const cacheRoutes = require('./routes/cacheRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

app.use('/api/weather', weatherRoutes);
app.use('/api/cache', cacheRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`ClimaStatus Backend running on port ${PORT}`);
});

module.exports = app;
