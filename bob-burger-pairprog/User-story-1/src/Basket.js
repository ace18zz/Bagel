class Basket {


    // let basketItem = [];

    constructor() {
        this.basketItems = [];
    }

    addItem(item) {

        // is a string
        if (typeof item === 'string' && item.trim().length > 0) {
            this.basketItems.push(item);
        }

    }

}

//important

module.exports = Basket;