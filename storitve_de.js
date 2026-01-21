document.querySelectorAll('.link_storitve a:first-child').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const storitev = link.closest('.storitev');
        const img = storitev.querySelector('.img-box');

        const isActive = storitev.classList.toggle('active');
        img?.classList.toggle('active', isActive);

        link.textContent = isActive
            ? 'Ich bin weniger interessiert'
            : 'Ich möchte mehr erfahren ';
    });
});
