# YouTube Search project

## Steps for the project
1. Make a search form in html
	- The class name you give your search text input (``<input type=text class="js-yt-query">``)will be what you use are your query (``q: 'js-yt-query'``).
	- 
2. Make a mock up in html of search results.
	- make one element (a div with thumbnail, link, title) then copy/paste it so you can see what the saerch results will look like as a big list.
	- the class name of the parent div you put it all in will be used to render the populated html to the page. Something like: ``<div class="js-search-results">``

3. Using the examples [in this page](https://developers.google.com/youtube/v3/docs/search/list), start stubbing out what functions you'll need in your js file. 
 - First, you'll need your api key. I'd recommend putting it in a variable.
 - Second you're going to need to get url, I'd recommend putting it in a variable.
 - You'll need some functions: 
 	- something to call the api 
 	- something to fetch and diplay the data.
 	- something to listen for form submissions.

- use the ``$.getJSON();`` [jQuery method](http://api.jquery.com/jquery.getjson/). it takes three parameters jQuery.getJSON( url [, data ] [, success ] )

### My example code can be found here [alanna's thinkful tube code](https://github.com/alannarisse/frontend_resources/tree/master/searchyoutube/ar-yt-search)

## Links for help:  [Code Academy tutorial](https://www.codecademy.com/en/courses/javascript-intermediate-en-757J2/0/1)

