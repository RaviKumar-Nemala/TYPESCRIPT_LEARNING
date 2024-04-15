//in type_alias the  syntax we use the  = sign..
//for interface we don't use that = sign

interface user {
    name : string, 
    password: string,
    google_id? :string | number,
    f1  : ()=>string,
    display(name:string ):string,
    role : "user" | "normaluser"
}

//f1 and f2 both are valid way to declare the function 

let ravi : user = { name  : 'ravi' , password : 'pass', google_id : '1' , f1 : ()=>{return 'f1 function'} ,
display: (  name :'hello')=>{ return 'hello'} ,
role  : "user" }
//at display function we can use  any name for value should be of type string
//at role if we use any other role then the expected then we get the error

function f1 ( name : string)
{
    console.log( name );
}
f1 ( 'hell');

console.log( ravi );

//INORDER TO ADD THE NEW FILEDS TO  USE THIS SYNTAX
//now this interface has the all the properties of the user in the above interface
//and also contains the new_filed 
interface user 
{
    new_filed? : string
}
let new_user : user  = { ...ravi , new_filed : 'newfiled'}
console.log(new_user)

