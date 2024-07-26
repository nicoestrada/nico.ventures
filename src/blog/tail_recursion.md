---
sidebar: auto
---

2024-07-26 18:22

Summary: Part of my final exam study for CS421 and my interest of publishing my personal Obsidian network to my site

Tags: [[haskell]]

## Tail Recursion
- Main thing to focus on is knowing how and the benefits of converting Direct-Style Recursive functions to Tail Recursion

First things first...
- What's a tail position?
	- Subexpression (*s*) of expression (*e)
	- If *s* is evaluated it will be taken as the value of *e*
- What's a tail call?
	- A function call in the tail position (subexpression of *e*)

**Remember, recursion splits the first piece of the rest. Direct-style recursion in haskell is a recursive call that computes the result for the rest of the input, THEN combines the total result with the first piece...this takes time**

So... enter Accumulating Recursion:
- Generate a running result (intermediate result) NOW, and give the most updated result to the recursive call 
- Usually, this will require the use of an auxillary function

### In Summary...

- If a function call calls itself twice, it will need 2 accumulators (the var holding the running result)
- To ensure a function is tail-recursive, the function call should should be the last operation of the functions
- Don't forget to add the base case after the 'where'


### References



---

<section-contents />

