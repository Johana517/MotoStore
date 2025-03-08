let intentos = 1;

$("#ingresar").click((evento) => {
    evento.preventDefault();
    ingresar();
});

function ingresar() {
    let usuario = $("#usuario").val().trim(); 
    let password = $("#password").val().trim();
    if (usuario === "" || password === "") {
        Swal.fire({
            title: "Por favor ingresa los valores faltantes",
            text: "Todos los campos son obligatorios",
            icon: "warning",
            confirmButtonText: "Volver a intentar"
        });
        return;
    }

    if (intentos <= 3) {
        if (usuario === "juanitoperez@gmail.com" && password === "12345") {
            Swal.fire({
                title: "Bienvenido vendedor",
                text: "Redirigiendo...",
                icon: "success",
                timer: 3000,
                confirmButtonText: "Continuar"
            }).then(() => {
                window.location.href = "sesion-vendedor.html";
            });
        } else if (usuario === "juanmtapias@gmail.com" && password === "13680") {
            Swal.fire({
                title: "Bienvenido Administrador",
                text: "Redirigiendo...",
                icon: "success",
                timer: 3000,
                confirmButtonText: "Continuar"
            }).then(() => {
                window.location.href = "sesion-administrador.html";
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "Usuario o contraseña incorrectos",
                icon: "error",
                confirmButtonText: "Intentar de nuevo"
            });
            intentos++;
        }
    } else {
        Swal.fire({
            title: "Demasiados intentos",
            text: "Has superado el límite de intentos",
            icon: "error",
            confirmButtonText: "Cerrar"
        });
    }
}
