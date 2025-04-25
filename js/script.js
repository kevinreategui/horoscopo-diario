document.addEventListener("DOMContentLoaded", () => {
    const signo = 'aries'; // signo fijo para esta página
    const proxyUrl = 'https://modern-mint-club.glitch.me/horoscope'; // tu URL de Glitch

    fetch(`${proxyUrl}?signo=${signo}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Formatear la fecha en español
            const fechaHoy = new Date().toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // Mostrar la fecha en el elemento con id "fecha"
            document.getElementById("fecha").textContent = fechaHoy;

            // Mostrar la descripción del horóscopo en el elemento con id "descripcion"
            document.getElementById("descripcion").textContent = data.horoscope;
        })
        .catch(error => {
            console.error("Error al obtener el horóscopo:", error);
            document.getElementById("descripcion").textContent = "No se pudo cargar el horóscopo. Intenta más tarde.";
        });
});
