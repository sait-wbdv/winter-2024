import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Wireframing and UI Design",
  "excerpt": "Draft layout concepts on anything from a napkin to Figma, we will practice reducing user interfaces to low fidelity wireframes. By the end of this class you will have the skills to quickly create wireframes for your projects.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _03_day_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep Materials</h2>
<ul><li>Read <a href="https://medium.com/detaux/what-is-ui-ux-wireframe-designerrs-46dac9c8a153" rel="nofollow">Wireframing in UI/UX Design</a></li>
<li>Watch <a href="https://youtu.be/TIV1y11xz7k?si=BROBmfhYGT0-N5-K" rel="nofollow">User Flow Tutorial</a></li>
<li>Read <a href="https://www.lucidchart.com/pages/how-to-make-a-wireframe" rel="nofollow">7 Tips for Making Wireframes</a></li>
<li>Review <a href="https://bootcamp.uxdesign.cc/12-8-4-column-system-for-responsive-grids-df207a58ebc" rel="nofollow">12 - 8 - 4 Column Grids for Responsive Design</a></li></ul>
<h3 id="tools-for-class"><a aria-hidden="true" tabindex="-1" href="#tools-for-class"><span class="icon icon-link"></span></a>Tools for Class</h3>
<ul><li>Either pen and paper, tablet and stylus, or phone and stylus/finger</li>
<li>If you’re using a mobile device for design, find a good app to work with. For Example: <a href="https://concepts.app/en/" rel="nofollow">Concepts App is supported on most platforms</a></li></ul>
<hr>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Warm up: Webpage content audit</h2>
<p>Pick a website that you like, take some time to sketch out the content associated with each section. Note the intention, goals, and routes the user has access to at each section.</p>
<p>This can be done digitally or by hand, basically it’s a rough map of all the content and the objectives that the content supports.</p>
<p>Finally, note any particular UI elements that you think do a particularly good or bad job at supporting the user objectives.</p>
<p><strong>our goal is to establish the information hierarchy</strong></p>
<hr>
<h2>Wireframes and Web Design</h2>
<a href="https://docs.google.com/presentation/d/1GKMLXrThbNU5My3HywnR4Jjk_tLnGgYGW1B6Ffg-t6M/edit?usp=sharing"><img src="/images/design/wireframe-lecture-slides.png" alt="A link to the wireframe lecture slide content"></a>
<h3 id="key-takeaways--final-notes"><a aria-hidden="true" tabindex="-1" href="#key-takeaways--final-notes"><span class="icon icon-link"></span></a>Key Takeaways &amp; Final Notes</h3>
<ul><li>Wireframes are used to plan, debug, analyze designs</li>
<li>Wireframes are especially useful for blocking out how a site’s information hierarchy will be visually organized</li>
<li>Use wireframing to prevent bad UI/UX choices down the road</li>
<li>Low Fidelity Wireframes contain little to no detail</li>
<li>Medium Fidelity Wireframes contain some detail depending on the stage/situation of design</li>
<li>High Fidelity Wireframes/Mockups look close to the finished product</li>
<li>Prototypes are wireframes/mockups with actual interactive behaviour</li></ul>
<h2>Sketch a few wireframes: 20*min</h2>
<p>First do a wireframe of the site that you analyzed earlier today. <strong>Then</strong> brainstorm a list of websites that you would be intersted in building (topics, types… whatever jumps out at you).</p>
<h3 id="elements-to-use"><a aria-hidden="true" tabindex="-1" href="#elements-to-use"><span class="icon icon-link"></span></a>Elements to Use</h3>
<ul><li>Images: Squares with X in it</li>
<li>Icons: Circle or square with an X in it</li>
<li>Text: squiggles</li>
<li>Headings: Functional or Semantic (Go with what makes the most sense)</li>
<li>Cards, buttons, lists: squares, rounded squares, dots &amp; numbers</li></ul>
<h3 id="tools-to-use"><a aria-hidden="true" tabindex="-1" href="#tools-to-use"><span class="icon icon-link"></span></a>Tools to Use</h3>
<ul><li>Tablet, phone, or pen and paper.</li></ul>
<h3 id="steps"><a aria-hidden="true" tabindex="-1" href="#steps"><span class="icon icon-link"></span></a>Steps</h3>
<ol><li>Sketch out the webpage that you did a content audit of earlier</li>
<li>Using your tool of choice, sketch a wireframe of the entire page</li>
<li>Label shapes so it’s clear what everything represents</li>
<li>Switch gears and think of a list of sites that you want to build</li></ol>
<hr>
<h2>Wireflows: The Processual Wireframe</h2>
<p>A wireflow is like a flowchart version of a wireframe. It’s focused on capturing the process and <strong>task flow</strong> of particular tasks on a website.</p>
<p>We won’t be going into too much detail on wireflows, however we are going to outline wireflows based on one of the wireframes that we’ve sketched today.</p>
<h3 id="how-to-create-a-wireflow"><a aria-hidden="true" tabindex="-1" href="#how-to-create-a-wireflow"><span class="icon icon-link"></span></a>How to create a wireflow</h3>
<ol><li>Define the user objective (1 sentence statement on what the user would be trying to do)</li>
<li>Draw the start point and what page the user is on<ul><li>If there are multiple potential start points, you should write this down in a note</li>
<li>Generally use a square shape for the pages and stages</li></ul></li>
<li>Add steps based on the steps that exist<ul><li>diamond shapes represent decisions/questions that the user is faced with</li></ul></li>
<li>Continue documenting the possible options as the UI presents them until you reach the goal</li></ol>
<p><strong>Look at at the Wireflow in the introduction of this article for an example</strong></p>
<a href="https://www.nngroup.com/articles/wireflows/"><img src="/images/design/wireflow-article-nngroup.png" alt="QR Code to Wireflow Article" class="w-48"></a>
<h2>Wireflow Activity</h2>
<p>Using any of the wireframes that you’ve drafted and sketched today, use figjam to create a wireflow. Alternatively, do a wireflow of a website that you like. Think of this as a follow up to the <strong>links and nodes</strong> mental model exercises from day 2.</p>
<ol><li>Pick a wireframe, and copy into into the figjam file as your point of reference</li>
<li>Pick a task (that can be accomplished with the home page as the start point) and outline that title so it’s clear and easy to see</li>
<li>Step by step, work through everything needed to satisfy the userflow</li>
<li>Intentionally make wrong decisions, find out all aspects of the flow</li>
<li>Document other start points that exist (if they do)</li></ol>
<hr>
<h2>Activity: Bringing it all together</h2>
<p>Having done a content audit, a few wireframe sketches, and a wireflow, wireframe for the same content as before but come up with a completely different layout and order.</p>
<ul><li>ie: if you used a 3 card layout to display a couple of features, what is a different layout that you could use to present roughly the same content (in that case an image, at last 1 action, a title, and a description).</li>
<li>ie: In your nav bar, try re-organizing the content, maybe put nav items on the left</li></ul>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status, dueDate: false }, {}, {
    default: () => {
      return `<h2>Extra Activity</h2>
<p>This is intended to help prep for your assignments in cpnt-260. come up with design concepts and layouts for your webdev projects.</p>
<ul><li>Come up with a webpage idea that you would like to make for fun (don’t be too serious or ambitious just yet)</li>
<li>Make a quick moodboard of site inspiration (screenshots of pages with UI’s that you want to emulate/draw inspiration from) (max 15 minutes)</li>
<li>Think about the kind of content that you’d want to show on a page (again don’t think too hard on it: move quick and be intuitive)</li>
<li>Sketch it out</li>
<li>Write labels that point out the focus of content at each spot (main heading, product image, intro description…)</li>
<li>take a photo of your wireframe and send it to brightspace</li></ul>`;
    }
  })}`;
});
export {
  _03_day_3 as default,
  metadata
};
