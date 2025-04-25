document.addEventListener("DOMContentLoaded", () => {
    const signo = 'aries';
    const apiKey = 'NlkK7g1OZVIjVAO8hHSuzw==6no7AGCGxpmnndnK'; // ← Reemplaza con tu clave real de API Ninjas

    fetch(`https://api.api-ninjas.com/v1/horoscope?sign=${signo}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey
        }
    })
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
