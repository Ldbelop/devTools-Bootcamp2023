const createPhoneNumber = (number) => {
    const array = checkValidityOfArray(number);
    if(array != false){
        array.splice(0,0,'(')
        array.splice(4,0,')', ' ')
        array.splice(9,0,'-')
        array.forEach(element => {
            element.toString()
        })
        array.join("")
        return array.join("")
    } else{
        return false
    }
}

const checkValidityOfArray = (number) => {
    let newArray = number.toString().split("")
    let helperArray = newArray.map(element => {
        return parseInt(element);
    });
    newArray = helperArray;
    if(newArray.length == 10){
        const checkedArray = newArray.filter(number => {
            return number >= 0
        });
        if(checkedArray.length == newArray.length){
            return newArray
        } else{
            console.log("los números no son positivos")
            return false
        }
    }
}

const createPhoneNumberWithArray = (array) => {
    console.log(array.length)
    if(array.length == 10){
        let isThereNegative = false;
        array.forEach(number => {
            if(number < 0){
                console.log(number)
                isThereNegative = true;
            }
        })
        if(isThereNegative == false){
            array.splice(0,0,'(')
            array.splice(4,0,')', ' ')
            array.splice(9,0,'-')
            array.forEach(element => {
                element.toString()
            })
            array.join("")
            return array.join("")
        } else{
            return "Algún número no es positivo, revisa de nuevo"
        }   
    }
}

console.log(createPhoneNumber(3195055058))
console.log(createPhoneNumberWithArray([3,1,9,5,0,5,5,0,5,8]))