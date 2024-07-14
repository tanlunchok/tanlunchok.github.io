// loading-screen.js
document.addEventListener("DOMContentLoaded", function() {
    // Load loading screen HTML
    fetch('loading-screen.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('loading-screen-placeholder').innerHTML = data;

            const progressBar = document.getElementById('progress-bar');
            const mainContent = document.getElementById('main-content');
            const loadingScreen = document.getElementById('loading-screen');
            const minimumLoadingTime = 2000; // Minimum loading time in milliseconds (2 seconds)
            const startTime = Date.now();

            // Function to update progress
            function updateProgress() {
                const elapsedTime = Date.now() - startTime;
                let progress = (elapsedTime / minimumLoadingTime) * 100;
                progressBar.style.width = `${Math.min(progress, 100)}%`;

                if (progress < 100) {
                    requestAnimationFrame(updateProgress);
                } else {
                    setTimeout(() => {
                        loadingScreen.style.opacity = '0'; // Fade out animation (optional)
                        setTimeout(() => {
                            loadingScreen.style.display = 'none';
                            mainContent.style.display = 'block';
                        }, 300); // Fade out duration
                    }, 300); // Wait a bit before hiding loading screen
                }
            }

            // Start updating progress
            requestAnimationFrame(updateProgress);
        });
});
