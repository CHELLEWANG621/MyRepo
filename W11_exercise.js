function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  const svg = document.getElementById('universe-svg');
  
  for (var i = 0; i < 20; i++) {
    var x = getRandomPosition(50, 950);
    var y = getRandomPosition(0, 250);
    var radius = getRandomPosition(5, 30);
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    var color = `rgb(${red}, ${green}, ${blue})`;
  
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", color);
  
    svg.appendChild(circle);
  }
  