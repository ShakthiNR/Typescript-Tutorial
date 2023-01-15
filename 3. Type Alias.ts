//Type Alias - Create own types using predefined types
//Should be starts with capital letter (Not Compulsory)

type MyNumber = number //Created new MyNumber type using number type
let age:MyNumber =12;

type MyString = string
let userName:MyString = "Shakthi"


type ID = number | string; //Created new Type using Union


type UserDetails = {
    readonly _id:number //Readonly : Can't Modified(Only Read Access)
    userName:string,
    age:number,
    userAddress?:string, //Optional
    isWorking:boolean
}


let userDetails:UserDetails = {
    _id:101, 
    userName:"sdsd",
    age:12,
    isWorking:true
}
userDetails._id = 1212+12 //Error, _id is Readonly