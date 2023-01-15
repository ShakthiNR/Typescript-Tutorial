//Union - Combine two types

const empSalary:number|string = 12121212;
//Don't use empSalary:any

//Assigning only specific values
let frontEnd :"react"|"angular"
frontEnd = "react";
console.log(frontEnd)



/* ------------------------------------------------------------------------ */

//Array - string[] or Array<string>

const userIds:number[] = [1,2,3]
console.log(userIds)

const marks:Array<number> = [1,2,3]
console.log(marks)


//Union in Arrays
const payment:(string|number)[] = [1,2,3,"Ten","Thousand"]
console.log(payment)


//ReadOnly Array: readonly number[] or ReadOnlyArray<number>
let usersAmount: readonly number[]



//Array Of Object (Refer 2a. file)
type User={
    userName:string,
    userEmail:string,
    isAdmin:boolean,
    address?:string,
}
const users:User[]=[{
    userName:"Shakthi",
    userEmail:"s@g.in",
    isAdmin:true
},{
    userName:"Sangar",
    userEmail:"s@g.com",
    isAdmin:false
}]

users.push({
    userName:"Abhikesh",
    userEmail:"a@g.com",
    isAdmin:false
})