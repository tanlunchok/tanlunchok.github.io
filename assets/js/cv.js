window.addEventListener('load', function() {
    const progressBars = document.querySelectorAll('.progress');
  
    progressBars.forEach(progressBar => {
      const percentage = progressBar.getAttribute('data-percentage');
      const progressBarElement = progressBar.querySelector('.progress-bar');
  
      progressBarElement.style.width = '0%';
  
      anime({
        targets: progressBarElement,
        width: percentage,
        duration: 200,
        easing: 'easeInOutSine',
      });
    });


  });
  
  
  
  window.onload = (event) => {
    let darkModeSwitch = document.getElementById('dark-mode-switch');
    const buttonIcon = document.getElementById('dark-mode-switch-icon');
    if (!document.documentElement.hasAttribute('data-bs-theme')) {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
    const initialThemeCheck = document.documentElement.getAttribute('data-bs-theme');
    let darkModeIcon = document.getElementById("dark-mode-switch-icon");


    if (initialThemeCheck === 'dark') {
      darkModeSwitch.classList.add('dark-mode',);
      darkModeIcon.classList.add('bi-moon-fill');
    } else {
      darkModeSwitch.classList.add('light-mode');
      darkModeIcon.classList.add('bi-brightness-high-fill');
    }
   
    
    darkModeSwitch.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
       
      document.documentElement.setAttribute('data-bs-theme', currentTheme === 'light' ? 'dark' : 'light');
        darkModeSwitch.classList.toggle('light-mode');
        darkModeSwitch.classList.toggle('dark-mode');
        darkModeIcon.classList.toggle('bi-brightness-high-fill');
        darkModeIcon.classList.toggle('bi-moon-fill');
    });
  };

 document.getElementById("resume-btn").addEventListener("click", function() {
    const link = document.createElement('a');
    link.href = 'documents/resume-2025.pdf'; // make sure path is correct
    link.download = '/documents/resume-2025.pdf'; // file name for download
    document.body.appendChild(link);   // required for Firefox
    link.click();
    document.body.removeChild(link);
});