import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Sprint Activity 2 - SVG Logo Design",
  "excerpt": null,
  "points": 10,
  "type": "assignment"
};
const Sprint_activity_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Using Figma, create a simple and web friendly svg logo and render it on a live html site hosted on Github Pages.</p>
<p>For this assignment, you will create a logo and deliver 2 variants of the logo (monochrome and multi-colored). These will be deployed to a web page as an img and inline svg respectively.</p>
<p>Your monochrome logo should be added to the page with an img tag</p>
<p>The colored and/or animated logo should be added as an inline svg and styled using either transform attributes or with css transitions.</p>
<h3 id="instructions"><a aria-hidden="true" tabindex="-1" href="#instructions"><span class="icon icon-link"></span></a>Instructions</h3>
<ol><li>In Figma, create a simple logo (it can be for anything)</li>
<li>Use at least 3 paths to create the logo</li>
<li>Export your svg logo as an svg</li>
<li>Optimize the logo in <a href="https://jakearchibald.github.io/svgomg/" rel="nofollow">svgomg</a></li>
<li>Create a git repo and add an html page to it</li>
<li>Add the svg code to the html page inline</li>
<li>Add color (fill or stroke) to at least 1 path using css</li>
<li>Deploy the html page to github pages</li></ol>
<h3 id="rubric"><a aria-hidden="true" tabindex="-1" href="#rubric"><span class="icon icon-link"></span></a>Rubric</h3>
<ul><li>Up to 5 points for your logo design<ul><li>design quality</li>
<li>250-400px w/h</li>
<li>optimized monochrome version is 1 path</li>
<li>optimized colored version is at least 2 paths</li>
<li>follows best practices for web logos and icons</li></ul></li>
<li>Up to 5 points for inline svg<ul><li>css used to add colors to multi pathed logo</li>
<li>hover or other pseudo state (possibly with transition) on at least 1 of the logos</li>
<li>both logos are on the page</li>
<li>logos are displayed at appropriate sizes and positioning</li></ul></li></ul>
<hr>
<h2>Submission Instructions</h2>
<ul><li>Get a zip file of your project repo from github and add it to your submission</li>
<li>Add a link to your figma design space</li>
<li>Add a link to your Github Pages website</li>
<li>Add a link to your Github Repository</li></ul>`;
});
export {
  Sprint_activity_2 as default,
  metadata
};
