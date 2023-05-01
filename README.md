<<<<<<< HEAD
# Welcome to Sunrise Weather!
![Sunrise Weather Screenshot](./assets/sunrise-weather-screenshot.png)
=======
# Sunrise Weather:
Sunrise weather is a single-page website designed to display current weather information from a weather API. Additionally, the website displays a random inspirational quote to help users brighten up their day.
>>>>>>> origin

## Try it out:
[Sunrise Weather](https://sunrise-weather.surge.sh/)

## Summary:
Sunrise weather is a single-page website designed to display current weather information from a weather API. Additionally, the website displays a random quote to help users brighten up their day.

## Features:
- Enter a city name or zip code and pull accurate information from a weather API
- Region, time, current weather, condition, wind speed, humidity, and precipitation are all pulled from the weather API
- when weather data is populated, this website also populates a random inspirational quote from a seperate API to be displayed below the weather
- The data pulled from the API's is elegantly displayed on the screen with responsive sizing.

## Languages Used:
- HTML
- CSS
- JavaScript

## Requirements
- Internet connection

## APIs:
- [WeatherAPI.com](https://www.weatherapi.com/)
- [Quotable](https://github.com/lukePeavey/quotable#get-random-quote)

## Limitations:
- the Sunrise logos only work if the assets are available locally
- weatherAPI only works because I am in a free trial period. Trial ends 02/17/23 and then I would need to pay for a developer plan

## MVPs:
1. Users can enter a city name or zip code and the website will display current weather information
2. The weather information displayed is the city, region, time, temperature (F), condition icon, condition name, wind speed (mph), humidity, and precipitation (in)
3. When the weather information is displayed, a random quote will also be generated below the weather information 
4. The website is elegantly designed, including a background image, stylized text, and a custom logo
5. weatherAPI.com and Quotable API are properly cited

## Flex Goals:
- continue styling the resultContainer div to more elequently display the information
- Add an option for users to view the temperature in either Fahrenheit or Celsius
- create a mobile-first design that can better adjust the contents of the page in any given aspect ratio
- add a 5 day forecast div to be displayed before the current day weather information
- allow users to save several locations and view the weather differences if they desire
- add functionality to switch between light and dark mode
- Add an option for the user to select a custom background image
