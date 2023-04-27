var service;

service = prompt("How many times have you used K&S's services? :")
if (service < 1) {
    output = "You get 15% off your first service!" 
    document.getElementById('verify').style.color = 'black';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
}else{
    output = "Welcome back!"
}

document.getElementById("verify").innerHTML = output;

