import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Final Project Presentation",
  "type": "assignment",
  "points": 30
};
const Final_project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="format"><a aria-hidden="true" tabindex="-1" href="#format"><span class="icon icon-link"></span></a>Format</h2>
<ul><li>Single presenter: 5 minutes</li>
<li>Group of 2: 10 minutes</li>
<li>3-5 minutes of Q &amp; A after each presentation</li></ul>
<hr>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<p>Your presentation will be marked. Each of the following will be <strong>worth 10 points</strong> for a total of 30 points.</p>
<h3 id="stage-presence"><a aria-hidden="true" tabindex="-1" href="#stage-presence"><span class="icon icon-link"></span></a>Stage Presence</h3>
<ul><li>Dress: Business casual or better</li>
<li>Speak clearly<ul><li>Good audio</li>
<li>Limit “ums” and “ahs”</li></ul></li>
<li>Smooth speaker transitions</li>
<li>Smooth screen sharing</li>
<li>Stage work<ul><li>Limit self-deprecation</li>
<li>Don’t announce problems if the audience doesn’t need to know</li></ul></li>
<li>Have backup and contingency plans in case something goes wrong</li>
<li>Pizazz (optional)<ul><li>Sound effects</li>
<li>Theme song(s)</li></ul></li></ul>
<h3 id="content"><a aria-hidden="true" tabindex="-1" href="#content"><span class="icon icon-link"></span></a>Content</h3>
<ul><li>Technically based:<ul><li>Includes technology covered in class</li>
<li>New technology learned outside of class</li>
<li>Proper use of domain-specific terminology</li></ul></li>
<li>Mix of mediums<ul><li>Lecture</li>
<li>Live-code</li>
<li>Slides</li>
<li>Demo</li></ul></li>
<li>Interactive: ways of including the audience (optional)<ul><li>Companion documents</li>
<li>Instructions or step-by-steps</li>
<li>Posting links in the chat</li></ul></li></ul>
<h3 id="time-limit"><a aria-hidden="true" tabindex="-1" href="#time-limit"><span class="icon icon-link"></span></a>Time limit</h3>
<ul><li>Individual: 4-6 minutes for full marks</li>
<li>Group: 9-11 minutes for full marks</li>
<li>Extra mark deduction if Ash has to stop you</li></ul>`;
});
export {
  Final_project as default,
  metadata
};
