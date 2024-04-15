//used when the functon never return anything 
//used when function always returns the exception


function f1 (): never{
     throw new Error ( 'error ');
}
try{
console.log( f1 ());
}
catch ( err )
{
    console.log ( 'catche block')   
}


// used for the type narrowing 

type roles = "user"|"admin";

function check_role ( roles:roles )
{
     if ( roles == 'user')
     {
        console.log( 'user role');
     }
     else if ( roles == 'admin')
     {
        console.log( 'admin role');
     }
     else 
     {
        //we have to first check all the posibilities of the roles . if any of the conditon does not matches
        //then variable will be of never type

        //when we add new role then during the compile time we get the error
        //so this never type allows us to explicitly check of all types
        //if any of the type is not checked and try to assing that unchecked value to the never type we get the error at compile time
         let _temp:never = roles;
         console.log( 'no role');
     }
}