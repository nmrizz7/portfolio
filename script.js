const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
    const rating = document.getElementById('rating').value;
    const subject = 'Contact du portfolio';
    const body = `Nom : ${name}\nEmail : ${email}\nCommentaire : ${comment}\nNotation : ${rating}/10`;
    // Ajout de l'adresse destinataire dans le lien mailto
    const mailto = `mailto:portfoliogithub@outlook.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
});
