let log = ( ...data : any[] ) => {
     console.log ( ...data );
}

//narrowing refers to the process of refining the type of variable or
// the expression using  ( if blocks or switch statements)

function padLeft( val:  number | string , input : string): string
{
     if ( typeof val === 'string')
     {
        return val + input
     }
     else 
     {
        return " ".repeat(val) + input;
     }
}

log ( padLeft ( 3 , "hello"));
log ( padLeft ( "hell" , "hello"));



function printVal( val : string | string [] | null )
{
    //imp thing typeof null = object 
    if( typeof val === 'object')
    {
        //this does not work since ( if user pass null it is also type of object and we cannot iterate over null)
       
        // for ( let char of val )
        // {

        // }
    }
    else if ( typeof val === 'string')
    {
        console.log( val );
    }

}

function printValOptimal ( val : string | string [] | null )
{
    // == null means it cheks if the values is null or undefined
    if ( val == null )
    {
         return;
    }
    else if ( typeof val == 'object')
    {
        for( let ch of val )
        {
            console.log( ch);
        }
    }
    else 
    {
        console.log( val );
    }
}

function printValOptimal2 ( val : string | string [] | null | undefined )
{
    if ( val  && typeof val == 'object')
    {
        for ( let ch of val )
        {
            console.log( ch );
        }
    }
    else if ( typeof val == 'string')
    {
        console.log( val );
    }
}
printValOptimal( ['hello','ravi']);
printValOptimal('one')

printValOptimal2( ['hello','ravi']);

printValOptimal2(undefined)//nothing will be printed
printValOptimal2( null )


export function  logValue( val : Date | string )
{
     if ( val instanceof Date )
    {
        // console.log( val.toString());
        console.log( 'param is a date instance ')
        //even we explictly tells the typescript is a instance of Date  still we can hold the string values in it.
        //this issue can be solved using the "is" and "as" keywords
        val = val.toString();
        console.log( val );
        
    }
    else 
    {
        console.log( val );
    }
}
let d = new Date();
logValue( d );

interface User{
    name : string ,
    email : string
}
interface Admin extends User
{
     isAdmin : boolean
}

function get_privilages( obj : Admin| User):string
{
    if ( "isAdmin" in obj )
    {
        return "ADMIN PRIVILEGES";
    }
    else    
        return "USER PRIVILEGES";
}

log(get_privilages ( { name : "Ravi" , email : "ravi@gmail.com",isAdmin: true}));
log(get_privilages ( { name : "Ravi" , email : "ravi@gmail.com"}));
