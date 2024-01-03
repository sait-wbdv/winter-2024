import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Achievements Round 1",
  "type": "achievements",
  "points": 25
};
const Achievements_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="course-achievements"><a aria-hidden="true" tabindex="-1" href="#course-achievements"><span class="icon icon-link"></span></a>Course Achievements</h2>
<p>Points will be awarded for documentation of your final project prior to the Final Presentations.</p>
<hr>
<section class="cards"><ul><li><strong>Roster card information: <em>5 points</em></strong><ul><li>Display Name<ul><li>Does not have to be full name</li>
<li>Can be your nickname/handle</li></ul></li>
<li>Profile image<ul><li>aspect ratio: squarish</li>
<li>resolution: 500x500px or smaller</li>
<li>format: jpg, png, gif, webp</li></ul></li>
<li>Tagline/Title<ul><li>Examples:<ul><li>“Nuxt/Node/MongoDB”</li>
<li>“Junior Developer”</li>
<li>“Mother, Knitter, Coder”</li>
<li>“When’s Mando Season 3 Coming Out?!?” (this would not be considered a professional tagline)</li></ul></li></ul></li>
<li>Contact links (optional)<ul><li>Homepage url</li>
<li>Email address</li></ul></li>
<li>Social home page URLs<ul><li>GitHub (highly recommended)</li>
<li>Optional: Codepen, LinkedIn, Facebook, Instagram, Youtube, etc</li></ul></li></ul></li></ul></section>
<hr>
<h2 id="stage-work"><a aria-hidden="true" tabindex="-1" href="#stage-work"><span class="icon icon-link"></span></a>Stage work</h2>
<p>Points to be awarded for mini presentations to your classmates.</p>
<section class="cards"><ul><li><strong>Mini-lectures: <em>10 points</em></strong><ul><li>Extra points awarded:<ul><li>Second presentation: <em>5 point</em>;</li>
<li>Bonus points for Slides: <em>5 points</em>;</li>
<li>Group presentations: points are awarded to each presenter.</li></ul></li>
<li>Cameras-on</li>
<li>Time limit<ul><li>Individual: 5 minutes</li>
<li>Group (3 max): 10 minutes</li></ul></li></ul></li>
<li><strong>Instructional video: <em>10 points</em></strong><ul><li>10 minute time limit</li>
<li>Bookends required (title/credit screens)</li>
<li><em>5 bonus points</em> for openly licensed theme song!</li></ul></li>
<li><strong>Battlefield Discussion: <em>5 points</em></strong><ul><li>Book a round-table discussion in the main room if you have a real world client project you’d like to discuss with Ash or Tony.</li>
<li>To submit: summarize the points covered in the discussion in your submitted README along with any relevant documentation.</li>
<li>30 mins max</li></ul></li>
<li><strong>Mini-workshop: <em>10 points</em></strong><ul><li>Host a technical activity</li>
<li>30 minutes demo max</li>
<li>5 bonus points available for:<ul><li>providing step-by-step instructions for audience to follow along</li>
<li>anyone who attempts the activity and submits feedback for improvement</li></ul></li></ul></li>
<li><strong>Pair-coding: <em>5 points</em></strong><ul><li>15-minutes of pair-coding with a partner (points available for each participant)</li>
<li>Must follow <a href="https://gist.github.com/acidtone/caa20b2520814a94240043c40301024a" rel="nofollow">pair coding best practices</a></li>
<li>Can be stacked with Mini-workshop achievement.</li></ul></li></ul></section>
<hr>
<h2>Project Documentation</h2>
<section class="cards"><ol><li><strong>Mood Board: <em>10 points</em></strong><ul><li>Color pallettes (3-5 colors per pallette)</li>
<li>Typography (2-3 type faces per group)</li>
<li>Screenshots of user interface (ui) elements on at least 3 other websites<ul><li>headers and hero sections</li>
<li>navigation</li>
<li>lists</li>
<li>cards</li>
<li>call to action</li>
<li>1 section of content that shows good visual hierarchy</li></ul></li>
<li>See: <a href="/courses/dsgn-270/assessments/assignment-1">DSGN 270 Assignment 1</a> for more details/instructions</li></ul></li>
<li><strong>Taskflow: <em>5 points</em></strong><ul><li>Complete a minimum 8-item Taskflow for a well defined User Story related to your project.</li>
<li>Submit as a markdown or README file to Brightspace.</li></ul></li>
<li><strong>Wireframes/Mockups/Prototype: <em>5 points</em></strong><ul><li>Complete either low-fidelity wireframes or high-fidelity mockups for at least 5 screens based on a well defined User Story related to your project.</li>
<li>Submit screencaps of your wireframes to Brightspace.</li>
<li>5 bonus points available for:<ul><li>use of components</li>
<li>interactive prototype</li></ul></li></ul></li>
<li><strong>Flowchart: <em>5 points</em></strong><ul><li>Complete a flowchart of a complex process you plan to implement in your project. The scope should not be trivial and it should help you plan the software implementation of a software feature.</li>
<li>Submit a share link (Figma, LucidCharts, etc) in Brightspace.</li></ul></li>
<li><strong>ER Diagram: <em>5 points</em></strong><ul><li>Complete an ER diagram of a database you plan to use in your project. It should:<ul><li>Show proper naming conventions</li>
<li>Define all tables, columns and data types</li>
<li>Define all primary and foreign keys</li></ul></li>
<li>Submit a share link (Figma, LucidCharts, etc) in Brightspace.</li></ul></li>
<li><strong>Task Board: <em>1 point per feature (max 10 points)</em></strong><ul><li>Using GH Projects, Trello or similar task tracking tool:<ol><li>Optional: Create a “Final Project” repo for your tasks.</li>
<li>Create a card representing a task you need to complete for your final project presentation. Put it in a <em>To Do</em>, <em>Backlog</em> or similar list.</li>
<li>To submit: Take screencap of project board and total your point for a single Brightspace submission.</li></ol></li>
<li>A “Task” is loosely defined but it should be a non-trivial activity that brings you closer to your Final Project Presentation. Examples:<ul><li>“Implement personal access token for <em>GitHub</em> API”</li>
<li>“Create logic flowchart for sign-in process”</li>
<li>“Create image gallery from JSON data using fetch and a loop”</li></ul></li>
<li>Tasks should be submitted in good faith: no cheesy tasks like “tie shoelaces”.</li></ul></li></ol></section>`;
});
export {
  Achievements_1 as default,
  metadata
};
