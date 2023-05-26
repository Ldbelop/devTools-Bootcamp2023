function next_pal(){
    let number = document.getElementById("numberInput").value;
    let numberBefore = number;
    number++;
    while(true){
        number = number.toString().split("")
        let numberReversed = [];
        number.map(number => {
            numberReversed.unshift(number)
        })
        number = number.join("")
        numberReversed =numberReversed.join("")
        if(number == numberReversed){
            break
        } else{
            number++;
        }
    }
    document.getElementById("numberBefore").innerHTML = "";
    document.getElementById("numberAfter").innerHTML = "";
    document.getElementById("numberBefore").append(numberBefore.toString());
    document.getElementById("numberAfter").append(number.toString())
}