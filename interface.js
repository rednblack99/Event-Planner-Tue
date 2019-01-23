let eventBoard = new EventBoard


var submitEvent = document.querySelector(".Submitevent")
var events = document.querySelector(".Events")

submitEvent.onclick = () => {
  var listingDescription = document.querySelector(".listing_description").value 
  var listingDate = document.querySelector(".listing_date").value
  // var listingTime = document.querySelector(".listing_").value
  eventBoard.createListing(listingDescription, listingDate)
  // window.alert("Event added")
  events.innerHTML = eventBoard.DisplayEvents()
}