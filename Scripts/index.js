let bagItems 
let whishlistItem
onLoad()
function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

    let whishlistItemstr = localStorage.getItem('whishlistItem');
    whishlistItem = whishlistItemstr ? JSON.parse(whishlistItemstr) : [];

    displayItemsOnHomePage();
    displayBagIcon();
    displaywhishlistIcon();
  }
  function index(){
    location.assign('shop.html');
  }
function addToBag(itemId){
    bagItems.push(itemId)
    console.log(bagItems);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon()
}
function addTowhishlist(itemId){
    whishlistItem.push(itemId)
    console.log(whishlistItem);
    localStorage.setItem('whishlistItem', JSON.stringify(whishlistItem));
    displaywhishlistIcon()
}
function displayBagIcon(){
    let itemCount = document.querySelector('.bag-items-count')
    if(bagItems.length > 0){
        itemCount.style.visibility = 'visible';
        itemCount.innerHTML = bagItems.length;
    }else{
        itemCount.style.visibility = 'hidden';
    }
}
function displaywhishlistIcon(){
    let itemCount = document.querySelector('.bag-items-count1')
    if(whishlistItem.length > 0){
        itemCount.style.visibility = 'visible';
        itemCount.innerHTML = whishlistItem.length;
    }else{
        itemCount.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage(){
let itemsContainer = document.querySelector('.items_container');
if (!itemsContainer) {
    return
}
let innerHTML = ``
items.forEach(item => {
    innerHTML += `<div class="item_container">
    <img src="${item.image}" class="item_image" alt="item image">
    <div class="rating">
        ${item.rating.stars}⭐|${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price"><s>${item.original_price}</s></span>
        <span class="discount">${item.discount_percentage}% OFF</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to bag </button>
    <button class="btn-add-bag" onclick="addTowhishlist(${item.id})">Add To Whishlist 🤍</button>
    </div>`
});
itemsContainer.innerHTML = innerHTML;
}

