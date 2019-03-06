'use strict';

/*
This is fun exercise to do - make this an optional one after you are done with all the exercises above. 

Imagine that you wanted to find what the highest floor of a 100 story building you could drop an egg was, 
without the egg breaking. But you only have two eggs. Write an algorithm to work out which floors 
you should drop the eggs from to find this out in the most efficient way. 

Once you have understood the question and made some attempts to solve the problem, 
here is some reading to do before you start coding. http://datagenetics.com/blog/july22012/index.html
*/

// Inefficient, but way to solve it would be to start at floor 2,
// increment by 2 until the egg breaks, then test the egg on the
// floor right below it to get the answer

// Could we pick a higher floor to start at initially?
// Start at n+(n-1) (3)
// Get to floor until it breaks
// Go down n floors and test until it breaks

// If we break an egg, we are reduced to a 1-egg problem (test every floor sequentially);
// We can break the formula down into incremental and linear
// Incremental = number of floors we would increment by on each successive try assuming no breaks
// Linear = Once the egg breaks, we are limited to testing 1 by one
// First drop = x
// Second drop = (x - 1)
// Third drop = (x - 2)
// ...and so on
// Until we only have 1 floor to check: 1
// Formula comes to: x + (x - 1) + (x - 2)...+ 1
// Which simplifies to: x(x + 1)/2
// solve for x when the entire summation is equal to 100
// x(x + 1)/2 = 100

const solution = (x) => x * (x + 1) / 2 >= 100;
const arrayOfNumbers = new Array(100);

function eggDrop() {
  // Start at 0
  // Run solution sequentially until we get our first true...return n when true
  for (let i = 0; i<arrayOfNumbers.length; i++) {
    const solver = solution(i);
    if (solver) {
      return i;
    }
  }
}

console.log(eggDrop());