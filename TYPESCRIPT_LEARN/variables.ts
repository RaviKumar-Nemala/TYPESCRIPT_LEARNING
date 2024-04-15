let a : number = 10;

// a  = "hell"  error 

console.log( a );

let b : string  = "hell";
// b = 10; //cannot assign the number to the string
console.log( b );

/*TYPE INFERENCE 
TYPESCRIPT IS SMART ENOUGH TO UNDERSTAND TO THE TYPE OF THE VARIABLE 
BASED ON THE VALUE WE HAVE PROVIDED TO IT 
*/

//now the x is of type number  
let x  = 40;


let str  ="ddos";
console.log( str.toUpperCase());

function add_with_typecheck( a : number , b : number)
{
    return a +  b;
}

//any tells that do not do typecheck for that variable
function add ( a : any , b :any)
{
    return a + b;
}

console.log( add_with_typecheck( 1 , 2 ) );

//ERROR RAISED
// add_with_typecheck( 1 , "2" );

console.log( add( 1 , 2 ) );
//NO ERROR
console.log(add( 1 ,"2"));

