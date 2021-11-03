const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
        else return false;
    }
  }
  
  const transpose = function(matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
      newMatrix.push([]);
    }
    for (let j = 0; j < newMatrix.length; j++) {
      for (let k = 0; k < matrix.length; k++) {
        newMatrix[j].push(matrix[k][j]);
      }
    }
    return newMatrix;  
  };


module.exports = wordSearch;