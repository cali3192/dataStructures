const createNode = value => {
  return {
    value,
    next: null
    // doubly linked lists have an additional layer:
    // previous: null
  };
};

const createLinkedList = () => {
  return {
    // default head, tail null
    head: null,
    tail: null,
    length: 0,
    push(value) {
      const node = createNode(value);
      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
      } else {
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return node;
      }
    },
    pop() {
      const node = this.tail;
      let current = this.head;
      let penultimate;
      if (isEmpty()) {
        return null;
        // deals with the case of this tail and head are the same, so length 1
      } else if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
        length--;
        return node;
      }

      while (current) {
        if (current.next === this.tail) {
          penultimate = current;
          break;
        }
        current = current.next;
      }
      penultimate.next = null;
      this.tail = penultimate;
      this.length--;
      return node;
    },
    get(index) {
      if (index < 0 || index > this.length - 1) {
        return null;
      } else if (index === 0) {
        return this.head;
      }

      let current = this.head;
      let i = 0;
      while (i < index) {
        i++;
        current = current.next;
      }
      return current;
    },
    delete(index) {
      if (index < 0 || index > this.length - 1) {
        return null;
      } else if (index === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        this.length--;
        return deleted;
      }

      let current = this.head;
      let previous;
      let i = 0;

      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }
      const deleted = current;
      previous.next = current.next;

      if (previous.next === null) {
        this.tail = previous;
      }

      this.length--;

      return deleted;
    },
    isEmpty() {
      return this.length === 0;
    },
    print() {
      const values = [];
      let current = this.head;
      while (current) {
        values.push(current.value);
        current = current.next;
      }

      return values.join(" => ");
    }
  };
};

let l = createLinkedList();
l.push("link0");
l.push("link1");
console.log(
  `l.head => ${JSON.stringify(l.head)} l.tail => ${JSON.stringify(
    l.node
  )} length => ${l.length}`
);

l.push("link2");
l.push("link3");

console.log(
  `l.head => ${JSON.stringify(l.head)} l.tail => ${JSON.stringify(
    l.node
  )} length => ${l.length}
  get => ${JSON.stringify(l.get(2))}
  print => ${l.print()}
  `
);

let list = createLinkedList();
let values = [0, 1, 2, 3, 4];
const nodes = values.map(val => {
  list.push(val);
});

console.log(list.print());
