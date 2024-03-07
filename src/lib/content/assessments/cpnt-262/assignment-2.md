---
title: Assignment 2 - Nuxt Layouts & Vercel Deployment
type: assignment
points: 15
---

In this assignment, you will deploy a simple nuxt website that uses 2 different page level layouts. Your site will require the following content:

1. has three routes (pages) with 1 custom component (used to render a list)
2. has a primary layout (on 2 pages) and a secondary layout (3rd page)
3. has both UI level components (ie: TheHeader, TheFooter) and reusable generic components (AppButton, AppCard)

The website should be made with placeholder content, the focus is on layout and code organization.

### Styling

You are welcome to use [tailwind](https://tailwindcss.nuxtjs.org/) or [nuxt ui component library](https://ui.nuxt.com/), or any other compatable UI library or css framework. This assignment is a great time to test design tools.

---

## Marking Rubric

The following will be **worth a total of 15 points**:

### 5 points: Primary layout

- Following the guides on SkeletonUI and Svelte, the index and 1 other page should use the same layout
- `<slot />` is used to render the route content in the layout

### 5 points - Secondary Layout

- Also follows conventions set out by SkeletonUI and Svelte
- Used to render 1 other route
- Distinct from the other layout

### 5 points: Component Organization

- A custom component is used to stylize and render an array of content (A simple list is fine)
- the SkeletonUI Design color system is used instead of normal hex codes
- tailwind classes are used instead of vanilla
- **lorem ipsum** type content used throughout the page, it should look like a template

---

**Points will be deducted for**:

- violations of accessibility, usability and Nuxt best practices;
- pages that are incomplete or of low fidelity;
- projects that aren't deployed (3 point deduction);
- syntax errors,
- logic errors,
- not following js basics as learned in the course

---

## Submission Instructions

- Push this assignment to a GitHub repo and deploy to Vercel or similar platform;
- ZIP all files required for the site to operate and submit to Brightspace;
- Include the following as a comment in your Brightspace submission:
  - GH repo
  - Live deploy link

### Submission requirements

Points will be deducted for failing to fulfill the following:

- Include a `README.md` in your project that contains the following information:
  - Course title;
  - Assignment name;
  - Author name;
  - A link to the Netlify site;
  - **(new)** Search research notes:
    - for 1-3 things that you needed to look up, document and optimize your search
    - [Use this document as a guide](https://gist.github.com/lilyx13/4a2f49d1cdb29cfc624ef22c6ccedafe)
  - List the author and links to any Attributions for code and/or assets you used that are not your own;
- Follow guidelines in [Files and Directories - Naming Conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)
