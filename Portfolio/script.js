document.addEventListener("DOMContentLoaded", function() {
    // Read More functionality
    const readMoreLink = document.querySelector('.read-more-link');
    const moreText = document.querySelector('.more-text');

    readMoreLink.addEventListener('click', function(e) {
        e.preventDefault();

        if (moreText.style.display === "none") {
            moreText.style.display = "inline";
            readMoreLink.textContent = "Read less";
        } else {
            moreText.style.display = "none";
            readMoreLink.textContent = "Read more";
        }
    });

    // Mobile Menu Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Smooth Scroll for Navbar Links
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            navbar.classList.remove('active'); // Close menu on link click
        });
    });
});
