import { employeeArr } from './config.js'

export class User{
    constructor(employeeNumber, firstName, midleName, lastName, userName, password, birthday){
        this.employeeNumber = employeeNumber;
        this.firstName = firstName;
        this.midleName = midleName;
        this. lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.birthday = birthday;
        this.vacationLeave = [];
        this.sickLeave = [];

    }

        currentVacationLeave(){
            const currentVL = 15 - (this.vacationLeave.length)
            console.log(currentVL);
        }
    
        currentSickLeave(){
            const currentSL = 15 - (this.sickLeave.length)
            console.log(currentSL);
        }
    
        vacationLeaveApplication(leave){
            this.vacationLeave.push(leave);
            return this.vacationLeave;
        }
    
        sickLeaveApplication(leave){
            this.sickLeave.push(leave);
            return this.sickLeave;
        }
    }
