// Login Modal
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el cierre automático del modal

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!email) {
    alert('Por favor ingresa tu correo electrónico');
    return;
  }
  if (!password) {
    alert('Por favor ingresa tu contraseña');
    return;
  }

  // Aquí pondrías la lógica para enviar los datos al servidor o autenticar

  // Cerrar el modal manualmente si todo está correcto
  const loginModalEl = document.getElementById('loginModal');
  const modal = bootstrap.Modal.getInstance(loginModalEl);
  if (modal) {
    modal.hide();
  }
});

// Register Modal
const registerForm = document.querySelector('#registerModal form');

registerForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el modal se cierre al enviar

  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value.trim();
  const passwordConfirm = document.getElementById('registerPasswordConfirm').value.trim();

  if (!email) {
    alert('Por favor ingresa tu correo electrónico');
    return;
  }
  if (!password) 
