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
