import { employeeArr, currentUser } from '../config.js';


const login = function(){
    let username = document.querySelector('#username-el').value;
    let password = document.querySelector('#password-el').value;
    let optional = document.getElementById("optional");
 
    
    for(let i = 0; i < employeeArr.length; i++){
    if(username === employeeArr[i].userName){
        if(password === employeeArr[i].password){
            currentUser.push(employeeArr[i])
            window.location.assign('\HomePage.html');
        }
        else{
        optional.textContent = "Invalid password";
        }
    }
    else{
        optional.textContent = "Invalid username or password"
    }
    }
    }
    
  console.log(currentUser);

   loginBtn.addEventListener('click', login);
