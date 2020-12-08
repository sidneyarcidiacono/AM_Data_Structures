# Data Structures

## What are data structures?

Data structures allow you to manage data

Examples: Arrays, Objects, Maps, Sets

These are built in data structures

However, typically when we refer to "data structures" we're referring to custom data structures that we can build. These are typically built on built-in data structures, but built for different tasks and given different functionality or features.

**Different tasks require different data structures**

ex:

- Ordered list of data, duplicates allowed - Arrays

- Unordered list of data, no duplicates wanted - Sets

- Key-value pairs of unordered data - Objects (python=dictionary)

- Key-value pairs of ordered, iterable data - Map

#### Arrays - Recap:

[1, 2, 3, 4]

 - Insertion order is kept

 - Element access via index

 - Iterable

 - Size (length) adjusts dynamically (use dynamic arrays in JavaScript and Python)

 - Duplicate values are allowed

 - Mix types allowed in JS arrays

 - Deletion and finding elements can require "extra work" - i.e. performance intensive and more difficult.


#### Sets - Recap:

new Set()

set.add('pizza')
set.add('burger')
set.add('pizza') //not added

 - Insertion order is *not* stored/memorized

 - Element access and extraction via method (.has())

   Set finds objects by value, not index (because they're unordered)

 - Iterable

 - Size (length) adjusts dynamically

 - Duplicate values are not allowed (i.e: unique values only)

 - Deletion and finding elements is trivial and fast

 - Sets can store values more efficiently than arrays because it's unordered

 - Allows mixed types of data

#### Arrays v. Sets:

Arrays:

 - You can always use arrays
 - Must use if order matters and/or duplicates are wanted

Sets:

 - Only usable if order doesn't matter and you only need unique values
 - Can simplify data access (e.g. finding, deletion) compared to arrays

#### Objects - Recap:

{id: 124532, age: 23, name: 'Sid'}

 - Unordered key-value pairs of data

 - Element access via key (property name)

 - Not iterable (only with for in loop in JS)

 - Keys are unique, values are not

 - Keys have to be strings, numbers, or symbols (may not be objects or arrays)

 - Can store data & "functionality" (methods)

#### Maps - Recap:

new Map()
map.set('name', 'Max')
map.set(true, true) //Boolean Keys

 - Ordered key-value pairs of data

 - Element access via key

 - Iterable

 - Keys are unique, values are not

 - Keys can be anything (incl. reference values like arrays, objects)

 - Pure data storage, optimized for data access

 - Can't add extra "functionality" to it like an object

 - Key values stored as arrays (this is kind of similar to a tuple in Python although they're not exactly the same)

 - Can't access values by dot notation or bracket notation, you have to use the .get() method or other built in methods

#### Objects v. Maps

Objects:

 - Very versatile construct and data storage in JS
 - Must use if you want to add extra functionality

Maps:

- Focused on data storage and access
- Can simplify and improve data access compared to objects

#### WeakSet and WeakMap

 - Variations of Set and Map

 - Values and keys are only "weakly referenced"

 - JS Garbage collection can delete values and keys if not used anywhere lese in the app

 - Can give you an extra memory advantage because unused values can be cleaned up

 - In most scenarios this won't matter, but in some use cases it's worth knowing about them
