window.onload = function() {
  var submitEvent = document.querySelector(".Submitevent")
  var events = document.querySelector(".Events")
  var deleteEvents = document.querySelector(".ClearEvents")

  let eventBoard = new EventBoard
  if (!localStorage.getItem('events')){
    events.innerHTML = "No upcoming events"
  } else {
    events.innerHTML = eventBoard.displayEvents()
  }

  submitEvent.onclick = () => {
    var listingDescription = document.querySelector(".listing_description").value 
    var listingDate = document.querySelector(".listing_date").value
    // var listingTime = document.querySelector(".listing_").value
    eventBoard.createListing(listingDescription, listingDate)
    // window.alert("Event added")
    events.innerHTML = eventBoard.displayEvents()
  }

  deleteEvents.onclick = function() {
    localStorage.removeItem("events")	
    eventBoard.clearEvents()
    events.innerHTML = "No upcoming events"
  }

}