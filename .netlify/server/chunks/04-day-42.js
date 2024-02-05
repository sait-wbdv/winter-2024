import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Collaborating with Project Boards",
  "excerpt": "In this session, you will collaborate with a team using a project board and user stories.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _04_day_4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<hr>
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `
<h2>Housekeeping</h2>
<ul><li>Announced: <a href="/courses/cpnt-201/assessments/assignment-2">CPNT 201 Assignment 2</a><ul><li>Weight: 20%</li>
<li>Due: Today (Friday January 26 @ 11:59pm)</li></ul></li></ul>
<hr>
<h2>agile in Software Development (lowercase)</h2>
<h3 id="what-is-agile"><a aria-hidden="true" tabindex="-1" href="#what-is-agile"><span class="icon icon-link"></span></a>What is Agile</h3>
<p>The Agile methodology is a project management approach that involves breaking the project into phases and emphasizes continuous collaboration and improvement. Teams follow a cycle of planning, executing, and evaluating.</p>
<h3 id="the-agile-manifesto"><a aria-hidden="true" tabindex="-1" href="#the-agile-manifesto"><span class="icon icon-link"></span></a>The Agile Manifesto</h3>
<p><a href="https://agilemanifesto.org/" rel="nofollow">Manifesto for Agile Software Development</a></p>
<h3 id="key-goal"><a aria-hidden="true" tabindex="-1" href="#key-goal"><span class="icon icon-link"></span></a>Key Goal</h3>
<p>Delivery of software as a “unit of work/value”</p>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://agilemanifesto.org/" rel="nofollow">Manifesto for Agile Software Development</a></li>
<li><a href="https://www.atlassian.com/agile" rel="nofollow">What is Agile</a></li></ul>
<hr>

<h2>Agile Methodologies</h2>
<p><a href="/slides/cpnt-201/agile-methodologies"><img src="/images/slides/cpnt-201/agile-methodologies.png" alt="Agile Methodologies"></a></p>
<h3 id="materials-1"><a aria-hidden="true" tabindex="-1" href="#materials-1"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://www.atlassian.com/agile/kanban/boards" rel="nofollow">What is a Kanban Board</a></li>
<li>Read <a href="https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects" rel="nofollow">Github Projects Docs</a></li>
<li><a href="https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/best-practices-for-projects" rel="nofollow">Best Practices for Projects</a></li></ul>
<hr>
<h2>User Stories</h2>
<h3 id="materials-2"><a aria-hidden="true" tabindex="-1" href="#materials-2"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://stormotion.io/blog/how-to-write-a-good-user-story-with-examples-templates/" rel="nofollow">How to Write a Good User Story: with Examples &amp; Templates</a></li>
<li>Video: <a href="https://www.youtube.com/watch?v=apOvF9NVguA" rel="nofollow">Agile User Stories</a></li>
<li>Tony’s <a href="https://gist.github.com/acidtone/6f8b416c4c409c60148581f7ec806c46" rel="nofollow">Agile User Story Summary</a></li></ul>
<h3 id="activity-user-story-treasure-hunt"><a aria-hidden="true" tabindex="-1" href="#activity-user-story-treasure-hunt"><span class="icon icon-link"></span></a>Activity: User Story Treasure Hunt</h3>
<p>In groups of 2 or 3, find an example of a software feature that has a good User Story.</p>
<hr>
<h2>Definition of Done</h2>
<h3 id="ticket-types"><a aria-hidden="true" tabindex="-1" href="#ticket-types"><span class="icon icon-link"></span></a>Ticket Types</h3>
<dl><dt>Task (Chore)</dt><dd>Something that just has to be done. DoD: Could be almost anything that is well defined and actionable.</dd><dt>Bug</dt><dd>Something needs to be fixed. DoD: It&#39;s not broken.</dd><dt>Feature (Enhancement)</dt><dd>A new &quot;unit of value&quot; that benefits the user. DoD: See User Stories below.</dd><dt>Code Spike</dt><dd>A unit of value that has an unknown cost (time/resources) and/or feasibility. DoD: Key questions are answered within a defined window of time.</dd></dl>
<h3 id="activity-campus-treasure-hunt"><a aria-hidden="true" tabindex="-1" href="#activity-campus-treasure-hunt"><span class="icon icon-link"></span></a>Activity: Campus Treasure Hunt</h3>
<ul><li>Search the campus for tickets that could exist on a KanBan board of a SAIT employee or non-software profession taught at SAIT.</li>
<li>Categorize each ticket under each of the ticket types.</li></ul>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h3 id="github-project-board"><a aria-hidden="true" tabindex="-1" href="#github-project-board"><span class="icon icon-link"></span></a>GitHub Project Board</h3>
<p>Create a (public) GitHub Project Board (beta).</p>
<p>Submit a link to the project board as a comment in Brightspace.</p>
<h4 id="criteria"><a aria-hidden="true" tabindex="-1" href="#criteria"><span class="icon icon-link"></span></a>Criteria</h4>
<ol><li>Columns: To Do, Doing, Done (5 points)</li>
<li>10 Cards: - (1 point each for each card)<ul><li>Must have a well defined Definition of Done in the title or description.</li>
<li>Must have an example of all above ticket types.<ul><li>At least three are Features with well defined User Stories as DoD.</li></ul></li>
<li>Must have the ticket type in the title.</li>
<li>Can be examples from SAIT Campus, other software examples, this program, your life, etc.</li>
<li>At the top of To Do (or Doing/Done), at least one ticket should be converted to an Issue on a repo that you would like to complete over the weekend.<ul><li>It should have the appropriate Issue label.</li></ul></li></ul></li></ol>`;
    }
  })}
<hr>
${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Lesson Prep</h2>
<h3 id="user-stories"><a aria-hidden="true" tabindex="-1" href="#user-stories"><span class="icon icon-link"></span></a>User Stories</h3>
<ul><li><a href="https://stormotion.io/blog/how-to-write-a-good-user-story-with-examples-templates/" rel="nofollow">How to Write a Good User Story: with Examples &amp; Templates</a></li>
<li>Video: <a href="https://www.youtube.com/watch?v=apOvF9NVguA" rel="nofollow">Agile User Stories</a></li></ul>
<h3 id="kanban-boards"><a aria-hidden="true" tabindex="-1" href="#kanban-boards"><span class="icon icon-link"></span></a>Kanban Boards</h3>
<ul><li><a href="https://www.atlassian.com/agile/kanban/boards" rel="nofollow">What is a Kanban Board</a></li>
<li>Read <a href="https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects" rel="nofollow">Github Projects Docs</a></li>
<li><a href="https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/best-practices-for-projects" rel="nofollow">Best Practices for Projects</a></li></ul>`;
    }
  })}`;
});
export {
  _04_day_4 as default,
  metadata
};
