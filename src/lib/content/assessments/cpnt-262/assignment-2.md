---
title: Final Project - Multi-page Website with Gallery
type: assignment
points: 40
---

In this assignment, you will work in teams to create a multipage Nuxt website that uses features like: dynamic routes, server routes, layout templates, lazy loading, and error pages.

This is a cumulative assignment where you'll be drawing on all of the skills that you have gained over this course so far. The end project should serve as a site that you and your teammates can use in your portfolios of work.

### Content Requirements

1. **Layouts:** each member of the team needs to make a layout for the site. These layouts will wrap around page content. Examples for good candidates are: default, blog post, contact page, profile pages... They should feel like they belong in take same website but don't need to be 100% cohesive.
2. **Landing pages:** There should be 4 static landing pages. ie: home page, about page, gallery page, services page. These are pagest that don't generate dynamically based on the content passed. Depending on your topic, these can be quite different from the example suggested.
3. **Dynamic pages:** blog posts, image gallery individual images, products, team profiles. Anything where pages are generated from a collection of variables.
4. **Server routes**: Create either your own or use a public api for server routes. These can be used to feed data to generate dynamic pages, but they could also be used for gallery content and more.
5. **Gallery/collection**: There needs to be some sort of gallery. This is a great place to experiment with grid type layouts. it'll serve as the aggregation of your dynamic pages.
6. **Components**: Your site needs to be broken down into reusable components. This should take advantage of vue's [style guide](https://vuejs.org/style-guide/). Components need to make use of props, slots, and emits whenever necessary.
7. **Third Party Libraries**: Take advantage of 2 Third Party Libraries from [Nuxt's Modules](https://nuxt.com/modules). These cover a wide arrange of features from design, ui components, to security, forms, animations, and utility libraries. Choose your 2 as they fit your needs and interests.
8. **Deployment**: The site needs to be deployed to [Vercel](https://vercel.com)
9. **Group Charter**: Your team will need to establish guidelines on how you are to work together. This will be outlined in the [Wiki](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis) that's built into the repo. Include things like:
   - who is responsible for what
   - how do you approach branching and PRs
   - when does your team meet regularly
   - how do you handle meeting minute tasks and meeting facilitation
   - what are your expectations for meeting deadlines
   - what are your communication expectations
10. **Project Organization**: This includes things like having a kanban board, conducting daily standup meetings and weekly planning meetings. your documentation of these needs to be transparent, so involving taking meeting minutes. For this project, use the [Wiki](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis) that's built into your repo
11. **Partner Score**: You'll be grading one another out of 5 for teamwork. Each of you will recieve a score based the input from your colleagues **if you do not post a grade for another, you will lose marks**

---

## Marking Rubric

Aspects of the site like design are bundled into their pages. It is expected that javascript logic such as conditionals, array methods, error handling etc will be used throughout the site.

### 1. Landing Pages 5

- 4 static landing pages

### 2. Dynamic Pages 5

- posts like product pages, user profiles, blog posts that are dynamically generated
- they should have a their own layout

### 3. UX Flow 5

- navigating the site is easy
- errors that are encountered are managed with error pages
- use performance boosting features like Lazy components and static routes to improve load times

### 4. Third-party libraries 5

- implement 2 third party libraries
- determine which ones based on your topic and your interests
- they should be used as specified according to the documentation
- they should enhance your site

### 5 Server Routes 5

- Use Nuxt's built in server to pass content to the client side
- This will likely be used for your posts, but doesn't need to be specifically
- Follow the Nuxt documentation on how to create server routes
- Add error handling

### 6. Code Quality 5

- Code is using modern Javascript
- Templates use semantic code
- error handling is used in your js as learned in class

### 7. Components 5

- Components are organized well
- Components use consistent design pattens
- Components use props and slots

### 5. Partner Score 5

- Give your partner a score out of 5. Take into count the following:
  - Communicates effectively
  - Finishes tasks in a timely manner
  - Stays in scope
  - Accountable
  - Positive attitude
  - Contributes at meetings

---

**Points will be deducted for**:

- violations of accessibility, usability and SvelteKit best practices;
- a page that is incomplete or of low fidelity;
- projects that aren't deployed (3 point deduction);
- syntax errors,
- logic errors,
- not following the guidelines in [Javascript Basics](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html), starting at [Slide 9](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html#/9).

---

## Submission Instructions

- Push this assignment to a GitHub repo named `cpnt262-final-project` and deploy to Vercel or similar platform;
- ZIP all files required for the site to operate and submit to Brightspace;
- Include the following as a comment in your Brightspace submission:
  - GH repo
  - Live deploy link

### Submission requirements

- **1 person** submits the actual code and live site to the group submission
- **everyone** submits marks for their team scores in the appropriate drop box

- Include a `README.md` in your project that contains the following information:
  - Course title;
  - Assignment name;
  - Author names (with links to your own github pages)
  - A link to the live site;
  - List the author and links to any Attributions for code and/or assets you used that are not your own;
  - list of the third party libraries that you used
