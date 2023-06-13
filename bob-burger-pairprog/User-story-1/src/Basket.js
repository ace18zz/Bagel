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

    removeItem(item) {
        if (this.basketItems.includes(item)) {
            let indexItem = this.basketItems.indexOf(item)
            this.basketItems.splice(indexItem, 1)

            return this.basketItems

        } else {                                        // item doesn't exist in basket 
            return 'Sorry, this one does not exist in basket'
        }

    }

}

//important

module.exports = Basket;