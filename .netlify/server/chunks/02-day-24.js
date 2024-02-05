import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Introduction to Javascript",
  "excerpt": "Moving away from Scratch, we will learn about how Javascript fits into the browser triad. this class focuses on syntax basics with small practical examples.",
  "status": "announced"
};
const { title, excerpt, status } = metadata;
const _02_day_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li>Skim <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" rel="nofollow">What is Javascript</a></li>
<li>Watch <a href="https://www.youtube.com/watch?v=W6NZfCO5SIk" rel="nofollow">Learn JS with Mosh</a> for a tutorial oriented dip into Javascript</li>
<li>Read <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash" rel="nofollow">A first splash into javascript</a> by the Mdn</li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="morning-activity-merge-and-implement-our-intersection-code"><a aria-hidden="true" tabindex="-1" href="#morning-activity-merge-and-implement-our-intersection-code"><span class="icon icon-link"></span></a>Morning Activity: Merge and Implement our Intersection Code!</h3>
<h4 id="phase-1-talk-it-out-all-hands"><a aria-hidden="true" tabindex="-1" href="#phase-1-talk-it-out-all-hands"><span class="icon icon-link"></span></a>Phase 1: Talk it out (All hands)</h4>
<ul><li>Outline the overarching goal and parameters</li>
<li>Review and note each others control flow logic<ul><li>does anything need to change to work together?</li></ul></li>
<li>Visualize the functions with props</li>
<li>Each group should note some changes that they can make to their part of the program</li></ul>
<h4 id="phase-2-code-it-in-teams"><a aria-hidden="true" tabindex="-1" href="#phase-2-code-it-in-teams"><span class="icon icon-link"></span></a>Phase 2: Code it (In teams)</h4>
<ul><li>Make the changes to your algorithms as per all hands discussion</li>
<li>Simulate with props to test</li>
<li>Write the code down (1 algorithm per page) and label each one clearly based on what it does</li>
<li>Create any other props needed</li>
<li>Decide on who will <strong>execute</strong> the program commands and who will operate as variables in the program<ul><li>1-2 command executers</li>
<li>1-2 variable</li></ul></li></ul>
<h4 id="phase-3-run-the-program-all-hands"><a aria-hidden="true" tabindex="-1" href="#phase-3-run-the-program-all-hands"><span class="icon icon-link"></span></a>Phase 3: Run the Program (All hands)</h4>
<ul><li>Now we’ll pull it all together!</li>
<li>The ‘variable’ will play out the commands executed by the ‘functions’ using props</li>
<li>Then let’s see how many times we crash the program!</li>
<li>Document causes of crashes and note potential solutions</li></ul>
<hr>
<h2>1. Introduction to Javascript</h2>
<p><a href="/slides/cpnt-262/js-introduction"><img src="/images/slides/cpnt-262/js-intro.png" alt="Introduction to Javascript"></a></p>
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>The Browser Triad is <strong>HTML</strong> for content, <strong>CSS</strong> for presentation, and <strong>JS</strong> for behaviour</li>
<li>Javascript runs in <strong>and</strong> out of the browser</li>
<li>Add JS to HTML by using a <code>&lt;script src=&quot;&quot; type=&quot;&quot;&gt;&lt;/script&gt;</code> tag</li>
<li>camelCase for multi word variables</li>
<li>JS is case sensitive</li>
<li>Use whitespace to make code readable</li></ul>
<h3 id="small-group-discussion"><a aria-hidden="true" tabindex="-1" href="#small-group-discussion"><span class="icon icon-link"></span></a>Small Group Discussion</h3>
<ul><li>What features have you wanted to add to web pages that don’t seem possible with html and css?</li>
<li>Note the focus of the features that you want to add (some examples are listed here)<ul><li>social media</li>
<li>user interactions</li>
<li>data collection</li>
<li>artificial intelligence</li></ul></li>
<li>What can you assume about how javascript works based on your work with Scratch?</li></ul>
<hr>
<h2>2. Demo: Using the Browser console</h2>
<ul><li><a href="https://balsamiq.com/support/faqs/browserconsole/" rel="nofollow">Finding Your Browser’s Developer Console</a></li>
<li><a href="https://www.smashingmagazine.com/2023/06/popular-devtools-tips/" rel="nofollow">Useful Devtools tips and tricks</a></li></ul>
<h3 id="activity-experiment-with-the-browser-console"><a aria-hidden="true" tabindex="-1" href="#activity-experiment-with-the-browser-console"><span class="icon icon-link"></span></a>Activity: Experiment with the browser console</h3>
<ul><li>Try using <a href="https://www.geeksforgeeks.org/javascript-console-log-method/" rel="nofollow"><code>console.log()</code></a> to print out text<ul><li>try using words inside and outside of quotations</li>
<li>try using numbers inside and outside of qutotations</li>
<li><strong>what are the differences</strong></li></ul></li>
<li>Create a variable (use the following syntax)<ul><li><code>const myName = &quot;insert your name here&quot;</code> (use any sentence and variable name u want)</li></ul></li>
<li>Log the variable that you created with <code>console.log(myName)</code> (use the varaible name that you created)</li></ul>
<h4 id="debrief"><a aria-hidden="true" tabindex="-1" href="#debrief"><span class="icon icon-link"></span></a>Debrief</h4>
<ul><li>What errors did you run into?<ul><li>How did you solve them?</li></ul></li></ul>
<hr>
<h2>3. Declaring and assigning variables</h2>
<p><a href="/slides/cpnt-262/js-variables"><img src="/images/slides/cpnt-262/js-variables.png" alt="Slides - declaring and assigning variables"></a></p>
<p><strong>Materials</strong>:</p>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables" rel="nofollow">Storing the information you need — Variables</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings" rel="nofollow">Handling text — strings in JavaScript</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" rel="nofollow">Template literals</a></li></ul>
<h3 id="key-takeaways-variables"><a aria-hidden="true" tabindex="-1" href="#key-takeaways-variables"><span class="icon icon-link"></span></a>Key Takeaways (Variables)</h3>
<ul><li>Declaration creates a variable in memory</li>
<li>Assignment puts a value in a variable</li>
<li><code>const</code> variables can be reassigned</li>
<li><code>let</code> variables can be reassigned</li>
<li>default to const</li>
<li>use descriptive variable names with camelCase</li></ul>
<h4 id="discussion"><a aria-hidden="true" tabindex="-1" href="#discussion"><span class="icon icon-link"></span></a>Discussion</h4>
<ul><li>Open up Scratch and take a look at what you’ve been working on</li>
<li>What would be comparable to const and let variables in Scratch?</li></ul>
<h3 id="key-takeaways-types"><a aria-hidden="true" tabindex="-1" href="#key-takeaways-types"><span class="icon icon-link"></span></a>Key Takeaways (Types)</h3>
<ul><li>Primitive types = numbers, strings, booleans, null, and undefined</li>
<li>Complex types = arrays, objects, functions</li></ul>
<h3 id="data-types-activity"><a aria-hidden="true" tabindex="-1" href="#data-types-activity"><span class="icon icon-link"></span></a>Data Types Activity</h3>
<ul><li>In the browser console, try making and logging one of each of these variable types.<ul><li>string</li>
<li>number</li>
<li>boolean</li>
<li>array</li>
<li>object</li></ul></li>
<li>Use whatever names and content you want, I recommend to pick a movie, game, or something and pull from that</li></ul>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="work-through-the-first-15-30-free-code-camp-exercises"><a aria-hidden="true" tabindex="-1" href="#work-through-the-first-15-30-free-code-camp-exercises"><span class="icon icon-link"></span></a><a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" rel="nofollow">Work through the first 15-30 free code camp exercises</a></h2>
<ul><li>After completing, screenshot the curriculum screen to show which ones you did/how far you got</li>
<li>Submit screenshots to the dailies dropbox item in Brightspace</li>
<li>Include any questions that you would like addressed in class regarding any of the problems presented in the exercises<ul><li>I’ll review and try to address the questions tomorrow</li></ul></li></ul>`;
    }
  })}`;
});
export {
  _02_day_2 as default,
  metadata
};
