let moneyEarned = process.argv[2];

if(moneyEarned < 0){
    console.log("Enter an input greater than 0");
}
else {
    let checkings = .30;
    checkings *= moneyEarned; 
    console.log('Checkings fund: $' + checkings);

    let savings = .35;
    savings *= moneyEarned;
    console.log('Savings fund: $' + savings);

    let emergency = .20;
    emergency *= moneyEarned;
    console.log('Emergency fund: $' + emergency);

    let hobby = .15;
    hobby *= moneyEarned;
    console.log('Hobby fund: $' + hobby);
}