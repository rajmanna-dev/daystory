// Import statements
import express from 'express';
import axios from 'axios';

// App constants
const app = express();
const port = 3000;
const API_URL = 'https://byabbe.se/on-this-day';

// Get the current day(1-31) and month(1-12)
const today = {
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
};

// API Configurations
const config = {
  headers: {
    accept: 'application/json',
  },
};

app.use(express.static('public'));

// Make a GET Request to the API's 'events.json' endpoint
app.get('/', async (req, res) => {
  try {
    const result = await axios.get(
      `${API_URL}/${today.month}/${today.day}/events.json`,
      config
    );
    res.render('index.ejs', {
      content: {
        today: result.data.date,
        events: result.data.events,
      },
    });
  } catch (error) {
    console.log(error.response.data); // Log the error
    res.render('index.ejs', {
      error: 'Sorry! We are facing some internal server error.',
    });
  }
});

// Make a GET Request to the API's 'births.json' endpoint
app.get('/births', async (req, res) => {
  try {
    const result = await axios.get(
      `${API_URL}/${today.month}/${today.day}/births.json`,
      config
    );
    res.render('index.ejs', {
      content: {
        today: result.data.date,
        events: result.data.births,
      },
    });
  } catch (error) {
    console.log(error.response.data);
    res.render('index.ejs', {
      error: 'Sorry! We are facing some internal server error.',
    });
  }
});

// Make a GET Request to the API's 'deaths.json' endpoint
app.get('/deaths', async (req, res) => {
  try {
    const result = await axios.get(
      `${API_URL}/${today.month}/${today.day}/deaths.json`,
      config
    );
    res.render('index.ejs', {
      content: {
        today: result.data.date,
        events: result.data.deaths,
      },
    });
  } catch (error) {
    console.log(error.response.data);
    res.render('index.ejs', {
      error: 'Sorry! We are facing some internal server error.',
    });
  }
});

// Render help page
app.get('/help', (req, res) => {
  res.render('help.ejs', { content: '', error: '' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
