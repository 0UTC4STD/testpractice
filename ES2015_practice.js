class MyFirstVehicle{
    constructor (year,make,model){
    this.year=year;
    this.make=make;
    this.model=model;
}
honk(){
    return 'Beep!';
}
toString(){
    'My first vehicle was a ${this.year} ${this.make} ${this.model}.';
     }
}

class Car extends MyFirstVehicle{
    constructor(year,make,model){
        super(year,make,model)
        this.wheels = 4;
    }
}
class Motorcycle extends MyFirstVehicle{
    constructor(year,make,model){
        super(year,make,model)
        this.wheels = 2;
    }
    revEngine(){
        return 'Vroom!'
    }
}

class Garage {
    constructor(capacity){
        this.vehicles=[];
        this.capacity=capacity;
    }
    add(newVehicle){
        if(!(newVehicle instanceof MyFirstVehicle)){
            return 'Only vehicles are allowed in here!'
        }
        if (this.vehicles.length>this.capacity){
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle);
            return 'Vehicle added!';
    }
}