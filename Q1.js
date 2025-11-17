// Q1: E-Commerce Product Manager

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Shoes", 999, "Fashion"),
    new Product(3, "Smartwatch", 2500, "Accessories"),
    new Product(4, "Phone", 19999, "Electronics")
];

const expensive = products.filter(p => p.price > 1000);
console.log("Products with price > 1000:");
expensive.forEach(p => console.log(p.getDetails()));
