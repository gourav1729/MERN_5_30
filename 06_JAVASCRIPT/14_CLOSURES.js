// What is Lexical Scope?
// Definition:
// Lexical Scope (also called static scope) means that the scope of a variable is determined by its position in the source code (i.e., where it's written), and nested functions have access to variables declared in their outer scope.

function outer() {
  let name = "kushal";

  function inner() {
    console.log(name);
  }

  inner();
}

outer();

// ChatGPT storing context in closures.

// What is a Closure? A closure is formed when an inner function remembers variables from its outer function scope, even after the outer function has finished executing.

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();
increment()
increment()
increment()
increment()
increment()
