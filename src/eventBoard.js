class EventBoard {
  constructor() {
    this.events = []
  }

  getEvents() {
    return this.events
  }

  createListing(listingDescription, listingDate) {
   var newEvent = new EventListing(listingDescription, listingDate)
   this.getEvents().push(newEvent)
   return newEvent
  }

  getUpcomingEvents(){
    let upcomingEvents = []
    this.getEvents().forEach(function(event) {
      if(event.upcoming() === true) {
        upcomingEvents.push(event)
      } 
    })
    return upcomingEvents
  }

  DisplayEvents() {
    var printThis = "Upcoming Events: <br>"
    var events = this.getUpcomingEvents()
    events.forEach(function(event) {
      printThis += "<br> Event Description: " + event.listing + " <br> Date: " + event.dateFormat() + "<br>";
    })
    return printThis  
  }

  // sortEventByDate() {
  //   let array = this.getEvents()
  //   array.sort(function(a,b){
  //     // Turn your strings into dates, and then subtract them
  //     // to get a value that is either negative, positive, or zero.
  //     return new Date(b.date) - new Date(a.date);
  //   });
  //   return array
  // }

 }
