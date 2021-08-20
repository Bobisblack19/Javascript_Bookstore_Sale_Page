class book {
    constructor(title, author, ISBN, numCopies){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    get availability() {
        if (this.numCopies == 0) {
            return "Out of Stock :*( " + this.numCopies + " left";
        }
        else if (this.numCopies < 0) {
            return "Out Of Stock! You have been added to the waitlist!"
        }
        else if (this.numCopies <= 10) {
            return "Low Stock! :| " + this.numCopies + " left";
        }
        else {
            return "In Stock! :D " + this.numCopies + " left";
        }
    }
    sell(numSold) {
        this.numCopies = this.numCopies - numSold;
        return this.numCopies
    }
    restock(newCopies) {
        if (newCopies == 0) {
            newCopies == 5;
        }
        this.numCopies = this.numCopies + newCopies;
        return this.numCopies
    }
}

const textbook = new book("\"Maths: It's Fun, Yo (1st Edition)\"", "Pearl Patches", 1243569098, 30);

document.getElementById("title").innerHTML = textbook.title;
document.getElementById("author").innerHTML = textbook.author;
var total = document.getElementById("purchase")

const button = document.querySelector("button");
const output = document.querySelector(".output");

function sell(n) {
    return textbook.sell(n);
}

button.addEventListener("click",function(){
    const sales = document.querySelectorAll("input");
    let out = sales[0].value
    sell(out);
    total.innerHTML = textbook.availability;
})

function shipment() {
    let announcement = output.innerHTML="Shipments Arrived"
    return textbook.restock(10), announcement;
    
}

var myVar = setInterval(shipment, 10000);
