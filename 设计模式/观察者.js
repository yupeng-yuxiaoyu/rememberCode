// 定义一个目标对象
class Subject {
  constructor() {
    this.Observers = [];
  }
  add(observer) {
    //添加
    this.Observers.push(observer);
  }
  remove(observer) {
    //移除
    this.Observers.filter((item) => item === observer);
  }
  notify() {
    //通知所有观察者
    this.Observers.forEach((item) => {
      item.update();
    });
  }
}
//定义观察者对象
class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log(`my name is:${this.name}`);
  }
}

let sub = new Subject();
let obs1 = new Observer("observer11");
let obs2 = new Observer("observer22");
sub.add(obs1);
sub.add(obs2);
sub.notify();