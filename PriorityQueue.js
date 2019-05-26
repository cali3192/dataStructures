const { createQueue } = require("./Queue");

const createPriorityQueue = () => {
  const lowPriority = createQueue();
  const highPriority = createQueue();
  return {
    enqueue(item, isHighP = false) {
      isHighP ? highPriority.enqueue(item) : lowPriority.enqueue(item);
    },
    // High priority items are dequeued first
    dequeue() {
      if (highPriority.isEmpty()) {
        return lowPriority.dequeue();
      }
      return highPriority.dequeue();
    },
    // High priority items are peeked at first
    peek() {
      if (highPriority.isEmpty()) {
        return lowPriority.peek();
      }
      return highPriority.peek();
    },
    // the length of both priorities
    length() {
      return lowPriority.length + highPriority.length;
    },
    isEmpty() {
      return lowPriority.isEmpty() && highPriority.isEmpty();
    },
    lowPriority,
    highPriority
  };
};

let cq = createPriorityQueue();

cq.enqueue("High1", true);
cq.enqueue("High2", true);
cq.enqueue("low1");
cq.enqueue("low2");

console.log(
  `\n After 4 enqueue \n  2 high => `,
  cq.highPriority.queue,
  `\n  2 low => `,
  cq.lowPriority.queue,
  `\n  peek => `,
  cq.peek(),
  `\n  length => `,
  cq.length(),
  `\n  isEmpty => `,
  cq.isEmpty()
);

// console.log(
//   `After peek \n  2 high => `,
//   cq.highPriority.peek,
//   `\n  1 low => `,
//   cq.lowPriority.peek
// );

cq.dequeue();
console.log(
  `\n After dequeue \n  2 high => `,
  cq.highPriority.queue,
  `\n  1 low => `,
  cq.lowPriority.queue,
  `\n peek => `,
  cq.peek()
);

cq.dequeue();

cq.dequeue();

console.log(
  `\n After 2nd dequeue \n  2 high => `,
  cq.highPriority.queue,
  `\n  1 low => `,
  cq.lowPriority.queue,
  `\n  length => `,
  cq.length(),
  `\n  isEmpty => `,
  cq.isEmpty()
);

cq.dequeue();

console.log(
  `\n After 2nd dequeue \n  2 high => `,
  cq.highPriority.queue,
  `\n  1 low => `,
  cq.lowPriority.queue,
  `\n  length => `,
  cq.length(),
  `\n  isEmpty => `,
  cq.isEmpty()
);
