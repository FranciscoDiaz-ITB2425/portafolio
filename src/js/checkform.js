document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validar si los campos están vacíos
    if (name === '' || email === '' || message === '') {
        alert('Por favor, complete todos los campos.');
        event.preventDefault();  // Detener el envío del formulario
    } else {
        // Validación de expresión regular para el correo electrónico
        const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            event.preventDefault();  // Detener el envío del formulario
        } else {
            alert('Formulario enviado correctamente');
        }
    }
});