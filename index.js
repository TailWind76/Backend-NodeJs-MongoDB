// Import the required modules
const mongoose = require('mongoose');

// Replace 'your_database_url' with the URL of your MongoDB database
const databaseURL = 'your_database_url';

// Establish the database connection
mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
  });
