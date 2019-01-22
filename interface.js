let eventBoard = new EventBoard


var submitEvent = document.querySelector(".Submitevent")
var events = document.querySelector(".Events")

submitEvent.onclick = () => {
  var listingDescription = document.querySelector(".listing_description").value 
  var listingDate = document.querySelector(".listing_date").value
  var listingTime = document.querySelector(".listing_time").value
  var newEvent = eventBoard.createListing(listingDescription, listingDate, listingTime)
  events.innerHTML = `Description: ${newEvent.getListing()} <br> Date: ${newEvent.returnDate()} <br> Time: ${newEvent.returnTime()}` 
  var eventAdded = document.querySelector("#EventAdded")
  eventAdded.innerText = "Event added"
}