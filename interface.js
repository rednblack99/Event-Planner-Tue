window.onload = function() {
  var submitEvent = document.querySelector(".Submitevent")
  var events = document.querySelector(".Events")
  var deleteEvents = document.querySelector(".ClearEvents")
  
  const appKey = config.WEATHER_KEY

  let searchButton = document.getElementById("search-btn");
  let searchInput = document.getElementById("search-txt");
  let cityName = document.getElementById("city-name");
  let icon = document.getElementById("icon");
  let temperature = document.getElementById("temp");
  let humidity = document.getElementById("humidity-div"); 
  
  searchButton.addEventListener("click", findWeatherDetails);

  let eventBoard = new EventBoard
  if (!localStorage.getItem('events')){
    events.innerHTML = "No upcoming events"
  } else {
    events.innerHTML = eventBoard.displayEvents()
  }

  submitEvent.onclick = () => {
    var listingDescription = document.querySelector(".listing_description").value 
    var listingDate = document.querySelector(".listing_date").value
    eventBoard.createListing(listingDescription, listingDate)
    events.innerHTML = eventBoard.displayEvents()
  }

  deleteEvents.onclick = function() {
    localStorage.removeItem("events")	
    eventBoard.clearEvents()
    events.innerHTML = "No upcoming events"
  }

  function findWeatherDetails() {
    if (searchInput.value === "") {

    }else {
      let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
     httpRequestAsync(searchLink, theResponse);
    }
   }

   function theResponse(response) {
    let jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
    humidity.innerHTML = jsonObject.main.humidity + "%";
  }
  
  function httpRequestAsync(url, callback)
  {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
    if (httpRequest.readyState == 4 && httpRequest.status == 200)
      callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
  }
  
}