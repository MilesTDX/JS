let str = "https://services.pima.gov/SBTDNext/Apps/348/Tickets/Edit?TicketID=594080";
const myArray = str.split("TicketID=",4);
let result = myArray[1];

document.getElementsByClassName("demo")[0].innerHTML = result;
