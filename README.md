# data2tree
扁平数组变成多维的树状机构
####这是一个树形结构处理的类

####引用以及使用
直接用 es6 来引用 import Tree from ‘地址’
使用的时候直接 new Tree（data, correlation, rootCorrelation）

### 参数

data：你要转成树形结构的数据
correlation: 每一项与其父级的关系
rootCorrelation： 根节点的判断

([{id: 1,name: '超级管理',parent_id: 0 }],'parent_id',0)

参数一：数组里面是一个对象 包含 id（必须）与父元素的关系 （parent_id） 还有其他的随便写
参数二： 与父元素的关系 与第一个参数相呼应
参数三：判断跟元素的依据 这里显示的是 parent_id===0 也可以设置为其他
