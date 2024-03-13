---
title: Mini Activity 5 - Server Side Logic
type: assignment
points: 10
---

For this assignment, you will create a node server and use it to server 2 html pages (you can use pages from a past 260 assignment) and a json file.

This will not be deployed and will only be tested on localhost. The page and json file content doesn't need more than a section or two and a dataset of 10 k/v pairs & at least 1 array.

We will also be using ESM syntax, so make sure you've set up your project to use import syntax instead of cjs require syntax.

Marks for this assignment will be allocated for clear and modular code with effective error handling.

---

## Marking Rubric

Each of the following will be **worth 2 points for a total of 10 points**:

### NPM Package setup

- properly set up npm package
- esm modules turned on
- script to run the server added

### Server basic setup

- proper use of .createServer
- proper use of .listen

### Server Routes

- 2 html pages
- 1 json file
- a fallback 404 page with a link back to the home page

### Error Handling

- use of try catch blocks
- throw errors

### JSON File Syntax

- proper use of "" and ,
- data is labelled effectively
- data is not arbitrary

---

**Points will be deducted for**:

- not using error handling
- not following the guidelines in [Javascript Basics](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html), starting at [Slide 9](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html#/9).

---

## Submission Instructions

- Push this assignment to a GitHub repo named `cpnt262-a5`
- ZIP all files required for the site to operate and submit to Brightspace;
- Include the following as a comment in your Brightspace submission:
  - GH repo

### Submission requirements

Points will be deducted for failing to fulfill the following:

- Include a `README.md` in your project that contains the following information:
  - Course title;
  - Assignment name;
  - Author name;
  - A link to the GH Pages site;
  - **(new)** Search research notes:
    - for 1-3 things that you needed to look up, document and optimize your search
    - [Use this document as a guide](https://gist.github.com/lilyx13/4a2f49d1cdb29cfc624ef22c6ccedafe)
  - List the author and links to any Attributions for code and/or assets you used that are not your own;
- Follow guidelines in [Files and Directories - Naming Conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)
