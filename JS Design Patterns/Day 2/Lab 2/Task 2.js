/*
2-Assume the following part of shipment module 

When a shipper wants to place a shipment he will choose shipment will be ship using Playground or Air and the customer gives you some requirements that he may add overseas in the future.
Each shipment has pickup date , delivery date , commodities , ship from and ship to.

Implement the previous part using SOLID principle
Assume any missing data.
*/

class Shipment {
  constructor(pickupDate, deliveryDate, commodities, shipFrom, shipTo) {
    this.pickupDate = pickupDate;
    this.deliveryDate = deliveryDate;
    this.commodities = commodities;
    this.shipFrom = shipFrom;
    this.shipTo = shipTo;
  }
}

class PlaygroundShipment extends Shipment {
  constructor(pickupDate, deliveryDate, commodities, shipFrom, shipTo) {
    super(pickupDate, deliveryDate, commodities, shipFrom, shipTo);
    this.shippingMethod = "Playground Shipping";
  }
}

class AirShipment extends Shipment {
  constructor(pickupDate, deliveryDate, commodities, shipFrom, shipTo) {
    super(pickupDate, deliveryDate, commodities, shipFrom, shipTo);
    this.shippingMethod = "Air Shipping";
  }
}

class OverseasShipment extends Shipment {
  constructor(pickupDate, deliveryDate, commodities, shipFrom, shipTo) {
    super(pickupDate, deliveryDate, commodities, shipFrom, shipTo);
    this.shippingMethod = "Overseas Shipping";
  }
}

// Test Cases
const ship1 = new PlaygroundShipment(
  "20/9/2023",
  "12/11/2013",
  ["Bluetooth Speaker", "Airpods"],
  "Bejing, China",
  "Cairo, Egypt"
);

const ship2 = new AirShipment(
  "25/9/2023",
  "12/10/2013",
  ["14' Samsung Monitor"],
  "Bejing, China",
  "Cairo, Egypt"
);

const ship3 = new AirShipment(
  "12/9/2023",
  "12/10/2013",
  ["Samsung A51 Phone", "Soundcore Headphones"],
  "Bejing, China",
  "Cairo, Egypt"
);

const ship4 = new OverseasShipment(
  "1/1/2024",
  "12/2/2024",
  ["Samsung A51 Phone", "Soundcore Headphones"],
  "Bejing, China",
  "Cairo, Egypt"
);

console.log(ship1, ship2, ship3, ship4);

// Another implementation by the instructor
/*
class Shipment {
  constructor(description, options) {
    this.description = description;

    this.options = options;
  }

  pickUpDate(pickDate) {
    this.pickDate = pickDate;

    return this;
  }

  commodities(comm) {
    this.comm = comm;

    return this;
  }

  deliveryDate(delivDate) {
    this.delivDate = delivDate;

    return this;
  }

  shipFrom(shipperFrom) {
    this.shipperFrom = shipperFrom;

    return this;
  }

  shipTo(shippedTo) {
    this.shippedTo = shippedTo;

    return this;
  }

  print() {
    console.log(`${this.description} + ${JSON.stringify(this.options)}`);
  }

  ship() {
    return this;
  }
}

const shipment1 = new Shipment()

  .commodities("Some Commidities")

  .shipTo("Kareem")

  .shipFrom("Ahmed")

  .pickUpDate("5/5/2023")

  .deliveryDate("15/11/2023")

  .ship();

class PlaygroundShipment extends Shipment {
  constructor(description, options) {
    super(description, options);
  }
}

class AirShimpent extends Shipment {
  constructor(description, options, flightA) {
    super(description, options);

    this.flightA = flightA;
  }

  flight() {
    console.log(this.flightA);
  }
}

new PlaygroundShipment(
  `Playground shipment => gift for birthday`,

  shipment1
).print();

new AirShimpent(
  `Air shipment => Work Shipments`,

  shipment1,

  "A-85 VIP"
).flight();
*/
