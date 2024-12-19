// Función para validar el formulario
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Limpiar errores anteriores
    document.getElementById("nameError").textContent = '';
    document.getElementById("emailError").textContent = '';
    document.getElementById("messageError").textContent = '';

    // Obtener los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    let valid = true;

    // Validación del nombre
    if (name === "") {
        document.getElementById("nameError").textContent = "Por favor, ingresa tu nombre.";
        valid = false;
    }

    // Validación del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Por favor, ingresa un correo electrónico válido.";
        valid = false;
    }

    // Validación del mensaje
    if (message === "") {
        document.getElementById("messageError").textContent = "Por favor, ingresa tu mensaje.";
        valid = false;
    }

    // Si el formulario es válido, mostrar mensaje
    if (valid) {
        alert("¡Formulario enviado correctamente!");
        document.getElementById("contactForm").reset();
    }
};
