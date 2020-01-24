# Javascript: Sorting Algorithms

## Bubble Sort

#### What is a sorting algorithm?

A sorting algorithm is an algorithm that puts elements of a list in a certain order.

Bubble Sort is the simplest sorting algorithm.

#### Why do I need to know this?

Sorting algorithms are widely taught in beginner computer science classes, where the abundance of algorithms for the problem provides a gentle introduction to a variety of core algorithm concepts, such as [big O notation](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/), [divide and conquer algorithms](http://www.geeksforgeeks.org/divide-and-conquer-set-1-find-closest-pair-of-points/), and [data structures](https://en.wikibooks.org/wiki/Data_Structures)... yadda yadda.

:mega: **Activity** Check out [sorting algorithms animated!](https://www.toptal.com/developers/sorting-algorithms)

- Different types of algorithms can make a big difference in performance.
- It is easier and faster to locate items in a sorted list than unsorted.
- Intro to algorithm concepts

## How Bubble Sort Works

![image](bubblesort.png)

## Directions

Write a function that will sort an array according to the rules of Bubble Sort. You cannot use `.sort()`

**You will need a loop within a loop to solve it.**

```
var bubbleSort = function(arr) {
	// sort the input
	// return the sorted result
}

bubbleSort([10, 0, 99, 100, 8, 55, 2, 17, 16, 15, 1000, 1]);

=>
[ 0, 1, 2, 8, 10, 15, 16, 17, 55, 99, 100, 1000 ]

```


#### Strategies

* Start with just the inner for loop
* Make it so your for loop will go through the array once and do the initial swaps.
	* To swap values, you might need a variable to temporarily hold a value
* Write the outer while loop
	* whether or not a swap has occurred should be a boolean value

#### Outer loop and inner loop

  The outer loop for Bubble Sort could be a `while` loop that runs _while_ no swaps have occurred.

  The inner loop for Bubble Sort should be `for` loop that does the swapping (or not) of the array elements.
