//Sources
// ChatGPT used for rubberducking and adapted to suit my needs
// Why I used await instead of .then (https://dev.to/masteringjs/using-then-vs-async-await-in-javascript-2pma)
// await operator to clean up async function (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

//API Keys
//Weather API Key: 933bde006f044a14a6515410230302
//Google Maps API Key: AIzaSyAgSgkNWoOIca1vh3nUjZEHq9hOkiwwWio


//Global Variables
const searchBtn = document.querySelector("#searchBtn");
const cityInput = document.querySelector("#cityInput");
const cityName = document.querySelector("#cityName");
const region = document.querySelector("#region");
const time = document.querySelector("#time");
const weather = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weatherIcon");
//having a hard time getting google image to populate. Look for alternatives or ask for help. 
const image = document.querySelector("#image");


//Functions

//nested async function within event listener and used arrow function
searchBtn.addEventListener("click", async () => {
  const city = cityInput.value;
  const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=933bde006f044a14a6515410230302&q=${city}`;

  //await is stronger than .then because await pauses the function until the promise settles. This cuts down on the amount of code I need to write.
  const weatherResponse = await fetch(weatherApiUrl);
  const weatherData = await weatherResponse.json();
  console.log(weatherData)
  
  cityName.innerHTML = `City: ${weatherData.location.name}`;
  region.innerHTML = `Region: ${weatherData.location.region}`;
  time.innerHTML = `Time: ${weatherData.location.localtime}`;
  weather.innerHTML = `Weather: ${weatherData.current.condition.text}`;
  weatherIcon.src = weatherData.current.condition.icon;

  //currently struggling to get the Google Maps API to include the specified pictures
  const googleApiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}&key=AIzaSyAgSgkNWoOIca1vh3nUjZEHq9hOkiwwWio`;
  const googleResponse = await fetch(googleApiUrl);
  const googleData = await googleResponse.json();
  console.log(googleData)

  image.src = googleData.results[0].icon;
  })
