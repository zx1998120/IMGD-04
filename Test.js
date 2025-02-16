let data;       // Will hold our JSON data
let bars = [];  // Array to store bar objects

// preload() ensures the data is loaded before setup() runs
function preload() {
  data = loadJSON("data.json");
}

function setup() {
  createCanvas(800, 600);
  console.log(data); // Check the loaded JSON in the console
  
  // Create a bar for each item in the JSON
  if (data && data.items) {
    for (let i = 0; i < data.items.length; i++) {
      bars.push({
        value: data.items[i].value,     // Data value
        label: data.items[i].label || "", // Optional label
        currentHeight: 0                // Start height at 0 for animation
      });
    }
  }
  
  noStroke();
}

function draw() {
  background(240);
  
  let margin = 50;
  let spacing = 20;
  let availableWidth = width - margin * 2;
  let barWidth = availableWidth / bars.length - spacing;
  
  // Loop through each bar to animate and draw them
  for (let i = 0; i < bars.length; i++) {
    // Map the data value to a target bar height (assuming max value 100)
    let targetHeight = map(bars[i].value, 0, 100, 0, height - margin * 2);
    
    // Smoothly animate the bar's height using linear interpolation
    bars[i].currentHeight = lerp(bars[i].currentHeight, targetHeight, 0.1);
    
    // Calculate bar position
    let x = margin + i * (barWidth + spacing);
    let y = height - margin;
    
    // Draw the bar
    fill(100, 150, 240);
    rect(x, y - bars[i].currentHeight, barWidth, bars[i].currentHeight);
    
    // Draw the label and value
    fill(0);
    textAlign(CENTER, CENTER);
    text(bars[i].label, x + barWidth / 2, y + 15);
    text(Math.floor(bars[i].value), x + barWidth / 2, y - bars[i].currentHeight - 10);
  }
}