import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { L as LessonPlan } from "./LessonPlan.js";
const metadata = {
  "title": "SQL Test & Final Project",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _07_day_7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>SQL Syntax Review</h2>
<h3 id="basic-syntax"><a aria-hidden="true" tabindex="-1" href="#basic-syntax"><span class="icon icon-link"></span></a>Basic Syntax</h3>
<ul><li>Operations</li>
<li>Syntax standards:<ul><li>snake_case is generally used for columns</li>
<li>CAPS for operators</li></ul></li></ul>
<h3 id="filtering"><a aria-hidden="true" tabindex="-1" href="#filtering"><span class="icon icon-link"></span></a>Filtering</h3>
<ul><li>WHERE</li>
<li>LIKE</li></ul>
<h3 id="sorting"><a aria-hidden="true" tabindex="-1" href="#sorting"><span class="icon icon-link"></span></a>Sorting</h3>
<ul><li>ORDER BY</li></ul>
<hr>
<h2>9:00 AM SQL Syntax Test</h2>
<ul><li>15 questions</li>
<li>available in brightspace at 9</li>
<li>Download the supplied csv file and upload it to supabase</li>
<li>Questions are a mix of multiple choice, short answer, and t/f</li></ul>
<hr>
<h2>Last Demonstration Request Period 10:30-11:30</h2>
<ul><li>If there are any examples that you would like to review, Ash can demonstrate them during this time</li></ul>
<h2>Work on Final Project</h2>
<p>During lab time</p>`;
    }
  })}`;
});
export {
  _07_day_7 as default,
  metadata
};
