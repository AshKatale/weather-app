
# Weather App

This is a simple weather app built with React and Vite. It allows users to search for current weather data for any location using a weather API.

## Features

- Search for weather by city name
- Displays current weather conditions (temperature, humidity, wind speed, etc.)
- Responsive design for mobile and desktop
- Easy-to-use interface

## Demo

Check out the live demo: [Weather App](https://weatherbyashkatale.netlify.app/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AshKatale/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed, then run:

   ```bash
   npm install
   ```

3. **Set up API key:**

   - Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) or any other weather API provider.
   - Create a `.env` file in the root of your project and add your API key:

   ```bash
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Build for Production

To build the app for production, run:

```bash
npm run build
```

The build files will be generated in the `dist` folder.

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **Vite**: A fast build tool and development server for modern web projects
- **Axios**: For making API requests
- **CSS/SCSS**: Styling the application

## Project Structure

```bash
.
├── public/             # Static assets like images
├── src/                # Main source code
│   ├── assets/         # Images, icons, fonts
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app file
│   ├── main.jsx        # Entry point
├── .env                # Environment variables (API Key)
├── package.json        # Project dependencies and scripts
└── README.md           # Project readme (you are here)
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
