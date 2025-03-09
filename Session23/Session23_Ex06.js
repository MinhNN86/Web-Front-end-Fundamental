let arr = ["", false, 0, 5, 10, "Hello world!"];
//[ "", false, 0, undefined, null ]
// [NaN, "test", 4]
// ["JavaScript", 0, null, true, 7, " "]
let result = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i]) {
    result.push(arr[i]);
  }
}
alert(result);
