import { _ as __variableDynamicImportRuntimeHelper } from "../../../../../../../chunks/dynamic-import-helper.js";
import { e as error } from "../../../../../../../chunks/index.js";
import { a as assessments } from "../../../../../../../chunks/importAssessments.js";
const load = async ({ params }) => {
  try {
    const assessment = assessments.find((item) => item.slug === params.slug && item.code === params.code);
    const content = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../../../lib/content/assessments/cpnt-200/activity-1.md": () => import("../../../../../../../chunks/activity-1.js"), "../../../../../../lib/content/assessments/cpnt-200/activity-2.md": () => import("../../../../../../../chunks/activity-2.js"), "../../../../../../lib/content/assessments/cpnt-200/activity-3.md": () => import("../../../../../../../chunks/activity-3.js"), "../../../../../../lib/content/assessments/cpnt-200/activity-4.md": () => import("../../../../../../../chunks/activity-4.js"), "../../../../../../lib/content/assessments/cpnt-200/final-project.md": () => import("../../../../../../../chunks/final-project.js"), "../../../../../../lib/content/assessments/cpnt-201/assignment-1.md": () => import("../../../../../../../chunks/assignment-1.js"), "../../../../../../lib/content/assessments/cpnt-201/assignment-2.md": () => import("../../../../../../../chunks/assignment-2.js"), "../../../../../../lib/content/assessments/cpnt-201/assignment-3.md": () => import("../../../../../../../chunks/assignment-3.js"), "../../../../../../lib/content/assessments/cpnt-201/assignment-4.md": () => import("../../../../../../../chunks/assignment-4.js"), "../../../../../../lib/content/assessments/cpnt-260/assignment-1.md": () => import("../../../../../../../chunks/assignment-12.js"), "../../../../../../lib/content/assessments/cpnt-260/assignment-2.md": () => import("../../../../../../../chunks/assignment-22.js"), "../../../../../../lib/content/assessments/cpnt-260/assignment-3.md": () => import("../../../../../../../chunks/assignment-32.js"), "../../../../../../lib/content/assessments/cpnt-260/assignment-4.md": () => import("../../../../../../../chunks/assignment-42.js"), "../../../../../../lib/content/assessments/cpnt-260/final-project.md": () => import("../../../../../../../chunks/final-project2.js"), "../../../../../../lib/content/assessments/cpnt-262/activity-1.md": () => import("../../../../../../../chunks/activity-12.js"), "../../../../../../lib/content/assessments/cpnt-262/activity-2.md": () => import("../../../../../../../chunks/activity-22.js"), "../../../../../../lib/content/assessments/cpnt-262/activity-3.md": () => import("../../../../../../../chunks/activity-32.js"), "../../../../../../lib/content/assessments/cpnt-262/activity-4.md": () => import("../../../../../../../chunks/activity-42.js"), "../../../../../../lib/content/assessments/cpnt-262/activity-5.md": () => import("../../../../../../../chunks/activity-5.js"), "../../../../../../lib/content/assessments/cpnt-262/assignment-1.md": () => import("../../../../../../../chunks/assignment-13.js"), "../../../../../../lib/content/assessments/cpnt-262/assignment-2.md": () => import("../../../../../../../chunks/assignment-23.js"), "../../../../../../lib/content/assessments/cpnt-262/assignment-3.md": () => import("../../../../../../../chunks/assignment-33.js"), "../../../../../../lib/content/assessments/cpnt-265/achievements-1.md": () => import("../../../../../../../chunks/achievements-1.js"), "../../../../../../lib/content/assessments/cpnt-265/achievements-2.md": () => import("../../../../../../../chunks/achievements-2.js"), "../../../../../../lib/content/assessments/cpnt-265/final-project.md": () => import("../../../../../../../chunks/final-project3.js"), "../../../../../../lib/content/assessments/dsgn-270/assignment-1.md": () => import("../../../../../../../chunks/assignment-14.js"), "../../../../../../lib/content/assessments/dsgn-270/assignment-2.md": () => import("../../../../../../../chunks/assignment-24.js"), "../../../../../../lib/content/assessments/dsgn-270/assignment-3.md": () => import("../../../../../../../chunks/assignment-34.js"), "../../../../../../lib/content/assessments/dsgn-270/sprint-activity-1.md": () => import("../../../../../../../chunks/sprint-activity-1.js"), "../../../../../../lib/content/assessments/dsgn-270/sprint-activity-2.md": () => import("../../../../../../../chunks/sprint-activity-2.js"), "../../../../../../lib/content/assessments/dsgn-270/sprint-activity-3.md": () => import("../../../../../../../chunks/sprint-activity-3.js"), "../../../../../../lib/content/assessments/dsgn-270/sprint-activity-4.md": () => import("../../../../../../../chunks/sprint-activity-4.js") }), `../../../../../../lib/content/assessments/${assessment.code}/${assessment.slug}.md`);
    return {
      content: content.default.render().html,
      meta: { ...assessment }
    };
  } catch (err) {
    throw error(404, err);
  }
};
export {
  load
};
