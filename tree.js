class Tree {
  constructor(data, correlation, rootCorrelation) {
    this.data = data
    this.correlation = correlation
    this.rootCorrelation = rootCorrelation
    this.getTree(this.data)
  }
  getTree(data) {
    let $roots = data.filter(item => item[this.correlation] === this.rootCorrelation)
    let childs = data.filter(item => item[this.correlation] !== this.rootCorrelation)
    this.deepTree($roots, childs)
    return $roots
  }
  deepTree(parents, childs) {
    parents.forEach(parent => {
      childs.forEach(child => {
        if (child[this.correlation] === parent.id) {
          parent.children ? parent.children.push(child) : parent.children = [child]
          this.deepTree([child], childs)
        }
      })
    })
  }
}
export default Tree