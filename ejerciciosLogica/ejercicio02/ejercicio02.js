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
        debugger
        return parseInt(element);
    });
    newArray = helperArray;
    if(newArray.length == 10){
        console.log("im In")
        const checkedArray = newArray.filter(number => {
            return number >= 0
        });
        console.log(checkedArray, newArray)
        if(checkedArray.length == newArray.length){
            return newArray
        } else{
            console.log("los números no son positivos")
            return false
        }
    }
}

console.log(createPhoneNumber(3195055058))