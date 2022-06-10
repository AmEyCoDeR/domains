let domainname;
let searchstage = "notsearched";


function update() {
    domainname = document.getElementById("myInput").value;
    console.log(domainname);
    if (document.getElementById("myCheck").checked) {
        document.getElementById("purchasebuttonlast").style.display = "block";
        document.getElementById("myInput2").style.display = "block";
    } else {
        document.getElementById("purchasebuttonlast").style.display = "none";
        document.getElementById("myInput2").style.display = "none";
    }
}

setInterval(update, 1);

document.getElementById("myInput2").style.display = "none";
document.getElementById("domainpurchase").style.display = "none";
document.getElementById("purchasebutton").style.display = "none";
document.getElementById("purchasing").style.display = "none";
document.getElementById("purchased").style.display = "none";
document.getElementById("purchasebuttonlast").style.display = "none";


document.onkeypress = function (eventKeyName) {
    eventKeyName = eventKeyName || window.event;
    if (eventKeyName.keyCode == 13) {
        searchkaro();
    } else {
        console.log(String.fromCharCode(eventKeyName.keyCode))
    }
};

function searchkaro() {
    if (searchstage === "notsearched") {
        document.getElementById("domainpurchase").style.display = "block";
        document.getElementById("domain").innerText = "" + domainname + " is available at ₹500/month";
        document.getElementById("purchasebutton").style.display = "block";
        document.getElementById("purchasebuttonlast").style.display = "none";
        searchstage = "searched";
    } else {
        document.getElementById("myInput").style.display = "block";
        document.getElementById("myInput2").style.display = "none";
        searchstage = "notsearched";
        document.getElementById("domainpurchase").style.display = "none";
        document.getElementById("purchasebutton").style.display = "none";
        document.getElementById("purchasing").style.display = "none";
    }
}

function purchase() {
    document.getElementById("domainpurchase").style.display = "none";
    document.getElementById("purchasebutton").style.display = "none";
    document.getElementById("myInput").style.display = "none";
    document.getElementById("purchasing").style.display = "block";
    document.getElementById("condomain").innerText = "Your Domain: " + domainname;
}

function realpurchase() {
    document.getElementById("purchased").style.display = "block";
    document.getElementById("myInput2").style.display = "none";
    document.getElementById("domainpurchase").style.display = "none";
    document.getElementById("purchasebutton").style.display = "none";
    document.getElementById("purchasing").style.display = "none";
    document.getElementById("purchasebuttonlast").style.display = "none";
    document.getElementById("purchasessss").innerText = "Your Domain: " + domainname + " is Purchased";
    document.getElementById("note").innerHTML = `To Activate your Web Hosting <a href="https://ameyweb.github.io/hosting"
    target="_blank">go to Amey Web Hosting</a> & choose your requirments & read & accept terms and conditions & add same aCustomer Id
provided by you (`+ document.getElementById("myInput2").value + `) and write the password as "amey.great" & enjoy your hosting & domain`;
}