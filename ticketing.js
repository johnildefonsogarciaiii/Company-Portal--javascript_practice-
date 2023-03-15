const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const cancelTicketBtn = document.querySelector('.deleteBtn');

//creating event that if Escape was pressed, new ticket will hide
const escBtn = document.addEventListener('keydown', function(e){

if (e.key === 'Escape' && !modal.classList.contains('hide')){
        closeModal();
    }   
})




//creating open modal
const openModal = function(){
    modal.classList.remove('hide');
    overlay.classList.remove('hide');
};

//creating close modal
const closeModal = function(){
    modal.classList.add('hide');
    overlay.classList.add('hide');
};


btnsOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


let i = 0;



//Getting the Input, storing, and getting values
document.querySelector('.submitbtn').addEventListener ('click', function submitTicket(){
    let empoyeeNumber = document.getElementById("employeeNumber").value;
    let employeeDepartment = document.getElementById("employeeDepartment").value;
    let employeeContact = document.getElementById("employeeContact").value;
    let pointofOrigin = document.getElementById("employeePointofOrigin").value;
    let pointofDestination = document.getElementById("employeePointofDestination").value;
    let emplpoyeeConcern = document.getElementById("employeeConcern").value;
    let employeeRemarks = document.getElementById("employeeRemarks").value;


 
    let tickets = `<tr>
    <td><input type="checkbox" class="activeTicket"></td>
    <td id="ticket#1">${++i}</td>
    <td id="ticketConcern1">${emplpoyeeConcern}</td>
    <td id="ticketDescription1">${pointofDestination}</td>
    <td id="ticketPointofOrigin1">${pointofOrigin}</td>
    <td id="ticketPointofDestination1">${pointofDestination}</td>
</tr>`


    let ticket = document.querySelector('.tickets');
    ticket.insertAdjacentHTML('afterbegin', tickets);
 
        
    alert("Your Ticket was submitted");
    closeModal();


})


//setting cancelTicket function
const cancelTicket = function(){
let activeTicket = document.querySelectorAll('.activeTicket');
for (i = 0; i < activeTicket.length; i++){

if (activeTicket[i].checked){
    let active = activeTicket[i].parentNode;
    let activeParent = active.parentNode;

    activeParent.classList.add('active');

    activeTicket.uncheck;
}
}
}

//Making Cancel Ticket Btn
cancelTicketBtn.addEventListener('click', cancelTicket);




