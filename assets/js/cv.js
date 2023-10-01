/* window.addEventListener('load', function() {
    const progressBars = document.querySelectorAll('.progress');
  
    progressBars.forEach(progressBar => {
      const percentage = progressBar.getAttribute('data-percentage');
  
      const progressBarElement = progressBar.querySelector('.progress-bar');
  
      progressBarElement.style.width = '0%';
  
      anime({
        targets: progressBarElement,
        width: percentage,
        duration: 500,
        easing: 'easeInOutSine',
      });
    });
  }); */
  const progressBarSections = document.querySelectorAll('.lang-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anime({
        targets: entry.target.querySelector('.progress-bar'),
        width: entry.target.getAttribute('data-percentage'),
        duration: 500,
        easing: 'easeInOutSine',
      });
    }
  });
});

progressBarSections.forEach(progressBarSection => {
  observer.observe(progressBarSection);
});