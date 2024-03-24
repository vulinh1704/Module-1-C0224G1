class ProductManager {
    list;

    constructor() {
        this.list = JSON.parse(localStorage.getItem("list")); //
    }

    findAll() {
        return this.list;
    }

    add(newProduct) {
        this.list.push(newProduct);
        localStorage.setItem("list", JSON.stringify(this.list));
    }


    remove(id) {
        let index = this.findIndexById(id);
        this.list.splice(index, 1);
        localStorage.setItem("list", JSON.stringify(this.list));
    }

    findIndexById(id) {
        for (let i = 0; i < this.list.length; i++) {
            if(id === this.list[i].id) {
                return i;
            }
        }
        return -1;
    }

    findProductById(id) {
        let index = this.findIndexById(id);
        let product = this.list[index];
        return product;
    }

    update(id, newProduct) { // sửa sản phẩm nào, thay bằng sản phẩm nào
        let index = this.findIndexById(id);
        this.list[index] = newProduct;
        localStorage.setItem("list", JSON.stringify(this.list));
    }
}