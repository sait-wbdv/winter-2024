import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Final Group Project - Blog Website",
  "type": "assignment",
  "points": 45
};
const Final_project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>In this group assignment, you will work with your classmates to create a database-driven blog that features a GUI CMS.</p>
<p>This can be on any topic though I recommend to do it as a tech blog (focus on writing content that you can present on in 265). The ideas don’t need to be novel, but should be meaningful. You can write tutorials, opinion pieces, explanations, reviews… whatever is relevant to you. If you’re at a loss for content, think about major ah-ha moment’s that you’ve had during the semester.</p>
<p><strong>Grading</strong>:</p>
<ul><li>Group mark: 40 points</li>
<li>Peer evaluation: 5 points</li></ul>
<hr>
<h2 id="marking-rubric"><a aria-hidden="true" tabindex="-1" href="#marking-rubric"><span class="icon icon-link"></span></a>Marking Rubric</h2>
<h3 id="10-points-database-configuration"><a aria-hidden="true" tabindex="-1" href="#10-points-database-configuration"><span class="icon icon-link"></span></a>10 points: Database Configuration</h3>
<ul><li>Supabase has been connected to your Sveltekit app</li>
<li>Supabase is also integraded with Directus CMS</li>
<li>Data organized via cms schema</li>
<li>Row level security policies set to select()</li></ul>
<h3 id="10-points-cms-fields-design--deployment"><a aria-hidden="true" tabindex="-1" href="#10-points-cms-fields-design--deployment"><span class="icon icon-link"></span></a>10 points: CMS Fields Design &amp; Deployment</h3>
<ul><li>Blog post fields configuration</li>
<li>Categories are used to organize posts</li>
<li>2 different types of posts</li>
<li>Content added to Directus (each person will write one blog entry)</li>
<li>Authors are added to CMS and author info is connected to the blogs</li></ul>
<h3 id="10-points-sveltekit-app-design-quality"><a aria-hidden="true" tabindex="-1" href="#10-points-sveltekit-app-design-quality"><span class="icon icon-link"></span></a>10 points: Sveltekit App Design Quality</h3>
<ul><li>Accessible fonts and contrast</li>
<li>Responsive design</li>
<li>Use of whitespace</li>
<li>Visual hierarchy principles</li>
<li>interactions (hover and click etc) are easy to follow and use</li></ul>
<h3 id="10-points-sveltekit-app-code-quality"><a aria-hidden="true" tabindex="-1" href="#10-points-sveltekit-app-code-quality"><span class="icon icon-link"></span></a>10 Points: Sveltekit App Code Quality</h3>
<ul><li>Normal routes are used for landing pages (non dynamic)</li>
<li>Dynamic routes are used for posts</li>
<li>Component naming conventions</li>
<li>Directory structure</li>
<li>backend load functions</li>
<li>variable and function naming</li>
<li>object, array, and function design</li></ul>
<h3 id="5-points-peer-evaluation"><a aria-hidden="true" tabindex="-1" href="#5-points-peer-evaluation"><span class="icon icon-link"></span></a>5 points: Peer Evaluation</h3>
<p>At the end of the Final Project, all team members must evaluate their teammates on a scale of 1-10. Each member’s mark for this portion will be the average score given to them by their teammates.</p>
<ul><li>You must submit an evaluation to receive marks for this component;</li>
<li>Evaluations will be submitted confidentially in Brightspace;</li>
<li>Your Instructor will adjust this mark based on Assigned tasks (see below) plus commits submitted to GitHub.</li></ul>
<h3 id="group-charter-gh-project"><a aria-hidden="true" tabindex="-1" href="#group-charter-gh-project"><span class="icon icon-link"></span></a>Group Charter (GH Project)</h3>
<p>To facilitate group communication and transparency, submit a <a href="https://github.com/features/issues" rel="nofollow">GitHub Project Board</a> with the following:</p>
<ol><li>Board README listing Team members and general roles and responsibilities;</li>
<li>Agile columns (i.e. To do, Doing, Done)</li>
<li>At least two or three board cards converted to <a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues" rel="nofollow">Issues</a> and <a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users" rel="nofollow">Assigned</a> to each team member that (as a group) each of you have committed to completing;</li></ol>
<hr>
<h2 id="submission-instructions"><a aria-hidden="true" tabindex="-1" href="#submission-instructions"><span class="icon icon-link"></span></a>Submission Instructions</h2>
<ul><li>Only 1 person needs to submit the project repo and deployed link</li>
<li>Instructor needs to be added to supabase</li>
<li><strong>everyone</strong> needs to submit a score for their teammates</li></ul>`;
});
export {
  Final_project as default,
  metadata
};
