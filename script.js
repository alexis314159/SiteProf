document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const responseMessage = document.getElementById("responseMessage");

    // Simule un envoi de formulaire
    if (name && email && message) {
        responseMessage.textContent = "Merci pour votre message, " + name + ". Je vous répondrai bientôt.";
        responseMessage.style.color = "green";

        // Réinitialise le formulaire
        this.reset();
    } else {
        responseMessage.textContent = "Veuillez remplir tous les champs.";
        responseMessage.style.color = "red";
    }
});
