function checkTypeNumber(givennumber) {
  if (givennumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
