import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Mini Activity 3 - Control Flows and Error Handling",
  "excerpt": "Organize data into objects and arrays. Use built in methods to access and manipulate their data.",
  "points": 5,
  "type": "assignment"
};
const Activity_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Overview</h2>
<p>Here you will practice setting up both control flows and error handling. This assignment is meant to help you develop your algorithm skills for creating interactive web elements.</p>
<h2>Instructions</h2>
<ol><li>Create a new github repo</li>
<li>Inside it there should be 3 files:<ul><li>index.html</li>
<li>client.js</li>
<li>README.md</li></ul></li>
<li>Set up your HTML file and import the <code>client.js</code> file in the head tag with a type=“module” attribute added</li>
<li>Complete two of the following challenges and render their output to your html page<ul><li>some are harder than others, they will all require that you combine the programming concepts and JS language features together to achieve the desired outcomes.</li></ul></li>
<li>In the readme, document problems that you ran into while creating this and how you approached solving them</li></ol>
<h3 id="challenges"><a aria-hidden="true" tabindex="-1" href="#challenges"><span class="icon icon-link"></span></a>Challenges</h3>
<ul><li>Render a set of cards onto an html page by using javascript’s template literals, an array of objects, and functions</li>
<li>Reverse a String</li>
<li>Find the longest word in a string</li>
<li>Remove all falsey values from an array (must include <code>false</code>, and <code>0</code>)</li>
<li>Title Case a sentence (all words get capitalized for their first letter)</li>
<li>Render a set of objects based on the truthiness of one of the key-value pairs (visual &amp; logical)</li>
<li>Draw 2 shapes with characters (leet code like challenges)<ul><li>ie: star pyramid, star hollow square</li></ul></li></ul>
<hr>
<h2>Rubric</h2>
<p>This assignment is graded out of 10 points total but is worth 5% of your total grade</p>
<h3 id="2-points-1st-challenge"><a aria-hidden="true" tabindex="-1" href="#2-points-1st-challenge"><span class="icon icon-link"></span></a>2 Points: 1st challenge</h3>
<ul><li>solution works</li>
<li>if solution doesn’t work, partial marks for well documented pseudocode showing how you’ve tried to make it work and a hypothesis of why it’s not working currently</li>
<li>content is rendered to an html page</li>
<li>solution is not a c/p from chatgpt or stack overflow</li>
<li>use of syntax ideas learned in this course or from course materials</li></ul>
<h3 id="2-points-2nd-challenge"><a aria-hidden="true" tabindex="-1" href="#2-points-2nd-challenge"><span class="icon icon-link"></span></a>2 Points: 2nd challenge</h3>
<ul><li>solution works</li>
<li>if solution doesn’t work, partial marks for well documented pseudocode showing how you’ve tried to make it work and a hypothesis of why it’s not working currently</li>
<li>content is rendered to an html page</li>
<li>solution is not a c/p from chatgpt or stack overflow</li>
<li>use of syntax ideas learned in this course or from course materials</li></ul>
<h3 id="2-points-code-quality"><a aria-hidden="true" tabindex="-1" href="#2-points-code-quality"><span class="icon icon-link"></span></a>2 Points: Code quality</h3>
<ul><li>js is in strict mode</li>
<li>modern syntax patterns used</li>
<li>camelCase syntax in js</li>
<li>whitespace used consistently and purposefully</li></ul>
<h3 id="2-points-notes-pseudocode-documentation"><a aria-hidden="true" tabindex="-1" href="#2-points-notes-pseudocode-documentation"><span class="icon icon-link"></span></a>2 Points: Notes, pseudocode, documentation</h3>
<ul><li>code comments</li>
<li>notes in the readme</li>
<li>flow charts and/or pseudocode</li>
<li>writing is clear and direct and relevant to the code it describes</li></ul>
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
  Activity_3 as default,
  metadata
};
