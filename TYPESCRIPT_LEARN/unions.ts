//allows us the accept multiple types for the variables 
// A union type is a type formed from two or more other types, 
// representing values that may be any one of those types

function printId ( id : number | string )
{
    console.log ( id );
}

printId ( 1 );
printId( "1");
// printId (true)//error

function printId2 ( id : number | string ) : number| string
{
    //this is error because the below method only available in the string not in the number 
    // console.log ( id.toUppercase());

    //inorder to use methods that are not common to both the types we have to do it in the following way

    if( typeof id ==='string')
    {
        console.log( id.toUpperCase());
        return  id.toUpperCase();
    }
    else{
        console.log( id.toFixed(4));
        return id.toFixed(4);
    }
}

printId2( 1895.34);
printId2( "ravikumar")

//accepts any number of parameters and store them in the array 
function temp ( ...data : any[])
{
    console.log( data );
}

temp( 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 );
temp("1 hell")

//THIS SYNTAX TELLS THAT ALL ELEMENTS OF TYPE STRING 
//OR ALL ELEMENTS OF TYPE NUMBER
function accept( ...data : string [] | number [] )
{
     console.log( data );
}

//IF WE WANT TO STORE BOTH NUMBER AND STRING TYPE ELEMENTS WITH IN THE SAME ARRAY 
//WE CAN USE THIS SYNTAX
function accept2 (...data : ( string | number ) [])
{
    console.log( data );
}

accept( 1,2,3,4);
accept("1","3");
//accept( 1 , "2") ERROR

accept2( 1 ,2, 4, "five" , "six");