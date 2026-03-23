// Declare variables

let num = 10
console.log(num)

// Primitive data type

//? Number , boolean, string,  null, undefined, Symbol, bigint

console.log(typeof num)

let nullValue = null
console.log(typeof nullValue)

let undefinedValue = undefined;
console.log(typeof undefinedValue)

let boolValue = true
console.log(typeof boolValue)

let symbolValue = Symbol("Value")
console.log(typeof symbolValue)

// bigint

let number = 999999993434348574320755343535777737373737373737373n
console.log(number)

// symbol

let apartment = { storage: "Tenant's clothes" };

const landlordKey = Symbol("storage"); // This is a unique, invisible ID

apartment[landlordKey] = "Landlord's drill machine";

console.log(apartment.storage);      // "Tenant's clothes" (SAFE!)
console.log(apartment[landlordKey]); // "Landlord's drill machine"
console.log(apartment.landlordKey)

