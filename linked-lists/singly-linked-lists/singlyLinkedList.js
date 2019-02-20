'use strict'

let singlyLinkedList = function () {
  this.head = null
}

singlyLinkedList.prototype.append = function(value) {
  let node = {
    data: value,
    next: null
  }
  if ( !this.head ) {
    this.head = node
  } else {
    let pointer = this.head
    while ( pointer.next ) {
      pointer = pointer.next
    }
    pointer.next = node
  }
}

let linkedList = new singlyLinkedList()
let someIntegers = [3, 55, 632, 7, 9]
someIntegers.forEach(element => linkedList.append( element ) )
console.log(linkedList)

