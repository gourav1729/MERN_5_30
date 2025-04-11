# JavaScript Looping Methods Guide

## 1. for loop

### What
The most basic loop in JS.

### Syntax
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### Use-case
When you need a loop with a counter or index.

## 2. while loop

### What
Repeats while a condition is true.

### Syntax
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### Use-case
When you're not sure how many times you need to run.

## 3. do...while loop

### What
Runs the code at least once, then checks condition.

### Syntax
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### Use-case
When you want to execute code first, then check the condition.

## 4. for...of loop

### What
Loops through iterable items (like arrays, strings).

### Syntax
```javascript
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

### Use-case
Simple way to loop over values of an array/string.

## 5. for...in loop

### What
Loops through keys (properties) in an object.

### Syntax
```javascript
let user = { name: "Aman", age: 22 };
for (let key in user) {
  console.log(key, user[key]);
}
```

### Use-case
When you want to loop through object properties.

## 6. Array.forEach()

### What
Executes a function for each array element.

### Syntax
```javascript
let nums = [1, 2, 3];
nums.forEach((num, index) => {
  console.log(index, num);
});
```

### Use-case
Side-effects only, doesn't return anything.

## 7. Array.map()

### What
Creates a new array by transforming each element.

### Syntax
```javascript
let nums = [1, 2, 3];
let doubled = nums.map(num => num * 2); // [2, 4, 6]
```

### Use-case
When you want to transform array elements.

## 8. Array.filter()

### What
Creates a new array with only elements that pass a test.

### Syntax
```javascript
let nums = [1, 2, 3, 4];
let even = nums.filter(num => num % 2 === 0); // [2, 4]
```

### Use-case
Filter elements based on condition.

## 9. Array.reduce()

### What
Reduces an array to a single value.

### Syntax
```javascript
let nums = [1, 2, 3];
let total = nums.reduce((acc, curr) => acc + curr, 0); // 6
```

### Use-case
Summing, aggregating, or combining data.

## 10. Array.some()

### What
Returns true if any element passes the test.

### Syntax
```javascript
let nums = [1, 2, 3];
let hasEven = nums.some(num => num % 2 === 0); // true
```

### Use-case
Check if at least one value matches a condition.

## 11. Array.every()

### What
Returns true if all elements pass the test.

### Syntax
```javascript
let nums = [2, 4, 6];
let allEven = nums.every(num => num % 2 === 0); // true
```

### Use-case
Check if all values match a condition.

## 12. Array.find()

### What
Returns the first element that passes the test.

### Syntax
```javascript
let nums = [3, 4, 5];
let found = nums.find(num => num > 3); // 4
```

### Use-case
Find first match in an array.

## 13. Array.findIndex()

### What
Returns the index of the first element that passes the test.

### Syntax
```javascript
let nums = [3, 4, 5];
let idx = nums.findIndex(num => num > 3); // 1
```

### Use-case
Find index of the first match.

## Summary Table

| Method | Return Value | Modifies Original? | Use-case |
|--------|-------------|-------------------|----------|
| for | None | No | General looping |
| while | None | No | Looping until condition is false |
| do...while | None | No | Run once, then check condition |
| for...of | None | No | Loop over values of iterable |
| for...in | None | No | Loop over keys of object |
| forEach() | None | No | Perform action on each item |
| map() | New array | No | Transform elements |
| filter() | New array | No | Keep items that match condition |
| reduce() | Any (single val) | No | Combine values |
| some() | Boolean | No | If any match |
| every() | Boolean | No | If all match |
| find() | Element | No | Find first match |
| findIndex() | Index (number) | No | Find index of first match |
