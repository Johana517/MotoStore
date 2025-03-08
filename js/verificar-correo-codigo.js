$("#continue-btn").click(() => {
    let email = $("#email").val();
    if (email === ""){
        swal.fire({
            icon: "warning",
            title: "Porfavor ingresar correo faltante",
            text: "Porfavor ingresar correo electronico",
            confirmButtonText: "Volver a intentar"
        });
        return;
    }
    if (email === "juanitoperez@gmail.com"){
        swal.fire({
            icon: "success",
            title: "Codigo enviado",
            text: "Se ha enviado un codigo de verificacion a " + email,
            confirmButtonText: "Continuar"
        });

        $("#code").prop("disabled", false);
        $("#continue-btn").hide();
        $("#verify-code-btn").show();

        localStorage.setItem("codeSent", "true");
    } else {
        swal.fire ({
            icon: "error",
            title: "Correo incorrecto",
            text: "El correo no esta registrado en la plataforma",
            confirmButtonText: "Aceptar"

        });
    }
});
$("#verify-code-btn").click(() => {
    let code = $("#code").val();
    if (code === ""){
        swal.fire({
            icon: "warning",
            title: "Porfavor ingresar codigo",
            text: "Ingresar codigo de verificacion que llego a tu correo",
            confirmButtonText: "Volver a intentar"
        });
        return;
    }
    if (code === "368074") {
        swal.fire({
            icon: "success",
            title: "Código Correcto",
            text: "El código que ingresaste es correcto",
            confirmButtonText: "Aceptar"
        }).then(() => {
            // Ocultar botones y mostrar el formulario de contraseña
            $("#continue-btn, #verify-code-btn").hide();
            $("#password-form").show();
        });
    } else {
        swal.fire({
            icon: "error",
            title: "Código incorrecto",
            text: "El código que ingresaste es incorrecto",
            confirmButtonText: "Volver a intentar"
        });
    }
});

// Manejar el envío del formulario de contraseña
$("#submit-password-btn").click(() => {
    let password = $("#password").val();
    let confirmPassword = $("#confirm-password").val();

    if (password === "" || confirmPassword === "") {
        swal.fire({
            icon: "warning",
            title: "Campos vacíos",
            text: "Por favor, completa ambos campos de contraseña.",
            confirmButtonText: "Aceptar"
        });
        return;
    }

    if (password === confirmPassword) {
        swal.fire({
            icon: "success",
            title: "Contraseña actualizada",
            text: "Tu contraseña ha sido actualizada correctamente.",
            confirmButtonText: "Aceptar"
        }).then(() => {
            window.location.href = "iniciar-sesion.html"
        });
        // Aquí puedes agregar la lógica para enviar la nueva contraseña al servidor
    } else {
        swal.fire({
            icon: "error",
            title: "Contraseñas no coinciden",
            text: "Las contraseñas ingresadas no coinciden. Por favor, inténtalo de nuevo.",
            confirmButtonText: "Aceptar"
        })
    }
});