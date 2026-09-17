

let cars = 
[
    {
        name: "Toyota",
        model: "Corolla",
        year: 2020,
        price: 10000,

        fullValastivosti: function()
        {
            console.log(`Name: ${this.name}, Model: ${this.model}, Year: ${this.year}, Price: ${this.price}`);
        }
    },
    {
        name: "Honda",
        model: "Civic",
        year: 2020,
        price: 10000,

        fullValastivosti: function()
        {
            console.log(`Name: ${this.name}, Model: ${this.model}, Year: ${this.year}, Price: ${this.price}`);
        }
    },
    {
        name: "Nissan",
        model: "Altima",
        year: 2020,
        price: 10000,

        fullValastivosti: function()
        {
            console.log(`Name: ${this.name}, Model: ${this.model}, Year: ${this.year}, Price: ${this.price}`);
        }
    }
]

for(let i = 0; i < cars.length; i++)
{
    cars[i].fullValastivosti();
}

function searchCar(carName)
{
    if(typeof carName !== "string")
    {
        console.error("Эта функция нуждается в строке, а не в " + typeof carName);
        return;
    }


    const car = cars.find(car => car.name === carName);

    if(car !== undefined)
    {
        console.log("Машина " + carName + " найдена в базе данных под индексом " + cars.indexOf(car));
        return car;
    }
    else
    {
        console.log("Машина " + carName + " не найдена в базе данных");
        return;
    }

}

searchCar("Honda");
searchCar("Toyota");
searchCar("Nissan");