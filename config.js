import {  User } from './model.js'


export const user0 = new User(1, "John Ildefonso", "Narido", "Garcia III", "john", "garcia", "07/14/1994");
export const user1 = new User(2, "Abigail", "Tare", "Garcia", "abby", "garcia", "07/30/1997");
export const user2 = new User(3, "User1", "User1", "User1", "User1", "User1", "01/02/2000");
export const user3 = new User(4, "User2", "User2", "User2", "User2", "User2", "01/03/2000");
export const user4 = new User(5, "User3", "User3", "User3", "User3", "User3", "01/04/2000");
export const user5 = new User(6, "User4", "User4", "User4", "User4", "User4", "01/05/2000");
export const user6 = new User(7, "User5", "User5", "User5", "User5", "User5", "01/06/2000");
export const user7 = new User(8, "User6", "User6", "User6", "User6", "User6", "01/07/2000");
export const user8 = new User(9, "User7", "User7", "User7", "User7", "User7", "01/08/2000");
export const user9 = new User(10, "User8", "User8", "User8", "User8", "User8", "01/09/2000");

export const employeeArr = [user0 , user1, user2, user3, user4, user5, user6, user7, user8, user9];

export const currentUser = [];
//For Birthday's Box
let date = new Date();
export const dateMonth = date.getMonth() + 1;
export const birthdayEvents = employeeArr.map((value) => ({firstName: value.firstName ,birthday: value.birthday}))
