class Car 
{
    constructor(doors , engine ,color)
    {
        this.doors=doors;
        this.engine=engine;
        this.color=color;
    }

    printCarDetails()
    {
        console.log(`Car color is ${this.color} and car engine is ${this.engine}`)
    }
}

class Tipo extends Car{
    constructor(doors,engine,color,wheels)
    {
        // this.doors=doors;
        // this.engine=engine;
        // this.color=color;
        super(doors,engine,color);
        this.wheels=wheels;
    }
}


let carOne= new Car(4,1600,"blue");
carOne.printCarDetails();