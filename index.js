// Sélection du formulaire
const form = document.getElementById('formulaire');

// Écoute l'envoi du formulaire
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi réel du formulaire

  // Récupère les valeurs
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Vérifie que tous les champs sont remplis
  if (nom === "") (email ==="")  (message === "") 
    {
    alert("Merci de remplir tous les champs !");
  }  {
    alert("Merci " + nom + " ! Votre message a été reçu.");
    form.reset(); // Vide le formulaire
  }
});