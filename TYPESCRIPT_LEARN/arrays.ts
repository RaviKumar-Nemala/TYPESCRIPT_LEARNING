// let arr = [] ;
// arr.push( 'hell');//ERROR ARGUMENT OF TYPE STRING STRING CANNOTBE ASSSINGED TO TYPE NEVER



//declaring the array in typescript ;
let myarr : number [] = [1 , 2, 3 , 4 ];

console.log( myarr);

//declaring the arry of string 

let mystr : string [] = [ "h" , "e" , "l" , "l"];


//second way to declaring the arry
let myarr2 : Array<number> =[];
let mystr2 : Array<string> =[];

//declaring the multidimensionaly array 
let mul_arr : number [] [] = [ ] ;

mul_arr.push([ 0 ,1]);
mul_arr.push( [2,3]);
console.log( mul_arr);

//declaring the readonly array
const names :ReadonlyArray<string> = [ "a", "b", "c"];

// names [ 0 ] = "x"//ERROR 


//declaring the userdefined array
type user = 
{
    readonly name  :  string ,
    readonly password: string,
}

const all_users : user[] = [];

 function store_user ( user : user ):  user 
{
    all_users.push( user);
     return user ;
}

console.log( store_user ( { name : 'ravi' , password :'pass'}));