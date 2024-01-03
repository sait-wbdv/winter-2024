import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Final Presentation Day",
  "excerpt": null,
  "status": "announced"
};
const { title, excerpt, status } = metadata;
const _11_day_11 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Prep</h2>
<ul><li>Make sure you’re presentation materials are ready</li>
<li>Pick out an outfit beforehand</li>
<li>Have a good breakfast and get into presentation headspace</li></ul>`;
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
  _11_day_11 as default,
  metadata
};
