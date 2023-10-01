window.addEventListener('load', function() {
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
  });
 /*  const progressBarSections = document.querySelectorAll('.progress');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          anime({
            targets: entry.target.querySelector('.progress-bar'),
            width: entry.target.getAttribute('data-percentage'),
            duration: 500,
            easing: 'easeInOutSine',
          });
        }, 500);
      }
    });
  });
  
  progressBarSections.forEach(progressBarSection => {
    observer.observe(progressBarSection);
  }); */

/*   const darkModeSwitch = document.getElementById('dark-mode-switch');

  darkModeSwitch.addEventListener('click', function() {
    darkModeSwitch.classList.toggle('dark-mode-switch-active');
  
    if (darkModeSwitch.classList.contains('dark-mode-switch-active')) {
      darkModeSwitch.querySelector('i').classList.remove('fa-sun');
      darkModeSwitch.querySelector('i').classList.add('fa-moon');
    } else {
      darkModeSwitch.querySelector('i').classList.remove('fa-moon');
      darkModeSwitch.querySelector('i').classList.add('fa-sun');
    }
  }); */

/*   const darkModeSwitch = document.getElementById('dark-mode-switch');

darkModeSwitch.addEventListener('click', function() {
  document.documentElement.setAttribute('data-bs-theme', darkModeSwitch.classList.contains('dark-mode-switch-active') ? 'dark' : 'light');
}); */

const darkModeSwitch = document.querySelector('.dark-mode-switch');

darkModeSwitch.addEventListener('click', function() {
  document.documentElement.setAttribute('data-bs-theme', darkModeSwitch.classList.contains('dark-mode-switch-active') ? 'dark' : 'light');
});