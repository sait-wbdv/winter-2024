import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Dynamic Components",
  "excerpt": null,
  "status": "announced"
};
const { title, excerpt, status } = metadata;
const _13_day_13 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {})}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<hr>
<h2 id="scrum-meeting">Scrum Session</h2>
<ul><li>what have you been working on?</li>
<li>what do you plan to be doing?</li>
<li>do you have any blocks?</li></ul>
<hr>
<h3 id="in-class-demos"><a aria-hidden="true" tabindex="-1" href="#in-class-demos"><span class="icon icon-link"></span></a>In class Demos</h3>
<ol><li>Build components that can be passed props</li>
<li>Use the spread operator to pass props more elegantly</li>
<li>Render an unordered list with <code>#each</code> block</li></ol>
<h2>Lab Activity</h2>
<h3 id="render-a-list-of-components"><a aria-hidden="true" tabindex="-1" href="#render-a-list-of-components"><span class="icon icon-link"></span></a>Render a List of Components</h3>
<p>Take a list, card layout, or gallery from a past assignment and refactor it for svelte</p>
<ul><li>Easy: Render a <code>ul</code> of <code>li</code> items that take either props or use a lot</li>
<li>Medium: Render a list of cards</li>
<li>Hard: Render a gallery</li></ul>
<h4 id="conditionals"><a aria-hidden="true" tabindex="-1" href="#conditionals"><span class="icon icon-link"></span></a>Conditionals:</h4>
<ul><li>use <code>{#if}{/if}</code> syntax to change how things look based on the input</li></ul>
<h4 id="extra-style-props"><a aria-hidden="true" tabindex="-1" href="#extra-style-props"><span class="icon icon-link"></span></a>Extra: Style Props</h4>
<ul><li>Pass style props as well</li></ul>
<hr>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Graded Activity 5: Components and Props</h2>
<ul><li><a href="/courses/cpnt-262/assessments/activity-5">Link to Assignment</a></li>
<li>Focus: Create custom reusable components with a <code>&lt;Card&gt;&lt;/Card&gt;</code> example</li>
<li>Dynamically render content using repeatable patterns</li>
<li>Generate multiple cards with svelte’s <code>{#each}</code> syntax</li>
<li><strong>new requirement</strong>: Search notes that document improved search query strategies</li></ul>`;
    }
  })}`;
});
export {
  _13_day_13 as default,
  metadata
};
