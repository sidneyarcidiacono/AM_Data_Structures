# Lists and Table Structures

## Arrays & Objects "on Steroids"

### What are List & Table structures?

Lists:

 - Collections of values

 - eg. Arrays, Sets, LinkedLists

 - Great for storing values that are retrieved by postition (via index or search)

 - Also great for loops

Tables:

 - Collections of key-value pairs

 - eg. Objects, Maps

 - Great for storing values that are retrieved by key

 - Not primarily focused on loops


### Stacks

- Kind of a simplified array

Adding items: always "pushed" on top of a stack (if we use an array it's put at the end of the array).

Removing items: always "popped" from the top of the stack (LIFO)

### Stack Time Complexity & Arrays:

Element Access:

    Stacks: O(1) but limited to "top element" - (We're talking about pop here)

    Arrays: O(1), and we can access any element because we can access by index

Insertion at End:

    Stacks: O(1) (limited to top of stack of course)

    Arrays: O(1)

Insertion at Beginning:

    Stacks: Technically not possible if we define end as topmost element. O(n) with "data loss" - this would require us popping off all of the elements, so we would lose these

    Arrays: O(n)

Insertion in Middle:


    Stacks: Technically not possible if we define end as topmost element. O(n) with "data loss" - this would require us popping off all of the elements before it, so we would lose these

    Arrays: O(n)

Search Elements:

    Stacks: Technically not possible without popping all items until we reach our item, so it would also be O(n) with data loss.

    Arrays: O(n)

The stack really never performs better than an array, so the use case for a stack would likely be more about restricting an array than performance optimization.

### Queue

 - A simplified array, similar to a stack

 - FIFO data structure

 - Enqueue & dequeue -

    - Enqueue is to add at beginning

    - Dequeue is to remove at end

- The key difference between a queue and a stack is that you operate on opposite ends of the queue (as opposed to a stack, where you always operated on the same end)
