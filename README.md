# DayStory

A Node.js application that fetch historical events daily basis using Byabbe REST API.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Usage](#api-usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This application can fetch historical events, births and deaths daily basis according to current day & month.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Byabbe API**: Fetch historical events.
- **EJS**: Templating engine for rendering HTML.
- **CSS**: Styling the frontend.

## Installation

1. Clone this repository:

   ```bash
    git clone https://github.com/rajmanna-dev/daystory.git
   ```

2. Navigate to the project directory:

   ```bash
   cd daystory
   ```

3. Install the dependencies:

   ```bash
   npm i
   ```

4. Start the server:

   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. View the information's according to current day and month.

## API Usage

This app uses the Byabbe REST API. For more details on the API, visit the [Byabbe.sc API documentation](https://byabbe.se/)

1. Events endpoint: `https://byabbe.se/on-this-day/<month>/<day>/events.json`
2. Births endpoint: `https://byabbe.se/on-this-day/<month>/<day>/births.json`
3. Deaths endpoint: `https://byabbe.se/on-this-day/<month>/<day>/deaths.json`

## Future Enhancements

- Improve the website frontend and Documentations.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - See the [LICENSE](LICENSE.txt) file for details.
