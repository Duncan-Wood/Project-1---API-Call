//Sources
// ChatGPT used for rubberducking and adapted to suit my needs
// Why I used await instead of .then (https://dev.to/masteringjs/using-then-vs-async-await-in-javascript-2pma)
// await operator to clean up async function (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
// CORS anywhere is a service that combines proxy functionality with CORS to allow my quote API to work. (https://github.com/Rob--W/cors-anywhere/issues/301)

//API Keys
//Weather API Key: 933bde006f044a14a6515410230302


//Global Variables
const searchBtn = document.querySelector("#searchBtn");
const input = document.querySelector("#input");

const place = document.querySelector("#place");
// const region = document.querySelector("#region");
const time = document.querySelector("#time");

const weatherCondition = document.querySelector("#weatherCondition");
const tempF = document.querySelector("#tempF");
const weatherIcon = document.querySelector("#weatherIcon");
const windSpeed = document.querySelector("#windSpeed")
const humidity = document.querySelector("#humidity")
const precipitationIn = document.querySelector("#precipitationIn")

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");


//Functions


//nested async function within event listener and used arrow function
searchBtn.addEventListener("click", async () => {
  try {
  const city = input.value;
  const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=933bde006f044a14a6515410230302&q=${city}`;

  //await is stronger than .then because await pauses the function until the promise settles. This cuts down on the amount of code I need to write.
  //created a variable called weatherResponse for the inputted URL in case it is needed later
  const weatherResponse = await fetch(weatherApiUrl);
  //created a variable called weatherData to hold our JSON data
  const weatherData = await weatherResponse.json();
  console.log(weatherData)
  
  place.innerHTML = `${weatherData.location.name}, ${weatherData.location.region}`;
  time.innerHTML = `Time: ${weatherData.location.localtime}`;

  weatherCondition.innerHTML = `Weather: ${weatherData.current.condition.text}`;
  tempF.innerHTML = `${weatherData.current.temp_f}\u00B0F`
  weatherIcon.src = weatherData.current.condition.icon;
  windSpeed.innerHTML = `Wind: ${weatherData.current.gust_mph} mph`
  humidity.innerHTML = `Humidity: ${weatherData.current.humidity}%`
  precipitationIn.innerHTML = `Precipitation: ${weatherData.current.precip_in} in`

  //I was running into issues with the CORS policy, meaning that this API was only allowing access from the server, not the client. To get around this, I found a way to add a proxy to the start of my link. For this to work, I must request demo access by clicking the link below.
  const randomQuoteURL = await fetch("https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json")
  //This variable catches the quote JSON once the link is fetched
  const quoteData = await randomQuoteURL.json();
  console.log(quoteData)

  quote.innerHTML = quoteData.quoteText;
  //added a ternary operator to my author code in which the author will get populated if it returns truthy, or if no author is provided it returns falsy and the word anonymous is placed.
  author.innerHTML = `-` + (quoteData.quoteAuthor ? quoteData.quoteAuthor : "Anonymous");

  } catch (error) {
      console.error(error);
      //ADD a return statement that appends text specifying where the code went wrong.
  }
});