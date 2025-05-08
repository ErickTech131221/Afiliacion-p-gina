
function checkPassword() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    if (password === "CJ0323") {
        window.location.href = "success.html";
    } else {
        message.textContent = "Contraseña incorrecta";
    }
}
