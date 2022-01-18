/**
 * 题目: JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
 * 条件: 只能修改Sheduler
 **/
 class Scheduler {
  constructor(){
    this.awaitLists = [] // 缓存任务数据
    this.tasks = [] // 当前执行任务队列
    this.limit =  2 // 最大并发任务
  }
  add(task) { 
      return new Promise(resolve=>{
        task.resolve = resolve; // 保存当前promise的状态
        if(this.tasks.length < this.limit) { // 最大并发任务处理
          this.run(task)
        } else {
          this.awaitLists.push(task)
        }
      })
   }
   run(task) {
    this.tasks.push(task)
    task().then(() => {
      task.resolve()
      this.tasks.splice(this.tasks.indexOf(task), 1) // 当前任务执行完成 清除task中的数据
      if(this.awaitLists.length) {
           this.run(this.awaitLists.shift()) // 根据执行的缓存顺序执行，保证执行的有序性
      }
    })
   }
}
const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})
const scheduler = new Scheduler()
const addTask = (time, order) => {
  const result = scheduler.add(() => timeout(time))
  result.then(() => console.log(order + 'order'))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')// output: 2 3 1 4
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
