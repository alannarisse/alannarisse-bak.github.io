
# JQuery

### General JQuery

- [JQuery API: Traversing](https://api.jquery.com/category/traversing/)
- [JQuery API: Manipulating](https://api.jquery.com/category/manipulation/)
- [Traversy Media: Intro to JQuery](https://www.youtube.com/watch?v=3nrLc_JOF7k)
- [JQuery API: prevent default](https://api.jquery.com/event.preventdefault/)
- [DivTips: Learn JQuery in 15 minutes](https://www.youtube.com/watch?v=Pt49y1gm0jw)
- [Learn JQuery: Event listeners](https://learn.jquery.com/events/event-basics/)

### Concepts

**The Dom: Document Object Model:** The Dom represents the current state of the page.. not html. When a page loads, the html is loaded into the dom and is then manipulated furter.

**Traversing:** The dom is a hierarchical structure, we access elements of the DOM by traversing them.

**Manipulation:** Finding an alement in the DOM and changing it's value or behavior.

**Script loading order:** always load jquery first if you are using it's libraries in your own js file.


**Examples fo EVENT LISTENERS**
- Listening for when a user submits a form, then validating the data they submitted and displaying helpful error messages if they need to modify their entries
- Listening for when a user types a search term into an input and displaying type-ahead text
- Listening for when a user clicks an element on the page and launching an animation

**event.stopPropagation():** makes sure if we click on a child element, that our javascript won't **traverse** back up the dom to it's parents.

**this dot:** this can replace event.currentTarget() because they do the same thing. They refer to the current object, this is self referencial.

**Binding:** Binding only happens once when the browser is first loaded. so elements that were added after load, cannot be found with this. We need to use *event delegation*. if an element was created with javascript, we have to instead listen to it's parent to see if it was changed, then delete the child.
So...
```
  $('ul').on('click', 'li', function(event) {
    this.remove();
  });
```

  instead of
 ```

 $('li').click(function(event) {
    this.remove();
  });
```


### My Favorite Front End Libraries

- [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) pop up galleries or single images. also works with video and audio files.
- [CSS Animate It](http://jackonthe.net/css3animateit/)
- [JQuery Focus Point](https://github.com/jonom/jquery-focuspoint) identify key point in images so they stay on screen even with screen resize.
- [RowGird.js](http://brunjo.github.io/rowGrid.js/) infinite scrolling
- [cycle2](http://jquery.malsup.com/cycle2/) slideshow/carousel
- [anime.js](http://animejs.com/) animation engine
- [fitvids](http://fitvidsjs.com/) great video tool for full width videos
- [waypoint](http://imakewebthings.com/waypoints/)easily scroll to different points in your page
- [chartjs](http://www.chartjs.org/) easy and beautiful data charts
- [chosen](https://harvesthq.github.io/chosen/) great for large select boxes
- [Stellar.js](http://markdalgleish.com/projects/stellar.js/) parallax jquery library
- [Validate form validation](https://jqueryvalidation.org/validate/)
- [alpaca forms](http://www.alpacajs.org/)
- [Infinite Ajax Scroll](https://infiniteajaxscroll.com/) seo friendly infinite page scrolling
- [chicken dinner](http://stephenscaff.com/demos/chickendinner/#) image randomizer
---

### More
- [W3: making accessible carousels](https://www.w3.org/WAI/tutorials/carousels/)
