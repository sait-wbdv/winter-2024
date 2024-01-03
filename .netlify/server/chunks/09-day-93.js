import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Code Freeze",
  "excerpt": null,
  "status": "announced"
};
const { title, excerpt, status } = metadata;
const _09_day_9 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<p>At the end of the day, you should do a code freeze. this means no more working on code at all.</p>
<p>Today should only be spent on small features, if you’ve got serious problems going on, look at feature cutting to make sure your presentation is able to go.</p>`;
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
  _09_day_9 as default,
  metadata
};
