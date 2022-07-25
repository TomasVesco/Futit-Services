const matrix = [[1,0,0],[0,1,0],[0,0,1]];
function matrixDiagonal(matrix){
    for(let i = 0; i < matrix.length ;i++){
        for(let j = 0; j < matrix.length ;j++){
            if(i != j && matrix[i][j] != 0){
                return false;
            }
        }
        return true;
    }
}
console.log(matrixDiagonal(matrix));