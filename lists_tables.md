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

## Lists

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

**Queue Time Complexity**

Element Access:

    Queues: O(1) - just the first element (oldest in queue)
    Arrays: O(1) if we have index and don't have to search

Insertion at End:

    Queues: We can only add things to the beginning of the queue, so if we want to add at the end so it's processed next, it's O(n) with data loss (since we have to remove all items before it in line)
    Arrrays: O(1)

Insertion at Beginning:

    Queues: O(1) (provided you don't use a built in array at the beginning, and you implement your queue with a linked list)
    Arrays: O(n)

Insertion in Middle:

    Queues: O(n) with data loss (would have to dequeue all items before it in line)
    Arrays: O(n)

Searching Elements:

    Queues: O(n) with data loss
    Arrays: O(1)

Similar to a stack, the typical use case or desirability for a queue would be in a case where you want to force a certain behavior and restrict options rather than for optimization.

## Tables

### Hash Tables

The JavaScript Object is implemented as a Hash Table (same for Python dictionaries)

What this means is that generally, you won't need to build a custom hash table. It's good to know how, but it won't really be necessary often.

Input:

    key: eg: 'name'
    value: eg: 'Max'

Hash Table:

    Contains an index, stores values (similar to an array)

    We map the key to an index using a hashing function. This hashing function is built as such that the same input will always yield the same index, or value. This also means that we can search using our value with O(1) time complexity.

**Why we need tables**:

You can see our firstRep and firstRepBasic algorithms to see how leveraging objects helps us write a better algorith.

Sometimes it's also really useful for organizing data by keys and values, where we can find or retrieve values by keys.

We want to be sure that our keys are assigned evenly and avoid performance loss in a structure that's generally supposed to improve or optimize performance. This is why we hash our keys rather than just taking our input as plain keys.

**Collisions**

We want to avoid collisions as much as possible when implementing hash tables, but sometimes its inevitable. In these instances, we have to figure out how to handle our collisions.

We can handle these collisions by chaining.

In other words, we can leverage other built in data structures (or other custom ones, like Linked Lists if we choose) to chain out data from buckets with collisions so that we don't run into data loss or an unreliable hashing table.

We can also use "Open Adressing" to handle collisions.

This means if we hash an item and it wants to be placed in an index that is already filled, we find the next open slot or bucket in our table and insert the item there, instead.

This requires a larger hash table, and a certain way of building our hash table so that we make sure we don't run out of space.

### Hash Table Time Complexity:

We're going to be comparing hash tables with arrays and with JavaScript objects. Keep in mind that since JavaScript objects ARE hash tables, you'll see a lot of equality. However, JS objects are really efficient hash tables that handle collisions really well.

Element Access:

    Hash Table: O(1) - O(n) with collisions (no matter if we use chaining or open addressing)
    Object: O(1) - they still have to deal with hash collisions, they're just a bit more efficient than our implementation. We can generally assume constant time for this reason.
    Arrays: O(1)

Insertion at End:

    There isn't really a start or an end, so let's just look at insertion in general.

    Hash Table: O(n) since we have to deal with collision handling, so we have a tendency towards O(n)
    Object: O(1) for the same reason as above, even though they also have to deal with collisions, they tend towards constant time.
    Arrays: O(1)

Search Elements:

    Hash Table: O(1) - O(n) with lots of hash collision
    Objects: O(1)
    Arrays: O(n)

Becasue JavaScript objects are implemented as hash tables, you don't really need to build your own hash tables in JavaScript.

In other languages, though, you might not have the built in "object" data structure.

It's also good to know these things for interviews.

It always helps to understand how the language works internally.

So now that we know all of this, should we just always use objects? (JAVASCRIPT OBJECTS ARE HASH TABLES) No, we'll get into this in a second.

Managing key-value pairs leads to redundant code for some use-cases. Where you don't have data that really needs to be structured with keys, just coming up with an arbitrary key isn't really beneficial and increases overhead unnecessarily. Looping is also typically easier for arrays/lists, and whenever you need to go through all items (or a significant chunk) arrays or lists might be a good choice.

For a lot of arrays/lists you don't need to do a lot of insertions at the beginning or middle or do a lot of searches. 
