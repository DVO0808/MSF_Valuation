function updateUILogInSucess() {
  location.href = "main.html";
}


function displayErr(err) {
    var p1 = $('<p>').html(err.code);
    var p2 = $('<p>').html(err.message);
    $('#errMsg').append(p1);
    $('#errMsg').append(p2);
}


function updateUIAuthErr(err) {
    displayErr(err);
}

function addListener(sel, eve, fn) {
    $(document).on(eve, sel, fn);
}

function clickSignInBtn() {
    //console.log('clickSignInBtn');
    var email = $('#emailInput1').val();
    var password = $('#passwordInput1').val();
    //console.log(email);
    //console.log(password);
    $('#errMsg').empty();

    signIn(email, password);

    return false;
}

   function enterSignIn(event) {
    if (event.which === 13) {
        
        clickSignInBtn();
    }   
}

$(document).ready(function() {
	initializeFireBase ();
	addListener('#signInBtn', 'click', clickSignInBtn);
    addListener('#passwordInput1', 'keyup', enterSignIn);
})