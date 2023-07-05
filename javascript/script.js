
// 1 - El botón de enviar del formulario se habilitará solo cuando marque el checkbox
const checkbox = document.querySelector('input[name="customer_privacy"]');
const submitButton = document.querySelector('button[type="submit"]');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
    submitButton.disabled = false;
    } else {
    submitButton.disabled = true;
    }
    });


// 2- Cambio de color de imagen del header segun el color que quieras pasar de negro(original) a azul.(Interacción con los elementos del DOM)

const header = document.querySelector('header');  
header.style.backgroundColor = 'blue'; 



// 3 -Validación de formulario

const formulario = document.querySelector('form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
if (!emailInput.checkValidity()) {
event.preventDefault();
alert('Por favor, ingrese un correo electrónico válido.');
}
});


// 4- Mostrar mensaje de Exito al enviar el mensaje
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
event.preventDefault(); 
const successMessage = document.createElement('p');
successMessage.textContent = '¡El formulario se ha enviado correctamente!';
form.appendChild(successMessage);

setTimeout(function() {
form.reset();
successMessage.remove();
}, 3000); // 
});








   
    
    




   
    



