document.addEventListener("DOMContentLoaded", function() {
    // Los textos de los proyectos que se mostrarán
    const captions = [
        "Esto pertenece al Proyecto 1",
        "Esto pertenece al Proyecto 2",
        "Esto pertenece al Repositorios",
    ];

    // Obtener todas las diapositivas
    const slides = document.querySelectorAll('.Slide');

    slides.forEach((slide, index) => {
        // Crear un elemento tooltip (texto emergente)
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = captions[index];

        // Insertar el tooltip en la diapositiva
        slide.appendChild(tooltip);

        // Mostrar el tooltip cuando el ratón pasa sobre la diapositiva
        slide.addEventListener('mouseenter', function() {
            tooltip.style.display = 'block';
        });

        // Ocultar el tooltip cuando el ratón deja la diapositiva
        slide.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    });
});
