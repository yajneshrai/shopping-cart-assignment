import HttpRequest from './http';

class Product {
    
    name;
    imageURL;
    description;
    price;
    stock;
    category;
    sku;
    id;

    constructor(name, imageURL, description, price, stock, category, sku, id) {
        this.name = name;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.sku = sku;
        this.id = id;
    }
}

class Category {
    name;
    key;
    description;
    enabled;
    order;
    imageUrl;
    id;

    constructor(name, key, description, enabled, order, imageUrl, id) {
        this.name = name;
        this.key = key;
        this.description = description;
        this.enabled = enabled;
        this.order = order;
        this.imageUrl = imageUrl;
        this.id = id;
    }

}