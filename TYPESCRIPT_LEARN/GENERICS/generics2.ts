
export let log = ( ...data : any[]):void  => console.log( ...data );

function get_len<T>( ...arr : T[] ): number
{
     return arr.length;
}

log ( get_len ( 1, 2,3) );
// log( get_len ( 1 , "2" , 3 ))//error all are of one type

log ( get_len ( "ravi" , "kumar" )) 


//here we are telling that this function can take elemens of  the type T or type E 
//arr contains elements of type T and elements of type E
function get_len2 < T , E > ( ...arr : ( T | E )[] ) : number 
{
    console.log( arr);
    return arr.length;
}

log( get_len2( 1,2,3)) //this works but if we have multiple types of elements then this syntax does not work
//error
// log( get_len2( 1,"2",3)) in this case we must tell the types  

log( get_len2<number , string>( 1,"2",3));

