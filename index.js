let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}














































const scrollContainer = document.getElementById('horizontal-scroll');
let isScrolling = false;
let targetScrollLeft = 0;

scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prepreči privzeto pomikanje

    // Hitrost pomikanja
    const speedFactor = 5; // Povečaj hitrost pomikanja
    const scrollAmount = event.deltaY * speedFactor;

    // Nastavi ciljno pozicijo pomikanja
    targetScrollLeft = scrollContainer.scrollLeft + scrollAmount;

    // Preveri, ali smo dosegli konec horizontalnega pomikanja
    if (targetScrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        // Preklopi na navpično pomikanje
        window.scrollBy({
            top: event.deltaY,
            behavior: 'smooth'
        });
    } else if (targetScrollLeft <= 0 && scrollAmount < 0) {
        // Preklopi na navpično pomikanje, ko pomikamo navzgor in smo na začetku
        window.scrollBy({
            top: event.deltaY,
            behavior: 'smooth'
        });
    } else {
        // Začnite gladko pomikanje
        smoothScroll();
    }
});

function smoothScroll() {
    if (isScrolling) return; // Prepreči večkratno zagon funkcije

    isScrolling = true;

    // Funkcija za animacijo
    function animateScroll() {
        const currentScrollLeft = scrollContainer.scrollLeft;

        // Izračunaj razliko
        const distance = targetScrollLeft - currentScrollLeft;

        // Pomikamo se le, če je razlika večja od 1 (za gladko animacijo)
        if (Math.abs(distance) > 1) {
            scrollContainer.scrollLeft += distance * 0.1; // Prilagodi faktor za hitrost
            requestAnimationFrame(animateScroll); // Ponovno pokliči za naslednji frame
        } else {
            // Ko dosežemo ciljno pozicijo, ustavi animacijo
            scrollContainer.scrollLeft = targetScrollLeft;
            isScrolling = false;
        }
    }

    animateScroll(); // Začni animacijo
}