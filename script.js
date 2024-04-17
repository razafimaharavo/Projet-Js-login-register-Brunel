var log = document.getElementById("login");
var reg = document.getElementById("register");
var btn = document.getElementById("btn");
var registeredData = document.getElementById("registeredData");

// Fonction pour afficher les inputs du formulaire d'inscription
function registerA(){
    log.style.left = "-400px";
    reg.style.left = "50px";
    btn.style.left = "110px";

    // Masquer les données enregistrées
    registeredData.classList.add("hidden");
    // Afficher à nouveau les inputs cachés
   reg.classList.add("block");
}

function login(){
    log.style.left = "50px";
    reg.style.left = "450px";
    btn.style.left = "0";

    // Masquer les données enregistrées
    registeredData.classList.add("hidden");
    // Afficher à nouveau les inputs cachés
   log.classList.add("block");
}

// Attacher la fonction submitRegisterForm à l'événement "submit" du formulaire
document.getElementById("register").addEventListener("submit", submitRegisterForm);

// Fonction pour soumettre le formulaire et afficher les données insérées
function submitRegisterForm(event) {
    console.log("Mety ve ny submit");
    event.preventDefault(); // Empêcher la soumission du formulaire par défaut

     // Récupérer les mots de passe saisis
     var password = document.getElementById("password").value;
     var passwordConfirm = document.getElementById("passwordConfirm").value;
 
     // Vérifier si les mots de passe sont égaux
     if (password !== passwordConfirm) {
         alert("Les mots de passe ne correspondent pas.");
         return; // Arrêter l'exécution de la fonction si les mots de passe ne correspondent pas
     }

    // Obtenir les données du formulaire
    var formData = new FormData(event.target);
    var userData = {};
    formData.forEach(function(value, key) {
        userData[key] = value;
    });

    // Cacher le formulaire
    reg.classList.remove("block");
    reg.classList.add("hidden"); 

    // Afficher les données enregistrées
    registeredData.classList.remove("hidden");
    registeredData.classList.add("Enregistrement"); 
    registeredData.innerHTML = "<h2>Registered Data</h2> <br>";
    for (var key in userData) {
        if (userData.hasOwnProperty(key)) {
            registeredData.innerHTML += "<p><strong>" + key + ":</strong> " + userData[key] + "</p>";
        }
    }
}

document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire par défaut

    // Cacher les données enregistrées
    registeredData.classList.add("hidden");

    // Obtenir les données du formulaire
    var formData = new FormData(event.target);
    var userData = {};
    formData.forEach(function(value, key) {
        userData[key] = value;
    });

    // Cacher le formulaire
    log.classList.remove("block");
    log.classList.add("hidden");

    // Afficher les données enregistrées
    registeredData.classList.remove("hidden");
    registeredData.classList.add("Enregistrement"); 
    registeredData.innerHTML = "<h2>Login Data</h2> <br>";
    for (var key in userData) {
        if (userData.hasOwnProperty(key)) {
            registeredData.innerHTML += "<p><strong>" + key + ":</strong> " + userData[key] + "</p>";
        }
    }
});

// Sélectionnez l'élément checkbox et l'élément span dans le HTML
var cleanCheckbox = document.querySelector('.checkboxRegister');
var cleanSpan = document.querySelector('.checkboxRegister + span');

// Ajoutez un écouteur d'événements pour le changement de l'état de la case à cocher
cleanCheckbox.addEventListener('change', function() {
    // Sélectionnez tous les champs de saisie dans le formulaire d'inscription
    var inputFields = document.querySelectorAll('#register .form_input');

    // Parcourez chaque champ de saisie et effacez sa valeur si la case à cocher est cochée
    inputFields.forEach(function(input) {
        if (cleanCheckbox.checked) {
            input.value = '';
        }
    });
});

var cleanCheckboxLog = document.querySelector('.checkboxLogin');
var cleanSpan = document.querySelector('.checkboxLogin + span');

// Ajoutez un écouteur d'événements pour le changement de l'état de la case à cocher
cleanCheckboxLog.addEventListener('change', function() {
    // Sélectionnez tous les champs de saisie dans le formulaire d'inscription
    var inputFields = document.querySelectorAll('#login .form_input');

    // Parcourez chaque champ de saisie et effacez sa valeur si la case à cocher est cochée
    inputFields.forEach(function(input) {
        if (cleanCheckboxLog.checked) {
            input.value = '';
        }
    });
});