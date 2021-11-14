//Arrays of Akan Male , Female Names , Days of The Week
let maleNames = ["Kwasi", "Kwadow", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame",];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let daysOfWeek =[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function validateForm(){
  let gender= document.getElementsByName("gender");
  let dateInput = document.getElementByNameById("date").value;
  let date = new Date(dateInput);

  if (!!date.valueOf()){
    let year = date.getFullYear().toString();
    let MM = date.getMonth()+1;
    let DD = date.getDate();
    let CC = parseInt(year.slice(0,2));
    let YY = parseInt(year.slice(2,4));
    let dayofWeek = (((CC / 4)-2* CC - 1) + (5 * YY / 4)+ (26 * (MM+1) / 10) +DD) % 7;
    let dayOfWeek = date.getDay();
    return dayOfWeek;
  }
  else{
    alert("Select your date of birth");
    return;
  }
  }

