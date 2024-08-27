// Import statements
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

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
app.use(bodyParser.urlencoded({ extended: true }));

// Today's events
app.get('/', async (req, res) => {
  try {
    // Make a GET Request to the API's 'events.json' endpoint
    // https://byabbe.se/on-this-day/<currentMonth>/<currentDay>/events.json
    const result = await axios.get(
      `${API_URL}/${today.month}/${today.day}/events.json`,
      config
    );
    // Render the index.ejs with displayable contents
    // @date: String Current date
    // @events: Array Events on current date
    res.render('index.ejs', {
      content: {
        events: result.data.events,
      },
    });
  } catch (error) {
    console.log(error.response.data); // Log the errors as JSON String
    res.render('index.ejs', {
      error: 'Sorry! We are facing some internal server error.',
    });
  }
});

// Events on this date
app.post('/', async (req, res) => {
  const type = req.body.type;
  const date = {
    day: req.body.day,
    month: req.body.month,
  };
  try {
    const result = await axios.get(
      `${API_URL}/${date.month}/${date.day}/${type}.json`,
      config
    );
    res.render('index.ejs', {
      content: {
        events: result.data.events || result.data.births || result.data.deaths,
      },
    });
  } catch (error) {
    console.log(error.response.data);
    res.render('index.ejs', {
      error: 'Sorry! We are facing some internal server error.',
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
