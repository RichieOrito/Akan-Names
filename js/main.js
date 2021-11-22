// An Array of the days of the week
let daysOfTheWeek = 
[
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];

// An array of the make Akan Names
let maleNames = 
[
"Kwasi",
"Kwadwo", 
"Kwabena", 
"Kwaku", 
"Yaw",
"Kofi",
"Kwame"];

// An array of the female Akan Names
let femaleNames = 
[
"Akosua", 
"Adwoa", 
"Abenaa",
"Akua",
"Yaa", 
"Afua", 
"Ama"
];


// This is a function of getting the birthday of the users where I used let date = new Date(dateInput)
// Got the formula from MDN.Docs
function getBirthdate() {

    let dateInput = document.getElementById("date").value;

    let date = new Date(dateInput);

    if (!!date.valueOf()) {

        let year = date.getFullYear().toString();

        let dayOfWeek = date.getDay();

        return dayOfWeek;

    } 
    //if the date input is not compatible with a users date of birth let them be notified to select their birth days
    // or the user doesn't select anything let them be notified 
    else {
        alert("Please select your month , day and date of birth.");
        return;
    }
}

// This is a function used to select gender (used stack overflow for research)
function getGender() {

    let gender;

    if ((form.gender[0].checked == true) || (form.gender[1].checked == true)) {

        if (form.gender[0].checked == true) {
            gender = 0;

        } else if (form.gender[1].checked == true) {
            gender = 1;
        }
        return gender;

    } 
    // if user hasn't selected their Genders please let them be notified
    else {
        alert("Please select your gender!");
        return;
    }
}

//This fumction gets the Akan Name matched with the day you were born
function getName() {

    let selectedGender = getGender();

    let dayOfWeek = getBirthdate();

    if ((!!dayOfWeek.valueOf() === true) || (dayOfWeek == 0))  {
        //if the male gender is selected let the result be an Akan name (maleNames)
        if (selectedGender === 0) {

            let result ="Hey" + ' ' + "You were born on a " + daysOfTheWeek[dayOfWeek] + ' ' + "and" + ' ' +"Your Akan name is " + maleNames[dayOfWeek] + ".";

            document.getElementById("result").innerHTML = alert(result);

        } 
        //if the female is selected and not the male gender is selected let the result be an Akan name ( femaleNames)
        else if (selectedGender === 1) {

            let result ="Hey" + ' '  + "You were on a " + daysOfTheWeek[dayOfWeek] + ' ' + "and" + ' ' +"Your Akan name is " + femaleNames[dayOfWeek] + ".";

            document.getElementById("result").innerHTML = alert(result);
        }

    }
    
  
}