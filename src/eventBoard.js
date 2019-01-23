var date_sort_asc = function (date1, date2) {
  date1 = date1.date
  date2 = date2.date
  if (date1 > date2) return 1;
  if (date1 < date2) return -1;
  return 0;
};

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
    var events = this.sortEventsByDate()
    events.forEach(function(event) {
      printThis += "<br> Event Description: " + event.listing + " <br> Date: " + event.dateFormat() + "<br>";
    })
    return printThis  
  }

  sortEventsByDate() {
    let array = this.getUpcomingEvents()
    array.sort(date_sort_asc);
    return array
  }  

 }
