---
title: Mini Activity 2 - Before & After
excerpt: Learn how to make variables in javascript and render them on an html page
points: 10
type: assignment
---

<h2>Overview</h2>

This activity is designed for you to demonstrate your knowledge of javascript variables and primitive data types.

The objective is to render a series of string and number variables on an html page. However to do so, you will be using built in string and number methods to modify the values. You will also need to show the difference between `const` and `let` by reassigning.

_No CSS is necessary for this assignment, however you will be using JS and HTML_

<h2>Instructions</h2>

1. Create a new github repo
2. Inside it there should be 3 files:
   - index.html
   - client.js
   - README.md
3. Set up your HTML file and import the `client.js` file in the head tag with a defer attribute added
4. **Main Task** Code your methods as per the content requirements below in the client.js file with comments
5. Use either `document.querySelector()` or `document.getElementById()` and any appropriate methods to render your javascript variables onto the html page
6. Use headings in the html file to identify what each value is (these should relate to the comments in your js file)
7. Deploy to Github Pages

### Content

- Label and render the "Before" values
  - there will be 1 string, 1 number, 1 array, and 1 object
- Label and render the "After" values
  - There will be 8 values total in this section

**NOTE: This can be done in many ways, pick a layout that is easy to read and understand**

#### Display or modify your chosen number with two of the following:

- Increment or decrement a number using ++/--;
- Convert a number to a string with Number.toString();
- Convert a number to exponential notation with Number.toExponential();
- Convert a number to a string with a given number of decimals with Number.toFixed();
- Convert a number to a given number of floating point decimals with Number.toPrecision();
- Convert a number to a language-sensitive string representation with Number.toLocaleString()
- Convert a number or string to an integer with Number.parseInt()
- Convert a number or string to a floating point number with Number.parseFloat()
- Check if a number is an integer with Number.isInteger()
- Check if a “number” is actually a number with Number.isNaN()
- Check if a number is finite with Number.isFinite()

#### Display or modify your chosen string with two of the following:

- Show the number of characters in your string with String.length;
- Show a sub-string of your string with String.substr() or String.substring();
- Show a sub-string of your string with String.slice();
- Show the first character of your string;
- Show the last character of your string;
- Show the first index of a word that can be found in your string with String.indexOf();
- Replace a word or phrase in your string with a new word or phrase using String.replace() or String.replaceAll();
- Concatenate two strings with String.concat();
- Use String.startsWith() to show if your string starts with a word of your choice;
- Use String.endsWith() to show if your string starts with a word of your choice;
- Use String.includes() to show if a substring is present in your string;

### Display and/or modify your array with 2 of the following methods

- Add to an array using the `.push()` or `.unshift() method
- Remove from an array using the `.pop()` or `.shift()` method
- Merge two arrays together with `.concat()`
- Return a portion of an array with `.slice()` or `.splice()`
- Return only specific elements of an array with `.filter()` or `.find()`
- Verify if elements exist in an array with `.includes()`, .`every()`, or `.some()`

### Display and/or modify your object with 2 of the following methods

- Create and log an array of the values of your object with `Object.values()`
- Create and log an array of all the keys of your object with `Object.keys()`
- Create a nested array from your object by using `Object.entries()`
- Reduce an object's editability with `Object.freeze()` or `Object.seal()`
- Create a new object with the `new Object()` syntax
- remove a key-value pair from an object with the `delete` keyword

---

<h2>Rubric</h2>

### 2 Points: Number Modifications

- 1 initial number
- 2 number methods
- Values rendered on html page

### 2 Points: String Modifications

- 1 initial string
- 2 string methods
- Values rendered on html page

### 2 Points: Array Modifications

- 1 initial array
- 2 array methods
- Values rendered on html page

### 2 Points: Object Modifications

- 1 initial object
- 2 object methods
- Values rendered on html page
- if you are demonstrating freeze or similar methods, you will need to demonstrate the effect of the method

### Code Quality Requirements

- Use of camelCase for JS and kebab-case for HTML
- `const` vs `let` example
- Correct spacing and indentation
- Code has been commented to indicate purpose of each line

<h2>Submission Instructions</h2>

1. As a comment in D2L: share links to make it easy for the instructor to quickly evaluate your work:
   - GH repos, Pages, Projects (Beta), etc.
   - Codepens, Figma, FigJam, etc.
2. Double check the Activity for specific instructions.
3. If applicable, include a README containing the following;
   - Activity name and author;
   - Attributions: Did anyone help you? Give credit to any classmates, articles, tutorials, etc that helped you complete this project.
   - Include self-assessments, observations, research, etc under the heading “Code Journal” in your README.
4. Zip project repo and submit it.
