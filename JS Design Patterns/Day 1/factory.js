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

class KIA {
    constructor(engine, doors, price) {
        this.engine = engine;
        this.doors = doors;
        this.price = price;
    }

    returnModelAnPrice() {
        return `KIA Car and price is ${this.price}`;
    }

}

class CarFactory {
    constructor(carType) {
        this.carType = carType;
    }

    returnCarDetails() {
        switch (this.carType) {
            case 'LOAGN':
                return new LOGAN(1600, 4, 200000);
            case 'KIA':
                return new KIA(1600, 4, 500000);
            default:
                console.log('Invalid car name')
        }
    }
}

//let kia = new KIA(1600, 4, 1000000);

let KiaCar = new CarFactory("KIA");
let kIADetails= KiaCar.returnCarDetails();
console.log(kIADetails.returnModelAnPrice());