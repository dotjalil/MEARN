class Tiers {
    constructor(tierType) {
       this.tierType=tierType;
    }
}

class Engine {
    constructor() {

    }
}

class Car {
    constructor() {
        this.engine = new Engine();
        this.tiers = new Tiers();
    }
}