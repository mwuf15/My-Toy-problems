/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node
* at which the intersection of two linked lists begins,
* or null if there is no such intersection.
*
* Example:
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return D
* as the node of intersection.
*
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return NULL
* as there is no point of intersection.
*
*    A → B → C → D
*    X → Y → Z
*
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!

  for (var i = 0; i < list1.length; i ++) {
    var node1 = Node(list1[i]);
    for(var j = 0; j < list2.length; j++) {
      var node2 = Node(list2[j]);
      if (node1.value === node2.value) {
        return node2.value
      }
    }
  }
  return null;
}

var one = ['a','b','c','d', 'e', 'f'];
var two = ['x', 'y', 'd'];

var inter = linkedListIntersection(one, two);

console.log(inter)