import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Built in Features of JS",
  "excerpt": "This class introduces the number type and operators that can be used with it.",
  "status": "announced"
};
const { title, excerpt, status } = metadata;
const _03_day_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li>Skim <a href="https://dev.to/carlosrafael22/back-to-the-basics-primitive-and-object-types-in-javascript-18c2https://developer.mozilla.org/en-US/docs/Glossary/Primitive" rel="nofollow">Javascript Types</a><ul><li>Focus on <strong>primitive types</strong></li></ul></li>
<li>Skim <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math" rel="nofollow">Basic Math in Javascript</a></li>
<li>Skim <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects" rel="nofollow">Standard built in objects</a></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Morning Standup</h2>
- Key takeaway from yesterdays class?
- what did you work on yesterday?
- what are you doing today?
- do you have any blocks?
<hr>
<h2>1. Handling Errors</h2>
<p><a href="/slides/cpnt-262/js-errors"><img src="/images/slides/cpnt-262/js-errors.png" alt="Slides - handling errors"></a></p>
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>syntax errors = code not written correctly</li>
<li>logic errors = code not working correctly</li>
<li>use dev tools to check for errors</li>
<li>console.log() is your best friend for diagnosing errors</li></ul>
<hr>
<h2>2. Useful Javascript Objects</h2>
<p><a href="/slides/cpnt-262/js-useful-objects"><img src="/images/slides/cpnt-262/js-useful-objects.png" alt="Slides - Useful JS Objects"></a></p>
<h3 id="key-takeaways-1"><a aria-hidden="true" tabindex="-1" href="#key-takeaways-1"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>DOM methods like <code>document.querySelector()</code> are used by js to interact with html</li>
<li>use innerText over innerHTML (innerHTML can be dangerous)</li></ul>
<h3 id="dom-node-activity"><a aria-hidden="true" tabindex="-1" href="#dom-node-activity"><span class="icon icon-link"></span></a>DOM Node Activity</h3>
<ul><li>In <a href="https://codepen.io" rel="nofollow">codepen</a> copy some of the variables that you created yesterday into the javascript box</li>
<li>use <code>document.querySelector()</code> with the <code>.innerHTML</code>, <code>.textContent</code>, or <code>.innerText</code> methods to render strings to the html page<ul><li>note: all 3 of those do slightly different things</li></ul></li></ul>
<hr>
<h2>3. The Math Object</h2>
<ul><li>Slides begin on slide 12 of the abovelinked deck</li></ul>
<h3 id="useful-math-methods"><a aria-hidden="true" tabindex="-1" href="#useful-math-methods"><span class="icon icon-link"></span></a>Useful Math methods</h3>
<ul><li><code>Math.min()</code>: find lowest value in a list</li>
<li><code>Math.max()</code>: find highest value in alist</li>
<li><code>Math.round()</code>: round a number to nearest integer</li>
<li><code>Math.floor()</code>: round down to nearest int</li>
<li><code>Math.ceil()</code>: round up to the nearest int</li>
<li><code>Math.sqrt()</code>: return square root of a number</li>
<li><code>Math.pow()</code>: return value of x to power of y</li>
<li><code>Math.random()</code>: return a random number between 0 and 1</li></ul>
<hr>
<h2>Numbers and Math in JS</h2>
<p><a href="/slides/cpnt-262/js-numbers-math"><img src="/images/slides/cpnt-262/js-numbers-math.png" alt="Numbers and Math"></a></p>
<h3 id="key-takeaways-2"><a aria-hidden="true" tabindex="-1" href="#key-takeaways-2"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<h4 id="operators"><a aria-hidden="true" tabindex="-1" href="#operators"><span class="icon icon-link"></span></a>Operators</h4>
<ul><li>addition <code>+</code></li>
<li>subtraction <code>-</code></li>
<li>multiplication <code>*</code></li>
<li>division <code>/</code></li>
<li>remainder <code>%</code></li>
<li>exponent <code>**</code></li>
<li>increment <code>++</code></li>
<li>decrement <code>--</code></li></ul>
<h4 id="order-of-operations"><a aria-hidden="true" tabindex="-1" href="#order-of-operations"><span class="icon icon-link"></span></a>Order of Operations</h4>
<ol><li>Brackets</li>
<li>Exponents</li>
<li>Divide/Multiply</li>
<li>Add/Subtract</li></ol>
<h2 id="activity"><a aria-hidden="true" tabindex="-1" href="#activity"><span class="icon icon-link"></span></a>Activity</h2>
<ul><li>Practice using each of the above syntaxes at least once in the console or node</li></ul>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2><a href="/courses/cpnt-262/assessments/activity-2">Mini Activity 2: Before and After</a></h2>
<ul><li><strong>Due:</strong>: February 14</li>
<li><strong>Weight</strong>: 10%</li>
<li><strong>Objective</strong>: Lean how to work with javascript variables</li></ul>`;
    }
  })}`;
});
export {
  _03_day_3 as default,
  metadata
};
