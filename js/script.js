async function cargarHoroscopoAries() {
    try {
        const res = await fetch('https://aztro.sameerkumar.website/?sign=aries&day=today', {
            method: 'POST'
        });
        const data = await res.json();

        const fecha = new Date();
        const fechaFormateada = fecha.toLocaleDateString('es-ES', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        document.getElementById('fecha').innerText = fechaFormateada;
        document.getElementById('descripcion').innerText = data.description;
    } catch (error) {
        document.getElementById('descripcion').innerText = "No se pudo cargar el horóscopo. Inténtalo más tarde.";
    }
}

// Cargar Aries al abrir la página
cargarHoroscopoAries();
