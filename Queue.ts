type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Queue <T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;   
        this.length = 0;
    }

    enqueue(item: T): void {
        
        const node = { value: item } as Node<T>;
        this.length++;
        
        if(!this.tail) {
            this.tail = this.head = node; // if the queue is empty
            return;
        }

        this.tail.next = node; // Setting new node as next
        this.tail = node; // moving the 'tail' pointer to new node
    }

    deque(): T | undefined {
        if(!this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head; // temp var, to keep track of (old)head
        this.head = this.head.next; // pointing 'head' pointer to 2nd element

        //free memory
        head.next = undefined;

        if(this.length === 0) { // when queue is empty, otherwise there will be error if we empty the queue and start adding new elements again
            this.tail = undefined;
        }

        return head.value;

    }
    peek(): T | undefined {
        return this.head?.value;
    }
}