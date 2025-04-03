// ---- Global Variables ----

// ---- Content to feed the generator ----

// -- Conservative Targets

// an array of typical individuals conservatives target
const targetPeople = ["Trudeau", "Singh", "Carney"];

// an array of typical groups conservatives target
const targetGroups = ["Gays", "Queers", "Transexuals", "Athiests", "Liberals", "Left", "Lefties", "Libtards", "Feminists", "Liberals", "Dippers", "Muslims", "Non-Christians", "Vegans", "Vegetarians", "Antifa", "BLM Protesters", "Protesters", "Environmentalists", "Activists", "Social Justice Warriors", "Foreigners", "Immigrants", "Refugees", "Sihks", "Arabs", "Chinese", "Homosexuals", "Bisexuals", "LGBTQ+", "Alphabet-Soupers", "Natives"];

// an array of typical dogwhistle phrases
const targetAgendas = ["Gay Agenda", "Feminism", "BLM", "Wokeness", "Trans Agenda", "Social Justice", "Leftism", "Liberal Ideals", "Environmentalism", "Green Agenda", "Gayness", "Wokeness", "Woke Agenda", "Ecoterrorism"];

// -- Conservative Victims

// an array of typical virtuous individuals
const victimPeople = ["Pierre Polivier", "Stephen Harper", "Donald Trump", "Elon Musk", "Conrad Black", "Dr. Jordan Peterson"];

// an array of typical virtuous groups
const victimGroups = ["Christans", "Normal People", "Working-Class", "Middle-Class", "Common People", "Billionaires", "Caucasions", "Conservatives", "Children", "Rebels"];

// an array of virtues
const victimVirtues = ["Free Market", "Family Values", "Common Sense", "Reason", "Traditional Values", "Guns", "Freedom", "Freedom of Religion", "Free Speech", "Churches", "The World"];

// ---- Page Element Selectors ----

// Page generator Button
const generatorButton = document.getElementById("doTheThing");

// Page title Target (default = "Woke")
const titleTarget = document.getElementById("titlePerp");

// Page tagline Target (default = "Libtard betas")
const taglineTarget = document.getElementById("taglineTarget");

// Page tagline Agenda (default = "liberal playbook")
const taglineAgenda = document.getElementById("taglineAgenda");

// Get the paragraph to modify
const quoteLocation = document.getElementById("quoteLocation");


// ---- Erase Later - Tester Function ----
generatorButton.onclick = function (){

    quoteGenerator();

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

// ---- Generator Functions ----

const quoteGenerator = () => {

    // Return a string talking about the goodguys or the badguys
    quoteLocation.innerHTML = goodBad(randBool());
    
}

const goodBad = (bool) => {

    if(bool){
        return "good";
    }
    else{
        return "bad";
    }
}

