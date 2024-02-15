let whishlistItemsObject
onLoad();

function onLoad() {
  loadwhishlistItemObjects();
  displayWhishlistItems();
  
}

function loadwhishlistItemObjects() {
    console.log(whishlistItem);
    whishlistItemsObject = whishlistItem.map(itemId => {
      for (let i = 0; i < items.length; i++) {
        if (itemId == items[i].id) {
          return items[i];
        }
      }
    });
    console.log(whishlistItemsObject);
  }

  function displayWhishlistItems() {
    let containerElement = document.querySelector('.whishlist_container');
    let innerHTML = '';
    whishlistItemsObject.forEach(whishlistItem => {
      innerHTML += generateItem(whishlistItem);
    });
    containerElement.innerHTML = innerHTML;
  }


  function removeFromwhishlist(itemId) {
    whishlistItem = whishlistItem.filter(whishlistItemId => whishlistItemId != itemId);
    localStorage.setItem('whishlistItem', JSON.stringify(whishlistItem));
    loadwhishlistItemObjects();
    displaywhishlistIcon();
    displayWhishlistItems();
  }

function generateItem(item){
return `
    <div>
    <img src="${item.image}" alt="">
    <div class="prod_name">${item.item_name}</div>
    <div class="prod_price">Rs.${item.current_price}</div>
    <div class="buttons">
    <div class="btn-movetobag" onclick="addToBag(${item.id})">Move to Bag</div>
    <div class="btn-movetobag1" onclick="removeFromwhishlist(${item.id})">Remove</div>
    </div>
    </div>
`
}