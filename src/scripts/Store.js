class Store {
  constructor() {
    this.observers = [];
    this.products = [];
    this.categories = new Set();
  }

  subscribe(observerFunction) {
    this.observers.push(observerFunction)
  }

  notifyObervers() {
    this.observers.forEach(observer => observer());
  }

  getProducts() {
    return this.products;
  }

  setProducts(newProducts) {
    this.products = newProducts;
    this.updateCategories(newProducts);
    this.notifyObervers();
  }

  getCategories() {
    return this.categories;
  }

  updateCategories(products) {
    this.categories.clear();

    products.forEach(product => {
      if (product.categories) {
        product.categories.forEach((categories) => {
          this.categories.add(category)
        })
      }
    })
    this.notifyObervers();
  }
}

export const store = new Store();
