//Sources
// ChatGPT used for rubberducking and adapted to suit my needs
// Why I used await instead of .then (https://dev.to/masteringjs/using-then-vs-async-await-in-javascript-2pma)
// await operator to clean up async function (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

//API Key:
//Weather API Key: 933bde006f044a14a6515410230302


//Global Variables

const searchBtn = document.querySelector("#searchBtn");
const input = document.querySelector("#input");

const resultContainer = document.querySelector(".resultContainer");

const place = document.querySelector("#place");
const time = document.querySelector("#time");
const tempF = document.querySelector("#tempF");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherCondition = document.querySelector("#weatherCondition");
const windSpeed = document.querySelector("#windSpeed")
const humidity = document.querySelector("#humidity")
const precipitationIn = document.querySelector("#precipitationIn")

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");


// const fiveDayContainers = document.querySelector(".fiveDay")
// const dateOne = document.querySelector("#dateOne")
// const weatherConditionOne = document.querySelector("#weatherConditionOne")
// const tempFOne = document.querySelector("#tempFOne");
// const weatherIconOne = document.querySelector("#weatherIconOne");


//Functions

//nested async function within event listener and used arrow function
searchBtn.addEventListener("click", async () => {
  try {
  resultContainer.style.display = "grid";

  const city = input.value;
  const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=933bde006f044a14a6515410230302&q=${city}`;
  //await is stronger than .then because await pauses the function until the promise settles. This cuts down on the amount of code I need to write.
  const weatherResponse = await fetch(weatherApiUrl);
  
  //created a variable called weatherData to hold our JSON data
  const weatherData = await weatherResponse.json();
  console.log(weatherData)

  place.innerHTML = `${weatherData.location.name}, ${weatherData.location.region}`;
  time.innerHTML = `Time: ${weatherData.location.localtime}`;
  weatherCondition.innerHTML = `Condition: ${weatherData.current.condition.text}`;
  tempF.innerHTML = `${weatherData.current.temp_f}\u00B0F`
  weatherIcon.src = weatherData.current.condition.icon;
  windSpeed.innerHTML = `Wind: ${weatherData.current.gust_mph} mph`
  humidity.innerHTML = `Humidity: ${weatherData.current.humidity}%`
  precipitationIn.innerHTML = `Precipitation: ${weatherData.current.precip_in} in`

  const randomQuoteURL = await fetch("https://api.quotable.io/random")
  //This variable catches the quote JSON once the link is fetched
  const quoteData = await randomQuoteURL.json();
  console.log(quoteData)
  quote.innerHTML = quoteData.content;
  //added a ternary operator to my author code in which the author will get populated if it returns truthy, or if no author is provided it returns falsy and the word anonymous is placed.
  author.innerHTML = `-` + (quoteData.author ? quoteData.author : "Anonymous");

    // fiveDayContainers.style.display = "flex";
  // const weatherAPIFiveDayURL = `http://api.weatherapi.com/v1/forecast.json?key=933bde006f044a14a6515410230302&q=${city}&days=6&aqi=no&alerts=no`
  // const weatherResponseFiveDay = await fetch(weatherAPIFiveDayURL);
  // const weatherDataFiveDay = await weatherResponseFiveDay.json();
  // console.log(weatherDataFiveDay)
  // dateOne.innerHTML = `${weatherDataFiveDay.forecast.forecastday[1].date}`
  // weatherConditionOne.innerHTML = `${weatherDataFiveDay.forecast.forecastday[1].day.condition.text}`;
  // tempFOne.innerHTML = `${weatherDataFiveDay.forecast.forecastday[1].day.avgtemp_f}\u00B0F`
  // weatherIconOne.src = weatherDataFiveDay.forecast.forecastday[1].day.condition.icon;
  } catch (error) {
      console.error(error);
  }
});
