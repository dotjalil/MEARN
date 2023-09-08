class LOGAN {
    constructor(engine, doors, price) {
        this.engine = engine;
        this.doors = doors;
        this.price = price;
    }

    returnModelAnPrice() {
        return `LOGAN Car and price is ${this.price}`;
    }
}

class KIA
{
    constructor(engine,doors,price)
    {
        this.engine=engine;
        this.doors=doors;
        this.price=price;
    }

    returnModelAnPrice() {
        return `KIA Car and price is ${this.price}`;
    }

}

let kia = new KIA(1600,4,1000000);