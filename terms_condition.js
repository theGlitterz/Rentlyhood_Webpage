window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
  
    var sections = document.querySelectorAll("h3, h5");
    var currentSectionIndex = 0;
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionTop = section.offsetTop;
      var sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        currentSectionIndex = i;
      }
    }
  
    var links = document.querySelectorAll('.sidenav a');
    var activeLinkIndex = -1;
    for (var i = 0; i < links.length; i++) {
      var sectionId = links[i].getAttribute('href').replace('#', '');
      var section = document.getElementById(sectionId);
      var sectionRect = section.getBoundingClientRect();
      if (sectionRect.top >= 0 && sectionRect.bottom <= window.innerHeight) {
        activeLinkIndex = i;
        break;
      }
    }
  
    for (var i = 0; i < links.length; i++) {
      if (i === activeLinkIndex) {
        links[i].classList.add('active');
      } else {
        links[i].classList.remove('active');
      }
    }
  });