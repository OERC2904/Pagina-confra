/**
 * Lógica principal del Sitio Web CCC
 * Desarrollado por: Especialista en Arquitectura de Información
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Lógica de resaltado de navegación activa
    // Propósito: Proporcionar feedback visual de la ubicación actual del usuario.
    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        // Normalizamos las rutas para comparar correctamente
        if (activePage.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });

    // 2. Animación de conteo para cifras de impacto
    // Propósito: Dinamizar la presentación de estadísticas institucionales.
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // Factor de velocidad de la animación

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = parseInt(counter.getAttribute('data-target'));
                const count = parseInt(counter.innerText.replace(/\./g, ''));
                const increment = Math.ceil(target / speed);

                if (count < target) {
                    // Actualizamos el número antes de formatear
                    const nextVal = count + increment > target ? target : count + increment;
                    counter.innerText = nextVal.toLocaleString('es-CO');
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target.toLocaleString('es-CO');
                }
            };
            updateCount();
        });
    };

    // Ejecutamos la animación al cargar (o mediante IntersectionObserver en versiones futuras)
    if(counters.length > 0) {
        animateCounters();
    }
});