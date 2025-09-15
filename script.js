document.addEventListener('DOMContentLoaded', () => {

    // --- Project Filtering Logic ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex'; // Use flex to maintain layout
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- Modal Logic ---
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalFlow = document.getElementById('modalFlow');
    const modalCool = document.getElementById('modalCool');
    const closeButton = document.querySelector('.close-button');

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if the GitHub/Report link is clicked
            if (e.target.classList.contains('project-link')) {
                return;
            }

            // Populate and show the modal
            modalTitle.textContent = card.dataset.title;
            modalFlow.textContent = card.dataset.flow;
            modalCool.textContent = card.dataset.cool;
            modal.style.display = 'block';
        });
    });

    // Function to close the modal
    const closeModal = () => {
        modal.style.display = 'none';
    }

    // Event listeners to close the modal
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });

    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
