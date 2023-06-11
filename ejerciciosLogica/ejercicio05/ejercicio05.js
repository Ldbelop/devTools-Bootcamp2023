const DrawX = (matrixSize) => {
    if(matrixSize > 2){
        let matrix = [];
        let counter = 0;
        for(let i = 0; i <= matrixSize-1;i++){
            matrix[i] = [];
        }

        matrix.forEach(drawLine => {
            for(let i = 0; i <= matrixSize-1;i++){
                drawLine[i] = ' ';
            }
        })

        matrix.forEach(drawLine => {
            drawLine[counter] = '*'
            if(counter <= matrixSize-1){
                counter++;
            }
        })

        counter--

        matrix.forEach(drawLine => {
            drawLine[counter] = '*'
            if(counter >= 0){
                counter--;
            }
        })

        matrix.forEach(drawLine => {
            drawLine = drawLine.join("");
            console.log(drawLine)
        })
    } else{
        console.log("Para dibujar una X, el número debe ser mayor a 2 :(")
    }
}

DrawX(3)