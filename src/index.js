
exports.min = function min (array) {
  return Math.min (...array);
}

exports.max = function max (array) {
  return Math.max (...array);
}

exports.avg = function avg (array) {
  for (let i=0; i<array.length; i++){
    total +=array[i];
  }
  return avg=total/array.length;
}
