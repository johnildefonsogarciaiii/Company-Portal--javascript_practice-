import { employeeArr } from '../config.js'

console.log(employeeArr);

let applicationBtn = document.querySelector('.new-application');
let closeBtn = document.querySelector('.close-modal');
let applicationModal = document.querySelector('.application-modal')
let overlay = document.querySelector('.overlay')
let submitBtn = document.querySelector('.submitBtn');



const escBtn = document.addEventListener('keydown', function(e){

    if (e.key === 'Escape' && !applicationModal.classList.contains('hide')){
            closeModal();
        }   
    })


//Setting Open and Close Modal Function
const openModal = function(){
applicationModal.classList.remove('hide')
overlay.classList.remove('hide')
}

const closeModal = function(){
applicationModal.classList.add('hide')
overlay.classList.add('hide')
}

applicationBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click',closeModal);
overlay.addEventListener('click', closeModal);



submitBtn.addEventListener('click', function(){
    let typeOfLeave = document.querySelector('.nature_of_leave').value;
    let leaveFrom = document.querySelector('.desired_date_from').value;
    let leaveTo = document.querySelector('.desired_date_to').value;
    let contact = document.querySelector('.contact').value;
    
let datenow = new Date();
let currDate = datenow.getMonth() + 1 + " / " + datenow.getDate() + " / " + datenow.getFullYear();

let applicationEntry = `<tr class=tr>
<td>
    <input type="checkbox" class="application-checkbox">
</td>
<td class="application-date">${currDate}</td>
<td class="application-nature">${typeOfLeave}</td>
<td class="application-from">${leaveFrom}</td>
<td class="application-to">${leaveTo}</td>
<td class="contact">${contact}</td>
</tr></br>`


let applicationTable = document.querySelector('.application-entries');

applicationTable.insertAdjacentHTML('afterbegin', applicationEntry);

closeModal();
});


//setting cancelTicket function
document.querySelector('.cancel-application').addEventListener('click', function(){
    let activeTicket = document.querySelectorAll('.application-checkbox');
    for (i = 0; i < activeTicket.length; i++){
    
    if (activeTicket[i].checked){
        let active = activeTicket[i].parentNode;
        active.parentNode.classList.add('active');
    
        activeTicket.uncheck;
    }
    }
    });


let summaryScreen = document.querySelector('.mid-top')
let pendingScreen = document.querySelector('.pending_application');
let approvedScreen = document.querySelector('.approved_application');
let voidScreen = document.querySelector('.void_application');


let summaryBtn = document.querySelector('.summary');
let pendingBtn = document.querySelector('.pending');
let approvedBtn = document.querySelector('.approved');
let voidBtn = document.querySelector('.Void');


//Setting Modal Leave Status
summaryBtn.addEventListener('click', function(){
    summaryScreen.classList.remove('hide');
    approvedScreen.classList.add('hide');
    voidScreen.classList.add('hide');
    pendingScreen.classList.add('hide');
});

pendingBtn.addEventListener('click', function(){
    summaryScreen.classList.add('hide');
    approvedScreen.classList.add('hide');
    voidScreen.classList.add('hide');
    pendingScreen.classList.remove('hide');
});

approvedBtn.addEventListener('click', function(){
    summaryScreen.classList.add('hide');
    approvedScreen.classList.remove('hide');
    voidScreen.classList.add('hide');
    pendingScreen.classList.add('hide');
});

voidBtn.addEventListener('click', function(){
    summaryScreen.classList.add('hide');
    approvedScreen.classList.add('hide');
    voidScreen.classList.remove('hide');
    pendingScreen.classList.add('hide');
});


