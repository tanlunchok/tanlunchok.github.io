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
    const svgElement = buttonIcon.querySelector('svg');
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
        darkModeSwitch.classList.toggle('light-mode');
        svgElement.setAttribute('data-icon', 'moon');
        if(svgElement.setAttribute('data-icon', 'moon'))console.log("moon"); else console.log("wrong moon");
      } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        darkModeSwitch.classList.toggle('dark-mode');
        svgElement.setAttribute('data-icon', 'sun');
        if(svgElement.setAttribute('data-icon', 'sun'))console.log("sun"); else console.log("wrong sun");
      }
    });
  };