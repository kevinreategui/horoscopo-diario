document.addEventListener("DOMContentLoaded", () => {
    const signo = 'aries';
    const proxyUrl = 'https://modern-mint-club.glitch.me/horoscope'; // tu URL de proxy correcta

    fetch(`${proxyUrl}?signo=${signo}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const fechaHoy = new Date().toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            document.getElementById("fecha").textContent = fechaHoy;
            document.getElementById("descripcion").textContent = data.horoscope;
        })
        .catch(error => {
            console.error("Error al obtener el horóscopo:", error);
            document.getElementById("descripcion").textContent = "No se pudo cargar el horóscopo. Intenta más tarde.";
        });
});
