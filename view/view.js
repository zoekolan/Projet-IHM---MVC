// Vue - Gestion de l'interface utilisateur
const view = {
    renderList: function(tasks) { // Affiche les publications
      const taskList = document.getElementById('taskList'); // On récupère l'élément qui contiendra la liste des publications
      taskList.innerHTML = ''; 
  
      tasks.forEach(task => { // Pour chaque publication
        if (deletedComponentIds.has(`id-${task.title}`)) { // Si l'ID de la publication est dans la liste des publications supprimées
            return null // On ne fait rien
          }
            const myComponent = createRunningCard( // On crée un composant
                task.title, // On lui donne un titre
                task.description // On lui donne une description
            );
            taskList.appendChild(myComponent); // On ajoute le composant à la liste des publications
            console.log(`${task.title} ajoutée`); // On affiche un message dans la console
      });
    }
  };

  // Liste pour stocker les ID des composants supprimés
    const deletedComponentIds = new Set(); 

function createRunningCard(title, description) { // Crée un composant
    // Création du conteneur principal
    const container = document.createElement('div'); 
    container.classList.add('component-container'); 

    // Création de l'icone user
    const user = document.createElement('div');
    const user_image = document.createElement('img');
    user_image.src = "./img/user.png"; 
    user_image.alt = "user picture";
    const user_name = document.createElement('span');
    user_name.textContent = "Martin Dupont";
    user_name.classList.add('user_name');

    user.appendChild(user_image);
    user.appendChild(user_name);
    container.appendChild(user);
  
    // Création du titre
    const heading = document.createElement('h1');
    heading.textContent = title;
    container.appendChild(heading);

    // Création des stats - données par la bdd // trouver un meilleur moyen de les afficher
    const stats= document.createElement('h2');
    stats.textContent = "Distance : 8 km - Durée : 45 minutes - Vitesse moyenne : 5:38 min/km";
    container.appendChild(stats);

    // Création de la description
    const para = document.createElement('p');
    para.textContent = description;
    para.classList.add('description');
    container.appendChild(para);
  
    // Création de l'image
    const image = document.createElement('img');
    image.src = "./img/course.png";
    image.alt = title; // Ajout d'un attribut alt pour l'accessibilité
    image.classList.add('imgRunningCard');
    container.appendChild(image);

     // Création du bouton pour supprimer le composant
     const deleteButton = document.createElement('button');
     deleteButton.textContent = 'Supprimer';
     deleteButton.classList.add('delete-button');
     deleteButton.addEventListener('click', function() {
         deleteCreateRunningCard(`id-${title}`);
     });
     container.appendChild(deleteButton);

    // Ajout d'un ID au composant pour pouvoir le supprimer ultérieurement
    container.id = `id-${title}`;
    return container;
  }

// Fonction pour supprimer un composant spécifique du DOM par son ID
function deleteCreateRunningCard(componentId) {
    const componentToRemove = document.getElementById(componentId);
    if (componentToRemove) {
      const parentElement = componentToRemove.parentElement;
      parentElement.removeChild(componentToRemove);
      deletedComponentIds.add(componentId); // Ajoute l'ID du composant à la liste des composants supprimés
      console.log(`${componentId} supprimée`) // On affiche un message dans la console
    }
}




