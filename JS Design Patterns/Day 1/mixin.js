class Swimmer {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    returnSwimmerName() {
        console.log(this.name);
    }
    returnSwimmerCountry() {
        console.log(this.country);
    }
}

let swim = {
    setSwimProperties(speed, direction) {
        this.speed = speed;
        this.direction = direction;
    },

    getSwimPropties() {
        console.log(`Swimmer Name is ${this.name} and Swimming ${this.speed}`);
    }
}

Object.assign(Swimmer.prototype ,swim);

let swimmerOne = new Swimmer('Abanoub','Egypt');
swimmerOne.setSwimProperties(120,'up');
swimmerOne.getSwimPropties();