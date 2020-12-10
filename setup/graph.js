class Graph {
  constructor() {
    this.nodes = {};
    this.edges = {};
  }

  addNode (id, value) {
    if (this.nodes[id]) {
      throw new Error('Node exists already!')
    }
    this.nodes[id] = value
  }

  addEdge (startNode, endNode) {
    if (!this.nodes[startNode] || !this.nodes[endNode]) {
      throw new Error('Start or end node does not exist!')
    }
    if (this.edges[startNode] && !this.edges[startNode].has(endNode)) {
      this.edges[startNode].add(endNode)
    } else {
      this.edges[startNode] = new Set([endNode])
    }
  }

  removeNode (nodeId) {
    this.nodes[nodeId] = undefined
    Reflect.deleteProperty(this.edges, nodeId)
    for (const edgeId in this.edges) {
      this.edges[edgeId].delete(nodeId)
    }
  }

  removeEdge (startNode, endNode) {
    if (!this.edges[startNode] || !this.edges[startNode].has(endNode)) {
      throw new Error('Edge does not exist!')
    }
    this.edges[startNode].delete(endNode)
  }

  hasEdge(startNode, endNode) {
    if (!this.edges[startNode]) {
      return false
    }
    return this.edges[startNode].has(endNode)
  }

  getAllEdges(node) {
    return this.edges[node]
  }
}

const network = new Graph()

network.addNode('sid', {
  firstName: 'Sid',
  lastName: 'Arcidiacono',
  age: 23
})

network.addNode('starlight', {
  firstName: 'Starlight',
  lastName: 'Romero',
  age: 25
})

network.addNode('dino', {
  firstName: 'Dino',
  lastName: 'Martinez',
  age: 45
})

network.addNode('yin', {
  firstName: 'Yin',
  lastName: 'Chang',
  age: 28
})

network.addNode('philippos', {
  firstName: 'Philippos',
  lastName: 'Tasmantanis',
  age: 100
})

network.addEdge('sid', 'starlight')
network.addEdge('starlight', 'sid')
network.addEdge('sid', 'dino')
network.addEdge('dino', 'sid')
network.addEdge('sid', 'yin')
network.addEdge('yin', 'sid')
network.addEdge('starlight', 'dino')
network.addEdge('dino', 'starlight')
network.addEdge('dino', 'yin')
network.addEdge('yin', 'dino')
network.addEdge('yin', 'philippos')
network.addEdge('philippos', 'yin')

console.log(network)

console.log(network.hasEdge('sid', 'starlight'))
console.log(network.hasEdge('starlight', 'yin'))

network.removeNode('starlight')

console.log(network)
