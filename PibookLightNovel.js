const typeBookElement = document.querySelectorAll(".breadcrumb a")[2].innerText;
const titleBookElement = document.querySelectorAll(".product-detail-wrap__main h1")[0].innerText
const productPriceElement = document.querySelectorAll(".product-price")[0].innerText
const publishElement = document.querySelectorAll(".col-6 a")[0].innerText
const publisherElement = document.querySelectorAll(".col-6 a")[2].innerText
const descriptionBookElement = document.querySelectorAll(".product-col-detail.p-2")[0].innerText
// Có thể viết thành table.table (để rút gọn phần tử hơn so với table.table.table.w-100.table-borderless.mt-4
// table.table.table.w-100.table-borderless.mt-4 -> table(.table ...)
const ageRestrictElement = document.querySelector("table.table.table.w-100.table-borderless.mt-4 tbody tr:nth-child(2) td:nth-child(2)");
const ageRestrictText = ageRestrictElement.textContent.trim();
const ageRestrict = ageRestrictText.substring(0,2) + "+"

const obj = {
    "bookInformation": {
        "Type:": typeBookElement,
        "title": titleBookElement,
        "price": productPriceElement,
        "publish": publishElement,
        "publisher": publisherElement,
        "description": descriptionBookElement,
        "age": ageRestrict,
    }
}

const result = JSON.stringify(obj, null, 3)
console.log(result)