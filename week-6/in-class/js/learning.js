// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";
let my_name = "Moonyung";
let your_name = "Jenn";

if (my_name === "Moonyung") {
    renderOutput("That's me!");
    } else if (my_name === "Jenn") {
renderOutput("That's Jenn!");
} else {
      renderOutput("I must be someone else");
    }

function hellowWorld() {
  renderOutput("Hello World");
}

helloWorld();
helloWorld();
helloWorld();

function helloName(name){
  renderOutput("Hello " + name);
}

helloName("Ben");
helloName("George");
helloName("Martha");

function todaysHours(days_hours){
  renderOutput(days_hours)
}

//todaysHours("Tuesday: 9a - 5p");

hours.forEach(todaysHours);


for (let i = 1; i < 11; i = i++) {
  renderOutput(i);
}

my_name = prompt("Enter your name");
console.log(my_name);

if (my_name.length === 8) {
   renderOutput("Are you Moonyung?"); 
} else if (my_name.length === 4) {
  renderOutput("Are you Jenn?");
} else {
  renderOutput("Who are you?")
}


