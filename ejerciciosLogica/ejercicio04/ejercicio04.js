const fizzBuzz = (number) => {
    counter = 1;
    while(counter <= number){
        if(counter % 3 == 0){
            if(counter % 3 == 0 && counter % 5 == 0){
                console.log('FizzBuzz')
            } else{
                console.log("Fizz")
            }
        } else if(counter % 5 == 0){
            if(counter % 3 == 0 && counter % 5 == 0){
                console.log('FizzBuzz')
            } else{
                console.log("Buzz")
            }
        } else{
            console.log(counter)
        }
        counter++;
    }
}

fizzBuzz(20)