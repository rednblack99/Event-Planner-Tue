'use strict'

class EventListing {
  constructor(listing, date, time){
    this.listing = listing
    this.date = date
    this.time = time
  };

  getListing(){
    return this.listing
  }

  returnDate(){
    return this.date
  }

  returnTime(){
    return this.time
  }
  
  timeStamp(){
    return this.returnDate.getDate()  + "-" + (this.returnDate.getMonth()+1) + "-" + this.returnDate.getFullYear() + " " +
  this.returnDate.getHours() + ":" + this.returnDate.getMinutes();
  }

};
