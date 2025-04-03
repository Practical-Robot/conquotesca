// ---- Global Variables ----

// ---- Content to feed the generator ----

// -- Conservative Targets

// an array of typical individuals conservatives target
const targetPeople = ["Trudeau", "Singh", "Carney"];

// an array of typical groups conservatives target
const targetGroups = ["Gays", "Queers", "Transexuals", "Athiests", "Liberals", "Left", "Lefties", "Libtards", "Feminists", "Liberals", "Dippers", "Muslims", "Non-Christians", "Vegans", "Vegetarians", "Antifa", "BLM Protesters", "Protesters", "Environmentalists", "Activists", "Social Justice Warriors", "Foreigners", "Immigrants", "Refugees", "Arabs", "Chinese", "Homosexuals", "Bisexuals", "LGBTQ+", "Alphabet-Soupers"];

// an array of typical dogwhistle phrases
const targetAgendas = ["Gay Agenda", "Feminism", "BLM", "Wokeness", "Trans Agenda", "Social Justice", "Leftism", "Liberal Ideals", "Environmentalism", "Green Agenda", "Gayness", "Wokeness", "Woke Agenda", "Ecoterrorism"];

// -- Conservative Victims

// an array of typical virtuous individuals
const victimPeople = ["Pierre Polivier", "Stephen Harper", "Donald Trump", "Elon Musk", "Conrad Black", "Dr. Jordan Peterson"];

// an array of typical virtuous groups
const victimGroups = ["Christans", "Normal People", "Working-Class", "Middle-Class", "Common People", "Billionaires", "Caucasions", "Conservatives", "Children", "Rebels", "Western World"];

// an array of virtues
const victimVirtues = ["Free Markets", "Family Values", "Common Sense", "Faith", "Traditional Values", "Guns", "Freedom", "Freedom of Religion", "Free Speech", "Churches"];

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
        return goodGuySentence();
    }
    else{
        return badGuySentence();
    }
}

const goodGuySentence = () => {

    return goodSentenceBuilder();

}

const badGuySentence = () => {

    return badSentenceBuilder();

}


function goodSentenceBuilder() {

    let stringArray = [];

    //Group or Individual
    if(randBool()){

        //pick an individual
        stringArray.push(arrayPicker(victimPeople));

        //connect the sentence
        switch (randFour()){
            case 0:
                stringArray.push("only wants to make "+ arrayPicker(victimVirtues) + " great again");
                break;
            case 1:
                stringArray.push("works toward building better "+arrayPicker(victimVirtues)+ " for the "+arrayPicker(victimGroups));
                break;
            case 2:
                stringArray.push("will always stand up for "+arrayPicker(victimGroups));
                break;
            case 3:
                stringArray.push("is trying to ");
                break;
        }
    }
    else{
        //pick a group
        stringArray.push("the "+arrayPicker(victimGroups));

        //connect the sentence
        switch (randFour()){
            case 0:
                stringArray.push("want to");
                break;
            case 1:
                stringArray.push("will");
                break;
            case 2:
                stringArray.push("always");
                break;
            case 3:
                stringArray.push("are trying to");
                break;
        }
    }

    return stringArray.join(" ").toLowerCase();
}

function badSentenceBuilder() {

    let stringArray = [];

    //Group or Individual
    if(randBool()){

        //pick an individual
        stringArray.push(arrayPicker(targetPeople));

        //connect the sentence
        switch (randFour()){
            case 0:
                stringArray.push("only wants to");
                break;
            case 1:
                stringArray.push("works toward");
                break;
            case 2:
                stringArray.push("will always");
                break;
            case 3:
                stringArray.push("is trying to");
                break;
        }
    }
    else{
        //pick a group
        stringArray.push("the "+arrayPicker(targetGroups));

        //connect the sentence
        switch (randFour()){
            case 0:
                stringArray.push("want to");
                break;
            case 1:
                stringArray.push("will");
                break;
            case 3:
                stringArray.push("always");
                break;
            case 4:
                stringArray.push("are trying to");
                break;
        }
    }

    return stringArray.join(" ").toLowerCase();
}