$("#logout").click(function(event) {
    event.preventDefault(); 

    swal.fire({
        title: "¿Cerrar sesión?",
        text: "Tu sesión se cerrará y volverás a la página de inicio.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, cerrar sesión",
        cancelButtonText: "Cancelar",
        timer: 10000
    }).then((result) => {
        if (result.isConfirmed) {
            swal.fire("¡Sesión cerrada!", "", "success");
            window.location.href = "index.html";
        }
    });
});