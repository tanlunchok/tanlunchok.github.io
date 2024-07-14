// loading-screen.js
document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const minimumLoadingTime = 200; // Minimum loading time in milliseconds (e.g., 2000ms = 2 seconds)
    const startTime = Date.now();

    // Function to show content after loading
    function showContent() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }

    window.addEventListener('load', function() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = minimumLoadingTime - elapsedTime;
        if (remainingTime > 0) {
            setTimeout(showContent, remainingTime);
        } else {
            showContent();
        }
    });
});
