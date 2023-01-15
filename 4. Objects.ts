// Define Types - Using Type Aliasing/ Interface

type MyBike = {
    name:string,
    milage:number,
}

/* Using Interfaces
interface MyBike {
    name: string,
    milage: number,
}
*/

let myBike1:MyBike ={
    name:"Royal Enfield Meteor",
    milage:30,
}
let myBike2:MyBike ={
    name:"Royal Enfield ThunderBird",
    milage:30,
}

function printMyBikeName(bikeDetails:MyBike):void{
    console.log(bikeDetails.name)
}

printMyBikeName(myBike1)
printMyBikeName(myBike2)