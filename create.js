var photoCards = document.getElementsByClassName("photo-card")
var firstPhotoCard = photoCards[0]

var userSuppliedContent = "<img src=x onerror='alert(\"Uh Oh!!!\")' />"
// firstPhotoCard.innerHTML = "<p>" + userSuppliedContent + "</p>"
firstPhotoCard.textContent = "<p>" + userSuppliedContent + "</p>"

function insertNewPhotoCard(url, caption) {
  var photoCardSection = document.createElement("section")
  photoCardSection.classList.add("photo-card")
  photoCardSection.classList.add("another-class")
  photoCardSection.classList.toggle("another-class")
  photoCardSection.classList.toggle("another-class")

  var imgContainerDiv = document.createElement("div")
  imgContainerDiv.classList.add("img-container")
  photoCardSection.appendChild(imgContainerDiv)

  var img = document.createElement("img")
  img.classList.add("person-photo-img")
  img.src = url
  imgContainerDiv.appendChild(img)

  var captionDiv = document.createElement("div")
  captionDiv.classList.add("caption")
  captionDiv.textContent = caption
  photoCardSection.appendChild(captionDiv)

  var container = document.getElementById("photo-card-container")
  container.appendChild(photoCardSection)
}

insertNewPhotoCard("https://picsum.photos/400", "Luke as a random thing from Lorem Picsum")
insertNewPhotoCard("https://picsum.photos/400", "Luke as a random thing from Lorem Picsum")
insertNewPhotoCard("https://picsum.photos/400", "Luke as a random thing from Lorem Picsum")
