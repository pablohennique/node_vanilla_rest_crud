const a = "8 8 2 4 8";
let arr = a.split(" ").map(Number);
const N = arr.length;

console.log(arr);

function getMajorityElement(arr, N) {
  for (let x = 0; x <= 100; x++) {
    let count = 0;
    arr.forEach(function (num) {
      if (num === x) {
        count++;
      }
    });
    // console.log(`for number ${x}, count is: ${count}`);
    if (count > N / 2) {
      return x;
    }
  }
  return -1;
}

console.log(getMajorityElement(arr, N));
