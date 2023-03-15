console.log('1');
async function fun1() {
  console.log('2');
  await fun2();
  console.log('3');
}
async function fun2() {
  console.log('4');
}

process.nextTick(function () {
  console.log('5');
});

setTimeout(function () {
  console.log('6');
  process.nextTick(function () {
    console.log('7');
  });
  new Promise(function (resolve) {
    console.log('8');
    resolve();
  }).then(function () {
    console.log('9');
  });
});

fun1();

new Promise(function (resolve) {
  console.log('10');
  resolve();
}).then(function () {
  console.log('11');
});
console.log('12');

// 1 2  4 10 12  3  9 5 6 7

// 答案是我的回答
// 1
// 2
// 4
// 10
// 12
// 5
// 3
// 11
// 6
// 8
// 7
// 9