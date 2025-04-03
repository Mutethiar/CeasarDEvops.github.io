// JavaScript for Portfolio Website
// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Navigation Links
    document.getElementById('project').addEventListener('click', function () {
        window.open('projectx.html', '_blank');
    });

    document.getElementById('ABOUT').addEventListener('click', function () {
        window.open('About.html', '_blank');
    });

    document.getElementById('News').addEventListener('click', function () {
        window.open('https://www.reuters.com/technology/', '_blank');
    });

    document.getElementById('git').addEventListener('click', function () {
        window.open('https://github.com/Mutethiar', '_blank');
    });

    document.getElementById('linked').addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/victor-mutethia-a5a144290/', '_blank');
    });

    document.getElementById('X').addEventListener('click', function () {
        window.open('https://twitter.com/19.ceazsar', '_blank');
    });

    document.getElementById('insta').addEventListener('click', function () {
        window.open('https://www.instagram.com/19.caesar', '_blank');
    });

    document.getElementById('WA').addEventListener('click', function () {
        window.open('https://wa.me/+254759698241', '_blank');
    });

        // Form Submission
  document.querySelector('form').addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Send form data to the server or an email service
            emailjs.init("service_ynzk9ph");
            emailjs.send('service_ynzk9ph', 'template_kkaf2m7', { name, email, message })
                .then(function () {
                    alert('Message sent successfully!');
                }, function (error) {
                    alert('Error sending message.');
                    console.error('Failed...', error);
                });
        });

        // Download CV
document.getElementById('download').addEventListener('click', function () {
            const link = document.createElement('a');
            link.href = 'C:/Portfolio/sample 1.pdf';
            link.download = 'sample 1.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });

        // Scroll Animation
        const slideInElement = document.querySelector('.slide-in');
        if (!slideInElement) {
            console.error("Element with class 'slide-in' not found in the DOM.");
            return;
        }
        let isScrolling;

        function startAnimation() {
            slideInElement.style.animationPlayState = 'running';
        }

        function stopAnimation() {
            slideInElement.style.animationPlayState = 'paused';
        }

        window.addEventListener('scroll', () => {
            window.clearTimeout(isScrolling);
            startAnimation();
            isScrolling = setTimeout(stopAnimation, 66);
        });

        stopAnimation(); // Initially pause the animation
