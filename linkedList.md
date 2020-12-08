## Linked Lists

 - List full of elements that are linked to each other.

 - Elements, or nodes in a link list only knows about its next element

 - They are flexible when it comes to resizing

 - This allows for efficient insertion at start and end of the list.

### Why would you want a Linked List?

 - Historically, (in other programming languages), the main reason was memory management. You didn't have to specify (occupy) the size in advance.

 - Nowadays, JavaScript has dynamic arrays (with dynamic re-sizing) built in, and memory isn't really the primary issue in JavaScript apps.

 - Linked Lists can be useful if you do a lot of insertions at the beginning of lists - linked lists are faster than arrays at this. (In this case, there's a performance advantage)

### What's the time complexity difference?

Prepending:

    Array: O(n)
    Linked List: O(1)

Element Access:

    Array: O(1) (if we know the index, otherwise O(n))
    Linked List: O(n)

Insertion at End:

    Array: O(1) (*amoritized, in some cases occaisionally it's going to be O(n) when we run out of space)
    Linked List: O(1) (O(n) if you don't store the tail)

Insertion in Middle:

    Arrays: O(n) (because we have to shift all elements after)
    Linked List: Search Time + O(1) (close to O(n), basically)

Search Elements:

    Arrays: O(n)
    Linked List: O(n)
