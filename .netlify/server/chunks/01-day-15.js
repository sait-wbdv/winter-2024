import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Think like a programmer",
  "excerpt": "Learn how to programmatically create and problem solve using Scratch as a visual tool. This class introduces basic programming principles.",
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _01_day_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li>Watch <a href="https://www.youtube.com/watch?v=azcrPFhaY9k" rel="nofollow">How to begin thinking like a programmer</a>: A lecture by Andy Harris - we will watch a few sections in class for discussion</li>
<li>Sign up and check out people’s projects on <a href="https://scratch.mit.edu" rel="nofollow">Scratch</a> - we will use this for our first assignment</li>
<li>Advanced Reading: <a href="https://medium.com/@idrazhar/0-to-1-series-how-javascript-works-under-the-hood-ffca74f1cc65" rel="nofollow">Javascript Under the Hood</a><ul><li>how javascript works</li>
<li>history of javascript</li></ul></li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>CPNT-262 Course High Level Overview</h2>
<ul><li><strong>Objectives</strong>:<ul><li>to learn fundamentals about computer programming</li>
<li>to be able to build websites using modern technologies</li>
<li>to create a foundation for your future in tech</li>
<li>Client and server programming</li>
<li>Javascript syntax and patterns</li></ul></li>
<li><strong>How to be successful at programming</strong>:<ul><li>focus on problem solving</li>
<li>spending enough time practicing to understand concepts</li>
<li>collaborate with others</li>
<li>avoid comparing yourself to others</li>
<li>don’t copy/paste code without understanding how it works</li></ul></li>
<li><strong>Scrum Teams</strong><ul><li>Scrum Standup Sessions will take place at the beginning of open lab</li>
<li>You’ll have 1 team for days 1-10 and another for 11-20</li>
<li>Scrum Standup Sessions shouldn’t last more than 15 minutes</li>
<li>Answer the following:<ul><li>what I did yesterday</li>
<li>what I’m doing today</li>
<li>am I blocked by anything</li></ul></li></ul></li></ul>
<a href="https://docs.google.com/presentation/d/1zu5ruNcKQ8knm2fPr0zGaTRhR9PXsYKGWdPqwoxjXww/edit?usp=sharing"><img src="/images/slides/cpnt-262/cpnt-262-overview.png" alt="class intro slide"></a>
<hr>
<h2>Computational Thinking</h2>
<h3 id="lecture-slides"><a aria-hidden="true" tabindex="-1" href="#lecture-slides"><span class="icon icon-link"></span></a>Lecture Slides</h3>
<a href="https://docs.google.com/presentation/d/1U9YnVCE4kvZzt2Fgc-QoFZkA6wEQFfUo6lgjl72dCdU/edit?usp=sharing"><img src="/images/slides/cpnt-262/computational-thinking.png" alt="computational thinking slides"></a>
<h3 id="key-takeaways"><a aria-hidden="true" tabindex="-1" href="#key-takeaways"><span class="icon icon-link"></span></a>Key Takeaways</h3>
<ul><li>Words, images, numbers… everything that we see on computers are representations of binary values</li>
<li>Programming logic can be viewed in flowcharts</li>
<li><strong>Variables</strong> are “buckets” that hold <strong>values</strong></li>
<li>When we think programmatically, we are breaking complex tasks down into small steps and dictating the results at each given step</li></ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/azcrPFhaY9k?si=ecsFpiNhLl-mwSxs&start=402" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<hr>
<h2>Flow Charts</h2>
<p><a href="/slides/cpnt-262/js-flowcharts"><img src="/images/slides/cpnt-262/js-flowcharts.png" alt="Slides - Flowcharts"></a></p>
<h3 id="activity-algorithms-in-everyday-life-30-minutes"><a aria-hidden="true" tabindex="-1" href="#activity-algorithms-in-everyday-life-30-minutes"><span class="icon icon-link"></span></a>Activity: Algorithms in Everyday Life (30 minutes)</h3>
<p><strong>Focus</strong>: Anything goes! (within a sharable school context)</p>
<ol><li>Create a flowchart of something that you enjoy doing using the instructions linked below (15 minutes)</li>
<li>Briefly discuss your findings:<ul><li>What activity did you document? What step(s) did you break down into micro steps?</li>
<li><strong>Walk each other through your steps</strong></li>
<li>When broken into micro steps, did you underestimate how complex the activity actually was?</li></ul></li></ol>
<a href="https://gist.github.com/lilyx13/423ffbe6e8da87497b134985ba90ab15"><h3>Instructions Link</h3>
  <img src="/images/qr-codes/algorithm-activity.png" alt="activity qr code" class="w-48"></a>
<hr>
<h2>Pseudo Code</h2>
<ul><li>Pseudocode is used to think through the steps of an algorithm<ul><li>it exists between the flowcharting and code implementation phases</li>
<li>normally pseudocode is written in comments in your actual code</li>
<li>when pseudocoding, you move from how a human thinks to how a computer thinks<ul><li>your pseudocode will look like a number of things along this spectrum</li></ul></li></ul></li>
<li><a href="https://www.geeksforgeeks.org/how-to-write-a-pseudo-code/" rel="nofollow">Geeks for Geeks Article</a></li></ul>
<h3 id="activity-program-an-intersection"><a aria-hidden="true" tabindex="-1" href="#activity-program-an-intersection"><span class="icon icon-link"></span></a>Activity: Program an Intersection</h3>
<h5 id="each-scrum-team-will-get-a-part-of-the-intersection-to-program-the-options-are"><a aria-hidden="true" tabindex="-1" href="#each-scrum-team-will-get-a-part-of-the-intersection-to-program-the-options-are"><span class="icon icon-link"></span></a>Each scrum team will get a part of the intersection to program. The options are:</h5>
<ul><li>Vehicles</li>
<li>Traffic lights</li>
<li>Intersection</li>
<li>General Rules</li></ul>
<h5 id="your-goal-is-to-figure-out-and-document-the-following-of-your-section"><a aria-hidden="true" tabindex="-1" href="#your-goal-is-to-figure-out-and-document-the-following-of-your-section"><span class="icon icon-link"></span></a>Your goal is to figure out and document the following of your section:</h5>
<ul><li>relevant variables (ie: in this example, a passenger is not an important factor)</li>
<li>control flow logic (are there actions that are repeated? if/else conditional choices to be made? - these need to be mapped out)</li>
<li>rules that cannot be broken</li></ul>
<h5 id="presentation"><a aria-hidden="true" tabindex="-1" href="#presentation"><span class="icon icon-link"></span></a>Presentation</h5>
<p>Each team will get a chance to discuss their part of the program, and each member of each team must present a part of the information.</p>
<ul><li>explain the problems that you identified and needed to solve<ul><li>outline variables and their properties</li>
<li>describe control flow logic</li>
<li>explain rules, their conditions, and outcomes</li></ul></li>
<li>Note that we will be following up with this tomorrow where the different parts of the program will be put together</li></ul>
<hr>
<h2 id="brief-introduction-to-scratch"><a aria-hidden="true" tabindex="-1" href="#brief-introduction-to-scratch"><span class="icon icon-link"></span></a>Brief Introduction to Scratch</h2>
<p>Scratch is a visual programming language. While mostly used to teach kids to code, it serves as a brilliant way to familiarize with the fundamental elements of programming. We will do one small assignment using scratch, the objective of this assignment is to build with programming concepts like: <strong>variables</strong>, <strong>conditional logic</strong>, <strong>iterative logic</strong> (aka: loops), and <strong>functions</strong></p>
<ul><li><a href="https://scratch.mit.edu/" rel="nofollow">Scratch Website</a>: signup/login and create from here</li>
<li><a href="https://scratch.mit.edu/projects/editor/?tutorial=all" rel="nofollow">Getting Started Tutorial</a></li></ul>
<p>Scratch is mostly used to create small video games and animations/short animated movies. But you can do quite a bit with it.</p>
<h3 id="workflow"><a aria-hidden="true" tabindex="-1" href="#workflow"><span class="icon icon-link"></span></a>Workflow</h3>
<p>this applies to pretty much any programming, but is great to practice with scratch in particular.</p>
<ol><li>Plan out what your program is going to do (or a part of it if you’ve already broken it down)</li>
<li>Break the program out into parts and think about what parts are dependant on the others (this will help you decide what to do first)</li>
<li>Plan the logic for the part that makes sense to start with</li>
<li>Do one of the following:<ul><li>code the logic for that part</li>
<li>plan out the logic for the other parts</li></ul></li>
<li>Do the other task from step 4</li>
<li>Test, evaluate, document results</li>
<li>Solve bugs</li>
<li>Clean up code and repeat</li></ol>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2><a href="/courses/cpnt-262/assessments/activity-1">Graded Activity 1: Program in Scratch</a></h2>
<ul><li><strong>Due:</strong>: Sunday February 11th</li>
<li><strong>Weight</strong>: 10%</li>
<li><strong>Objective</strong>: Learn about core programming concepts using a visual programming language</li></ul>`;
    }
  })}`;
});
export {
  _01_day_1 as default,
  metadata
};
