
var submitEvent = document.querySelector(".Submitevent")

submitEvent.onclick = () => {
  var listingDescription = document.querySelector(".listing_description").value 
  console.log(new EventListing(listingDescription))

}