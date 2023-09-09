class Bird {
    eat() {
        console.log("I Can Eat")
    }
}

class FlyableBird extends Bird
{
    fly() {
        console.log("I can Fly");
    }
}

class Eagle extends FlyableBird {

}

class Duck extends Bird {

}