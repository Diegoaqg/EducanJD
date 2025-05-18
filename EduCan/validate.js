document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se recargue la página
  
  // Luego puedes seguir con la validación o redirección

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  // Validación falsa: usuario y contraseña específicos
  if (email === 'admin@educan.com' && password === '1234') {
    // Redirigir al panel de administrador
    window.location.href = 'admin.html'; // Cambia por la ruta correcta si quieres
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});
