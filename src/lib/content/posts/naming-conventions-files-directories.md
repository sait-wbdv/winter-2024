---
title: Files, directories and naming conventions
excerpt: As you work on your craft as a programmer, you will be generating many files and directories for your projects. Naming and directory structure is one of the first steps to building professional websites and apps.
date: '2024-01-10'
status: published
---

<h2>Prerequisites</h2>

- [Dealing with files](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [Absolute vs Relative file paths](https://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/)
- Terminology: [Files, directories and paths](https://gist.github.com/acidtone/2062459ab8b9ee758ca1b5ab312f2440)

---

<h2>File naming conventions/guidelines</h2>

- Files should be named consistently. Why?
- Filenames should be short but descriptive (less than 25 characters)
- Use alpha numeric characters when possible
- Use underscores or hyphens instead of spaces
- In general, use lower case characters. Note: exceptions include README files, operating system directories (`Users`, `Desktop`, `Documents`, etc)

<h3>Why are file naming conventions important?</h3>

- Many computers, particularly web servers, are case-sensitive. So for example, if you put an image on your website at test-site/MyImage.jpg and then in a different file you try to invoke the image as test-site/myimage.jpg, it may not work.
- Browsers, web servers, and programming languages do not handle spaces consistently. some servers may treat the name as 2 filenames, others may replace the space with "%20" (the character code for spaces in URLs), resulting in all your links being broken.

### Examples
- GOOD
    - `/Users/temiel/Documents/work/resume-2024.pdf`
    - `/Users/temiel/Documents/school/projects/project-1/index.html`
- BAD
    - `/Users/temiel/Desktop/Resume 2021.pdf`
        - In general, don't store common files in your `Desktop` or `Downloads` folders. This is what the `Documents` folder is for.
    - `/Users/temiel/Documents/ABC University/Class Projects/Project 1/index.html`
        - Using spaces is considered bad practice for paths that you will be accessing from the command line.

<h2>Absolute and Relative File Paths</h2>

- Absolute paths always include the domain name of the website, including http://www....
- Relative paths only point to a file or a file path within a website.
    - When a user clicks a relative link, the browser takes them to that location on the current site. For that reason, you can only use relative links when linking to pages or files within your site, and you must use absolute links if you're linking to a location on another website.

- **Relative Paths - Examples**
    - index.html
    - /graphics/image.png
    - /help/articles/how-do-i-set-up-a-webpage.html

- **Absolute Paths - Examples**
    - http://www.mysite.com
    - http://www.mysite.com/graphics/image.png
    - http://www.mysite.com/help/articles/how-do-i-set-up-a-webpage.html
