import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherApi from './WeatherApi';
import WeatherDuplicate from './WeatherDuplicate'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherApi />
  </React.StrictMode>
);


