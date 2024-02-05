import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Intro to Web Design & Visual Hierarchy",
  "excerpt": "Explore the basic roles and responsibilities of web designers, learn about visual hierarchy and review it in the physical and digital worlds.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _01_day_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Program Introduction</h2>
<h3 id="courses"><a aria-hidden="true" tabindex="-1" href="#courses"><span class="icon icon-link"></span></a>Courses</h3>
<h4 id="dsgn-270-web-design"><a aria-hidden="true" tabindex="-1" href="#dsgn-270-web-design"><span class="icon icon-link"></span></a>DSGN 270: Web Design</h4>
<h4 id="cpnt-201-web-development-tools"><a aria-hidden="true" tabindex="-1" href="#cpnt-201-web-development-tools"><span class="icon icon-link"></span></a>CPNT 201: Web Development Tools</h4>
<h4 id="cpnt-260-html-and-css"><a aria-hidden="true" tabindex="-1" href="#cpnt-260-html-and-css"><span class="icon icon-link"></span></a>CPNT 260: HTML and CSS</h4>
<h4 id="cpnt-262-javascript"><a aria-hidden="true" tabindex="-1" href="#cpnt-262-javascript"><span class="icon icon-link"></span></a>CPNT 262: Javascript</h4>
<h4 id="cpnt-200-databases-and-cms-systems"><a aria-hidden="true" tabindex="-1" href="#cpnt-200-databases-and-cms-systems"><span class="icon icon-link"></span></a>CPNT 200: Databases and CMS Systems</h4>
<h4 id="cpnt-264-business"><a aria-hidden="true" tabindex="-1" href="#cpnt-264-business"><span class="icon icon-link"></span></a>CPNT 264: Business</h4>
<h3 id="communication"><a aria-hidden="true" tabindex="-1" href="#communication"><span class="icon icon-link"></span></a>Communication</h3>
<ul><li><a href="https://join.slack.com/t/sait-wbdv/shared_invite/zt-2a62uacxe-XiNBXAo9p_2x3TDW5g~bvA" rel="nofollow">Slack Invite Link (click here)</a><ul><li>We will use the winter-2024 channel</li></ul></li></ul>
<h4 id="instructors"><a aria-hidden="true" tabindex="-1" href="#instructors"><span class="icon icon-link"></span></a>Instructors</h4>
<ul><li>Ashlyn (Ash) Knox: <a href="mailto:ashlyn.knox@sait.ca">ashlyn.knox@sait.ca</a><ul><li>DSGN-270, CPNT-262, CPNT-200, CPNT-265</li></ul></li>
<li>Temitope (Temi) Elodimuor : <a href="mailto:temitope.elodimuor@sait.ca">temitope.elodimuor@sait.ca</a><ul><li>CPNT-201, CPNT-260, CPNT-265</li></ul></li>
<li>Dasa Chadwick: <a href="mailto:dasa.chadwick@sait.ca">dasa.chadwick@sait.ca</a><ul><li>CPNT-264</li></ul></li>
<li>Terry O’Dwyer: <a href="mailto:terry.odwyer@sait.ca">terry.odwyer@sait.ca</a><ul><li>CPLN 240</li></ul></li></ul>
<h3 id="scrum-teams"><a aria-hidden="true" tabindex="-1" href="#scrum-teams"><span class="icon icon-link"></span></a>Scrum Teams</h3>
<p>Scrum is a style of workflow that is commonly used in software development. In it, projects are organized into “sprints” (usually 2 weeks) where the team spents a bit of time every day checking in with one another and coordinated efforts.</p>
<p>Regardless of course or other group assignments, you’ll have one scrum team for the first half of the semester, and then another scrum team for the second. Every monday, we’ll do a quick walk through of the week. Then every morning, you’ll have a check in with your scrum group to discuss:</p>
<ol><li>What did you work on yesterday? (outside of lecture time)</li>
<li>What are you working on today?</li>
<li>Are there any blocks? (challenges either with content or external that are stopping you from moving forward)</li></ol>
<p>This system is intended to help you identity potential challenges earlier and come up with ways to mitigate difficulties and obstacles.</p>
<h3 id="scrum-team-breakout-session"><a aria-hidden="true" tabindex="-1" href="#scrum-team-breakout-session"><span class="icon icon-link"></span></a>Scrum Team Breakout Session</h3>
<ul><li>Meet with your scrum team</li>
<li>Intro Discussion:<ul><li>what brought you to web development?</li>
<li>what do you see as potential strengths from other areas of your life/professional history?</li>
<li>what do you anticipate being major challenges?</li>
<li>what are you most excited for?</li></ul></li>
<li>Tool Discussion:<ul><li>what tools do you use to organize your tasks? (if you don’t have one, what do you intend to try)</li>
<li>what do you use to document notes?</li>
<li>have you used development tools before? (if so what?)</li>
<li>have you used design tools before? (if so what?)</li></ul></li></ul>
<hr>
<h2 id="course-overview">Course Overview</h2>
<p>DSGN-270 focuses on visual concepts used to make websites easy to navigate and use. We will practice skills used for User Interface (UI) design as well as User Experience (UX) research and design. This course will teach you to structure information effectively and to apply industry standard design principles to web content.</p>
<p>As design is partially a subjective discipline, grading won’t focus on stylistic choices beyond their relevance to the design concepts and principles learned in class.</p>
<h3 id="assessments"><a aria-hidden="true" tabindex="-1" href="#assessments"><span class="icon icon-link"></span></a>Assessments</h3>
<p>Assessments are broken up into smaller graded activities and assignments. Everything is open book and there are no in class tests.</p>
<p><strong>All submissions are done through d2l</strong></p>
<h4 id="sprint-activities-40"><a aria-hidden="true" tabindex="-1" href="#sprint-activities-40"><span class="icon icon-link"></span></a>Sprint Activities 40%</h4>
<ul><li>Visual Hierarchy Review <strong>10%</strong></li>
<li>SVG Logo Design <strong>10%</strong></li>
<li>Card Component Design <strong>10%</strong></li>
<li>Conduct a User Test <strong>10%</strong></li></ul>
<h4 id="assignments-60"><a aria-hidden="true" tabindex="-1" href="#assignments-60"><span class="icon icon-link"></span></a>Assignments 60%</h4>
<ul><li>Assignment 1: Design Moodboard <strong>20%</strong></li>
<li>Assignment 2: Website Wireframe <strong>20%</strong></li>
<li>Assignment 3: Website Mockup <strong>20%</strong></li></ul>
<h3 id="tools--software"><a aria-hidden="true" tabindex="-1" href="#tools--software"><span class="icon icon-link"></span></a>Tools &amp; Software</h3>
<ul><li><a href="https://figma.com" rel="nofollow">Figma</a>: Vector Design Tool</li>
<li><a href="https://www.figma.com/figjam/" rel="nofollow">Figjam</a>: Whiteboarding Tool</li>
<li><a href="https://jakearchibald.github.io/svgomg/" rel="nofollow">SVGOMG</a>: SVG Optimization Tool</li>
<li>Pen and Paper</li>
<li>Sticky Notes</li>
<li>Colored Markers</li></ul>
<h3 id="readings--resources"><a aria-hidden="true" tabindex="-1" href="#readings--resources"><span class="icon icon-link"></span></a>Readings &amp; Resources</h3>
<ul><li><a href="https://sensible.com/dont-make-me-think/" rel="nofollow">Don’t Make Me Think (Book)</a> by Steve Krug</li>
<li><a href="https://www.nngroup.com/" rel="nofollow">Nielsen Norman Group (Website)</a></li>
<li><a href="https://www.smashingmagazine.com/" rel="nofollow">Smashing Magazine (Website)</a></li>
<li><a href="https://help.figma.com" rel="nofollow">Figma Learn (Documentation)</a></li></ul>
<hr>
<h2 id="what-is-web-design">Overview of Web Design</h2>
<ul><li><a href="https://docs.google.com/presentation/d/1zT0zi6J7FBx70zMU0jepoAz0iwh6dZQwNLEiRBdbVaY/edit?usp=sharing" rel="nofollow">Link to Slide Deck</a><ul><li>Web design is generally broken up into UI and UX design.</li>
<li>It can help a developer to be able to at least speak in design terms for better team communication.</li>
<li>Depending on your team, you may have to do some design work. However in a lot of cases, there is a dedicated design team or designer that you would collaborate with.</li></ul></li></ul>
<h3 id="in-class-activity-design-treasure-hunt"><a aria-hidden="true" tabindex="-1" href="#in-class-activity-design-treasure-hunt"><span class="icon icon-link"></span></a>In Class Activity: Design Treasure Hunt</h3>
<ol><li>(30 minutes) In your scrum groups, go around campus and take pictures of effective design (more is better)</li></ol>
<ul><li>locations:<ul><li>go to tech support (in the basement)</li>
<li>go to a student center (check out Senator Burns)</li>
<li>the 4 nines (campus restaurant in the John Ware building)</li>
<li>Stan grad</li>
<li>Heritage hall</li></ul></li>
<li>look for just about anything<ul><li>well made posters, easy to follow instructions, beautiful architecture…</li>
<li>pay special attention to anything that requires interaction from a “user”</li></ul></li>
<li>make sure you can use your computer to access the images when you get back to class</li></ul>
<ol start="2"><li>Create a collage in <a href="https://www.figma.com/figjam/" rel="nofollow">figjam</a> of your favourite images</li>
<li>Make a few notes, mentally or written down about why the images where examples of effective design and/or why they visually attracted you</li>
<li>Discuss some of your images in your scrum groups</li></ol>
<h3 id="tool-introduction-figjam"><a aria-hidden="true" tabindex="-1" href="#tool-introduction-figjam"><span class="icon icon-link"></span></a>Tool Introduction: <a href="https://www.figma.com/figjam/" rel="nofollow">Figjam</a></h3>
<ul><li>Figjam is used alongside Figma as a whiteboarding space</li>
<li>Create an account with figma</li>
<li>Use figjam to plan, mindmap, brainstorm, and <strong>collaborate</strong></li>
<li><a href="https://help.figma.com/hc/en-us/articles/1500004362321-Guide-to-FigJam" rel="nofollow">Figjam Guide</a></li></ul>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2><a href="/courses/dsgn-270/assessments/assignment-1" target="_self">Assignment 1: Moodboard</a></h2>
<ul><li><strong>Due</strong>: Thursday January 18, 2024 @ 11:59 PM</li>
<li>Explore other places as well such as <strong>Pinterest</strong>, or <strong>Behance</strong></li>
<li>Use this as an opportunity to practice your search skills. <a href="https://gist.github.com/lilyx13/22502670afc429bb8d40d05930373f28" rel="nofollow">Review this gist for tips to improve web searching</a></li>
<li>Moodboards are intended to be creative spaces that we revisit — <strong>Create something that you would want to look at again later</strong></li></ul>`;
    }
  })}`;
});
export {
  _01_day_1 as default,
  metadata
};
