describe('Event Listing', function() {

  let event = new EventListing
  
  it('has an instance - event', function() {
    instanceOf(event, EventListing)
  });

  it("Looks to see if event has been made ", () => {
    let listing = new EventListing("Hello, this is Michael", "2019/01/22");
    expectToEqual(listing.getListing(), "Hello, this is Michael")
  })

  // it("Has a date property", () => {
  //   let listing = new EventListing("Hello, this is Adam", "2019/01/22")
  //   expectToEqual(listing.returnDate(), "Tue Jan 22 2019 00:00:00 GMT+0000 (Greenwich Mean Time)")
  // })
  
  it("Can return false if event has already happened", function() {
    let listing = new EventListing("Hello, this is Adam", "2019/01/22")
    expectToEqual(listing.upcoming(), false)
  })

});
