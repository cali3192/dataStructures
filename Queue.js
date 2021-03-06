// FIFO : First In First Out

const createQueue = () => {
  const queue = [];
  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
    queue
  };
};

let q = createQueue();
// console.log(`create => `, q.queue);
// console.log(`isEmpty => ${q.isEmpty}`);
q.enqueue("Item 1");
q.enqueue("Item 2");
q.enqueue("Item 3");
console.log(`create => `, q.queue);
console.log(`isEmpty => `, q.isEmpty());

module.exports.createQueue = createQueue;
