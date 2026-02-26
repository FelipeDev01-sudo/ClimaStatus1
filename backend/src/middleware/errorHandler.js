const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.response) {
    const status = err.response.status;
    if (status === 404) {
      return res.status(404).json({ error: 'City not found', message: 'The specified city was not found.' });
    }
    if (status === 401) {
      return res.status(401).json({ error: 'Unauthorized', message: 'Invalid API key.' });
    }
  }

  res.status(500).json({ error: 'Internal Server Error', message: err.message });
};

module.exports = errorHandler;
