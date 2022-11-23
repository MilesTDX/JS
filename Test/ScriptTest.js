function getSource() {
    let formURL = "https://us.ipaas.teamdynamix.com/app/form/start?c=NzU5ZjQxMjUtOTQ3YS00Njc2LTgzYzYtYTU4OWIxN2YzYzU5&t=TWtPZ05RPT14ZmN0Tmw3VEhmSTdBZTNWQWc4OTFtTm5PdjVqajBPb2R5MXlzYmZ4d25qckc2WFYwVmZFYUxCTURhc0x3Vkc5VU5nSDljalZHeHNuZ09WL1JlWkZoSkdRcE54czJCbnEzaTBvK0RuWlFKdmllODBtaXk5TGp1UzcwUjNUL1NlWA&TicketID=";

    let str = "https://services.pima.gov/SBTDNext/Apps/348/Tickets/Edit?TicketID=594080";

    const myArray = str.split("TicketID=", 4);
    let result = myArray[1];

    return formURL + result;

}

window.onload = function () {
    document.getElementsByClassName("invoiceFrame")[0].src = getSource();
}
