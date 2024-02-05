import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Files, directories and naming conventions",
  "excerpt": "As you work on your craft as a programmer, you will be generating many files and directories for your projects. Naming and directory structure is one of the first steps to building professional websites and apps.",
  "date": "2024-01-10",
  "status": "published"
};
const Naming_conventions_files_directories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Prerequisites</h2>
<ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files" rel="nofollow">Dealing with files</a></li>
<li><a href="https://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/" rel="nofollow">Absolute vs Relative file paths</a></li>
<li>Terminology: <a href="https://gist.github.com/acidtone/2062459ab8b9ee758ca1b5ab312f2440" rel="nofollow">Files, directories and paths</a></li></ul>
<hr>
<h2>File naming conventions/guidelines</h2>
<ul><li>Files should be named consistently. Why?</li>
<li>Filenames should be short but descriptive (less than 25 characters)</li>
<li>Use alpha numeric characters when possible</li>
<li>Use underscores or hyphens instead of spaces</li>
<li>In general, use lower case characters. Note: exceptions include README files, operating system directories (<code>Users</code>, <code>Desktop</code>, <code>Documents</code>, etc)</li></ul>
<h3>Why are file naming conventions important?</h3>
<ul><li>Many computers, particularly web servers, are case-sensitive. So for example, if you put an image on your website at test-site/MyImage.jpg and then in a different file you try to invoke the image as test-site/myimage.jpg, it may not work.</li>
<li>Browsers, web servers, and programming languages do not handle spaces consistently. some servers may treat the name as 2 filenames, others may replace the space with “%20” (the character code for spaces in URLs), resulting in all your links being broken.</li></ul>
<h3 id="examples"><a aria-hidden="true" tabindex="-1" href="#examples"><span class="icon icon-link"></span></a>Examples</h3>
<ul><li>GOOD<ul><li><code>/Users/temiel/Documents/work/resume-2024.pdf</code></li>
<li><code>/Users/temiel/Documents/school/projects/project-1/index.html</code></li></ul></li>
<li>BAD<ul><li><code>/Users/temiel/Desktop/Resume 2021.pdf</code><ul><li>In general, don’t store common files in your <code>Desktop</code> or <code>Downloads</code> folders. This is what the <code>Documents</code> folder is for.</li></ul></li>
<li><code>/Users/temiel/Documents/ABC University/Class Projects/Project 1/index.html</code><ul><li>Using spaces is considered bad practice for paths that you will be accessing from the command line.</li></ul></li></ul></li></ul>
<h2>Absolute and Relative File Paths</h2>
<ul><li><p>Absolute paths always include the domain name of the website, including http://www…</p></li>
<li><p>Relative paths only point to a file or a file path within a website.</p>
<ul><li>When a user clicks a relative link, the browser takes them to that location on the current site. For that reason, you can only use relative links when linking to pages or files within your site, and you must use absolute links if you’re linking to a location on another website.</li></ul></li>
<li><p><strong>Relative Paths - Examples</strong></p>
<ul><li>index.html</li>
<li>/graphics/image.png</li>
<li>/help/articles/how-do-i-set-up-a-webpage.html</li></ul></li>
<li><p><strong>Absolute Paths - Examples</strong></p>
<ul><li><a href="http://www.mysite.com" rel="nofollow">http://www.mysite.com</a></li>
<li><a href="http://www.mysite.com/graphics/image.png" rel="nofollow">http://www.mysite.com/graphics/image.png</a></li>
<li><a href="http://www.mysite.com/help/articles/how-do-i-set-up-a-webpage.html" rel="nofollow">http://www.mysite.com/help/articles/how-do-i-set-up-a-webpage.html</a></li></ul></li></ul>`;
});
export {
  Naming_conventions_files_directories as default,
  metadata
};
