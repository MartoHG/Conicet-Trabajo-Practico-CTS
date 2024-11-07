// Muestra un mensaje al hacer clic en el botón "Conoce más"
function mostrarMensaje() {
    alert("Explora cómo el CONICET impulsa el conocimiento en Argentina. https://www.conicet.gov.ar ");
}

// Añade un efecto de aparición para cada sección al hacer scroll
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});

window.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".animar");
    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            element.classList.add("visible");
        }
    });
});
