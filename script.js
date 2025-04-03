// ---- Global Variables ----

// ---- Content to feed the generator ----

// -- Conservative Targets

// an array of typical individuals conservatives target
const targetPeople = ["Trudeau", "Jagmeet", "Carney"];

// an array of typical groups conservatives target
const targetGroups = ["Gays", "Queers", "Transexuals", "Athiests", "Liberals", "Left", "Lefties", "Libtards", "Feminists", "Liberals", "Dippers", "Muslims", "Non-Christians", "Vegans", "Vegetarians", "Antifa", "BLM Protesters", "Protesters", "Environmentalists", "Activists", "Social Justice Warriors", "Foreigners", "Immigrants", "Refugees", "Arabs", "Chinese", "Homosexuals", "Bisexuals", "LGBTQ+", "Alphabet-Soupers"];

// an array of typical dogwhistle phrases
const targetAgendas = ["The Gay Agenda", "Feminism", "BLM", "Wokeness", "The Trans Agenda", "Social Justice", "Leftism", "Liberal Ideals", "Environmentalism", "Green Propaganda", "Gay culture", "Wokeness", "The Woke Agenda", "Ecoterrorism"];

// -- Conservative Victims

// an array of typical virtuous individuals
const victimPeople = ["Pierre Polivier", "Stephen Harper", "Donald Trump", "Elon Musk", "Conrad Black", "Dr. Jordan Peterson"];

// an array of typical virtuous groups
const victimGroups = ["Christans", "Normal People", "Working Class", "Middle Class", "Common People", "Billionaires", "Caucasions", "Conservatives", "Children", "Western World"];

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
                stringArray.push("will always stand up for "+arrayPicker(victimVirtues));
                break;
            case 3:
                stringArray.push("is trying to save "+arrayPicker(victimGroups)+" from the threat of "+arrayPicker(targetGroups));
                break;
        }
    }
    else{
        //pick a group
        stringArray.push("the "+arrayPicker(victimGroups));

        //connect the sentence
        switch (randFour()){
            case 0:
                stringArray.push("should not have to be exposed to "+arrayPicker(targetAgendas));
                if(randBool){
                    stringArray.push("eroding thier "+arrayPicker(victimVirtues)+".");
                }
                else{
                    stringArray.push("shoved down their throat");
                    if(randBool){
                        stringArray.push(arrayPicker(victimPeople)+" will stop it.")
                    }
                    else{
                        stringArray.push(", it's time for a change.");
                    }
                }
                break;
            case 1:
                stringArray.push("will suffer as long as we let "+arrayPicker(targetGroups)+" push "+arrayPicker(targetAgendas)+" on us");
                break;
            case 2:
                stringArray.push("do not deserve "+arrayPicker(targetAgendas)+",");
                if(randBool){
                    stringArray.push("at least "+arrayPicker(victimPeople)+" will do something about it");
                }
                else{
                    arrayPicker("what they really need is "+arrayPicker(victimVirtues));
                }
                break;
            case 3:
                stringArray.push("are being unfairly targeted by "+arrayPicker(targetGroups)+" and "+arrayPicker(targetAgendas));
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
                stringArray.push("does not care about "+arrayPicker(victimVirtues)+",");
                    if(randBool){
                        stringArray.push("especially if it gets in the way of "+arrayPicker(targetAgendas));
                    }
                    else{
                        stringArray.push("we need a real leader");
                    }
                break;
            case 1:
                stringArray[0] = "fuck "+arrayPicker(targetPeople);
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
        //pick a group, and give them a nasty adjective
        switch(randFour()){
            case 0:
                stringArray.push("its a matter of time before "+arrayPicker(targetGroups));
                break;
            case 1:
                stringArray.push("militant "+arrayPicker(targetGroups));
                break;
            case 2:
                stringArray.push("groups of "+arrayPicker(targetGroups));
                break;
            case 3:
                stringArray.push(arrayPicker(targetGroups));
        }
        //connect the sentence
        switch (randFour()){
            case 0:
                stringArray.push("are the problem "+arrayPicker(victimPeople)+" is the answer");
                break;
            case 1:
                stringArray.push("are taking all of our "+arrayPicker(victimVirtues));
                if(randBool()){
                   stringArray.push("and "+arrayPicker(targetPeople)+" will just let it happen"); 
                }
                else{
                    stringArray.push("and handing them over to the "+arrayPicker(targetGroups));
                }
                break;
            case 2:
                stringArray.push("have to be stopped before everyone is infected with "+arrayPicker(targetAgendas));
                break;
            case 3:
                stringArray.push("are trying to push "+arrayPicker(targetAgendas));
                    switch(randThree()){
                        case 0:
                            stringArray.push("in public bathrooms");
                            break;
                        case 1:
                            stringArray.push("in our schools");
                            break;
                        case 2:
                            stringArray.push("in the places "+arrayPicker(victimGroups)+" go to ");
                                switch(randFour()){
                                    case 0:
                                        stringArray.push("eat");
                                        break;
                                    case 1:
                                        stringArray.push("worship");
                                        break;
                                    case 2:
                                        stringArray.push("gather");
                                        break;
                                    case 3:
                                        stringArray.push("vote");
                                        break;
                                }
                            break;
                    }
                break;
        }
    }

    return stringArray.join(" ").toLowerCase();
}