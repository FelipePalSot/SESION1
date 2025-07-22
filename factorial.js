// ... N! = N*(N-1)*(N-2)*...*2*1

let numero = 6;

console.log("Factorial " + numero);

console.log("=" + getFactorial(numero));

function getFactorial(base) {
  console.log("" + base + "*");
  if (base > 1) {
    return base * getFactorial(base - 1);
  } else {
    return base;
  }
}
