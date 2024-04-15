/* THIS IS THE INVALID SYNTAX
function add_numbers ({num1 : number , num2 : string} )
{
    return num1 + num2;
}
*/

function add_numbers ( obj : { num1 : number , num2 : number }): number{
    return obj.num1 + obj.num2 ;
}

console.log(add_numbers( { num1 : 1 , num2 : 2 }));


type ADDITION  = {
    num1 : number ,
    num2 : number 
}
function add( addition : ADDITION ):number
{
    return addition.num1 + addition.num2 ;
}

console.log(add( { num1 : 1 , num2: 2 }));

//DECLARING THE RETURN TYPE AS THE OBJECT 

function get_num ( a : string , b : string ): ADDITION{
    return {
        num1 : parseInt(a),
        num2 : parseInt( b )
    }
}

console.log( get_num( '1' , '2'));