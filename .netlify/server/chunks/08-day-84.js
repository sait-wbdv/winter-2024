import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Final Scrum",
  "excerpt": null,
  "status": "announced"
};
const { title, excerpt, status } = metadata;
const _08_day_8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<p>As our last monday before the final presentations, we will spend some time doing a retrospective of our work thus far and plan out our last few days of work.</p>
<p>This is a good time to critically evaluate if you need to cut back on some features or not. We will also do some public speaking practice by giving in class summaries from our scrum planning.</p>
<h3 id="todo"><a aria-hidden="true" tabindex="-1" href="#todo"><span class="icon icon-link"></span></a>TODO</h3>
<ul><li>Spend some time reflecting on what your main feature of your app is</li>
<li>Also evaluate your energy level and productivity</li>
<li>In class you’ll have an hour to focus on brainstorming and planning your last few days</li></ul>`;
    }
  })}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2 id="housekeeping"><a aria-hidden="true" tabindex="-1" href="#housekeeping"><span class="icon icon-link"></span></a>Housekeeping</h2>
<hr>
<h2 id="topic-1"><a aria-hidden="true" tabindex="-1" href="#topic-1"><span class="icon icon-link"></span></a>Topic 1</h2>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {})}`;
});
export {
  _08_day_8 as default,
  metadata
};
