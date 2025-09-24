// 以下代码，alert 出来的值是多少？
alert(1 && 2);


// 以下代码，alert 出来的值是多少？
// window.val = 1;
// var json = {
//   val: 10,
//   dbl: function () {
//     this.val *= 2;
//   }
// };
// json.dbl();
// var dbl = json.dbl;
// dbl();
// json.dbl.call(window);
// alert(window.val + json.val);


// 以下代码，alert 出来的值是多少？
// (function () {
//   var val = 1;
//   var json = {
//     val: 10,
//     dbl: function () {
//       val *= 2;
//     }
//   };
//   json.dbl();
//   alert(json.val + val);
// }());


// 以下代码，alert 出来的值是多少？
// function C1(name) {
//   if (name) this.name = name;
// }
// function C2(name) {
//   this.name = name;
// }
// function C3(name) {
//   this.name = name || 'John';
// }
// C1.prototype.name = 'Tom';
// C2.prototype.name = 'Tom';
// C3.prototype.name = 'Tom';
// alert((new C1().name) + (new C2().name) + (new C3().name));


// 以下代码，alert 出来的值是多少？
// var test = (function (i) {
//   return function () {
//     alert(i * 2);
//   }
// }(2));
// test(5);