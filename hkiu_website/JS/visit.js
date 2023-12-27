const form = document.getElementById("bookInformation");

var error_msg_appended = false;
var error_msg2_appended = false;
var check1 = false;
var check2 = false;

function validate_form(e) {
    e.preventDefault();

    var dateInput = document.getElementById('date').value.trim();
    var timeInput = document.getElementById('time').value.trim();
    var noofvisitorsInput = document.getElementById('noofVisitors').value.trim();
    var error_container = document.getElementById('error_container');
    

    var error_msg = document.createElement("p");
    error_msg.style.textAlign = 'center';
    error_msg.style.color = 'red';
    error_msg.textContent = "Data not completed; please re-enter";

    var error_msg2 = document.createElement("p");
    error_msg2.style.textAlign = 'center';
    error_msg2.style.color = 'red';
    error_msg2.textContent = "Please enter a valid number of people!";


    console.log(typeof parseInt(noofvisitorsInput));

    if (dateInput === '' || timeInput === '' || noofvisitorsInput === '') { 
        check1 = false;
        // error_container.innerHTML = '';
        if (!error_msg_appended && !error_msg2_appended) {
            error_container.append(error_msg);
            error_msg_appended = true;
            return;
        }
    } else {
        check1 = true;
        if (error_msg_appended) {
            error_container.innerHTML='';
            error_msg_appended = false;
        }
    }


    console.log(parseInt(noofvisitorsInput));
    console.log(noofvisitorsInput);
    console.log(parseInt(noofvisitorsInput).length);

    if (String(parseInt(noofvisitorsInput)).length !== String(noofvisitorsInput).length || parseInt(noofvisitorsInput) < 1) { 
        check2 = false;
        if (!error_msg_appended && !error_msg2_appended) {
            error_container.append(error_msg2);
            error_msg2_appended = true;
            return;
        }
    } else {
        check2 = true;
        if (error_msg2_appended) {
            error_container.innerHTML='';
            error_msg2_appended = false;
        }
    }

    if (check1 && check2) {
        const reserveInput = reserve(dateInput, timeInput, parseInt(noofvisitorsInput));
        if (reserveInput) {
            alert("Your reservation is successful!");
        } else {
            alert("Sorry, the reservation is full!");
        }
    }
 
}

form.addEventListener('submit', validate_form);