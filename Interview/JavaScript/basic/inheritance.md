# 继承

## 原型链继承

```
function SuperType(){
    this.property=true;
}
SuperType.prototype.showValue=function(){
    console.log(this.property);
}
function SubType(val){
    this.sub=val;
}
// 子类原型指向父类实例
SubType.prototype=new SuperType();
SubType.prototype.showSub=function(){
    console.log(this.sub);
}
```

问题：
- 引用类型属性被所有实例共享
- 创建子类的实例时，不能像超类构造函数中传递参数

## 借用构造函数

```
function Parent () {
    this.names = ['kevin', 'daisy'];
}

function Child () {
    Parent.call(this);
}

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]
```

优点：

- 避免了引用类型的属性被所有实例共享
- 可以在子类构造函数中向父类传参

存在的问题:

- 方法都在构造函数中定义，每次创建实例都会创建一遍方法.
- 超类型(如Father)中定义的方法,对子类型而言也是不可见的

## 组合继承

使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数复用，又能够保证每个实例都有它自己的属性。

结合原型链继承和借用构造函数继承的优点：
```
function SuperType(name){ 
  this.name = name; 
  this.colors = ["red", "blue", "green"]; 
} 
SuperType.prototype.sayName = function(){ 
  alert(this.name);
}; 

function SubType(name, age){ 
  //继承属性
  SuperType.call(this, name);  
  this.age = age; 
} 
//继承方法
SubType.prototype = new SuperType(); 
SubType.prototype.constructor = SubType; 
SubType.prototype.sayAge = function(){ 
  alert(this.age); 
};
```

## 原型继承

在`object()`函数内部, 先创建一个临时性的构造函数, 然后将传入的对象作为这个构造函数的原型,最后返回了这个临时类型的一个新实例:
```
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}
```
从本质上讲, `object()` 对传入其中的对象执行了一次浅复制

就是 `ES5 Object.create` 的模拟实现，将传入的对象作为创建的对象的原型。

原型式继承中, 包含引用类型值的属性始终都会共享相应的值, 就像使用原型模式一样.

## 寄生式继承
创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。
```
function createObj (o) {
    var clone = Object.create(o);
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}
```
缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。

## 寄生组合式继承
组合继承是 JavaScript 最常用的继承模式; 不过, 它也有自己的不足. 组合继承最大的问题就是无论什么情况下,都会调用两次父类构造函数

寄生组合式继承就是为了降低调用父类构造函数的开销而出现的:
```
// 前面还是通过借用构造函数来继承属性

function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}


function extend(subClass,superClass){
    var prototype = object(superClass.prototype);//创建对象
    prototype.constructor = subClass;//增强对象
    subClass.prototype = prototype;//指定对象
}
```
寄生组合式继承,集寄生式继承和组合继承的优点于一身,是实现基于类型继承的最有效方法