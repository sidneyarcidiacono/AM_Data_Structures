# Trees

## What are Tree Structures?

Examples of Trees:

The Browser DOM:

    One root element (<html>) and then any amount of nested child elements (e.g <p>)

A Decision Tree:

    Pizza or Pasta?
    /           \
  /               \
  Pizza           Pasta
  /   \             /   \
meat    veggie    penne   other

**Tree Definition**: A *unidirectional*, non-linear data structure with *edges* that connect *vertices* (nodes). There is a *root node* and there are no *cycles* (loops).

**Core Terminology**:

*Node/vertex*: A data point, something that holds a value

*Edge*: A connection between two nodes

*Root node*: the top most node in the tree

*Children*: Extend a parent node

*Sub Tree*: A nested tree (i.e: sub tree root node is NOT main tree root node)

*Leaf*: A node without any child nodes (i.e. without a sub tree)

*Path*: A sequence of nodes and edges that connect two nodes which are not necessarily in direct connection with each other (aren't direct parent/children)

*Distance*: The number of edges we need overall to connect two nodes, even if there are other nodes in between

*Parent*: Two directly connected nodes, parent node is "above" child node.

*Ancestor/Descendent*: Two nodes that are connected by multiple parent-child paths

*Sibling*: Two adjacent nodes that share the same parent node

*Degree*: The number of child nodes of a given node

*Level*: The distance between the node and the root node

*Depth*: The maximum level in a tree

*Breadth*: The number of leaves in a tree

*Size*: The total number of nodes in a tree (no matter where or how they're connected)

### Tree Time Complexity:

Access/Search:

    Tree: Worst Case O(n) - if we need to visit all other nodes before accessing our element.
    Array: O(1) with index, O(n) without

Insertion:

    Tree: O(n) worst case (for same reason as above)
    Array: O(1) at end, O(n) at beginning

Removal:

    Tree: O(n) worst case (for same reasons)
    Array: O(1) at end, O(n) at beginning

So why use a tree?

Well, although right now it doesn't look like there's really a performance advantage, there are more efficient types of trees. Also, time complexity isn't alway the reason to use one anyway. You may want to use a tree for a use case similar to the dummy file tree we implemented in tree.js, where it makes sense to represent your data that way.

### Traversing a Tree

Both ways of finding something can be viable, and in both approaches, your worst case time complexity is O(n) - if you have to visit all nodes before finding the value you want.

It depends on how your data is structured, what kind of data is in the tree, and which approach is *most likely* to bring you the best and fastest result.

If you're typically going to be looking for deeply nested values, then a depth first search would make more sense. For example, a filesystem where you're only ever able to search *file names* and not folders.

However, a tree with not a lot of deeply nested nodes but more breadth, it would make more sense to perform a breadth-first search.

##### Depth-First

Dig into the tree first and explore sibling trees step by step.

##### Breadth-First

Evaluate all sibling values first before your dig into the tree in depth.
