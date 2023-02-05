//Sources
// ChatGPT used for rubberducking and adapted to suit my needs
// Why I used await instead of .then (https://dev.to/masteringjs/using-then-vs-async-await-in-javascript-2pma)
// await operator to clean up async function (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

//API Keys
//Weather API Key: 933bde006f044a14a6515410230302


//Global Variables
const searchBtn = document.querySelector("#searchBtn");
const cityInput = document.querySelector("#cityInput");

const cityName = document.querySelector("#cityName");
const region = document.querySelector("#region");
const time = document.querySelector("#time");

const weather = document.querySelector("#weather");
const tempF = document.querySelector("#tempF");
const weatherIcon = document.querySelector("#weatherIcon");

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");


//Functions

//nested async function within event listener and used arrow function
searchBtn.addEventListener("click", async () => {
  try {
  const city = cityInput.value;
  const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=933bde006f044a14a6515410230302&q=${city}`;

  //await is stronger than .then because await pauses the function until the promise settles. This cuts down on the amount of code I need to write.
  //created a variable called weatherResponse for the inputted URL in case it is needed later
  const weatherResponse = await fetch(weatherApiUrl);
  //created a variable called weatherData to hold our JSON data
  const weatherData = await weatherResponse.json();
  console.log(weatherData)
  
  cityName.innerHTML = `City: ${weatherData.location.name}`;
  region.innerHTML = `Region: ${weatherData.location.region}`;
  time.innerHTML = `Time: ${weatherData.location.localtime}`;
  weather.innerHTML = `Weather: ${weatherData.current.condition.text}`;
  tempF.innerHTML = `Temperature (F): ${weatherData.current.temp_f}`
  weatherIcon.src = weatherData.current.condition.icon;

  //I was running into issues with the CORS policy, meaning that this API was only allowing access from the server, not the client. To get around this, I found a way to add a proxy to the start of my link.
  const randomQuoteURL = await fetch("https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json")
  //This variable catches the quote JSON once the link is fetched
  const quoteData = await randomQuoteURL.json();
  console.log(quoteData)

  quote.innerHTML = quoteData.quoteText;
  //added a ternary operator to my author code in which the author will get populated if it returns truthy, or if no author is provided it returns falsy and the word anonymous is placed.
  author.innerHTML = `-` + (quoteData.quoteAuthor ? quoteData.quoteAuthor : "Anonymous");

  } catch (error) {
      console.error(error);
  }
});