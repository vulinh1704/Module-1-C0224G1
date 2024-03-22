let store = new ProductManager([], "Vinmart");

function add() {
    let id = document.getElementById("id").value;
    // name, price, image;
    let newProduct = new Product(id, name, price, image);
    store.add(newProduct);
}

function showAll() {

}c