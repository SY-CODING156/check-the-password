var check = document.getElementById('check');
var pass = document.getElementById('pass');
check.onclick = togglePassword;
function togglePassword(){
    if (check.checked){pass.type = "text";}
    else{pass.type = "password";}
}