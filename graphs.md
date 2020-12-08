# Graphs

## What are Graph Structures?

A graph is kind of a tree, but breaking all the tree rules.

They have vertices (nodes) and edges (connections) to multiple other nodes.

Bi-directional connections and loops are possible.

The concepts of "levels", "nesting", "child/parent" don't exist.

### Directed vs. Undirected Graphs:

Directed Graphs:

 - Edges between Nodes are unidirectional

Undirected Graphs:

 - Edges between Nodes are bidirectional

#### Real Life Applications:

Social Network: Contacts/Friends - undirected

Social Network: Follow/followers - directed

Dependencies (Software, citation): directed

Others:

    Maps/Directions
    Knowledge Graph
    Disease Spread
    Recommendation Engines

### Two Approaches for building a graph in code:

Both work for digraphs and undirected graphs

Graph with an Adjacency Matrix

 - Matrix with our graph identifiers (node id's)
 - Store connections in places in our matrix (boolean values, 1 if true (if connected), 0 for false (no connection))
 - Store nodes and connections between nodes
 - You can represent such a matrix in JS using nested arrays (2D arrays)
    - Same amount of nested (inner) arrays as nodes

Graph with an Adjacency List

 - Have our node values in a map, and then store connections in a list mapped to that node.
 - Adjacency list could just be an object full of arrays
    - With the key being the node identifier, and the value being a list of nodes this node is connected to

Adjacency Matrix vs. List:

Which one is better?

Time Complexity:

    Insert:

        Adjacency matrix: O(n) - because we have to add a new row and add an entry and revisit existing entries to add connection with our new node.

        Adjacency list: O(1)

    Find edge between nodes:

        Adjacency matrix: O(1) - use identifiers to access

        Adjacency list: O(n) or O(1) - depends on implementation

    Find all adjacent nodes:

        Adjacency Matrix: O(n) because we have to loop through all

        Adjacency List: Can be acheived with O(1)

Space Complexity:

    Adjacency Matrix: O(n^2) (because we have a two dimensional array)

    Adjacency List: O(n+e) where n is # nodes and e is # edges

Adjacency list is therefore often a better choice, so this is what we'll be using in this course.
