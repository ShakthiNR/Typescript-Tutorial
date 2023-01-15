
/* Primitives Data Types : 
Number, String, Boolean
let variableName:type = value
*/
//Explict Type
let userName: string = "Shakthi"
let age: number = 10;
let height: number = 5.3;
let isWorking: boolean = true

let text: any = "sdd" //Not Safe(Vulnarable) - don't check type


//Implicit Type
let userName1 = "Shakthi" // Automatically assume userName is String



/*Functions*/
/*
1. Make Strict
2. Parameter, Return Type, Local Variables -> Have Types
3. In Arguments we don't declare type
*/

    function userCheck(userName:string, pin:number, isPaid:boolean):boolean {
        if (userName === "shakthi" && pin === 123){
            return true
        }
        return false
    }
    let isAllowed:boolean 
    isAllowed= userCheck("shakthi", 123, true)

//Handle Error with never return type

        const handleError = ():never =>{
            throw new Error('Something Error Occured!!!')
        }//never - not reach end curely brace (ie) terminate the execution

        [1,23,4].map((el:number):void=>{
            console.log(el)
        })
        //void - reach end curely brace
    

export { } 