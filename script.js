/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
  }
  showMenu('nav-toggle','nav-menu')
  
  /*==================== REMOVE MENU MOBILE ====================*/
  const navLink = document.querySelectorAll('.nav__link')
  
  function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))
  
  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections = document.querySelectorAll('section[id]')
  
  const scrollActive = () =>{
    const scrollDown = window.scrollY
  
  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
  }
  window.addEventListener('scroll', scrollActive)
    
  
  /*==================== ACCORDION SKILLS ====================*/
  function toggleSection(section) {
    let frontendSection = document.getElementById('frontend');
    let backendSection = document.getElementById('backend');
    let codingSection = document.getElementById('coding');
  
    if (section === 'frontend') {
      frontendSection.classList.remove('hidden');
      backendSection.classList.add('hidden');
      codingSection.classList.add('hidden');
      animateProgressBars('#frontend'); // Animate frontend progress bars
    } else if (section === 'backend') {
      backendSection.classList.remove('hidden');
      frontendSection.classList.add('hidden');
      codingSection.classList.add('hidden');
      animateProgressBars('#backend'); // Animate backend progress bars
    } else if (section === 'coding') {
      codingSection.classList.remove('hidden');
      frontendSection.classList.add('hidden');
      backendSection.classList.add('hidden');
    }
  }
  
  // Function to animate progress bars
  function animateProgressBars(section) {
    const progressBars = document.querySelectorAll(`${section} .progress`);
    progressBars.forEach(bar => {
      bar.style.width = '0'; // Reset width to 0
      setTimeout(() => {
        bar.style.width = bar.getAttribute('data-width'); // Animate to the given width
      }, 10); // Small delay to allow the reset to take effect
    });
  }
  
  // Set frontend as default visible section
  toggleSection('frontend');
   
      //Initial content revealing js
      ScrollReveal({
        distance: "100px",
        duration: 2000,
        delay: 200
      });
    
      ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
        origin: "left"
      });
      ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
        origin: "right"
      });
      ScrollReveal().reveal(".project-title, .contact-title", {
        origin: "top"
      });
      ScrollReveal().reveal(".projects, .contact", {
        origin: "bottom"
      });
    
  
  
  
  
  
  
   
  /*=============== DARK LIGHT THEME ===============*/ 
  const themeButton = document.getElementById('theme-button')
  const darkTheme = 'dark-theme'
  const iconTheme = 'ri-sun-line'
  
  // Previously selected topic (if user selected)
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')
  
  // We obtain the current theme that the interface has by validating the dark-theme class
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
  
  // We validate if the user previously chose a topic
  if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
  }
  
  // Activate / deactivate the theme manually with the button
  themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
  })

  
  document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scroll-to-top");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        scrollToTopButton.style.display = "flex"; // Ensure visibility
      } else {
        scrollToTopButton.style.display = "none"; // Hide when scrolled up
      }
    });
  
    scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  