//export keyword used because this user class is defined in another file
export class User{

    protected id:number  = 1 ;
    
    //error becuase filed name is matching the method name
    // get id ()
    // {
    //     return this.id
    // }

    get Id():number
    {
        return this.id;
    }
    // set Id( value : number ) 
    // {
    //     this.id = value;
    // }
}

class Extended_User extends User
{
    public  access_protected ()
     {
         this.id = 113;//modifying the protected variable  because it is child class
        console.log( this.id);
     }
}

let user = new User();

console.log( user.Id);

//cannot able to modify the data of the protected variables from outside 
// user.id = 113;

//protected variables can be accessed from the child classes not from the outside

let ch = new Extended_User();
ch.access_protected();