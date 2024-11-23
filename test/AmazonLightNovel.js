const title = document.querySelectorAll("#productTitle")[0].innerText.trim()
const author = document.querySelector(".author.notFaded a").innerText.trim();
const kindlePriceElement = document.querySelectorAll(".slot-price")[0].innerText.trim();
const formattedKindlePriceByUSD = kindlePriceElement ? kindlePriceElement.substring(1) + " USD"  : "Kindle Price not found"
const paperbackPriceElement = document.querySelectorAll(".slot-price")[1]
const formattedPaperbackPriceByUSD = paperbackPriceElement ? paperbackPriceElement.innerText.substring(1) + " USD" : "Paperback Price not found";
const descriptionElement = document.querySelector(".a-expander-content.a-expander-partial-collapse-content");
const asin = document.querySelectorAll("#detailBulletsWrapper_feature_div .a-list-item span")[1].innerText.trim();
const publisherElement = document.querySelectorAll("#detailBullets_feature_div .a-list-item span")[3].innerText.trim();
const publisher = publisherElement ? publisherElement.substring(0, publisherElement.indexOf("(")) : "Publisher not found"
const publicationDate = document.querySelectorAll("#detailBullets_feature_div .a-list-item span")[5].innerText.trim();

const obj = {
    "bookInfo" : {
        "title": title,
        "author": author,
        "kindlePrice": formattedKindlePriceByUSD,
        "paperbackPrice": formattedPaperbackPriceByUSD,
        "description": descriptionElement,
        "ASIN": asin,
        "publisher": publisher,
        "publisherDate": publicationDate
    }
}

const result = JSON.stringify(obj, null, 3)
console.log(result)