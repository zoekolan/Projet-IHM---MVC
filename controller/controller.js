// Contrôleur - Gestion des interactions
const controller = { 
    addTask: function() { // Ajoute une publication
      const titleInput = document.getElementById('taskTitle'); 
      const descriptionInput = document.getElementById('taskDescription'); 
      const title = titleInput.value.trim(); // On récupère la valeur du champ titre
      const description = descriptionInput.value.trim(); // On récupère la valeur du champ description
  
      if (title !== '' && description !== '') { // Si les champs ne sont pas vides
        model.addTask(title, description); // On ajoute la publication au modèle
        titleInput.value = ''; // On vide le champ titre
        descriptionInput.value = ''; // On vide le champ description
        this.displayTasks(); // On réaffiche la liste des publications
      } else { // Si les champs sont vides
        alert('Veuillez remplir à la fois le titre et la description de la tâche.'); // On affiche un message d'erreur
      }
    },
  
    displayTasks: function() { // Affiche la liste des publications
      const tasks = model.getTasks(); // On récupère les publications
      view.renderList(tasks); // On affiche les publications
    }
};