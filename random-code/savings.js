let moneyEarned = process.argv[2];

if(moneyEarned < 0){
    console.log("Enter an input greater than 0");
}

let sixtyPercent = .60;
sixtyPercent *= moneyEarned; 
console.log('This amount goes into your checkings: $' + sixtyPercent);

let fortyPercent = .40;
fortyPercent *= moneyEarned;
console.log('This amount goes into your savings: $' + fortyPercent);