// Use any when you need maximum flexibility and are willing to sacrifice type safety.
// Use unknown when you want to enforce type checking and ensure safer type handling, 
// particularly for values of unknown types from external sources.


// any and unknown are both types in TypeScript that represent values of unknown types
function any_type ( user : any)
{
     //varaible of type any can be assigned to any other type variables

    //if these are not compatible then we get the error during the runtime 
     let temp : number = user ;
}

function unknown_type ( user: unknown)
{
    //unlinke any  we cannot assing the variable of type unknown to any other variable
    //we must have to norrw the type before assinging to the vairables

    //ERROR
    // let temp : number = user ;//error 

    if ( typeof user == 'number' )
    {
        let temp : number = user;
    }
    else if( typeof user == 'string')
    {
         let temp2 : string = user 
    }
    else if( Array.isArray(user) )
    {
        let temp3:any[] = user ;
    }
    
}

