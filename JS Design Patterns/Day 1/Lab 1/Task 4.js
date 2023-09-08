class Defense {
  defense() {
    return 90;
  }
  attack() {
    return 10;
  }
}

class Attack {
  defense() {
    return 10;
  }
  attack() {
    return 90;
  }
}

class Medium {
  defense() {
    return 50;
  }
  attack() {
    return 50;
  }
}

class Match {
  constructor(strategy) {
    if (!strategy) {
      this.strategy = new Medium();
    } else {
      this.strategy = strategy;
    }
  }
  setMatchStrategy(strategy) {
    this.strategy = strategy;
  }
  printMatchStrategy() {
    console.log(
      `You're following a ${this.strategy.attack()}/${this.strategy.defense()} attack/defense strategy!`
    );
  }
}

// initiate strategies
var attack = new Attack();
var defense = new Defense();
var medium = new Medium();

// default
var newMatch1 = new Match();
newMatch1.printMatchStrategy();

// change to attack strategy
newMatch1.setMatchStrategy(attack);
newMatch1.printMatchStrategy();

// change to defense strategy
newMatch1.setMatchStrategy(defense);
newMatch1.printMatchStrategy();
