document.getElementById("wholeYear22").style.display = "none";
// document.getElementById("loginDiv").style.display = "none";

// Tabs for Year
function openYear(year){
let i, tablinks1, tablinks;


// Get all elements with class="tablinks" and hide them
tablinks1 = document.getElementsByClassName("tablinks1");
for (i = 0; i < tablinks1.length; i++) {
    tablinks1[i].style.display = "none";
}


// Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(year).style.display = "block";
  evt.currentTarget.className += "active";
}




// Tabs for Month
function openMonth(month){
  let i, tablinks1, tablinks2;

// Get all elements with class="tabcontent" and hide them
tablinks2 = document.getElementsByClassName("tablinks2");
for (i = 0; i < tablinks2.length; i++) {
  tablinks2[i].style.display = "none";
}
// Get all elements with class="tablinks" and remove the class "active"
tablinks1 = document.getElementsByClassName("tablinks1");
for (i = 0; i < tablinks1.length; i++) {
  tablinks1[i].className = tablinks1[i].className.replace(" active", "");
}
// document.getElementById("loginDiv").style.display = "block";
document.getElementById("wholeYear22").style.display = "block";
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(month).style.display = "block";
  evt.currentTarget.className += "active";
}




//Function login
function loginBtn(){
let newDate = new Date();
let gettingYear = newDate.getFullYear();
let gettingMonths = newDate.getMonth() + 1;
let gettingDays = newDate.getDate();
let gettingHours = newDate.getHours();
let gettingMinutes = newDate.getMinutes();

//printing login dates per month
switch(gettingYear){
  case 2021: 
  switch(gettingMonths){
    case 1:
      document.getElementById(`${gettingMonths}jan${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 2:
        document.getElementById(`${gettingMonths}feb${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 3:
        document.getElementById(`${gettingMonths}mar${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 4:
        document.getElementById(`${gettingMonths}apr${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 5:
        document.getElementById(`${gettingMonths}may${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 6:
        document.getElementById(`${gettingMonths}jun${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 7:
        document.getElementById(`${gettingMonths}jul${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 8:
        document.getElementById(`${gettingMonths}aug${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 9:
        document.getElementById(`${gettingMonths}sept${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 10:
        document.getElementById(`${gettingMonths}oct${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 11:
        document.getElementById(`${gettingMonths}nov${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 12:
        document.getElementById(`${gettingMonths}dec${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
    }
    break;
  case 2022: 
  switch(gettingMonths){
    case 1:
      document.getElementById(`${gettingMonths}jan${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 2:
        document.getElementById(`${gettingMonths}feb${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 3:
        document.getElementById(`${gettingMonths}mar${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 4:
        document.getElementById(`${gettingMonths}apr${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 5:
        document.getElementById(`${gettingMonths}may${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 6:
        document.getElementById(`${gettingMonths}jun${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 7:
        document.getElementById(`${gettingMonths}jul${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 8:
        document.getElementById(`${gettingMonths}aug${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 9:
        document.getElementById(`${gettingMonths}sept${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 10:
        document.getElementById(`${gettingMonths}oct${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 11:
        document.getElementById(`${gettingMonths}nov${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 12:
        document.getElementById(`${gettingMonths}dec${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
    }
    break;
  case 2023: 
  switch(gettingMonths){
    case 1:
      document.getElementById(`${gettingMonths}jan${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 2:
        document.getElementById(`${gettingMonths}feb${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 3:
        document.getElementById(`${gettingMonths}mar${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 4:
        document.getElementById(`${gettingMonths}apr${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 5:
        document.getElementById(`${gettingMonths}may${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 6:
        document.getElementById(`${gettingMonths}jun${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 7:
        document.getElementById(`${gettingMonths}jul${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 8:
        document.getElementById(`${gettingMonths}aug${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 9:
        document.getElementById(`${gettingMonths}sept${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 10:
        document.getElementById(`${gettingMonths}oct${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 11:
        document.getElementById(`${gettingMonths}nov${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
      case 12:
        document.getElementById(`${gettingMonths}dec${gettingDays}loginTime`).textContent = gettingHours + " : " + gettingMinutes;
        break;
    }
    break;  
  }
}

//Function logout
function logoutBtn(){
  let newDate = new Date();
  let gettingYear = newDate.getFullYear();
  let gettingMonths = newDate.getMonth() + 1;
  let gettingDays = newDate.getDate();
  let gettingHours = newDate.getHours();
  let gettingMinutes = newDate.getMinutes();
  
  //printing login dates per month
  switch(gettingYear){
    case 2021: 
    switch(gettingMonths){
      case 1:
        document.getElementById(`${gettingMonths}jan${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 2:
          document.getElementById(`${gettingMonths}feb${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 3:
          document.getElementById(`${gettingMonths}mar${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 4:
          document.getElementById(`${gettingMonths}apr${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 5:
          document.getElementById(`${gettingMonths}may${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 6:
          document.getElementById(`${gettingMonths}jun${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 7:
          document.getElementById(`${gettingMonths}jul${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 8:
          document.getElementById(`${gettingMonths}aug${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 9:
          document.getElementById(`${gettingMonths}sept${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 10:
          document.getElementById(`${gettingMonths}oct${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 11:
          document.getElementById(`${gettingMonths}nov${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 12:
          document.getElementById(`${gettingMonths}dec${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
      }
      break;
    case 2022: 
    switch(gettingMonths){
      case 1:
        document.getElementById(`${gettingMonths}jan${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 2:
          document.getElementById(`${gettingMonths}feb${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 3:
          document.getElementById(`${gettingMonths}mar${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 4:
          document.getElementById(`${gettingMonths}apr${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 5:
          document.getElementById(`${gettingMonths}may${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 6:
          document.getElementById(`${gettingMonths}jun${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 7:
          document.getElementById(`${gettingMonths}jul${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 8:
          document.getElementById(`${gettingMonths}aug${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 9:
          document.getElementById(`${gettingMonths}sept${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 10:
          document.getElementById(`${gettingMonths}oct${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 11:
          document.getElementById(`${gettingMonths}nov${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 12:
          document.getElementById(`${gettingMonths}dec${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
      }
      break;
    case 2023: 
    switch(gettingMonths){
      case 1:
        document.getElementById(`${gettingMonths}jan${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 2:
          document.getElementById(`${gettingMonths}feb${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 3:
          document.getElementById(`${gettingMonths}mar${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 4:
          document.getElementById(`${gettingMonths}apr${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 5:
          document.getElementById(`${gettingMonths}may${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 6:
          document.getElementById(`${gettingMonths}jun${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 7:
          document.getElementById(`${gettingMonths}jul${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 8:
          document.getElementById(`${gettingMonths}aug${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 9:
          document.getElementById(`${gettingMonths}sept${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 10:
          document.getElementById(`${gettingMonths}oct${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 11:
          document.getElementById(`${gettingMonths}nov${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 12:
          document.getElementById(`${gettingMonths}dec${gettingDays}logoutTime`).textContent = gettingHours + " : " + gettingMinutes;
          break;
      }
      break;  
    }
}

//Function Lunch Start
function lunchstartBtn(){
  let newDate = new Date();
  let gettingYear = newDate.getFullYear();
  let gettingMonths = newDate.getMonth() + 1;
  let gettingDays = newDate.getDate();
  let gettingHours = newDate.getHours();
  let gettingMinutes = newDate.getMinutes();
  
  //printing login dates per month
  switch(gettingYear){
    case 2021: 
    switch(gettingMonths){
      case 1:
        document.getElementById(`${gettingMonths}jan${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 2:
          document.getElementById(`${gettingMonths}feb${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 3:
          document.getElementById(`${gettingMonths}mar${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 4:
          document.getElementById(`${gettingMonths}apr${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 5:
          document.getElementById(`${gettingMonths}may${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 6:
          document.getElementById(`${gettingMonths}jun${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 7:
          document.getElementById(`${gettingMonths}jul${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 8:
          document.getElementById(`${gettingMonths}aug${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 9:
          document.getElementById(`${gettingMonths}sept${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 10:
          document.getElementById(`${gettingMonths}oct${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 11:
          document.getElementById(`${gettingMonths}nov${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 12:
          document.getElementById(`${gettingMonths}dec${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
      }
      break;
    case 2022: 
    switch(gettingMonths){
      case 1:
        document.getElementById(`${gettingMonths}jan${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 2:
          document.getElementById(`${gettingMonths}feb${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 3:
          document.getElementById(`${gettingMonths}mar${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 4:
          document.getElementById(`${gettingMonths}apr${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 5:
          document.getElementById(`${gettingMonths}may${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 6:
          document.getElementById(`${gettingMonths}jun${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 7:
          document.getElementById(`${gettingMonths}jul${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 8:
          document.getElementById(`${gettingMonths}aug${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 9:
          document.getElementById(`${gettingMonths}sept${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 10:
          document.getElementById(`${gettingMonths}oct${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 11:
          document.getElementById(`${gettingMonths}nov${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 12:
          document.getElementById(`${gettingMonths}dec${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
      }
      break;
    case 2023: 
    switch(gettingMonths){
      case 1:
        document.getElementById(`${gettingMonths}jan${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 2:
          document.getElementById(`${gettingMonths}feb${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 3:
          document.getElementById(`${gettingMonths}mar${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 4:
          document.getElementById(`${gettingMonths}apr${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 5:
          document.getElementById(`${gettingMonths}may${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 6:
          document.getElementById(`${gettingMonths}jun${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 7:
          document.getElementById(`${gettingMonths}jul${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 8:
          document.getElementById(`${gettingMonths}aug${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 9:
          document.getElementById(`${gettingMonths}sept${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 10:
          document.getElementById(`${gettingMonths}oct${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 11:
          document.getElementById(`${gettingMonths}nov${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 12:
          document.getElementById(`${gettingMonths}dec${gettingDays}lunchTimeStart`).textContent = gettingHours + " : " + gettingMinutes;
          break;
      }
      break;  
    }
}

//Function Lunch End
function lunchendBtn(){
  let newDate = new Date();
  let gettingYear = newDate.getFullYear();
  let gettingMonths = newDate.getMonth() + 1;
  let gettingDays = newDate.getDate();
  let gettingHours = newDate.getHours();
  let gettingMinutes = newDate.getMinutes();
  
  //printing login dates per month
  switch(gettingYear){
    case 2021: 
    switch(gettingMonths){
      case 1:
        document.getElementById(`${gettingMonths}jan${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 2:
          document.getElementById(`${gettingMonths}feb${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 3:
          document.getElementById(`${gettingMonths}mar${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 4:
          document.getElementById(`${gettingMonths}apr${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 5:
          document.getElementById(`${gettingMonths}may${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 6:
          document.getElementById(`${gettingMonths}jun${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 7:
          document.getElementById(`${gettingMonths}jul${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 8:
          document.getElementById(`${gettingMonths}aug${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 9:
          document.getElementById(`${gettingMonths}sept${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 10:
          document.getElementById(`${gettingMonths}oct${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 11:
          document.getElementById(`${gettingMonths}nov${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 12:
          document.getElementById(`${gettingMonths}dec${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
      }
      break;
    case 2022: 
    switch(gettingMonths){
      case 1:
        document.getElementById(`${gettingMonths}jan${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 2:
          document.getElementById(`${gettingMonths}feb${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 3:
          document.getElementById(`${gettingMonths}mar${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 4:
          document.getElementById(`${gettingMonths}apr${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 5:
          document.getElementById(`${gettingMonths}may${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 6:
          document.getElementById(`${gettingMonths}jun${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 7:
          document.getElementById(`${gettingMonths}jul${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 8:
          document.getElementById(`${gettingMonths}aug${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 9:
          document.getElementById(`${gettingMonths}sept${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 10:
          document.getElementById(`${gettingMonths}oct${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 11:
          document.getElementById(`${gettingMonths}nov${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 12:
          document.getElementById(`${gettingMonths}dec${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
      }
      break;
    case 2023: 
    switch(gettingMonths){
      case 1:
        document.getElementById(`${gettingMonths}jan${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 2:
          document.getElementById(`${gettingMonths}feb${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 3:
          document.getElementById(`${gettingMonths}mar${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 4:
          document.getElementById(`${gettingMonths}apr${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 5:
          document.getElementById(`${gettingMonths}may${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 6:
          document.getElementById(`${gettingMonths}jun${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 7:
          document.getElementById(`${gettingMonths}jul${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 8:
          document.getElementById(`${gettingMonths}aug${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 9:
          document.getElementById(`${gettingMonths}sept${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 10:
          document.getElementById(`${gettingMonths}oct${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 11:
          document.getElementById(`${gettingMonths}nov${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
        case 12:
          document.getElementById(`${gettingMonths}dec${gettingDays}lunchTimeEnd`).textContent = gettingHours + " : " + gettingMinutes;
          break;
      }
      break;  
    }
}
