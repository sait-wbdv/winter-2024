import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Sprint Activity 3 - Card Component Design",
  "excerpt": null,
  "points": 10,
  "type": "assignment",
  "status": "announced"
};
const Sprint_activity_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>In Figma, create a reusable card component and use it to render content for 3 different cards on a medium resolution mockup.</p>
<h3 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h3>
<ol><li>In figma, design a card component</li>
<li>Use placeholder content to fill the card (image, text, title)</li>
<li>Make sure your card follows principles of visual hierarchy</li>
<li>Apply the card 3 times on a separate frame (using Figma’s component workflow)</li></ol>
<ul><li>the frame should be desktop sized with a 12 column grid</li></ul>
<ol start="5"><li>Export the frame with 3 cards as a png</li>
<li>Submit the exported frame and a link to your design space</li></ol>
<h3 id="rubric"><a aria-hidden="true" tabindex="-1" href="#rubric"><span class="icon icon-link"></span></a>Rubric</h3>
<ul><li>5 points for the component design<ul><li>demonstrates the design principles learned in class</li>
<li>paths are labelled appropriately</li>
<li>follows conventions of card design</li></ul></li>
<li>5 points for card usage<ul><li>applied 3 times with different content in each card</li>
<li>applied in a desktop size frame using a 12 column grid</li></ul></li></ul>
<hr>
<h2>Submission Instructions</h2>
<ul><li>Export an image of your base component (naming should be something like “original-card.png”)</li>
<li>Also export a desktop sized frame that shows your component applied 3 times with unique content in each card (follow similar naming conventions but include the frame size in the title: “card-layout-1290_1080.png”)</li>
<li>Attach the two files to your submission</li>
<li>In the text box, add a link to your design space</li></ul>`;
});
export {
  Sprint_activity_3 as default,
  metadata
};
