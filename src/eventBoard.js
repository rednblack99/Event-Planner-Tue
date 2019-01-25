
class EventBoard {
  constructor() {
    this.events = this.inStorage()
  }

  inStorage() {
    if(!localStorage.getItem('events')){
      return []
    } else {
      return this.inflateEventsArray(JSON.parse(localStorage.getItem('events')))
    }
  }

  getEvents() {
    return this.events
  }
 
  clearEvents() {
    this.events = this.inStorage()
  }

  createListing(listingDescription, listingDate) {
   var newEvent = new EventListing(listingDescription, listingDate)
   this.getEvents().push(newEvent)
   localStorage.setItem('events', JSON.stringify(this.getEvents()))
   return newEvent
  }

  getUpcomingEvents(){
    let upcomingEvents = []
    let intermediateArray = this.inflateEventsArray(JSON.parse(localStorage.getItem('events')))
    intermediateArray.forEach(function(event) {
    if(event.upcoming() === true) {
      upcomingEvents.push(event) 
    }})
    return upcomingEvents
  }

  displayEvents() {
    var printThis = "Upcoming Events: <br>"
    var events = this.sortEventsByDate()
    events.forEach(function(event) {
      printThis += "<br> Event Description: " + event.listing + " <br> Date: " + event.dateFormat() + "<br>";
    })
    return printThis  
  }

  sortEventsByDate() {
    let array = this.getUpcomingEvents()
    array.sort(function (date1, date2) {
      return date1.date - date2.date
    })
    return array
  }  

  inflateEventsArray(jsonObject) {
    let objectArray = []
    jsonObject.forEach(function(event) {
      var eventObject = new EventListing(event.listing, event.date) 
      objectArray.push(eventObject)
    })
    return objectArray
  }

 }
