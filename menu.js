// begin with a blank/new order
var numOrders = 0;
var meal = [];
var sauces = [];
var i = 0;
var j = 0;


// build a function to ask questions

function question() {
  // your code goes here
    numOrders = prompt("How many entrees are you ordering?");
    while (i < numOrders) {
        meal[i] = prompt("Would you like nuggets or a chicken sandwich?");
        sauces[i] = prompt("What kind(s) of sauces would you like on the side?");
        i++;
    }
}

// call the QUESTION function with the order options
question();

// output their order
while (j < numOrders) {
    document.write("<p>You ordered a " + meal[j] + " with " + sauces[j] + " on the side. <p>");
    j++;
}
