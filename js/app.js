
const app = {
    // Méthode appelée au chargement de la page
    init: function() {
        // On commence par sélectionner nos champs pour leur appliquer des écouteurs d'événement.
        const textInput = document.querySelector('#text');
        const numberInput = document.querySelector('#number_lines');
        
        // A chaque changement (keyup est émis à chaque touche pressée en étant dans le champ), on met à jour le tableau en appelant la méthode updateBoard
        textInput.addEventListener('keyup', app.updateBoard);
        numberInput.addEventListener('keyup', app.updateBoard);
        // On pose aussi un écouteur de l'événement "change" qui est émis quand on clique sur les petites flèches du second champ.
        numberInput.addEventListener('change', app.updateBoard);
    },
    updateBoard: function() {
        // On commence par sélectionner la zone qui va accueillir notre texte.
        let board = document.querySelector('.text-board');

        // Le tableau contient potentiellement déjà des choses écrites, donc par précaution, on l'efface
        board.innerHTML = '';

        // On récupère les informations dont on a besoin : le texte à afficher et le nombre de lignes.
        // Ici on sélectionne l'élément puis sa valeur sur la même ligne pour aller plus vite.
        const text =  document.querySelector('#text').value;
        const linesNumber =  document.querySelector('#number_lines').value;

        // On va afficher autant de fois le texte que le nombre entré dans le second champ. Donc on passe par une boucle.
        for (let index = 1; index <= linesNumber; index++) {
           // On ajoute dans le tableau la phrase concaténée avec un saut de ligne
           board.innerHTML += text + '<br/>';
        }
        
    }
}

document.addEventListener('DOMContentLoaded', app.init);
