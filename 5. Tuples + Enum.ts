//Specific Format Check (ie) check its position nd its types

let customer:[number,string,boolean]

customer = [1,"ABC",true] //1st-number , 2nd- string, 3rd- boolean
//customer = ["1","ABC","XYZ"] -> Error

//Using Type
/* 
type Customer = [numbtrueer,string,boolean]
let customer:Customer =  [1,"ABC",true] 
*/


//Enums
const enum Direction {
    up = 8,
    right,
    down,
    left
}
console.log(Direction.down) // default is 2, if up=8 then down=10 

//Give Own Values
const enum Confirmation {
    yes = "CONFIRMED",
    no = "REJECTED"
}

console.log(Confirmation.yes) //print CONFIRMED