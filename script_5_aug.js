// for loop practcie

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// loop ke andar condition

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 === 0) {
//     break;
//   }
//   console.log(i + " is even");
// }

// nested loop (loop ke andar loop)

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(`i = ${i}, j = ${j}`);
    i = 3;
  }
}

// i = 1;
// j = 1;
// i = 2;
// j = 1;
// i = 2;
// j = 2;
// i = 3;
// j = 1;
// i = 3;
// j = 2;
// i = 3;
// j = 3;

// infinite loop

// for (;;) {
//   console.log("this will run forever");
// }

// loop ke sath break

// for (i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }

//   console.log(i);
// }

// loop ke sath continue : current iteration skip krta

// for (i = 1; i <= 5; i++) {
//   if (i === 4) {
//     continue;
//   }
//   console.log(i);
// }

// pratcie

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 5; i > 1; i--) {
//   console.log(i);
// }

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);

// for (i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i, "my name is puja");
// }

// let sum = 0;

// for (let num = 1; num <= 10; num++) {
//   sum = sum + num;
// }

// console.log("Total: " + sum);

// let u = 1;

// for (let i = 5; i > 1; i--) {
//   u = u * i;
// }

// console.log("total: " + u);

// let i = 6;

// while (i <= 60) {
//   console.log(i);
//   i += 6;
// }

// for (let i = 6; i <= 60; i += 6) {
//   console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// /---------

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }

//   console.log(row);
// }

// let count = 0;

// for (i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     count++;
//   }
// }
// console.log("count:", count);

// let i = 1;

// while (i <= 4) {
//   console.log(i);
//   i++;
// }
