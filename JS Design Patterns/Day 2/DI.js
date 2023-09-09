class Tiers {
    constructor(tierType) {
       this.tierType=tierType;
    }
}

class Engine {
    constructor(engineType) {
      this.engineType=engineType;
    }
}

class Car {
    constructor(engine,tiers) {
        this.engine =engine; //new Engine();
        this.tiers = tiers;//new Tiers();
    }
}
let engine=new Engine("Gas");
let tiers= new Tiers("China")
let car = new Car(engine,tiers);