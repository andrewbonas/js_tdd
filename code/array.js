const array = (array) => {
  let min = (Math.min(...array));
  let max =(Math.max(...array));
  let length = (array.length);
  const average = array => array.reduce((p,c) => p + c, 0 ) / array.length;
  return arrayAnalyze = {
    min: min,
    max: max,
    length: length,
    average: average(array),
  }
}

module.exports = array;
