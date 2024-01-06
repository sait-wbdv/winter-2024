import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Achievements Round 2",
  "type": "achievements",
  "points": 45
};
const Achievements_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3 id="proof-of-work"><a aria-hidden="true" tabindex="-1" href="#proof-of-work"><span class="icon icon-link"></span></a>Proof of Work</h3>
<p>Earn points for working on your Final Project!</p>
<section class="cards"><ul><li><strong>Project Card Completion: 5 points(ish)</strong><ul><li>Show that you’ve worked toward completing a Card on your task board. Scope of work should not be trivial. Aim for a couple hours of work.</li>
<li>Submit a link or file showing your work. For example:<ul><li>Git commit(s)</li>
<li>Logo as image file</li>
<li>Figma link</li></ul></li>
<li>Convert card to Issue and submit link to completed Issue.</li></ul></li>
<li><strong>One-on-one Evaluation: Points will vary</strong><ul><li>Book a time with your Instructor to manually show your Proof of Work.</li>
<li>Open Lab Times are 8-9am and the afternoon of each class day.</li></ul></li></ul></section>
<hr>
<h3 id="plugin-away"><a aria-hidden="true" tabindex="-1" href="#plugin-away"><span class="icon icon-link"></span></a>Plugin’ away</h3>
<section class="cards"><ul><li><strong>3rd-party plugin/library implementation: <em>5 points</em></strong><ul><li>Show that you’ve installed and implemented a 3rd party plugin from the following list (<em>if</em> you haven’t already submitted a similar achievement in a previous course):<ul><li>Greensock, anime.js, etc</li>
<li>Chart.js or similar</li>
<li>Tone.js</li>
<li>???</li></ul></li></ul></li>
<li><strong>Activity/Exercise: <em>5 points</em></strong><ul><li>Submit a step-by-step activity that other students/learners can follow to complete a nerdy task. For example:<ul><li>As an addition to another Plugin’ Away achievement</li>
<li>A learning exercise that can be used for future lessons in this program</li></ul></li>
<li>Example Activity: <a href="https://github.com/acidtone/nuxt-github-api" rel="nofollow">Authenticated GitHub API on Nuxt</a></li></ul></li>
<li><strong>Frontend Framework Implementation: <em>10 points</em></strong><ul><li>Implement a sample app using one of the following frameworks:<ul><li>ReactJS/NextJS</li>
<li>VueJS/NuxtJS</li>
<li>Svelte: features not covered in class</li>
<li>Wordpress</li></ul></li></ul></li>
<li><strong>Tool time: <em>5 points</em></strong>
Demonstration of skillz in a specialized software tool <em>not</em>, covered in class:<ul><li>Docker</li>
<li>Postman API tests</li>
<li>etc</li></ul></li></ul></section>
<hr>
<h2>Devops</h2>
<section class="cards"><ul><li><strong>Custom Domain on HTTPS: <em>5 points</em></strong><ul><li>Deploy a web site or app with a custom domain</li>
<li>Must be deployed to a live server such as GH Pages, Heroku or similar</li>
<li>Security certificate must be used to deploy domain on HTTPS</li></ul></li>
<li><strong>API Authentication: <em>5 points</em></strong>
Connect to and implement an authenticated API not covered previously in class or assessments<ul><li>Create an Authentication key/token</li>
<li>Implement a Minimal Viable Product (MPV) implementing the API</li>
<li>Above and Beyond bonus: 5 points<ul><li>additional achievement for extra tricky APIs</li>
<li>Examples:<ul><li>Multiple tokens/keys<ul><li>Twitter bearer tokens</li></ul></li></ul></li></ul></li></ul></li></ul></section>
<hr>
<h3 id="friendly-neighbour"><a aria-hidden="true" tabindex="-1" href="#friendly-neighbour"><span class="icon icon-link"></span></a>Friendly Neighbour</h3>
<p>Points to be awarded when submitting making the world a better place for other coders.</p>
<section class="cards"><ul><li><strong>Mini-workshop Critique: <em>5 points</em></strong><ul><li>Attempt step-by-step instructions provided as a Mini-workshop (see above) by a classmate.</li>
<li>Provide feedback for improvement via repo Issue or Comment.</li></ul></li>
<li><strong>First Responder: <em>5 points</em></strong><ul><li>Be the first to cheer on your classmates during a presentation or workshop!</li>
<li>This achievement will only be given out:<ul><li>once per person</li>
<li>once per day</li>
<li>during Weeks 13 and 14</li></ul></li>
<li>The bar will be raised (iow, you have to do more to earn it) as more Achievements are handed out</li></ul></li>
<li><strong>Pull Request: <em>5 points</em></strong><ul><li>Submit a Pull Request to a public repo</li>
<li>Submission must fix a real issue in the repo. No “my first pull request” exercises.</li>
<li>Repo must be a legitimate project. IOW, repos belonging to a classmate or the instructor do not qualify.</li>
<li><em>5 point bonus</em> for a PR that is accepted and merged.</li></ul></li></ul></section>`;
});
export {
  Achievements_2 as default,
  metadata
};
