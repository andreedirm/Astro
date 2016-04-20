var planets = ["The Sun", "Mercury", "Venus", "Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]
var gravity = [27.9, 0.377, 0.9032, 1, 0.1655, 0.3895, 2.640, 1.139, 0.917, 1.148, 0.06]

for(var i = 0; i < planets.length; i++) //all loops will be in this format
{
var one= document.createElement("option");
one.text = planets[i];
one.value = gravity[i];
var select = document.getElementById("dropdown");
select.appendChild(one);
}  

function finalWeight() {
  var weight = document.getElementsByName("userWeight")[0].value;
  
  var pick = document.getElementById("dropdown");
  
  var multiple = pick.options[pick.selectedIndex].value;
  var planets = pick.options[pick.selectedIndex].text;
  
  var doingWork = weight * multiple;
  
  var holder = document.getElementById("para");
  holder.innerHTML = "Your weight is " + doingWork + " pounders baby on "+ planets;
}

