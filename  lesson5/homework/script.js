let products = 
[
    {
        name: "iPhone 12",
        price: 999,
        category: "Electronics",
        inStock: true,

        showInfo: function() 
        {
            console.log(`Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`);
        }
    },
    {
        name: "Bread Maker",
        price: 59,
        category: "Home",
        inStock: true,

        showInfo: function() 
        {
            console.log(`Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`);
        }
    },
    {
        name: "Running Shoes",
        price: 120,
        category: "Sportswear",
        inStock: false,

        showInfo: function() 
        {
            console.log(`Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`);
        }
    },
    {
        name: "LED TV",
        price: 499,
        category: "Electronics",
        inStock: true,

        showInfo: function() 
        {
            console.log(`Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`);
        }
    }


];

products[0].showInfo();

console.log(products[1].name + products[1].price);

console.log(products[2].category);

console.log(products[3].inStock);

console.log(products);

// OR

for (let i = 0; i < products.length; i++)
{
    products[i].showInfo();
}