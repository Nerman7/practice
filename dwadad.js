class Car {
    numberOfDoors(numberOfDoors) {
        this.numberOfDoors = numberOfDoors;
    };
    fuelQuantity(fuelQuant) {
        this.fuelQuant = fuelQuant;
    }

    getNumOfDoors() {
        return this.numberOfDoors;
    };
    getFuelQuantity() {
        return this.fuelQuant;
    }
    
}

class Volvo extends Car {
    speedLimit;
    constructor(speedLimit){
        super()
        this.speedLimit = speedLimit;
    }
}

class Mercedes extends Car {
    color = 'red';
    constructor(color){
        super();
        this.color = color;
        
    }
    
}

let volvo = new Volvo(154);
volvo.numberOfDoors(4);
volvo.fuelQuantity('15l');;
console.log(volvo)

var mercedes = new Mercedes('white');
//mercedes.color = 3;

//mercedes.numberOfDoors(6);
//console.log(mercedes)

var automobil = new Mercedes();


