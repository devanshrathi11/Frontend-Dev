// Q9: Shopping Cart System

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    applyCoupon(code) {
        let regex = /^(SAVE|DISC)(\d{2})$/;

        if (!regex.test(code)) {
            console.log("Invalid Coupon");
            return this.getTotal();
        }

        let percent = Number(code.match(/\d+/)[0]);
        let total = this.getTotal();
        let discount = total * (percent / 100);

        return total - discount;
    }
}

const cart = new Cart();
cart.addItem("Laptop Bag", 1500, 2);
cart.addItem("Mouse", 500, 1);

console.log("Total:", cart.getTotal());
console.log("Total after coupon:", cart.applyCoupon("SAVE20"));
