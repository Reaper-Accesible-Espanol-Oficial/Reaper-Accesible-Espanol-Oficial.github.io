function ejecutarBuscador(event) {
    // Evita que la página se recargue al presionar "Buscar"
    event.preventDefault();

    // Obtiene lo que el usuario escribió, lo convierte a minúsculas y quita espacios extra
    const inputBuscador = document.getElementById('buscador');
    const busqueda = inputBuscador.value.toLowerCase().trim();

    // Si el usuario no escribió nada, no hace nada
    if (busqueda === '') {
        return;
    }

    // Diccionario de palabras clave conectadas a los archivos HTML
    const diccionario = {
        // Redes Sociales
        'tiktok': 'redes.html',
        'tik tok': 'redes.html',
        'youtube': 'redes.html',
        'whatsapp': 'redes.html',
        'redes': 'redes.html',
        'comunidad': 'redes.html',
        'grupo': 'redes.html',
        'canal': 'redes.html',
        
        // Descargas (REAPER y complementos)
        'descargar': 'descargas.html',
        'descarga': 'descargas.html',
        'descargas': 'descargas.html',
        'reaper': 'descargas.html',
        'osara': 'descargas.html',
        'sws': 'descargas.html',
        'reapack': 'descargas.html',
        'traduccion': 'descargas.html',
        'traducción': 'descargas.html',
        'español': 'descargas.html',
        'Traducción al español': 'descargas.html',
        'complementos': 'descargas.html',
        
        // Herramientas Accesibles
        'herramientas': 'herramientas.html',
        'herramienta': 'herramientas.html',
        'reaper accessibility tools': 'herramientas.html',
        'accessibility tools': 'herramientas.html',
        'hugo': 'herramientas.html',
        'hugo alberto macías': 'herramientas.html',
        
        // Acerca de nosotros / Instructores
        'nosotros': 'nosotros.html',
        'historia': 'nosotros.html',
        'pioneros': 'nosotros.html',
        'jose manuel': 'nosotros.html',
        'emmanuel': 'nosotros.html',
        'danilo': 'nosotros.html',
        'instructores': 'instructores.html', // Asumiendo que crearás este archivo
        
        // Cursos
        'cursos': 'cursos.html', // Asumiendo que crearás este archivo
        'curso': 'cursos.html',
        'tutoriales': 'cursos.html',
        
        // Contacto
        'contacto': 'contacto.html',
        'correo': 'contacto.html',
        'escribir': 'contacto.html',
        
        // Inicio
        'inicio': 'index.html',
        'publicaciones': 'index.html',
        'recientes': 'index.html',
        'noticias': 'index.html'
    };

    // Busca la palabra clave en el diccionario
    let urlDestino = '';
    
    // Verificamos si la búsqueda exacta está en el diccionario
    if (diccionario[busqueda]) {
        urlDestino = diccionario[busqueda];
    } else {
        // Si no es exacta, buscamos si alguna palabra clave está contenida en lo que escribió el usuario
        for (const [palabraClave, url] of Object.entries(diccionario)) {
            if (busqueda.includes(palabraClave)) {
                urlDestino = url;
                break;
            }
        }
    }

    // Redirige o avisa si no encontró resultados
    if (urlDestino !== '') {
        window.location.href = urlDestino;
    } else {
        alert('No se encontraron resultados para: "' + inputBuscador.value + '". Intenta con otras palabras como "descargas", "osara" o "redes".');
    }
}