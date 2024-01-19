
# Web Color
## Making sense of the options

---

## Color Representation

**Hexadecimal Notation:**
Colors are often represented in hexadecimal notation (#RRGGBB), where RR, GG, and BB are two-digit hexadecimal values for red, green, and blue components, respectively.
Example: #FF0000 for red, #00FF00 for green, #0000FF for blue.

<img src="/images/colour/hexadecimal.png" width="500" height="200" style="margin: auto; float: left; width: 45%;">
<img src="/images/colour/shortcodes.png" width="500" height="200" style="margin: auto; float: right; width: 45%;">

---
## Color Representation cntd

**RGB Values**
Colors can also be represented using RGB values, where each component ranges from 0 to 255.
Example: rgb(255, 0, 0) for red, rgb(0, 255, 0) for green, rgb(0, 0, 255) for blue.


**RGBA Values:**
Similar to RGB, but with an additional alpha channel representing opacity.
Example: rgba(255, 0, 0, 0.5) for semi-transparent red.

---

## Color Representation cntd

**HSL Values:**
Colors can be represented using the HSL model, where H stands for hue, S for saturation, and L for lightness.
Example: hsl(0, 100%, 50%) for red, hsl(120, 100%, 50%) for green, hsl(240, 100%, 50%) for blue.

**HSLA Values:**
Similar to HSL, but with an additional alpha channel for controlling opacity.
Example: hsla(0, 100%, 50%, 0.5) for semi-transparent red.

**Named Colors:**
CSS supports a set of named colors like red, green, blue, etc.
---

## Web Color Models

- Web color models are mathematical models that define how colors are represented and displayed on the web. The two primary color models used in web development are the RGB (Red, Green, Blue) model and the HSL (Hue, Saturation, Lightness) model.

---

### RGB Color Model:

**Representation:** Colors are defined by combining varying intensities of red, green, and blue light.

**Values:** Each color channel (R, G, B) typically ranges from 0 to 255.

**Example:** rgb(255, 0, 0) for red, rgb(0, 255, 0) for green, rgb(0, 0, 255) for blue.

---
### HSL Color Model:

**Representation:** Colors are defined by specifying the Hue (type of color), Saturation (intensity of color), and Lightness (brightness).

**Values:** Hue is represented in degrees (0 to 360), while Saturation and Lightness are percentages (0% to 100%).

**Example:** hsl(0, 100%, 50%) for red, hsl(120, 100%, 50%) for green, hsl(240, 100%, 50%) for blue.

---

### Advantages of each model

These models provide different ways to express and manipulate colors, and each has its advantages:

**RGB is additive:** It is suitable for representing colors on digital screens where colors are created by combining different intensities of red, green, and blue light.

**HSL is more intuitive:** It is often preferred by designers because it separates color information into components that are more perceptually relevant (hue, saturation, lightness), making it easier to work with.

---

## Examples
- **Hexcode** - RGB format supported by most applications:
    ```css
      color: #663399; // or #639
    ``` 
- **RGB** - A function-based format similar to Hex:
    ```css
      color: rgb(102, 51, 153);
    ```
- **HSL** - A human-friendly format based on the Color wheel:
    ```css
      color: hsl(270deg, 49%, 40%);
    ```

---

![Quote](/images/colour/quote.png)

Source: [Read color hex codes](https://www.youtube.com/watch?v=eqZqx6lRPe0) by David DeSandro

---

### Base-16 numbers

Look at the shortcode to determine colour strength.

![Hexadecimal](/images/colour/low-middle-high.png)

---

### RGB and Hex

RGB channels range from 1-255<br>
Hex channels range from 0-f (in double digits)

![Wheel of RGB](/images/colour/rgb-wheel.png)

---

### Neutral and Grays

In RGB/Hex neutrals and grays contain near equal amount of each colour. This can be hard to control in code.

![Gray colour](/images/colour/gray.png)

---

### HSL - Hue, Saturation, Lightness
Provides an human-friendly format that is also easily controlled with Javascript. See: [blend mode visualizer](https://acidtone.github.io/blendr/)

![Wheel of HSL](/images/colour/hsl.png)

---

### Hue
- Hue is the type of color, often described by the name of the color itself (red, green, blue, etc.). 
- It is measured in degrees on the color wheel, typically ranging from 0 to 360. 

- An example is ```hsl(0, 100%, 50%)``` represents a color with a hue of 0 degrees, full saturation, and 50% lightness, which is red.

<img src="/images/colour/hue.png" width="400" height="150" style="margin: auto;" alt="Hues on a colour wheel">

---

### Saturation
- Saturation is the intensity or purity of a color. Higher saturation means more vivid and vibrant colors, while lower saturation results in more muted or grayscale tones.  

- It is measured as a percentage, ranging from 0% (completely grayscale) to 100% (fully saturated).

- An example is ```hsl(120, 100%, 50%) ```represents a color with a hue of 120 degrees, full saturation, and 50% lightness, which is a vivid green.

<img src="/images/colour/saturation.png" width="350" height="150" style="margin: auto;" alt="Grid of decreasing saturation">

---

### Lightness
- Lightness represents the amount of white or black mixed with a color. It determines how light or dark the color appears. It is the key for predictable contrast ratios. 

- It is measured as a percentage, ranging from 0% (black) to 100% (white), with 50% being the mid-point representing the original color. 

- An example is ```hsl(120, 100%, 50%)``` represents a color with a hue of 120 degrees, full saturation, and 50% lightness, which is a vivid green at its mid-point brightness.

<img src="/images/colour/lightness.png" width="350" height="150" style="margin: auto;" alt="Grid of decreasing brightness">

---

## How to Use Colour: **60-30-20 Rule**

The 60-30-10 rule is a basic principle used in design, including web design, to create visually appealing color schemes. The rule suggests allocating percentages to different colors as follows:

**60% - Dominant Color:**
The primary color that dominates the design. This color sets the overall tone and is usually applied to the majority of the design elements, such as the background.

**30% - Secondary Color:**
A complementary or contrasting color to the dominant color. This color is used for secondary elements, such as accents, borders, or secondary backgrounds.

**10% - Accent Color:**
A vibrant or contrasting color that adds a pop of interest. This color is used sparingly for small details, highlights, or call-to-action elements.

---

- Use the [60-30-10 rule](https://www.youtube.com/watch?v=UWwNIMHFdW4) to pick:
    - 60% use of a **dominant/neutral** colour
    - 30% use of a **secondary** colour
    - 10% use of a **accent/call-to-action** colour
- Use [colour harmonies](https://www.sarasoueidan.com/blog/hex-rgb-to-hsl/) when mixing colours;
- Kevin Powell from [Give your site a fantastic color scheme fast](https://www.youtube.com/watch?v=mq8LYj6kRyE):
    > Start with white, black and a "punch" colour.

---

## The 60-30-10 Rule

![Example of 60-30-10 ratio](/images/colour/60-30-10.png)
```
/* Example in CSS */
body {
  background-color: #F5F5F5; /* 60% - Dominant color (light gray) */
}

.header {
  color: #333333; /* 30% - Secondary color (dark gray) */
}

.button {
  background-color: #FF0000; /* 10% - Accent color (red) */
}

```
---
### Colour Harmonies
Vary hue angle to match a harmony

![Grid of decreasing brightness](/images/colour/colour-harmonies.png)

---

## Contrast ratio
- The color contrast between background and foreground content (that is, usually text) should be great enough to ensure legibility.
- When designing readable interfaces for different vision capabilities, the WCAG guidelines recommend the [following contrast ratios](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast).
- **Use Lightness** to ensure foreground and background colours are high enough contrast.

---

## Determining contrast ratio
1. Tony's fave [contrast ratio checker](https://contrast-ratio.com/)
2. Firefox Inspector
    1. Right-click and inspect an element with text;
    2. Under `Rules`, find the color declaration of the text;
    3. Click on the color swatch. An info window will pop up listing the contrast of the color.

---

### Examples of representing colors: Lets give it a shot!

```
/* Examples in CSS with different hues */
.element1 {
  background-color: hsl(0, 100%, 50%); 
}

.element2 {
  background-color: hsl(120, 100%, 50%);
}

.element3 {
  background-color: hsl(240, 100%, 50%);
}
```

---

```
.element1 {
  background-color: hsl(120, 100%, 50%); 
}

.element2 {
  background-color: hsl(120, 50%, 50%);
}

.element3 {
  background-color: hsl(120, 0%, 50%);
}

```

---
```
/* Examples in CSS with different lightness values */
.element1 {
  background-color: hsl(120, 100%, 50%); 
}

.element2 {
  background-color: hsl(120, 100%, 25%); 
}

.element3 {
  background-color: hsl(120, 100%, 75%);
}
```
---

## Key Takeaways
- There are 140 supported **Color names** (minus aliases);
- **Hex** (base-16) and **RGB** (base-10) are based on the same Color model with different syntax;
- **HSL** is human-friendly and makes it easy to predict contrast ratio.
- **Shortcodes** Takes the first third and fifth numbers only.

---


<!-- ```
/* Examples in CSS with different hues */
.element1 {
  background-color: hsl(0, 100%, 50%); /* Red */
}

.element2 {
  background-color: hsl(120, 100%, 50%); /* Green */
}

.element3 {
  background-color: hsl(240, 100%, 50%); /* Blue */
}

``` -->
<!-- /* Examples in CSS with different saturations */
.element1 {
  background-color: hsl(120, 100%, 50%); /* Fully saturated green */
}

.element2 {
  background-color: hsl(120, 50%, 50%); /* Moderately saturated green */
}

.element3 {
  background-color: hsl(120, 0%, 50%); /* Grayscale representation of green */
} -->

<!-- /* Examples in CSS with different lightness values */
.element1 {
  background-color: hsl(120, 100%, 50%); /* Mid-brightness green */
}

.element2 {
  background-color: hsl(120, 100%, 25%); /* Dark green */
}

.element3 {
  background-color: hsl(120, 100%, 75%); /* Light green */
} -->

