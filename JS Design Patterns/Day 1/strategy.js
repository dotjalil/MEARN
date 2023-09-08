class UPS {
    calcualteShipmentPakage(shipmentPackage) {
        //calcualtions
        return '50$'
    }
}

class FEDEX {
    calcualteShipmentPakage(shipmentPackage) {
        //calcualtions
        return '70$'
    }
}

class Shipping
{
    setStrategy(company)
    {
        this.company=company;
    }
    calcualteShipmentPakage(shipmentPakage)
    {
        return this.company.calcualteShipmentPakage(shipmentPakage);
    }

}

var shipmentPackage= {
    "from":"Assiut",
    "to":"Menofya",
    "weight":"3kg"
}

var ups = new UPS();
var fedex= new FEDEX();

var shipping= new Shipping();
// shipping.setStrategy(ups);
shipping.setStrategy(fedex);

console.log(shipping.calcualteShipmentPakage(shipmentPackage));