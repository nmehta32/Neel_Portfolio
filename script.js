document.addEventListener('DOMContentLoaded', () => {

    // --- Project Filtering Logic ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectGallery = document.querySelector('.project-gallery');

    if (filterButtons.length > 0 && projectGallery) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filter = button.dataset.filter;
                const projectCards = projectGallery.querySelectorAll('.project-card');

                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- Modal Logic (REVISED AND FIXED) ---
    const modal = document.getElementById('projectModal');
    if (modal) {
        const modalTitle = document.getElementById('modalTitle');
        const modalFlow = document.getElementById('modalFlow');
        const modalCool = document.getElementById('modalCool');
        const closeButton = modal.querySelector('.close-button');

        // Use event delegation on the gallery for robustness
        projectGallery.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            
            // If a card was clicked and it wasn't a link inside the card
            if (card && !e.target.matches('a, a *')) {
                modalTitle.textContent = card.dataset.title || 'No Title';
                modalFlow.textContent = card.dataset.flow || 'No workflow specified.';
                modalCool.textContent = card.dataset.cool || 'No details provided.';
                modal.style.display = 'block';
            }
        });

        const closeModal = () => {
            modal.style.display = 'none';
        }

        closeButton.addEventListener('click', closeModal);
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
