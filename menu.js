// begin with a blank/new order
var order = [];

var entrees = ["None", "8 Chicken Nuggets","Chicken Sandwich","Chicken Salad", "Chicken Caesar Wrap" ];
var sides  = ["None", "Regular Fries","Fruit Salad", "Chips" ];
var drinks = ["None", "Chocolate Shake", "Strawberry Shake", "Vanilla Shake", "Soda", "Lemonade"];

// build a function to ask questions

function question(foodArray) {

  var orderPrompt = "Please type a number corresponding to your choice: \n";
  var answerPrompt = "notanumber";

  for(i=0;i<foodArray.length;i++){
    orderPrompt += i + " - " + foodArray[i] + "\n";
  }

  while(isNaN(answerPrompt)){
    answerPrompt = prompt(orderPrompt);
  }

 if(answerPrompt != 0){
   order.push(foodArray[answerPrompt]);
  }
}

question(entrees);
question(sides);
question(drinks);

// output their order
document.write("<h2>You order:"+"</h2>");
for(j=0;j<order.length;j++){
  document.write("<p>" +order[j] + "</p>");
}
