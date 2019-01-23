'use strict'

class EventListing {
  constructor(listing, date){
    this.listing = listing
    this.date = new Date(date)
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
