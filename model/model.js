// Modèle - Gestion des données
  const model = { 
    tasks: [], // Tableau des publications
  
    addTask: function(title, description) { // Ajoute une publication
      const task = { // On crée un objet publication
        title: title, // On lui donne un titre
        description: description // On lui donne une description
      };
      this.tasks.push(task); // On ajoute la publication au tableau des publications
    },
  
    getTasks: function() { // Récupère les publications
      return this.tasks; // On retourne les publications
    },
  };