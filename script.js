// Função para alterar entre temas
function toggleTheme() {
    document.body.classList.toggle('theme-dark');
    document.body.classList.toggle('theme-neon');
}
 
// Animação de entrada dos elementos
window.addEventListener('load', function() {
    const elements = this.document.querySelectorAll('.info-card, .hobby-item, .social-btn');
    elements.forEach((element, index) => {
        this.setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
 
// Efeito de digitação no nome
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
 
// Aplicar efeito de digitação quando a página carregar
window.addEventListener('load', function() {
    const nomeElement = this.document.querySelector('.nome-principal');
    const textoOriginal = nomeElement.text.Content;
    this.setTimeout(() => {
        typeWriter(nomeElement, textoOriginal, 150);
    }, 500);
});
 


      