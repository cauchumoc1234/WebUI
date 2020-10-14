// Check the password and confirm match were matched or not
var x = document.getElementById('password')
var y = document.getElementById('cfpassword')
x.addEventListener('input',checkPass)
y.addEventListener('input',checkPass)
function checkPass(){
if(x.value == y.value){
document.getElementById('cfpasswordHelp').innerHTML = "2 passwords are matched"
document.getElementById('cfpasswordHelp').style = "color:green;"
} else document.getElementById('cfpasswordHelp').innerHTML = "2 passwords must be the same"
}