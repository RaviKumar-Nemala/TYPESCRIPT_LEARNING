//as keywords is used for the type casting 


let a: any = "123";

//we are telling the typescript tret this value as the string 
let b :string = ( a as string ).toLocaleLowerCase();

let len :number = ( a as string).length;

function is_date_type( d : any ) : d is Date
{
    return  ( d as Date) !== undefined
}

function  logValue( val : Date | string )
{
     if ( is_date_type(val) )
    {
        // console.log( val.toString());
        console.log( 'param is a date instance ')
        //even we explictly tells the typescript is a instance of Date  still we can hold the string values in it.
        //this issue can be solved using the "is" and "as" keywords
        val = val.toString();// still we can assing the string to the date but if we hover it now it is of type  date
        console.log( val );
    }
    else 
    {
        console.log( val.toUpperCase() );
    }
}

logValue( new Date() );


interface Bird
{
     fly : ()=>void;
}

interface Fish 
{
     swim : ()=>void 
}

//val is Fish tells that if the function returns true then narrow the type of value to the Fish 
//if it returns false then consider the value of type ( Bird in this case )
function is_fish ( val : Bird| Fish ): val is Fish
{
     return ( val  as Fish).swim !== undefined;
}

function init ( val : Bird | Fish) 
{
     if ( is_fish ( val ) )
     {
         val.swim();//here type of val is narrowed down to only fish not bird
        
        //  val.fly() //cannot invoke because we narrowed the type to the fist
     }
     else 
     {
        val.fly();
     }
}