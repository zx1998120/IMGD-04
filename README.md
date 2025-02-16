# IMGD-04

In this project, I built an animated bar chart using p5.js to visualize external JSON data. The JSON file contains an array of objects, each with a numerical value and an optional label. The sketch loads this data during the preload phase, then creates bar objects with initial heights set to zero.

During the draw loop, each bar’s height is smoothly animated from 0 to its target value using linear interpolation. This creates a dynamic “growing” effect as the chart builds itself on the canvas. Each bar is evenly spaced, with its corresponding label and value displayed to provide clear context.

My main goals were to practice loading external data, work with arrays and loops, and explore creative ways to represent data visually. The project successfully transforms raw data into an engaging, animated visualization that is both informative and visually appealing.
