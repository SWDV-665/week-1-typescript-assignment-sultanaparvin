//Sultana Parvin

class grocery{
    //Class properties
    name: string;
    quantity: number;
    price: number;

    //Constructor
    constructor(public Cname: string, public Cquantity: number, public Cprice: number){
        this.name = Cname;
        this.quantity = Cquantity;
        this.price = Cprice;
    }

    //Details method returns the details about this item
    details(){
        return '<b>'+this.name+'</b>  Quantity:'+ this.quantity + '  Price: $'+this.price + '<br>';
    }
}

//Creating 4objects from the gorcery class
let milk = new grocery("Milk",3,3);
let bread = new grocery("Bread",6,2.4);
let eggs = new grocery("Egg",12,3.2);
let cheese = new grocery("Cheese",2, 6.1);

//Add grocery objects to groceies array
let groceries = [milk,bread,eggs,cheese];

//Creates an empty string variable and loop through all groceries in the groceries array and 
//append them to a htmlOutput variable
let htmlOutput = '';
for(let i=0; i<groceries.length; i++){
    htmlOutput += groceries[i].details();
}
//Show the output by adding it to the page
document.body.innerHTML = htmlOutput;
