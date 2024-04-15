abstract class Loan
{
    intrest_rate : number  = 10;
    max_amount  : number = 100000;
    
    abstract calculate_intrest(years:number):number;

    //this is error  because either we must declare the method as abstract or provide the implemenation
    // calculate_intrest(years:number);

    //providing the some other method 
    f1 ()
    {
        console.log( 'from the abstract class f1 method')
    }
}

class FixedLoan extends Loan 
{
    readonly extra_amount:number = 100;

    constructor()
    {
        super()//incase if we have any parameters taken and also pass to the abstract class then 
        //super method is manditory
    }
    calculate_intrest(years: number): number {
        return this.intrest_rate * years + this.extra_amount;
    }

    f1()
    {
        console.log('from the implementation class f1 method')
    }
}

let loan : Loan = new FixedLoan();

loan.f1();
console.log( loan.calculate_intrest(2))
//error cannot create the object for the abstract class
// let loan_2:Loan = new Loan();