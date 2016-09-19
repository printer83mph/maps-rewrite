# maps-rewrite
A rewrite of another project of mine, Mostly Accurate Physics Simulation
Created from scratch by Thomas Shaw with p5.js



## Instructions

### How do I start?

Open index.html. Double clicking it should work, but if it doesn't open with whatever browser you want to use. Remember that this is a browser based program, so refreshing the page should fix any issues that pop up.

### How do I do things?

*Note: If any of these don't work, click inside the browser window to make sure your keyboard is recognized.*

* Use F to create a ball of random mass at your mouse location. Don't worry, they all have the same density, so you can tell their mass by their size.
* Press R over a ball to remove it, and C to remove all balls from the screen.
* Click and hold on a ball to grab hold of it, the force applied on it is relative to the distance from the center of it to your mouse.

### What do the lines mean?

* Red is acceleration, so if you're not dragging the ball, it'll just be some downwards force from gravity.
* Blue is velocity, this will change depending on the speed and direction of the ball.
* Black is the grabber line from your mouse to the ball, the longer it is the harder it pulls the ball.



### Credits

I wrote the ball physics and drawing code on p5.js, a super awesome js library! Check it out [here](http://p5js.org/)
