'use strict'

class EventListing {
  constructor(listing, date, time=''){
    this.listing = listing
    this.date = new Date(date)
    this.time = time
  };

  getListing(){
    return this.listing
  }

  returnDate(){
    return this.date
  }

  dateFormat(){
    return this.date.toLocaleString('en-GB', { timeZone: 'UTC' });
  }

  upcoming(){
    let currentDate = new Date();
    return this.date > currentDate ? true : false
  }

};
