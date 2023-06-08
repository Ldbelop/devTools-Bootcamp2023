const countNameRepetitions = (names) => {
    namesObject = {};
    names.forEach(element => {
        if(namesObject[`${element}`] != undefined){
            namesObject[`${element}`] += '*';
        } else{
            namesObject[`${element}`] = '*';
        }
    });
    console.log(namesObject)
}

countNameRepetitions(['array','de','ejemplo','ejemplo','eco','eco'])