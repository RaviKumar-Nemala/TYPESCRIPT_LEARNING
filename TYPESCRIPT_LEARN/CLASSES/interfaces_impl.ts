interface Car
{
     name :string,
     drive():void
}

class CarImpl implements Car
{
     constructor ( public name : string )
     {
        this.name = name
     }
     drive ():void 
     {
        console.log( 'driving the car');
     }
}

//since interface holds the implementation class object 
let car:Car = new CarImpl('mycar');

car.drive();