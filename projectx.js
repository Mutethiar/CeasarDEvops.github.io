// script.js
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
      const projectContent = project.querySelector('.project-content');
      const toggleIcon = project.querySelector('.toggle');
  
      if (projectContent.classList.contains('hidden')) {
        projectContent.classList.remove('hidden');
        toggleIcon.classList.replace('fa-plus', 'fa-minus');
      } else {
        projectContent.classList.add('hidden');
        toggleIcon.classList.replace('fa-minus', 'fa-plus');
      }
    });
  });