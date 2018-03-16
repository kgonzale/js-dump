let userInput = process.argv[2];

const fizzBuzz = (userInput) => {
    
    if(userInput % 3 == 0){
        console.log("fizz");
    }
    else if(userInput % 5 == 0){
        console.log("buzz");
    }
    else if(userInput % 3 == 0 && userInput % 5 == 0){
        console.log("fizz buzz");
    }
}

fizzBuzz(userInput);
