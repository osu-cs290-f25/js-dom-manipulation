console.log("== document:", document)
console.log("== document.body:", document.body)

var bodyChildren = document.body.children
console.log("== bodyChildren:", bodyChildren)

var firstChild = bodyChildren[0]
console.log("== firstChild:", firstChild)
console.log("== firstChild.parentNode:", firstChild.parentNode)
console.log("== firstChild.nextSibling:", firstChild.nextSibling)

var images = document.getElementsByTagName("img")
console.log("== images:", images)

var photoCards = document.getElementsByClassName("photo-card")
console.log("== photoCards:", photoCards)

var container = document.getElementById("photo-card-container")
console.log("== container:", container)

var rightNavItem = document.querySelector(".navitem.right")
console.log("== rightNavItem:", rightNavItem)

var allNavItems = document.querySelectorAll(".navitem")
console.log("== allNavItems:", allNavItems)

console.log("== photoCards[0].textContent:", photoCards[0].textContent)
console.log("== photoCards[0].innerHTML:", photoCards[0].innerHTML)
console.log("== photoCards[0].outerHTML:", photoCards[0].outerHTML)

console.log("== images[0].src:", images[0].src)
images[0].src = "https://picsum.photos/400"
