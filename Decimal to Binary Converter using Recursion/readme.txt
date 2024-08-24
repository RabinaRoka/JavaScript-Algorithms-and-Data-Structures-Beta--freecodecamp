, make sure to use the parseInt() function to convert the input into a number.

The call stack is a collection of function calls stored in a stack structure. When you call a function, it is added to the top of the stack, and when it returns, it is removed from the top / end of the stack.

A recursive function is a function that calls itself over and over


Since your countdown() function will count down from a given number to zero, the base case is when the number parameter is equal to 0. Then it should return to break out of its recursive loop.

When writing the recursive case, you need to remember two things:

What is the base case?
What is the least amount of work you need to do to get closer to the base case?


all remaining