const express = require('express');
const app = express();

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = '127.0.0.1';

// GET /hello endpoint
app.get('/hello', (req, res) => {
  res.status(200).type('text/plain').send('Hello world');
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).type('text/plain').send('404 Not Found');
});

// Start server
const server = app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
  console.log(`Try: curl http://${HOST}:${PORT}/hello`);
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Error: Port ${PORT} is already in use`);
    process.exit(1);
  }
  console.error('Server error:', err);
  process.exit(1);
});

// Graceful shutdown handlers
const shutdown = () => {
  console.log('\nShutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
