    // 基于数组封装队列类
    function Queue() {
      // 属性
      this.items = []

      // 方法
      // 1.enqueue():将元素加入到队列中
      Queue.prototype.enqueue = element => {
        this.items.push(element)
      }

      // 2.dequeue():从队列中删除前端元素
      Queue.prototype.dequeue = () => {
        return this.items.shift()
      }

      // 3.front():查看前端的元素
      Queue.prototype.front = () => {
        return this.items[0]
      }

      // 4.isEmpty:查看队列是否为空
      Queue.prototype.isEmpty = () => {
        return this.items.length == 0;
      }

      // 5.size():查看队列中元素的个数
      Queue.prototype.size = () => {
        return this.items.length
      }

      // 6.toString():将队列中元素以字符串形式输出
      Queue.prototype.toString = () => {
        let resultString = ''
        for (let i of this.items) {
          resultString += i + ' '
        }
        return resultString
      }
    }