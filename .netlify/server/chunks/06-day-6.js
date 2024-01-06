import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { H as Homework } from "./Homework.js";
import { L as LessonPlan } from "./LessonPlan.js";
import { A as Achievement } from "./Achievement.js";
const metadata = {
  "title": "Fetching, Filtering, Modifying Data",
  "excerpt": null,
  "status": "published"
};
const { title, excerpt, status } = metadata;
const _06_day_6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Homework, "Homework").$$render($$result, { status }, {}, {})}
${validate_component(LessonPlan, "LessonPlan").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>200 Assignment Scrum</h2>
<ul><li>Meet with your team</li>
<li>Check in on where you’re all at</li>
<li>Discuss plan to approach project this week</li></ul>
<h2><a href="/courses/cpnt-200/assessments/activity-3">Assignment 3</a></h2>
- Due date: Friday December 1
- Focus: Set up a Directus CMS and connect it to Supabase
<hr>
<h2>Directus and Supabase</h2>
<ul><li>debug session on why we couldn’t get up and running</li>
<li>walk through setting up a collection</li>
<li>fetch collection down to sveltekit</li></ul>
<hr>
<h2>1. Test: Shared database?</h2>
<h3 id="backup-import-magic-items-table"><a aria-hidden="true" tabindex="-1" href="#backup-import-magic-items-table"><span class="icon icon-link"></span></a>Backup: Import magic items table</h3>
<p>Download the <a href="/files/magic_item_import.csv">magic_item_import.csv</a> and import it into Supabase</p>
<ul><li>Set <code>id</code> as primary key</li>
<li>Ensure the correct data types are set on the following columns - <code>cl</code>: <code>int8</code> - <code>weight_value</code>: <code>float4</code> - <code>price_value</code>: <code>int8</code> - <code>is_intelligent_item</code>: <code>bool</code></li>
<li>Enable RLS and add “Enable read access to everyone” policy</li></ul>
<hr>
<h2>2. Filtering and modifying data</h2>
<h3 id="materials"><a aria-hidden="true" tabindex="-1" href="#materials"><span class="icon icon-link"></span></a>Materials</h3>
<ul><li><a href="https://supabase.com/docs/reference/javascript/select" rel="nofollow">Fetching data</a></li>
<li><a href="https://supabase.com/docs/reference/javascript/using-filters" rel="nofollow">Using filters</a></li>
<li><a href="https://supabase.com/docs/reference/javascript/db-modifiers-select" rel="nofollow">Using Modifiers</a></li></ul>
<p><strong>Supabase Tips</strong></p>
<ul><li><a href="https://www.youtube.com/watch?v=Jx8unDjLaKg" rel="nofollow">match</a></li>
<li><a href="https://www.youtube.com/watch?v=51ChVycS__k" rel="nofollow">count</a></li>
<li><a href="https://www.youtube.com/watch?v=b-mgca_2Oe4" rel="nofollow">How to use textSearch to perform full text search</a></li>
<li><a href="https://www.youtube.com/watch?v=_GQJa3xAfJ4" rel="nofollow">How to retrieve a One to Many relationship with SupabaseJS</a></li></ul>`;
    }
  })}
${validate_component(Achievement, "Achievement").$$render($$result, { status }, {}, {
    default: () => {
      return `<h2>Work on Assignments</h2>
<ul><li>work in your teamson the 200 final and/or assignment 3</li></ul>`;
    }
  })}`;
});
export {
  _06_day_6 as default,
  metadata
};
