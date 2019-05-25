function calculateInsurance() {
    var c = document.getElementById('form3');
    var country = c.elements["country"].value
    var a = document.getElementById('form2');
    var age = parseInt(a.elements["age"].value);
    var h = document.getElementById('form4');
    var horse = parseInt(h.elements["horse"].value);
    var x = document.getElementById('form1');
    var name = x.elements["name"].value
    if (country == "Austria") {
        var insurance = Math.floor((horse * 100) / age + 50);
    } else if (country == "Greece") {
        var insurance = Math.floor((horse * 150) / (age + 2) + 50);

    } else if (country == "Hungary") {
        var insurance = Math.floor((horse * 120) / age + 100);

    } else {
        var insurance = " Please pick a Country "
    }
    document.getElementById("result").innerHTML = name + " ,your insurance costs " + insurance + " €"
    document.getElementById("result").style.display = "block";
}