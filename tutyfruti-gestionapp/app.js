const express = require('express');
const cors = require('cors');
const dailyOpeningRoute = require('./routes/dailyOpening');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/daily-opening', dailyOpeningRoute);

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));