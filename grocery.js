//Sultana Parvin
var grocery = /** @class */ (function () {
    //Constructor
    function grocery(Cname, Cquantity, Cprice) {
        this.Cname = Cname;
        this.Cquantity = Cquantity;
        this.Cprice = Cprice;
        this.name = Cname;
        this.quantity = Cquantity;
        this.price = Cprice;
    }
    //Details method returns the details about this item
    grocery.prototype.details = function () {
        return '<b>' + this.name + '</b>  Quantity:' + this.quantity + '  Price: $' + this.price + '<br>';
    };
    return grocery;
}());
//Creating 4objects from the gorcery class
var milk = new grocery("Milk", 3, 3);
var bread = new grocery("Bread", 6, 2.4);
var eggs = new grocery("Egg", 12, 3.2);
var cheese = new grocery("Cheese", 2, 6.1);
//Add grocery objects to groceies array
var groceries = [milk, bread, eggs, cheese];
//Creates an empty string variable and loop through all groceries in the groceries array and 
//append them to a htmlOutput variable
var htmlOutput = '';
for (var i = 0; i < groceries.length; i++) {
    htmlOutput += groceries[i].details();
}
//Show the output by adding it to the page
document.body.innerHTML = htmlOutput;
