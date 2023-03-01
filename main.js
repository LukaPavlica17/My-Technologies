let addItemButton = document.getElementById('addItem');
let removeItemsButton = document.getElementById('removeAllItems');
let container = document.getElementById('itemsGrid');
let inputField = document.getElementById('inputText');

addItemButton.addEventListener('click', function(){
    const newItemValue = inputField.value;

    if(newItemValue !=='') {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerText = newItemValue;
        container.appendChild(item);

        inputField.value = '';
    }
});

removeItemsButton.addEventListener('click', function() {
while (container.firstChild){
    container.removeChild(container.firstChild);
}
})
