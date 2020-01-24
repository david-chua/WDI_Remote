# Front End Development: [Parallax Scrolling](http://en.wikipedia.org/wiki/Parallax_scrolling)

We are going to create an illusion of depth in 2D -- our browsers!

### Group Exploration

Let's take a look at some sites and see how they use Parallax Scrolling. Scroll up, scroll down, hover over things. Think about how elements change depending on the state of the scroll. Is it just their position? Or their color, size, movements..?

- http://melanie-f.com/en/
- http://www.sbs.com.au/theboat/
- http://www.superlime.fr/
- http://whiteboard.is/
- http://cyclemon.com/
- http://jessandruss.us/
- http://srsra.pt/


Portfolio Examples:
- http://ybodesign.com/
- http://bradleyhaynes.com/
- http://www.andreaspan.com/#meltdown-tour
- http://mikedekker.com/

Bonus Interactive Site:

- http://codedoodl.es/

WOW!! That took a lot of time and work!

### scrollTop

* To see how far the user has scrolled (the current vertical position of the scroll bar), we can use `$(window).scrollTop()`. Read about jQuery's [.scrollTop()](https://api.jquery.com/scrollTop/)

* We can get the number of pixels an element is scrolled, just by saving it in a variable.
`var scrolled = $(window).scrollTop();`

* Since `scrolled` is just a number, we can easily manipulate css properties that require number values with the value of `scrolled` using jQuery and maths!


## Directions

- In `parallax.js`, uncomment the lines of code (one by one, a couple by a couple, etc) and see what it's doing. Change the values inside `.css('top', scrolled * XX)`. Try decimals, negative numbers, try 'left', 'right'.

- Once you feel like you understand you're just manipulating the distance from the top of its parent element by using the element's `top` property...

#### ..it's time to get CrAzY!

* Change the parallax.js, css, or index.html elements and use this as your playground. Change the z-indexes to change what appears in front of what.

* While you play around with scrollTop, change the elements other CSS properties like:

  - [CSS Transforms](https://www.w3schools.com/cssref/css3_pr_transform.asp)
  - [CSS Transitions](https://www.w3schools.com/cssref/css3_pr_transition.asp)
  - Try changing left, right
  * Add hover effects in css with `:hover`

#### Presentations!

At the end we'll all share our awesome, insane, subtle, or classy spinoffs we made with Parallax Scrolling!

## Resources
  * [Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
  * [Z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
  * [Parallax.js jQuery plugin](http://pixelcog.github.io/parallax.js/)
