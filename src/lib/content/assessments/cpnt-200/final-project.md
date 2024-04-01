---
title: Final Pair Project - Blog Website
type: assignment
points: 55
---

## Project Overview

In pairs, you'll be setting up a website's backend using supabase + directus, configuring a cms for non-technical writers, and configuring user signup and sign in.

- All page data, blog post and pages will be handled in the CMS
- CMS Blog Posts have the same requirements as activity 2 (min 3 custom fields)
  - Create 4 blog posts (use generated content to save time)
- Users are able to sign up, out, and login
- Their experience should be customized: (ie: display the user name on the page when authenticated)
- Users should be able to like a post and the likes should save to the database
- Configure RLS Policies as needed
- NO design is necessary, this can be entirely css free if you want (it won't be taken into account for the grading)
- For page content, you will need:
  - a simple landing page
  - a sign up page
  - a blogs collection page
  - dynamic pages for the blog posts
- sign in and sign out should be handled through buttons in the top bar
- **SEE BELOW FOR SPECIFIC REQUIREMENTS**
  **Grading**:

- Pair mark: 50 points
- Peer evaluation: 5 points

---

## Marking Rubric

### 10 points: Backend Configuration & Site Deployment

- Deploy Directus to Render using Docker container
- Properly Seeded Database using ENV variables
- Supabase redirect urls set up to your deployed site
- Site has been deployed to Render or Vercel
- directus tables have been secured with RLS

### 10 points: Blog Post Schema and Sample Posts

- Schema labels are clear and descriptive
- Fields are appropriate to content
- When Creating Content, the schema is well organized
- Sample posts have enough content to properly demonstrate usage of the schema
- 2 sample posts are created and read only to the public

### 10 points: User Sign Up and Confirmation Redirect

- User can sign up with an email and password
- On user signup, user is redirected to confirmation page
- When a user signs up, they are added to supabase

### 10 Points: Sign in/Sign Out and Authenticated UX Feature

- User is able to sign in with their email and password
- User can sign out
- User email is shown in the top bar when they are signed in
- sign out notification on correct signout

### 10 Points: Customized read access

- Add rls policy for authenticated users to have read access to a collection that non-authenticated users don't
- Create a protected route that can only be seen by authenticated users [article](https://masteringnuxt.com/blog/protecting-server-routes)
- Generate some placeholder content to demonstrate this working correctly
- inauthenticated access should throw an error page with the ability for the user to get back home via a link

### 5 points: Peer Evaluation

At the end of the Final Project, all team members must evaluate their teammates on a scale of 0-5. Each member's mark for this portion will be the average score given to them by their teammates.

- You must submit an evaluation to receive marks for this component;
- Evaluations will be submitted confidentially in Brightspace;
- Your Instructor will adjust this mark based on Assigned tasks (see below) plus commits submitted to GitHub.

---

## Submission Instructions

- Only 1 person needs to submit the project repo and deployed link
- Instructor needs to be added to supabase
- **everyone** needs to submit a score for their teammates
