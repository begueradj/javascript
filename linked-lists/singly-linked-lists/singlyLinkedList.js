'use strict'

let singlyLinkedList = function () {
  this.head = null
}

singlyLinkedList.prototype.append = function (value) {
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

singlyLinkedList.prototype.remove = function (value) {
  if(! this.head) {
    console.log('The list is empty')
  } else if ( this.head.data === value ) {
    this.head = this.head.next
  } else {
    let first = this.head
    let second = first.next
    while( second ) {
      if ( second.data === value ) {
	first.next = second.next
	break
      } else {
	first = second
      }
      second = second.next
    }   
  }  
}

singlyLinkedList.prototype.read = function () {
  if ( !this.head ) {
    console.log('Empty list')
  } else {
    let current = this.head
    while ( current ) {
      console.log ( current.data )
      current = current.next
    }
  }
}

let linkedList = new singlyLinkedList()
let someIntegers = [3, 55, 632, 7, 9]
someIntegers.forEach(element => linkedList.append( element ) )
console.log( linkedList.read() )
console.log('remove 7 ')
linkedList.remove(7)
console.log(linkedList.read() )
