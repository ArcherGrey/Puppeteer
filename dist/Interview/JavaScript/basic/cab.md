# call apply bind 

名称|参数|特点|
:-:|:-:|:-:|:-:|
call|thisArg,arg1,arg2...（如果不传递第一个参数默认为全局对象，严格模式下为undefined）|参数是列表形式
apply|thisArg,[argsArray]（第一个参数和call情况一样）|参数是数组
bind|thisArg,arg1,arg2...|创建绑定函数


## 使用场景

数组最大最小值：
```
/* 找出数组中最大/小的数字 */
var numbers = [5, 6, 2, 3, 7];

/* 应用(apply) Math.min/Math.max 内置函数完成 */
var max = Math.max.apply(null, numbers); /* 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..) */
var min = Math.min.apply(null, numbers);
```

注：过长的数组不可直接使用，有越界风险，可以将数组分块求最小

---

实现属性继承：
```
function Father(name, age) {
  this.name = name;
  this.age = age;
}

function Son(name, age, sex) {
  Father.call(this, name, age);
  this.sex = 'male';
}
```

---


## 实现

`bind`:
```
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
          return fToBind.apply(this instanceof fBound
                 ? this
                 : oThis,
                 // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    // 维护原型关系
    if (this.prototype) {
      // 当执行Function.prototype.bind()时, this为Function.prototype 
      // this.prototype(即Function.prototype.prototype)为undefined
      fNOP.prototype = this.prototype; 
    }
    // 下行的代码使fBound.prototype是fNOP的实例,因此
    // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
    fBound.prototype = new fNOP();

    return fBound;
  };
}
```

---

`call`:
```
Function.prototype.call = function(ctx){
    // 非严格模式下
    // 如果第一个参数为null或者undefined，则指向全局对象
    // ---
    // 严格模式下
    // 如果是null则this为null，如果是undefined则this为undefined
    let context = ctx||window; 
    context.fn = this; // 待执行函数

    // 参数是类数组对象没有slice方法
    // 需要先转换成数组
    let args = [...arguments].slice(1); 
    context.fn(...args);
    delete context.fn;
}
```

---

`apply`:
```
Function.prototype.apply = function(ctx){
    // 非严格模式下
    // 如果第一个参数为null或者undefined，则指向全局对象
    // ---
    // 严格模式下
    // 如果是null则this为null，如果是undefined则this为undefined
    let context = ctx||window; 
    context.fn = this; // 待执行函数

    let args = [...arguments][1]; 
    if(args)
        context.fn(...args);
    else
        context.fn();
    delete context.fn;
}
```