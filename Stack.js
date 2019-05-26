// LILO: Last In Last Out

// our factory function
const createStack = () => {
  const stack = [];
  return {
    push(item) {
      stack.push(item);
    },
    pop() {
      stack.pop();
    },
    peek() {
      return stack[stack.length - 1];
    },
    get length() {
      return stack.length;
    },
    isEmpty() {
      return stack.length === 0;
    },
    stack
  };
};

let s = createStack();

s.push("Item 1");
s.push("Item 2");
s.push("Item 3");
console.log(`push => `, s.stack);
s.pop();
console.log(`pop => `, s.stack);
console.log(`isEmpty => `, s.isEmpty());
