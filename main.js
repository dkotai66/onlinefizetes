const nev = document.getElementById("name"); //legalább egy betű
const orszag = document.getElementById("country"); //legalább egy betű
const varos = document.getElementById("city"); //legalább egy betű
const utca = document.getElementById("street"); //legalább egy betű, szóköz, szám
const iranyitoSzam = document.getElementById("postalcode"); //legalább egy karakter, számjegyek, nagybetűk
const kartyaSzam = document.getElementById("cardnumber"); //4x4 számjegy, kötőjellel elválasztva
const cvc = document.getElementById("cvc"); //pontosan 3 számjegy
const kartyaNev = document.getElementById("cardname"); //angol kisbetűk, nagybetűk, szóköz
const kiiratasiHely = document.getElementById("result");
const Regcardnumber = /(?:[0-9]{4})-(?:[0-9]{4})-(?:[0-9]{4})-([0-9]{4})/;
const Regname = /[a-zA-Z]{1,}/;
const Regcountry = /[a-zA-Z]{1,}/;
const Regcity = /[a-zA-Z]{1,}/;
const Regcvc = /[1-9]{3,3}/;
const RegcardName = /[a-zA-Z]/;
const Regpostalcode = /[A-Z1-9]{1,}/;
const Regstreet = /[a-zA-Z1-9]{1,}/;
let result = true;
document.getElementById("ellenorzes").addEventListener("click", () => { 
    if (!Regname.test(nev.value)) {
        result = false;
        kiiratasiHely.textContent = "Hiba a névben!";
        kiiratasiHely.style.color = "red";
    }

    if (!Regcardnumber.test(kartyaSzam.value)) {
        result = false;
        kiiratasiHely.textContent = "Hiba a kártyaszámban!";
        kiiratasiHely.style.color = "red";
    }

    if (!Regcountry.test(orszag.value)) {
        result = false;
        kiiratasiHely.textContent = "Hiba az országban!";
        kiiratasiHely.style.color = "red";
    }

    if (!Regcity.test(varos.value)) {
        result = false;
        kiiratasiHely.textContent = "Hiba a városban!";
        kiiratasiHely.style.color = "red";
    }

    if (!Regcvc.test(cvc.value)) {
        result = false;
        kiiratasiHely.textContent = "Hiba a cvc-ben!";
        kiiratasiHely.style.color = "red";
    }

    if (!RegcardName.test(kartyaNev.value)) {
        result = false;
        kiiratasiHely.textContent = "Hiba a kártyára írt névben!";
        kiiratasiHely.style.color = "red";
    }

    if (!Regpostalcode.test(nev.value)) {
        result = false;
        kiiratasiHely.textContent = "Hiba az irányítószámban!";
        kiiratasiHely.style.color = "red";
    }

    if (!Regstreet.test(utca.value)) {
        result = false;
        kiiratasiHely.textContent = "Hiba az utcában!";
        kiiratasiHely.style.color = "red";
    }

    if(result){
        document.getElementById('container').textContent="Sikeres fizetés!";
        document.getElementById('container').style.color="green";
    }
});
