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
    const accordionContent = document.querySelector('#edu-accordion-content-1');

    if(accordionContent.classList.remove('show'))console.log("Show removed");

  };
  
  
  window.onload = (event) => {
    const darkModeSwitch = document.getElementById('dark-mode-switch');
    const buttonIcon = darkModeSwitch.querySelector('i');
    darkModeSwitch.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');

      if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        darkModeSwitch.classList.remove('light-mode');
        darkModeSwitch.classList.add('dark-mode');
        buttonIcon.classList.remove('fa-sun');
        buttonIcon.classList.add('fa-moon');
      } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        darkModeSwitch.classList.remove('dark-mode');
        darkModeSwitch.classList.add('light-mode');
        buttonIcon.classList.remove('fa-moon');
        buttonIcon.classList.add('fa-sun');
      }
    });
  };