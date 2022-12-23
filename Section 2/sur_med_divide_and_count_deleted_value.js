let originalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbersOne = [3, 4, 5, 7, 9];
let numbersTwo = [1, 2, 3, 5, 9];

function result(originalData, numbersOne, numbersTwo) {
  const mergeData = [...numbersOne, ...numbersTwo];
  const deletedData = originalData.filter((element) => !mergeData.includes(element));
  return mergeData.reduce((a, b) => a + b, 0) / deletedData.reduce((a, b) => a + b, 0);
}

console.log(result(originalData, numbersOne, numbersTwo));
