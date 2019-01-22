describe("EventListing", () => {

  it("Looks to see if event has been made ", () => {
    let listing = new EventListing("Hello, this is Michael");
    expect(listing.getListing()).toBeIdenticalTo("Hello, this is Michael")
  })
});
