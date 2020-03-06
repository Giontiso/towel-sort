
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (typeof matrix == "undefined" || matrix == []) return [];

  let matrixNew = [];

  for(let i = 0; i < matrix.length; i++) {

    if( i % 2 == 0) {
      for(let j = 0; j < matrix[i].length; j++) {
        matrixNew.push(matrix[i][j]);
      }
    } else if ( i % 2 == 1) {
        let reversMatrx = matrix[i].reverse();
          for(let k = 0; k < reversMatrx.length; k++) {
            matrixNew.push(reversMatrx[k]);
      }
    }
  }

  return matrixNew;
}
