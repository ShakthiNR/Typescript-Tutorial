//Typescript = Type Safety + Just Development Tool + Wrapper above JS

/* Primitives */
let name: string = "Shakthi"
let age: number = 10;
let height: number = 5.3;
let isWorking: boolean = true

let text: any = "sdd" //Not Safe(Vulnarable) 

/*Functions*/
/*
1. Make Strict
2. Parameter, Return Type, Local Variables -> Have Types
*/

    function userCheck(name:string, pin:number, isPaid:boolean):boolean {
        if (name === "shakthi" && pin === 123){
            return true
        }
        return false
    }
    const isAllowed = userCheck("shakthi", 123, true)

//Handle Error with never return type

        const handleError = ():never =>{
            throw new Error('Something Error Occured!!!')
        }

        [1,23,4].map((el:number):void=>{
            console.log(el)
        })


export { }