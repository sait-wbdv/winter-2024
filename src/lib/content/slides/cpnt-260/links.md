# Understanding Hyperlinks

## Hyperlinks in Web Development

---

## What are Hyperlinks
- Hyperlinks are one of the most exciting innovations the Web has to offer. 
- They've been a feature of the Web since the beginning, and are what makes the Web a web. 
- Hyperlinks allow us to link documents to other documents or resources, link to specific parts of documents, or make apps available at a web address. 
- Almost any web content can be converted to a link so that when clicked or otherwise activated the web browser goes to another web address 

---
## Types of Hyperlinks
- Text links
- Image links
- Button links
- Navigation links

---
## HTML Link Tag ```<a>``` tag
```
<a href="https://www.w3schools.com/" target="_blank">
  Visit W3Schools!
</a>

```
- **```<a>```**: This is the opening tag of the anchor element, indicating the start of the link.

- **href="URL_here":** The href attribute specifies the URL (Uniform Resource Locator) of the linked resource. It can point to various types of resources, such as other web pages, images, documents, etc.

---
## HTML Link Tag ```<a>``` tag

- **Link Text or Content:** This is the text or content that will be clickable and act as the link. It represents what users will see on the page.

- **Target**: Used to specify where the linked content should be opened. It is an optional attribute and the options can be 
  - "_blank": opens in new tab
  - "_self": opens in same tab(this is the default value)
  - "_parent": opens in parent frame
  - "_top": opens the links in the full body of the window.

- **```</a>```**: This is the closing tag of the anchor element, indicating the end of the link.

---

## Styling Links

Links can be styled with any CSS property (e.g. color, font-family, background, etc.)

```
a {
  color: hotpink;
  text-decoration: underline;
}

```

**Link states**
- Normal
- Visited
- Focus 
- Hover
- Active

---
## Styling Links
**Ordering is important when styling link states:**
```
  a {
  }

  a:link {
  }

  a:visited {
  }

  a:focus {
  }

  a:hover {
  }

  a:active {
  }
```

---
## Key takeaways (Best practices)
- **Descriptive Link Text** - avoid phrases like 'click here" 

- **Consistent Styling** - Use CSS to style links in a way that complements your overall design and provides a cohesive user experience.

- **Differentiate Link Styles** - Clearly distinguish between normal, hover, active, and visited link states using distinct styles.

- **Open External Links in a New Tab** - Consider using the target="_blank" attribute for external links to open them in a new tab. This can help users retain your website as they explore external content.

- **Test for Accessibility** - Use descriptive text and, if needed, provide additional information using ARIA attributes.

---

## Test your knowledge
https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Links

