// Event listener that is listening for SUBMIT button , this will also prevent the page from being able to reload..
//EVENT LISTENER??
document.getElementById('shirtform').addEventListener('submit',function(event) {
    event.preventDefault();

//------------------------------------------------------------------- Variables ------------------------------------------------------//
if(validationForm()){
    const total = calculateTotal();

    // display summary 
    checkTotal(total);

}
});
// function to alert the user that if these fields are empty they need to fill the in or they cant move forward// 
function validationForm(){

    //------------------------------------------------------------------- Variables ------------------------------------------------------//

// LET//
let companName = document.getElementById('cname');
let firstn = document.getElementById('fname');
let lastname = document.getElementById('lname');
let pnumber = document.getElementById('phonenum');
let emailinfo = document.getElementById('email');
let messbox  = document.getElementById('MessagesBox'); 
// The statements below will help make sure the user inouts text inside the required text boxes , and will alert them that if they dont then they cant move forwards. 
// Company Name //
//IF AND ELSE //
if (document.getElementById('cname').value === '') {
    alert(' Please enter the company name !');
    // setting key board focus //
    companName.focus
    return false;
}
    // FIRST NAME //
        if (document.getElementById('fname').value === '') {     
            alert('Please enter your First Name. !'); 
        
            // setting the keyboard focus will prompt the user to make sure they enter in field that their being alerted to or FOCUS on  //
            firstn.focus();
            return false;
        }
        
        //LAST NAME// 
        if(document.getElementById('lname').value === '') {
            alert('Please enter your last name. ! ');
        
            // setting the keybpard focus
            lastname.focus();
            return false;
        }
    
    //NUMBER//
    if(document.getElementById('phonenum').value == ''){
        alert('Please enter you phone number !');
    
        // setting the keyboard focus//
        pnumber.focus();
        return false;
    }
    //EMAIL//
     if(document.getElementById('email').value == ''){
        alert('Please enter your email !');
    
        // Setting the keyboard focus//
        emailinfo.focus();
        return false;
     }
    
     //MESSAGE BOX //
     if(document.getElementById('MessagesBox').value == '') {
        alert('Please enter your sizes !');
    
        // setting the keyboard focus//
        messbox.focus();
        return false; 
     }
        return true;    
        }
//-----------------------------------------Calcualting totals --------------------------------
function calculateTotal(){

    let total = 0;

    // RADIO BUTTONS //
//CONST//
    const pack = document.getElementById('pack').checked;
    const packone = document.getElementById('packone').checked;
    const packtwo = document.getElementById('packtwo').checked;
//Arithmetic Operators//
    if(pack){
        total += parseInt(document.getElementById('pack').value);
    }
    if(packone){
        total += parseInt(document.getElementById('packone').value);
    }
    if(packtwo){
        total += parseInt(document.getElementById('packtwo').value);
    } 

    // checkboxes //
    let sampleone = document.getElementById('vinayl').checked;
    let twentyfive = document.getElementById('boxes').checked;
    let fiftyone = document.getElementById('box').checked;

    if(sampleone){
        total += parseInt(document.getElementById('vinayl').value);
    }
    if(twentyfive){
        total += parseInt(document.getElementById('boxes').value);
}
    if(fiftyone){
        total += parseInt(document.getElementById('box').value);

    }
    //return
    return total;
}
//---------------------------------------------------------------------------------------------------- DISPLAY TOO THE SCREEN (SUMMARY --------------------------------
// function for th check total & to recieve the user inputs for the text box. 
function checkTotal(total){
    let companyName = document.getElementById('cname').value;
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let phoneNumber = document.getElementById('phonenum').value;
    let email = document.getElementById('email').value;
    let messageBox = document.getElementById('MessagesBox').value;
    
   
// using if else to determine what option the user has checked from the checked boxs in regards to their package option. 
let packageOption = '';
//IF ELSE//
if(document.getElementById('pack').checked){
    packageOption = "One Sample Shirt";
}else if (document.getElementById('packone').checked){
    packageOption = "Twenty-Fifty Shirts";
}else if (document.getElementById('packtwo').checked){
    packageOption = "Fifty - One Hundred Shirts";
}
 

// OUTPUT , this query selector will submit to the browser the customers order total and their information, using concatentation and inner HTML  
document.querySelector('.summaryOrder').innerHTML = ' <p> YOUR ORDER SUMMARY !</p> <br><p> Company Name: ' +  companyName + '</p><br><p> First Name: ' + firstName + '</p><br><p> Last Name:' + lastName + '</p><br><p>Phone Number:' + phoneNumber + '</p><br><p>Email: ' + email + '</p><br><p>Message:'+ messageBox + ' </p><br><p>TotaL Due:$ ' + total + '</p><br><p> Package Option:' + packageOption + '</p><br><p>'


 
}




