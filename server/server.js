const express = require('express');
const path = require('path'); // Import path to resolve directories

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require your routes
require('./routes/htmlRoutes')(app);

// Fallback route to send index.html for all other requests (for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
