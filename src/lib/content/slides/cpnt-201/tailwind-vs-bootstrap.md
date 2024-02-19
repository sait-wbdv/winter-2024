# Tailwind CSS
## Learning CSS Frameworks

---

### What is Tailwind?

A utility-first CSS framework that provides a highly customizable set of utility classes to build responsive and modern user interfaces efficiently.

Tailwind CSS was created in 2017 by Adam Wathan and Steve Schoger.
       
---

### What is utility-first?

- **Small, Atomic Classes**: controls specific CSS properties such as margin, font size, and positioning

- **Composability**: can be combined and layered to create complex layouts without writing custom CSS

- **Responsive by Default**: classes can be prefixed with breakpoints to apply styles at specific screen sizes.

- **Low Specificity**: classes are less likely to override each other and lead to specificity wars commonly encountered in traditional CSS.

- **Customization and Theming**: Developers can extend or override default styles to match the design requirements of their projects

- **Rapid Prototyping**: quickly prototype layouts and components in basic HTML markup
- **Learning Curve**: a bit of a learning curve

---

### Examples of utility first frameworks

- Tailwind CSS (most popular)
- Tachyons
- Bulma
- UIKit
- Foundation
- Basscss
- BareCSS

---

### Tailwind CSS vs Bootstrap

|       | Tailwind CSS | Bootstrap CSS |
| :---        |  :----      | :----       |
| Approach    | Utility-first CSS framework   | Component-based framework plus utility classes       |
| Styles   | All styles defined in utility classes        | Pre-defined classes for each component        |
| Customization   | Highly customizable with composable utilities       | Less flexible, relies on pre-made components        |
| Theming   | Customizable themes using a configuration file       |Offers pre-designed themes and templates        |


---
### Tailwind CSS vs Bootstrap contd...

|       | Tailwind CSS | Bootstrap CSS |
| :---        |  :----      | :----       |
| Components   | An opinionated component library is available, such as Tailwind UI, a commercial product.        | Comes with extensive component library        |
| Learning Curve   | Steeper learning curve due to new utility-first paradigm.        | Easier for beginners familiar with CSS  |
| Community   | Smaller community but very helpful resources due to a rise in popularity        | Massive community resources  |

---

### A Bootstrap example

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Short Example</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Welcome to Bootstrap Short Example</h1>
            <p class="lead">This is a simple example of using Bootstrap.</p>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4"><div class="card"><div class="card-body"><h5 class="card-title">Card 1</h5><p class="card-text">This is a sample card.</p></div></div></div>
            <div class="col-md-4"><div class="card"><div class="card-body"><h5 class="card-title">Card 2</h5><p class="card-text">Another sample card.</p></div></div></div>
        </div>
    </div>
</body>
</html>

```

---

### A Tailwind CSS example

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Short Example</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-200">
    <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <a class="text-white font-bold" href="#">Tailwind CSS Example</a>
            <ul class="flex space-x-4">
                <li><a class="text-white" href="#">Home</a></li>
                <li><a class="text-white" href="#">About</a></li>
                <li><a class="text-white" href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
    <div class="container mx-auto mt-8 grid grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-lg shadow-md"><h2 class="text-xl font-semibold mb-2">Card 1</h2><p>This is a sample card.</p></div>
        <div class="bg-white p-4 rounded-lg shadow-md"><h2 class="text-xl font-semibold mb-2">Card 2</h2><p>Another sample card.</p></div>
        <div class="bg-white p-4 rounded-lg shadow-md"><h2 class="text-xl font-semibold mb-2">Card 3</h2><p>Yet another sample card.</p></div>
    </div>
</body>
</html>

```

---

### Key Takeaways from learning TailwindCSS

 - Utility-First Methodology

 - Plan Your Design System

 - Leverage Utility Classes

 - Avoid Inline Styles

 - Keep Utility Classes Semantic: use .bg-blue-500 for a blue background rather than .bg-color-primary
 
 - Use Responsive Design



