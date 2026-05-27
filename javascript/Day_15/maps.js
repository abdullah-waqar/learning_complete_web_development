//*  MAPS => map is a collection of key value pair

//? Difference between Maps and Objects

//! Maps: Keys and values can be of any data type (primitive or Object)
//! Objects: It contains only the strings in the keys or any unique symbol

/*
  🗺️ Quick Summary Table for Your Notes

  Feature              | Objects                   | Maps
  -------------------- | ------------------------- | -------------------------------
  Creation             | {}                        | new Map()
  Key Data Types       | Strings or Symbols        | Any type (Functions, Objects, Numbers)
  Order Guarantee      | No                        | Yes (Insertion Order)
  Checking Size        | Object.keys(obj).length   | map.size
  Direct Loops         | No (Requires workaround)  | Yes (Iterable out of the box)
*/

const map = new Map()

map.set(1 , "One")
map.set(2 , "Two")
map.set(3 , "Three")
map.set(4 , "Four")


console.log(map)

