class Graph {
  constructor() {
    this.nodes = {};
    this.edges = {};
  }

  addNode (id, value) {
    this.nodes[id] = value
  }

  addEdge (startNode, endNode) {
    if (this.edges[startNode] && this.edges[startNode].indexOf(endNode) === -1) {
      this.edges[startNode].push(endNode)
    } else {
      this.edges[startNode] = [endNode]
    }
  }
}

const graph = new Graph()

graph.addNode(1, 'Sid')
graph.addNode(2, 'Manuel')
graph.addNode(3, 'Jules')

graph.addEdge(1, 2)
graph.addEdge(1, 3)
graph.addEdge(3, 2)

console.log(graph)
