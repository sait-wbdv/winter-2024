---
title: Assignment 2 - Content Management Dashboard
type: assignment
points: 25
---

- Connect Directus Headless CMS to Supabase [Instructions](https://gist.github.com/ashx3s/3ce0466cc19cbcb2ce600275cd8e8300)
- Create collection schemas
- Configure Read only RLS
- provide an endpoint and key for fetch test

## Steps

- Deploy directus with supabase as a database to render using a docker container
  - make sure the database is seeded
  - add RLS policies to directus tables so they cannot be queried from the api endpoint
- Create 2 collections of your choice (see below for the field requirements)
- Generate items of your collections
- add rls policies to make your collections read only
- Create 2 endpoint queries that use filters and 2 that get all the content in each table
  - ie: return top 2 out of 5 items or return posts of a certain topic

## Marking Rubric

### 5 Points: Directus Configuration

- Directus is deployed to render using the perscribed method
- Directus has seeded the supabase db
- Admin user role set up in the env variables

### 5 Points Data Model Setup

- Two different collection types. ie: a blog and a product.
- collections each have at least 3 custom fields
- collections use appropriate optional fields for their content types

### 5 Points: RLS Policies

- Directus tables are set with no access from the api side
- both of your collections are set to read only

### 5 Points: Query Endpoints

- Create 2 everything queries
- Create 2 filtered queries
- These queries are added to your submission so they can be verified

### 5 Points: Data Entry

- Data has been entered to create 5 records in each of your tables
- Data isn't jibberish (no keyboard spamming)
- Data is useful placeholder

## Submission Instructions

- Add your instructor's sait email to both supabase and directus
- Screenshot your data models
- Screenshot the policies screen in supabase
- Screenshot environment variable screen (astrixes for values)
- Add the anon key and api url endpoint to your submission
