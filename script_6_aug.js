// practcie of for loop - pattern questions

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// smmhj nhi aaya

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// five stars in one row

// let row = "";
// for (i = 1; i <= 5; i++) {
//   row += "*";
// }
// console.log(row);

// for (let i = 1; i <= 5; i++) {
//   console.log("*");
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 5; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// triangle star pattern

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "*";
//   }

//   console.log(row);
// }

// reverse triangle star pattern

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (j = 1; j < i; j++) {
//     row += " ";
//   }
//   for (k = 1; k <= n - i + 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// pyramid Pattern

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// inverted pyramid

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j < i + 1; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= 2 * (n - i) + 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// Diamond Pyramid

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// Do loop ------

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// let i = 5;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);

// let i = 2;
// do {
//   console.log(i);
//   i += 2;
// } while (i <= 10);

// let i = 1;
// do {
//   console.log(i);
//   i += 2;
// } while (i <= 15);

// let i = 1;
// do {
//   console.log(i * i);
//   i++;
// } while (i <= 10);

// let i = 7;
// do {
//   console.log(i * 2);
//   i;
// } while (i <= 70);
