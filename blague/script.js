"use strict";

// Récupération des éléments du DOM
const citationElement = document.getElementById("citation"); 
const btnGenerer = document.getElementById("btn-generer"); 
const btnModeSombre = document.getElementById("mode-sombre"); 

// Fonction pour récupérer et afficher une blague
function blague() {
    // Affiche un message pendant le chargement
    citationElement.textContent = "Chargement de la blague...";

    // Requête vers l'API pour obtenir une blague aléatoire
    fetch('https://www.blagues-api.fr/api/type/global/random', {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTAwMTQ0Mzk4Mjk1NTUyODE5NCIsImxpbWl0IjoxMDAsImtleSI6Iml5MTR3dDJmSHc4T2VHRUt5bVFBMmZIN1dZSUVCelR4d0xmM2lVUkp4SWo0Q3VUVkJxIiwiY3JlYXRlZF9hdCI6IjIwMjUtMDQtMjVUMTI6Mjg6MDUrMDA6MDAiLCJpYXQiOjE3NDU1ODQwODV9.d7pyMSxnXTHGqdURE83aexE7rjFq0Ozzi_00nzH4GqE`
        }
    })
    .then(response => response.json()) // Conversion de la réponse en JSON
    .then(data => {
        // Si une blague a bien été reçue
        if (data && data.joke) {
            // Affiche d'abord la question 
            citationElement.textContent = data.joke;

            // Affiche la réponse 
            if (data.answer) {
                setTimeout(() => {
                    citationElement.textContent += "\n" + data.answer;
                });
            }
        } 
    })
  
}

//  active /désactive le mode sombre
btnModeSombre.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// boutton pour generer la blague 
btnGenerer.addEventListener("click", blague);