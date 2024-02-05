const cpnt201DueDates = [
  {
    slug: "assignment-1",
    due: "Wednesday January 17 @ 11:59PM",
    status: "announced"
  },
  {
    slug: "assignment-2",
    due: "Friday January 26 @ 11:59pm",
    status: "announced"
  },
  {
    slug: "assignment-3",
    due: "Friday February 16 @ 11:59pm",
    status: "announced"
  },
  {
    slug: "assignment-4",
    due: "Monday, March 11 @ 11:59pm",
    status: "announced"
  },
  {
    slug: "achievements",
    due: "TBA",
    status: "announced"
  }
];
const dsgn270DueDates = [
  {
    slug: "assignment-1",
    due: "Jan 18, 2024",
    status: "published"
  },
  {
    slug: "assignment-2",
    due: "Jan 31, 2024",
    status: "announced"
  },
  {
    slug: "assignment-3",
    due: "March 7, 2024",
    status: "announced"
  },
  {
    slug: "sprint-activity-1",
    due: "Jan 15, 2024",
    status: "published"
  },
  {
    slug: "sprint-activity-2",
    due: "Jan 31, 2024",
    status: "published"
  },
  {
    slug: "sprint-activity-3",
    due: "Feb 22, 2024",
    status: "announced"
  },
  {
    slug: "sprint-activity-4",
    due: "Mar 15, 2024",
    status: "announced"
  }
];
const cpnt260DueDates = [
  {
    slug: "achievements",
    due: "Due daily at 3pm",
    status: "published"
  },
  {
    slug: "assignment-1",
    due: "Friday, January 19 @ 11:59pm",
    status: "announced"
  },
  {
    slug: "assignment-2",
    due: "Wednesday, January 24 @ 11:59pm",
    status: "announced"
  },
  {
    slug: "assignment-3",
    due: "Friday, February 02 @ 11:59pm",
    status: "announced"
  },
  {
    slug: "assignment-4",
    due: "Tuesday, February 06 @ 11:59pm",
    status: "announced"
  },
  {
    slug: "final-project",
    due: "Tuesday February 13 @ 11:59pm",
    status: "announced"
  }
];
const cpnt262DueDates = [
  {
    slug: "activity-1",
    due: " Sunday February 11",
    status: "published"
  },
  {
    slug: "activity-2",
    due: "Wednesday February 14",
    status: "published"
  },
  {
    slug: "activity-3",
    due: "Sunday February 18",
    status: "published"
  },
  {
    slug: "activity-4",
    due: "Monday March 11",
    status: "published"
  },
  {
    slug: "activity-5",
    due: "Wednesday March 20",
    status: "published"
  },
  {
    slug: "activity-6",
    due: "",
    status: "published"
  },
  {
    slug: "assignment-1",
    due: "Tuesday March 5",
    status: "published"
  },
  {
    slug: "assignment-2",
    due: "Sunday March 17",
    status: "published"
  },
  {
    slug: "assignment-3",
    due: "Sunday March 24",
    status: "published"
  }
];
const cpnt200DueDates = [
  {
    slug: "activity-1",
    due: "",
    status: "published"
  },
  {
    slug: "activity-2",
    due: "",
    status: "published"
  },
  {
    slug: "activity-3",
    due: "",
    status: "published"
  },
  {
    slug: "activity-4",
    due: "",
    status: "published"
  },
  {
    slug: "final-project",
    due: "",
    status: "published"
  }
];
const cpnt265DueDates = [
  {
    slug: "achievements-1",
    due: "",
    status: "published"
  },
  {
    slug: "achievements-2",
    due: "",
    status: "published"
  },
  {
    slug: "final-project",
    due: "",
    status: "published"
  }
];
const dueDates = [
  {
    code: "cpnt-201",
    dueDates: cpnt201DueDates
  },
  {
    code: "dsgn-270",
    dueDates: dsgn270DueDates
  },
  {
    code: "cpnt-260",
    dueDates: cpnt260DueDates
  },
  {
    code: "cpnt-262",
    dueDates: cpnt262DueDates
  },
  {
    code: "cpnt-200",
    dueDates: cpnt200DueDates
  },
  {
    code: "cpnt-265",
    dueDates: cpnt265DueDates
  }
];
const metaContent = Object.entries(/* @__PURE__ */ Object.assign({ "/src/lib/content/assessments/cpnt-200/activity-1.md": () => import("./activity-1.js"), "/src/lib/content/assessments/cpnt-200/activity-2.md": () => import("./activity-2.js"), "/src/lib/content/assessments/cpnt-200/activity-3.md": () => import("./activity-3.js"), "/src/lib/content/assessments/cpnt-200/activity-4.md": () => import("./activity-4.js"), "/src/lib/content/assessments/cpnt-200/final-project.md": () => import("./final-project.js"), "/src/lib/content/assessments/cpnt-201/assignment-1.md": () => import("./assignment-1.js"), "/src/lib/content/assessments/cpnt-201/assignment-2.md": () => import("./assignment-2.js"), "/src/lib/content/assessments/cpnt-201/assignment-3.md": () => import("./assignment-3.js"), "/src/lib/content/assessments/cpnt-201/assignment-4.md": () => import("./assignment-4.js"), "/src/lib/content/assessments/cpnt-260/assignment-1.md": () => import("./assignment-12.js"), "/src/lib/content/assessments/cpnt-260/assignment-2.md": () => import("./assignment-22.js"), "/src/lib/content/assessments/cpnt-260/assignment-3.md": () => import("./assignment-32.js"), "/src/lib/content/assessments/cpnt-260/assignment-4.md": () => import("./assignment-42.js"), "/src/lib/content/assessments/cpnt-260/final-project.md": () => import("./final-project2.js"), "/src/lib/content/assessments/cpnt-262/activity-1.md": () => import("./activity-12.js"), "/src/lib/content/assessments/cpnt-262/activity-2.md": () => import("./activity-22.js"), "/src/lib/content/assessments/cpnt-262/activity-3.md": () => import("./activity-32.js"), "/src/lib/content/assessments/cpnt-262/activity-4.md": () => import("./activity-42.js"), "/src/lib/content/assessments/cpnt-262/activity-5.md": () => import("./activity-5.js"), "/src/lib/content/assessments/cpnt-262/activity-6.md": () => import("./activity-6.js"), "/src/lib/content/assessments/cpnt-262/assignment-1.md": () => import("./assignment-13.js"), "/src/lib/content/assessments/cpnt-262/assignment-2.md": () => import("./assignment-23.js"), "/src/lib/content/assessments/cpnt-262/assignment-3.md": () => import("./assignment-33.js"), "/src/lib/content/assessments/cpnt-265/achievements-1.md": () => import("./achievements-1.js"), "/src/lib/content/assessments/cpnt-265/achievements-2.md": () => import("./achievements-2.js"), "/src/lib/content/assessments/cpnt-265/final-project.md": () => import("./final-project3.js"), "/src/lib/content/assessments/dsgn-270/assignment-1.md": () => import("./assignment-14.js"), "/src/lib/content/assessments/dsgn-270/assignment-2.md": () => import("./assignment-24.js"), "/src/lib/content/assessments/dsgn-270/assignment-3.md": () => import("./assignment-34.js"), "/src/lib/content/assessments/dsgn-270/sprint-activity-1.md": () => import("./sprint-activity-1.js"), "/src/lib/content/assessments/dsgn-270/sprint-activity-2.md": () => import("./sprint-activity-2.js"), "/src/lib/content/assessments/dsgn-270/sprint-activity-3.md": () => import("./sprint-activity-3.js"), "/src/lib/content/assessments/dsgn-270/sprint-activity-4.md": () => import("./sprint-activity-4.js") }));
const assessments = await Promise.all(
  metaContent.map(async ([path, resolver]) => {
    const { metadata } = await resolver();
    const pathArray = path.split("/");
    const slug = pathArray.pop().slice(0, -3);
    const code = pathArray.pop();
    let status, due;
    const courseDueDates = dueDates.find((course) => code === course.code)?.dueDates;
    const lessonDueDate = courseDueDates?.find((lesson) => slug === lesson.slug);
    status = lessonDueDate?.status;
    due = lessonDueDate?.due;
    return { ...metadata, path, slug, code, status, due };
  })
);
export {
  assessments as a
};
