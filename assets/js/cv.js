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
    const darkModeSwitch = document.getElementById('dark-mode-switch');
    const buttonIcon = document.getElementById('dark-mode-switch-icon');
    const initialThemeCheck = document.documentElement.getAttribute('data-bs-theme');

    if (initialThemeCheck === 'dark') {
      darkModeSwitch.classList.add('dark-mode');
    } else {
      darkModeSwitch.classList.add('light-mode');
    }
   
    
    darkModeSwitch.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
       
      if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        darkModeSwitch.classList.remove('light-mode');
        darkModeSwitch.classList.add('dark-mode');
        if(buttonIcon.setAttribute('data-icon', 'moon'))console.log("moon");
      } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        darkModeSwitch.classList.remove('dark-mode');
        darkModeSwitch.classList.add('light-mode');
        if(buttonIcon.setAttribute('data-icon', 'sun'))console.log("sun");
      }
    });
  };