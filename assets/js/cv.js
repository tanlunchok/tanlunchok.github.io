function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar-loading');
  
    progressBars.forEach(progressBar => {
      anime({
        targets: progressBar,
        width: progressBar.getAttribute('data-percentage'),
        duration: 0.5,
        easing: 'easeInOutQuad',
      });
    });
  }