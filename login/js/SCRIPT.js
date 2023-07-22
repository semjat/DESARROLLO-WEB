console.log
function validarLogin(event) {
    // Evita el envío del formulario por defecto
    event.preventDefault(); 
    // Obtener los valores de usuario y contraseña
    let username = document.getElementById('username').value;// admin
    let password = document.getElementById('password').value;// batman
// Validar los campos del formulario
    if (username === 'admin' && password === 'batman') {
        alert('Inicio de sesión exitoso');
        window.location.href = './home.html';
    // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    } else {
        // Aquí puedes mostrar un mensaje de error o realizar otras acciones
      alert('Usuario o contraseña incorrectos');
    }
}
