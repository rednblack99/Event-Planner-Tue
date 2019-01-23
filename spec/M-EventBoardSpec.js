describe('Event Board', function() {

  let eventBoard = new EventBoard
  
  it('has an instance - event', function() {
    instanceOf(eventBoard, EventBoard)
  });

  it("Creates a listing", function() {
    eventBoard.createListing(1,2,3);
    expectToEqual(eventBoard.getEvents().length, 1)
  })

  it("Can prepare the events to be printed", function() {
    let eventBoard2 = new EventBoard
    eventBoard2.createListing("Description", "1/1/2020")
    expectToEqual(eventBoard2.DisplayEvents(), "Upcoming Events: <br><br> Event Description: Description <br> Date: 01/01/2020, 00:00:00<br>")
  }) 

});
