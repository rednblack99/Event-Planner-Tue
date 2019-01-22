class EventBoard {
  constructor() {
    this.events = []
  }

  getEvents() {
    return this.events
  }

  createListing(listingDescription, listingDate, listingTime) {
   var newEvent = new EventListing(listingDescription, listingDate, listingTime)
   this.getEvents().push(newEvent)
   return newEvent
  }
 }