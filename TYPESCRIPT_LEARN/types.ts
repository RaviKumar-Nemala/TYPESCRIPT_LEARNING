type Customer  ={
    id :  number,
     name : string ,
     salary : number 
}

function add_customer( customer : Customer ):Customer
{
    return customer 
}   

console.log( add_customer( { id : 1 , name :'ravi', salary : 666}));

//DECLARING THE READONLY PROPERTIES FOR THE TYPES


type USER_PROFILE = 
{
    id : number ,
    readonly role : string , 
}

let add_user_role = function ( user_profile : USER_PROFILE ) : USER_PROFILE
{
    //error
    // user_profile.role =  66

     return user_profile;
}

add_user_role ( { id : 1 , role : 'user'});

type PARENT_PROFILE = {
     readonly user_id : number , 
     readonly parent_id : number 
}


//MERGING THE MULTIPLE TYPES 
//NOW THE TOTAL DETAILS HAVING THE ALL THE TYPES OF BOTH USER_PROFILE AND PARENT_PROFILE
type TOTAL_DETAILS = USER_PROFILE & PARENT_PROFILE;

function  take_all ( total_details : TOTAL_DETAILS ):PARENT_PROFILE 
{
    return { user_id : total_details.user_id, parent_id : total_details.parent_id}
}

let user_profile : USER_PROFILE  = { id : 1 , role : 'admin'};
let parent_profile: PARENT_PROFILE = { user_id : user_profile.id, parent_id :  2 };
let obj =  { ...user_profile , ...parent_profile};

console.log( take_all ( obj ) );


//declaring the optional properties

type HELL = {
    name : string ,
    hell_admin?: boolean
}


let  DEF_VAL  = 
{
     hell_admin : false
}

//it is little bit trickier to set the default values for the types

function get_def_hell ( values: HELL ): HELL
{
     return { 
        ...DEF_VAL,
        ...values
     }
}
function enter_hell (  hell: HELL)
{
    // console.log( hell);
    return hell;
}

console.log( enter_hell( get_def_hell( {name : 'ravi'})));
console.log( enter_hell( get_def_hell( { name :'kumar' , hell_admin: true})))