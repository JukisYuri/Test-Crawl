const title = document.querySelectorAll(".title-head")[0].innerText.trim()
const priceElement = document.querySelectorAll(".special-price")[0].innerText.trim()
const priceWithoutUnit = priceElement.substring(0, priceElement.length - 1)
const priceWithoutDot = priceWithoutUnit.replace(/\./g, '');
const author = document.querySelectorAll(".book-info-detail span")[1].innerText.trim()
const publisher = document.querySelectorAll(".book-info-detail span")[3].innerText.trim()
const size = document.querySelectorAll(".book-info-detail span")[7].innerText.trim()
const pageNumber = document.querySelectorAll(".book-info-detail span")[9].innerText.trim()
const yearRelease = document.querySelectorAll(".book-info-detail span")[11].innerText.trim()

const result = title + " | " + priceWithoutDot + " | " + author + " | " + publisher + " | " + size + " | " + pageNumber + " | " + yearRelease

console.log(result)