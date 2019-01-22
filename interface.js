
var submitEvent = document.querySelector(".Submitevent")

submitEvent.onclick = () => {
  var listingDescription = document.querySelector(".listing_description").value 
  var listingDate = document.querySelector(".listing_date").value
  console.log(new EventListing(listingDescription, listingDate))

}