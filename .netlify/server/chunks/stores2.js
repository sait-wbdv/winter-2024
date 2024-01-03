import { w as writable } from "./index2.js";
import { l as lessons } from "./importLessons.js";
const scheduleByWeek = [
  // Week 1
  [
    {
      date: "2024-01-08",
      type: "lesson",
      label: "dsgn-270"
    },
    {
      date: "2024-01-09",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2024-01-10",
      type: "lesson",
      code: "cpnt-201"
    },
    {
      date: "2024-01-11",
      type: "lesson",
      code: "cpnt-201"
    },
    {
      date: "2024-01-12",
      type: "lesson",
      code: "cpnt-260"
    }
  ],
  // Week 2
  [
    {
      date: "2024-01-15",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2024-01-16",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2024-01-17",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2024-01-18",
      type: "lesson",
      code: "cpnt-264"
    },
    {
      date: "2024-01-19",
      type: "lesson",
      code: "cpnt-260"
    }
  ],
  // Week 3
  [
    {
      date: "2024-01-22",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2024-01-23",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2024-01-24",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2024-01-25",
      type: "lesson",
      code: "cpnt-201"
    },
    {
      date: "2024-01-26",
      type: "lesson",
      code: "cpnt-201"
    }
  ],
  // Week 4
  [
    {
      date: "2024-01-29",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2024-01-30",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2024-01-31",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2024-02-01",
      type: "lesson",
      code: "cpnt-260"
    },
    {
      date: "2024-02-02",
      type: "lesson",
      label: "cpnt-260"
    }
  ],
  // Week 5
  [
    {
      date: "2024-02-05",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-02-06",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-02-07",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-02-08",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-02-09",
      type: "lesson",
      code: "cpnt-262"
    }
  ],
  // Week 6
  [
    {
      date: "2024-02-12",
      type: "lesson",
      label: "cpnt-262"
    },
    {
      date: "2024-02-13",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-02-14",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2024-02-15",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2024-02-16",
      type: "lesson",
      code: "cpnt-201"
    }
  ],
  // Week 7
  [
    {
      date: "2024-02-19",
      type: "holiday",
      code: "Family Day - No Classes"
    },
    {
      date: "2024-02-20",
      type: "lesson",
      code: "cpnt-201"
    },
    {
      date: "2024-02-21",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-02-22",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-02-23",
      type: "lesson",
      code: "cpnt-264"
    }
  ],
  // Week 8
  [
    {
      date: "2024-02-26",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-02-27",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-02-28",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2024-02-29",
      type: "lesson",
      code: "dsgn-270"
    },
    {
      date: "2024-03-01",
      type: "lesson",
      code: "cpnt-201"
    }
  ],
  // Week 9
  [
    {
      date: "2024-03-04",
      type: "lesson",
      code: "cpnt-201"
    },
    {
      date: "2024-03-05",
      type: "lesson",
      code: "cpnt-264"
    },
    {
      date: "2024-03-06",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-03-07",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-03-08",
      type: "lesson",
      code: "cpnt-262"
    }
  ],
  // Week 10
  [
    {
      date: "2024-03-11",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-03-12",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-03-13",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-03-14",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-03-15",
      type: "lesson",
      code: "cpnt-262"
    }
  ],
  // Week 11
  [
    {
      date: "2024-03-18",
      type: "lesson",
      label: "cpnt-262"
    },
    {
      date: "2024-03-19",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-03-20",
      type: "lesson",
      code: "cpnt-262"
    },
    {
      date: "2024-03-21",
      type: "lesson",
      code: "cpnt-200"
    },
    {
      date: "2024-03-22",
      type: "lesson",
      code: "cpnt-200"
    }
  ],
  // Week 12
  [
    {
      date: "2024-03-25",
      type: "lesson",
      code: "cpnt-200"
    },
    {
      date: "2024-03-26",
      type: "lesson",
      code: "cpnt-200"
    },
    {
      date: "2024-03-27",
      type: "lesson",
      code: "cpln-240"
    },
    {
      date: "2024-03-28",
      type: "lesson",
      code: "cpnt-264"
    },
    {
      date: "2024-03-29",
      type: "holiday",
      code: "Good Friday - No Classes"
    }
  ],
  // Week 13
  [
    {
      date: "2024-04-01",
      type: "lesson",
      code: "cpnt-200"
    },
    {
      date: "2024-04-02",
      type: "lesson",
      code: "cpnt-200"
    },
    {
      date: "2024-04-03",
      type: "lesson",
      code: "cpnt-200"
    },
    {
      date: "2024-04-04",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2024-04-05",
      type: "lesson",
      code: "cpnt-265"
    }
  ],
  // Week 14
  [
    {
      date: "2024-04-08",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2024-04-09",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2024-04-10",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2024-04-11",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2024-04-12",
      type: "lesson",
      code: "cpnt-265"
    }
  ],
  // Week 15
  [
    {
      date: "2024-04-15",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2024-04-16",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2024-04-17",
      type: "lesson",
      code: "cpnt-265"
    },
    {
      date: "2024-04-18",
      type: "lesson",
      label: "cpnt-265"
    },
    {
      date: "2024-04-19",
      type: "holiday",
      label: "No Classes"
    }
  ]
];
const imports = Object.entries(/* @__PURE__ */ Object.assign({ "../content/courses/cpln-240.md": () => import("./cpln-240.js"), "../content/courses/cpnt-200.md": () => import("./cpnt-200.js"), "../content/courses/cpnt-201.md": () => import("./cpnt-201.js"), "../content/courses/cpnt-260.md": () => import("./cpnt-260.js"), "../content/courses/cpnt-262.md": () => import("./cpnt-262.js"), "../content/courses/cpnt-264.md": () => import("./cpnt-264.js"), "../content/courses/cpnt-265.md": () => import("./cpnt-265.js"), "../content/courses/dsgn-270.md": () => import("./dsgn-270.js") }));
const courseInfo = await Promise.all(
  imports.map(async ([path, resolver]) => {
    const { metadata } = await resolver();
    return { ...metadata };
  })
);
let days = {};
let courseDays = {};
let lessonsObj = {};
lessons.forEach((lesson) => {
  lessonsObj[`${lesson.code}/${parseInt(lesson.day)}`] = lesson;
});
let prevLessonId = "";
const schedule = writable(
  scheduleByWeek.map((week) => {
    return week.map((day) => {
      let lessonId = "";
      if (day.type === "lesson") {
        let title = "TBA";
        let excerpt = null;
        let status = "draft";
        let path = null;
        let fileName = null;
        let codeLabel = null;
        if (typeof days[day.code] === "undefined") {
          days[day.code] = 1;
          day.day = days[day.code];
        } else {
          days[day.code]++;
          day.day = days[day.code];
        }
        lessonId = `${day.code}/${parseInt(days[day.code])}`;
        if (!courseDays.hasOwnProperty(day.code)) {
          courseDays[day.code] = [];
        }
        courseDays[day.code].push(day.date);
        if (lessonsObj[lessonId]) {
          lessonsObj[lessonId].date = day.date;
          lessonsObj[lessonId].prev = prevLessonId.replace("/", "/day-");
          lessonsObj[lessonId].next = "";
          if (prevLessonId && lessonsObj[prevLessonId]) {
            lessonsObj[prevLessonId].next = lessonId.replace("/", "/day-");
          }
          ({ title, excerpt, status, path, fileName, codeLabel } = lessonsObj[lessonId]);
        }
        prevLessonId = lessonId;
        return { ...day, title, excerpt, status, codeLabel, path, fileName };
      } else {
        return day;
      }
    });
  })
);
courseInfo.map((course) => {
  course.days = courseDays[course.code];
  return course;
});
const courses = writable(courseInfo.sort((a, b) => {
  if (a.days[0] < b.days[0])
    return -1;
  return 1;
}));
const lessonsById = writable(lessonsObj);
export {
  courses as c,
  lessonsById as l,
  schedule as s
};
