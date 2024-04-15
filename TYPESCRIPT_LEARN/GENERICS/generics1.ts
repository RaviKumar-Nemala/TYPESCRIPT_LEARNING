
let log = ( ...data:any[])=> console.log( data);

//here T can be of any type
//accepts the type T and returns the only type T
function get<T>( val : T ) : T {
    return val ;
}
//in  the above code in place of T we can use any name but it is convention to use T 


log ( get<string>( "ravi" ) , get<number >( 2 ) );
//since we are having one type we can also use this syntax
log( get( "ddos") )//based on the type of the arguments it decides the type to return 

//in generics we can also pass the custom types

type user= 
{
     name: string,
     id : number 
}

log( get<user>( { name : 'kumar' , id : 1 }));

