'use strict';
//============================= Object.setPrototypeOf=========================

//let protObj = function(){
//    this.value = 5;
//};
//
//protObj.prototype.getValue = function(){
//    return this.value;
//}
//
//let o1 = new protObj();
//let o2 = {value: 10};
////console.log(o1.getValue());
////console.log(o2.getValue());
//
//Object.setPrototypeOf(o2, protObj.prototype);
//console.log(o2.getValue());
//
//protObj.prototype.square = function(){
//    return this.value? this.value*this.value : 'Value not found';
//}
//
////console.log(o1.square());
////console.log(o2.square());
//
// 
//
//protObj.prototype.mult = function(){
//    var num = prompt("введите число");
//    return this.value? num*this.value : 'Value not found';
//}
//console.log(o1.mult());
//console.log(o2.mult());


//====================================ARRAYS=================================

//Array.from (input, map)

//let p = Array.from(document.getElementsByTagName('p'), (elem, i) => {
//    elem.innerHTML = i;
//    return elem;
//});
//console.log(p);

//new Array vs Array.of
//undefined, 1, 3, -1

//let arr1 = [42, 24];
//let arr2 = new Array(-1);
//let arr3 = Array.of(-1);
//
//console.log(arr3);

//Array.fill

//console.log([1,2,3].fill(0,2));

//Array.find
//
//console.log([1,2,3,4,5].find(item => item > 2));
//
//
////Array.findIndex
//
//console.log([1,2,3,4,5].findIndex(item => item > 2));


//==============================Binary and octal literals

//console.log(parseInt('101', 2));
//console.log(0b101);
//
//console.log(parseInt('100', 8));
//console.log(0o100);

//console.log(isNaN('NaN'));
//console.log(isNaN('str'));

//
//console.log(Number.isNaN('123'));
//console.log(Number.isNaN('Infinity'));
//console.log(Number.isNaN('str'));
//console.log(Number.isNaN('NaN'));
//console.log(Number.isNaN('one'/'two'));




let num = [5,23,1,0,91,-56,-4,33,9,2,222]

//let sorted = arr.sort(function(a,b){
//   return a - b; 
//});
//
//console.log(sorted);
//
//let sorted2 = arr.sort((a,b) => b - a );
//
//console.log(sorted2);
function sortFunction(desc){
    console.log(this);
    let arr = this.slice();
    let newArr = [];
    let arrLength = arr.length;
    for(var i = 0; i<arrLength; i++){
        let a = desc ? Math.max.apply(null,arr) : Math.min.apply(null,arr);
        newArr.push(a);
        let ind = arr.indexOf(a);
        arr.splice(ind,1);
    } 
    return newArr;
}

//console.log(sortFunction(num, false));
//console.log(sortFunction(num, true));


Array.prototype.sort = sortFunction;
console.log(num.sort(true));








































