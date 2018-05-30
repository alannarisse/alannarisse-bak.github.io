## Technical questions

* What is the purpose of the doctype command? [(WD Lesson 1.1)](https://courses.thinkful.com/web-dev-001v1/lesson/1.1)
* What is a `<head>` element? [(WD Lesson 1.1)](https://courses.thinkful.com/web-dev-001v1/lesson/1.1)
* What is semantic HTML, and why is it important? [(WD Lesson 1.2)](https://courses.thinkful.com/web-dev-001v1/lesson/1.2)
* What is the difference between classes and IDs in HTML and CSS? [(WD Lesson 1.3)](https://courses.thinkful.com/web-dev-001v1/lesson/1.3)
* What does `* { box-sizing: border-box; }` do? What are its advantages? [(WD Lesson 1.3)](https://courses.thinkful.com/web-dev-001v1/lesson/1.3)
* How much space does this element take up, assuming we use the default setting for `box-sixing`? [(WD Lesson 1.3)](https://courses.thinkful.com/web-dev-001v1/lesson/1.3)
  ```CSS
  div {
    border: 6px solid #949599;
    height: 100px;
    margin: 20px;
    padding: 20px;
    width: 400px;
  }
  ```
* What's an example of a situation where  you would use a `<form>` element? [(WD Lesson 1.5)](https://courses.thinkful.com/web-dev-001v1/lesson/1.5)
* What are media queries? [(WD Lesson 1.6)](https://courses.thinkful.com/web-dev-001v1/lesson/1.6)
* What is a function? [(WD Lesson 2.2)](https://courses.thinkful.com/web-dev-001v1/lesson/2.2)
* When using git, what is a merge conflict and how do you handle it? [(Git Lesson 2)](https://courses.thinkful.com/git-cmd-001v1/lesson/2)

## Live coding challenges

* In a text editor, create a static web page that says "Hello Interview!" in red, sans-serif font and includes a title element. Open the page in the browser. [(WD Lesson 1.1)](https://courses.thinkful.com/web-dev-001v1/lesson/1.1)
* [This project was started by 1 of your designers, and they are having some trouble getting the layout correct.](https://repl.it/@thinkful/about-me-eval-question)
	* First, they used all div tags, so there's no way of knowing what the content is. Re-structure the HTML with semantic tags. 
	* Second, this page is not accessible. Re-structure the HTML to make it work correctly for screen readers. 
	* Next, there's an awful looking white bar at the top. The goal is to get the header to have a full-width image, with a centered title. 
	* Finally, you will see 3 green `textBoxes`. They should line up in a single row. 
(WD Lesson [1.2](https://courses.thinkful.com/web-dev-001v1/lesson/1.2), [1.3](https://courses.thinkful.com/web-dev-001v1/lesson/1.3), [1.4](https://courses.thinkful.com/web-dev-001v1/lesson/1.4))
* Open the JS console and declare a variable whose value can be reassigned. [(WD Lesson 2.1)](https://courses.thinkful.com/web-dev-001v1/lesson/2.1)
* [Define a function called `print` that takes 1 argument — `toPrint` — and logs `toPrint` to the console.](https://repl.it/@thinkful/print-function-eval-question) Now, invoke that function. [(WD Lesson 2.2)](https://courses.thinkful.com/web-dev-001v1/lesson/2.2)
* [Write a function that accepts 1 integer as an argument.](https://repl.it/@thinkful/divisible-by-eval-question) The function should return `true` if the number is divisible by either 3 or 5, and return `false` otherwise. [(WD Lesson 2.3)](https://courses.thinkful.com/web-dev-001v1/lesson/2.3)
* [Write a function that accepts an array of test scores as an argument.](https://repl.it/@thinkful/test-scores-eval-question) The function should return the number of test scores that are an 80 or higher. [(WD Lesson 2.4)](https://courses.thinkful.com/web-dev-001v1/lesson/2.4)
* [Write a function called `makeOrder`.](https://repl.it/@thinkful/factory-function-eval-question) It should take a table number, an array of order items, and an order status as arguments. It should return an object with the keys `tableNumber`, `order`, and `status`, and their associated values. [(WD Lesson 2.6)](https://courses.thinkful.com/web-dev-001v1/lesson/2.6)
* You've just been given a design and wireframe for a new web page. Share your screen and show me how you would go about setting this project up with Git and GitHub. (Git Lesson [2](https://courses.thinkful.com/git-cmd-001v1/lesson/2), [3](https://courses.thinkful.com/git-cmd-001v1/lesson/3))