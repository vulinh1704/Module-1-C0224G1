class ProductManager {
    list;
    nameStore;

    constructor(list, nameStore) {
        this.list = list;
        this.nameStore = nameStore;
    }

    add(newProduct) {
        this.list.push(newProduct);
    }

    findAll() {
        return this.list;
    }

    edit(id, newProduct) {

    }

    remove(id) {

    }
}