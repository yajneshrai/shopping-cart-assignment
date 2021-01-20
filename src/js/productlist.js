import HttpRequest from './http';
import RenderTemplateData from './render';
import ProductListTemplate from '../view/partials/_product_categories.hbs';

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

class ProductListPage {
    categories = [];
    products = [];

    constructor() {
        this.fetchCategories();  
        this.fetchProducts();
    }

    fetchCategories() {
        const request = new HttpRequest('GET', 'categories', null);

        request.invoke()
        .then(data => {
            this.categories = data;
            console.log(this.categories)
            //RenderTemplateData('sidebar-list', ProductListTemplate, this.categories);
        }).catch( err => {
            console.error(err);
        });
    }

    fetchProducts() {
        const request = new HttpRequest('GET', 'products', null);

        request.invoke().then(
            data => this.products = data
        ).catch( err =>
            console.error(err)
        );
    }
}

const pl = new ProductListPage();