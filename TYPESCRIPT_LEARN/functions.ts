function add_num ( a : number , b : number ): number 
{ 
        return a +b;
}

//specifying the default values for the functions 
function add_user ( name : string  , password : string  , nickname : string = 'def_nick_name')
{
    console.log ( " name = " + name + " password = " + password + " nickname = " + nickname);
}

function add_num_ret_type ( a : number , b : number ) : number 
{
    return a +  b;
}
add_user ('ravi' , 'kumar' );
add_user ('ravi' ,'kumar' , 'ddos');

console.log(add_num_ret_type(  1 ,2 ) );