describe('Event Listing', function() {

  let event = new EventListing
  
  it('has an instance - event', function() {
    instanceOf(event, EventListing)
  });

  it("Looks to see if event has been made ", () => {
    let listing = new EventListing("Hello, this is Michael", "2019/01/22");
    expectToEqual(listing.getListing(), "Hello, this is Michael")
  })
  
  it("Can return false if event has already happened", function() {
    let listing = new EventListing("Hello, this is Adam", "2019/01/22")
    expectToEqual(listing.upcoming(), false)
  })

});
