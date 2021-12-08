function max() {
  if (arguments.length == 0) {
    return null;
  }
  if(arguments[0]===''){
    return 'Big Error'
  }
  let maxed = 0n;
  try {
    for (let i in arguments) {
      if (typeof arguments[i] !== "bigint") {
        arguments[i] = BigInt(arguments[i]);
      }
      if (arguments[i] > maxed) {
        maxed = arguments[i];
      }
      if (arguments[i] > Number.MAX_SAFE_INTEGER) {
        return error
      }
    }
  } catch (error) {
    return "Big Error";
  }
  return maxed;
}

console.log(max(1n, 10n, 5n));
console.log(max("10", 5n, 1));
console.log(max());
console.log(max(2 ** 53 - 1));
console.log(max(2 ** 53));
console.log(max("10" / 3));
console.log(max("10" / 2));
console.log(max(10 - 12, 10 - 10, 10 - 11));
console.log(max(0n));
console.log(max(""));
