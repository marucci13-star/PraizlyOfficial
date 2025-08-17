// JavaScript for Praizly website
// Handles accordion toggles for the FAQ section

document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const currentlyOpen = header.classList.contains('active');
            // Close any open items
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
                if (h.nextElementSibling) {
                    h.nextElementSibling.style.maxHeight = null;
                }
            });
            // If it was not open, open it
            if (!currentlyOpen) {
                header.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});