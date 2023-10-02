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
  window.onload = (event) => {
    const accordionButton = document.querySelector('#edu-accordion-button');

    accordionButton.addEventListener('click', function() {
      if (this.classList.contains('collapsed')) {
        this.classList.remove('collapsed');
        this.setAttribute('aria-expanded', 'true');
      } else {
        this.classList.add('collapsed');
        this.setAttribute('aria-expanded', 'false');
      }
    });
  };
  
  
  window.onload = (event) => {
    const darkModeSwitch = document.getElementById('dark-mode-switch');
    darkModeSwitch.addEventListener('click', function() {
      document.documentElement.setAttribute('data-bs-theme', darkModeSwitch.classList.contains('dark-mode-switch-active') ? 'dark' : 'light');
    });
  };
    
/*     

    
   */