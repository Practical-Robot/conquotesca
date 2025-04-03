// ---- Global Variables ----

// an array of typical individuals conservatives target
const targetPeople = ["Trudeau", "Singh", "Carney"];
// an array of typical groups conservatives target
const targetGroups = ["Gays", "Queers", "Transexuals", "Athiests", "Liberals", "Left", "Lefties", "Libtards", "Feminists", "Liberals", "Dippers", "Muslims", "Non-Christians", "Vegans", "Vegetarians", "Antifa", "BLM Protesters", "Protesters", "Environmentalists", "Activists", "Social Justice Warriors", "Foreigners", "Immigrants", "Refugees", "Sihks", "Arabs", "Chinese", "Homosexuals", "Bisexuals", "LGBTQ+", "Alphabet-Soupers"];



// Page generator Button
const generatorButton = document.getElementById("doTheThing");
// Page title Target (default = "Woke")
const titleTarget = document.getElementById("titlePerp");
// Page tagline Target (default = "Libtard betas")
const taglineTarget = document.getElementById("taglineTarget");
// Page tagline Agenda (default = "liberal playbook")
const taglineAgenda = document.getElementById("taglineAgenda");

// ---- Erase Later - Tester Function ----
generatorButton.onclick = function (){

    alert(arrayPicker(targetPeople));

}

// ---- Random Number Helper Functions ----

// generates boolean 1 or 0
const randBool = () => {return Math.floor(Math.random()*2)};
// generates integers 0, 1, 2
const randThree = () => {return Math.floor(Math.random()*3)};
// generates integers 0, 1, 2, 3
const randFour = () => {return Math.floor(Math.random()*4)};

// ---- Array random selector ----
const arrayPicker = (targetArray) => {

    return targetArray[Math.floor(Math.random()*targetArray.length)];

}
