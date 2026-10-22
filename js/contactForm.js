const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === "" || mensagem === "") {
        event.preventDefault();
        alert("Por favor, preencha os campos obrigatórios corretamente!");
        return;
    }

    const contemLetras = /[a-zA-Z]/.test(telefone);

    if (contemLetras) {
        event.preventDefault();
        alert("Erro: O campo de Telefone não pode conter letras!");
        return; 
    }

    event.preventDefault();
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.\n\nDetalhes:\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`);
    contactForm.reset();
});




