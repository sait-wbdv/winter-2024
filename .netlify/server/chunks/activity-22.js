import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Mini Activity 2 - Before & After",
  "excerpt": "Learn how to make variables in javascript and render them on an html page",
  "points": 10,
  "type": "assignment"
};
const Activity_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Overview</h2>
<p>This activity is designed for you to demonstrate your knowledge of javascript variables and primitive data types.</p>
<p>The objective is to render a series of string and number variables on an html page. However to do so, you will be using built in string and number methods to modify the values. You will also need to show the difference between <code>const</code> and <code>let</code> by reassigning.</p>
<p><em>No CSS is necessary for this assignment, however you will be using JS and HTML</em></p>
<h2>Instructions</h2>
<ol><li>Create a new github repo</li>
<li>Inside it there should be 3 files:<ul><li>index.html</li>
<li>client.js</li>
<li>README.md</li></ul></li>
<li>Set up your HTML file and import the <code>client.js</code> file in the head tag with a defer attribute added</li>
<li><strong>Main Task</strong> Code your methods as per the content requirements below in the client.js file with comments</li>
<li>Use either <code>document.querySelector()</code> or <code>document.getElementById()</code> and any appropriate methods to render your javascript variables onto the html page</li>
<li>Use headings in the html file to identify what each value is (these should relate to the comments in your js file)</li>
<li>Deploy to Github Pages</li></ol>
<h3 id="content"><a aria-hidden="true" tabindex="-1" href="#content"><span class="icon icon-link"></span></a>Content</h3>
<ul><li>Label and render the “Before” values<ul><li>there will be 1 string, 1 number, 1 array, and 1 object</li></ul></li>
<li>Label and render the “After” values<ul><li>There will be 10 values total in this section</li></ul></li></ul>
<p><strong>NOTE: This can be done in many ways, pick a layout that is easy to read and understand</strong></p>
<h4 id="display-or-modify-your-chosen-number-with-two-of-the-following"><a aria-hidden="true" tabindex="-1" href="#display-or-modify-your-chosen-number-with-two-of-the-following"><span class="icon icon-link"></span></a>Display or modify your chosen number with two of the following:</h4>
<ul><li>Increment or decrement a number using ++/—;</li>
<li>Convert a number to a string with Number.toString();</li>
<li>Convert a number to exponential notation with Number.toExponential();</li>
<li>Convert a number to a string with a given number of decimals with Number.toFixed();</li>
<li>Convert a number to a given number of floating point decimals with Number.toPrecision();</li>
<li>Convert a number to a language-sensitive string representation with Number.toLocaleString()</li>
<li>Convert a number or string to an integer with Number.parseInt()</li>
<li>Convert a number or string to a floating point number with Number.parseFloat()</li>
<li>Check if a number is an integer with Number.isInteger()</li>
<li>Check if a “number” is actually a number with Number.isNaN()</li>
<li>Check if a number is finite with Number.isFinite()</li></ul>
<h4 id="display-or-modify-your-chosen-string-with-two-of-the-following"><a aria-hidden="true" tabindex="-1" href="#display-or-modify-your-chosen-string-with-two-of-the-following"><span class="icon icon-link"></span></a>Display or modify your chosen string with two of the following:</h4>
<ul><li>Show the number of characters in your string with String.length;</li>
<li>Show a sub-string of your string with String.substr() or String.substring();</li>
<li>Show a sub-string of your string with String.slice();</li>
<li>Show the first character of your string;</li>
<li>Show the last character of your string;</li>
<li>Show the first index of a word that can be found in your string with String.indexOf();</li>
<li>Replace a word or phrase in your string with a new word or phrase using String.replace() or String.replaceAll();</li>
<li>Concatenate two strings with String.concat();</li>
<li>Use String.startsWith() to show if your string starts with a word of your choice;</li>
<li>Use String.endsWith() to show if your string starts with a word of your choice;</li>
<li>Use String.includes() to show if a substring is present in your string;</li></ul>
<h3 id="display-andor-modify-your-array-with-2-of-the-following-methods"><a aria-hidden="true" tabindex="-1" href="#display-andor-modify-your-array-with-2-of-the-following-methods"><span class="icon icon-link"></span></a>Display and/or modify your array with 2 of the following methods</h3>
<ul><li>Add to an array using the <code>.push()</code> or \`.unshift() method</li>
<li>Remove from an array using the <code>.pop()</code> or <code>.shift()</code> method</li>
<li>Merge two arrays together with <code>.concat()</code></li>
<li>Return a portion of an array with <code>.slice()</code> or <code>.splice()</code></li>
<li>Return only specific elements of an array with <code>.filter()</code> or <code>.find()</code></li>
<li>Verify if elements exist in an array with <code>.includes()</code>, .<code>every()</code>, or <code>.some()</code></li></ul>
<h3 id="display-andor-modify-your-object-with-2-of-the-following-methods"><a aria-hidden="true" tabindex="-1" href="#display-andor-modify-your-object-with-2-of-the-following-methods"><span class="icon icon-link"></span></a>Display and/or modify your object with 2 of the following methods</h3>
<ul><li>Create and log an array of the values of your object with <code>Object.values()</code></li>
<li>Create and log an array of all the keys of your object with <code>Object.keys()</code></li>
<li>Create a nested array from your object by using <code>Object.entries()</code></li>
<li>Reduce an object’s editability with <code>Object.freeze()</code> or <code>Object.seal()</code></li>
<li>Create a new object with the <code>new Object()</code> syntax</li>
<li>remove a key-value pair from an object with the <code>delete</code> keyword</li></ul>
<hr>
<h2>Rubric</h2>
<h3 id="2-points-number-modifications"><a aria-hidden="true" tabindex="-1" href="#2-points-number-modifications"><span class="icon icon-link"></span></a>2 Points: Number Modifications</h3>
<ul><li>1 initial number</li>
<li>2 number methods</li>
<li>Values rendered on html page</li></ul>
<h3 id="2-points-string-modifications"><a aria-hidden="true" tabindex="-1" href="#2-points-string-modifications"><span class="icon icon-link"></span></a>2 Points: String Modifications</h3>
<ul><li>1 initial string</li>
<li>2 string methods</li>
<li>Values rendered on html page</li></ul>
<h3 id="2-points-array-modifications"><a aria-hidden="true" tabindex="-1" href="#2-points-array-modifications"><span class="icon icon-link"></span></a>2 Points: Array Modifications</h3>
<ul><li>1 initial array</li>
<li>2 array methods</li>
<li>Values rendered on html page</li></ul>
<h3 id="2-points-object-modifications"><a aria-hidden="true" tabindex="-1" href="#2-points-object-modifications"><span class="icon icon-link"></span></a>2 Points: Object Modifications</h3>
<ul><li>1 initial object</li>
<li>2 object methods</li>
<li>Values rendered on html page</li>
<li>if you are demonstrating freeze or similar methods, you will need to demonstrate the effect of the method</li></ul>
<h3 id="code-quality-requirements"><a aria-hidden="true" tabindex="-1" href="#code-quality-requirements"><span class="icon icon-link"></span></a>Code Quality Requirements</h3>
<ul><li>Use of camelCase for JS and kebab-case for HTML</li>
<li><code>const</code> vs <code>let</code> example</li>
<li>Correct spacing and indentation</li>
<li>Code has been commented to indicate purpose of each line</li></ul>
<h2>Submission Instructions</h2>
<ol><li>As a comment in D2L: share links to make it easy for the instructor to quickly evaluate your work:<ul><li>GH repos, Pages, Projects (Beta), etc.</li>
<li>Codepens, Figma, FigJam, etc.</li></ul></li>
<li>Double check the Activity for specific instructions.</li>
<li>If applicable, include a README containing the following;<ul><li>Activity name and author;</li>
<li>Attributions: Did anyone help you? Give credit to any classmates, articles, tutorials, etc that helped you complete this project.</li>
<li>Include self-assessments, observations, research, etc under the heading “Code Journal” in your README.</li></ul></li>
<li>Zip project repo and submit it.</li></ol>`;
});
export {
  Activity_2 as default,
  metadata
};
