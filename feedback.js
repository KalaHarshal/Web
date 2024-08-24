document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');

    stars.forEach((star) => {
        star.addEventListener('click', function() {
            // Clear previous selections
            stars.forEach((s) => s.classList.remove('selected'));

            // Highlight the clicked star and all previous stars
            this.classList.add('selected');
            let previousSibling = this.previousElementSibling;
            while (previousSibling) {
                previousSibling.classList.add('selected');
                previousSibling = previousSibling.previousElementSibling;
            }

            // Set the rating value in the hidden input
            ratingInput.value = this.getAttribute('data-value');
        });
    });

    // Example of handling form submission
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', function(event) {
        if (!ratingInput.value) {
            alert('Please select a rating.');
            event.preventDefault();
        }
    });
});
