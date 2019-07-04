# `JavaScript` 中的继承

> 经典的面向对象语言中通过 `class` 来实现继承，而 `JavaScript` 中是通过原型链来实现继承，通常被称为 **原型式继承**

首先来声明一个构造函数：
```
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};
```

所有的方法都定义在构造函数的原型上：
```
Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};
```

现在我们想要创建一个 `Teacher` 类，这个类会继承 `Person` 的所有成员同时还包括：
- 一个新属性 `subject` 教授的学科
- 一个新方法 `greeting()` 比 `Person` 中的更正式一点

定义 `Teacher` 的构造函数：
```
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
```

这里只是把 `Person` 的原型属性继承了，原型方法没有，所以需要把 `Teacher` 的原型对象指向 `Person` 的原型对象：
```
Teacher.prototype = Object.create(Person.prototype);
```
这个时候 `Teacher.prototype.constructor` 会指向 `Person()`，需要补充设置：
```
Teacher.prototype.constructor = Teacher;
```


注：每一个函数对象（`Function`）都有一个`prototype`属性，并且只有函数对象有`prototype`属性，因为`prototype`本身就是定义在`Function`对象下的属性。当我们输入类似`var person1=new Person(...)`来构造对象时，`JavaScript`实际上参考的是`Person.prototype`指向的对象来生成`person1`。另一方面，`Person()`函数是`Person.prototype`的构造函数，也就是说`Person===Person.prototype.constructor`（不信的话可以试试）。

在定义新的构造函数`Teacher`时，我们通过`function.call`来调用父类的构造函数，但是这样无法自动指定`Teacher.prototype`的值，这样`Teacher.prototype`就只能包含在构造函数里构造的属性，而没有方法。因此我们利用`Object.create()`方法将`Person.prototype`作为`Teacher.prototype`的原型对象，并改变其构造器指向，使之与`Teacher`关联。

任何您想要被继承的方法都应该定义在构造函数的`prototype`对象里，并且永远使用父类的`prototype`来创造子类的`prototype`，这样才不会打乱类继承结构。