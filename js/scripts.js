/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
//

const questionWrappers = document.querySelectorAll('.q-wrapper');

questionWrappers.forEach((wrapper) => {
  wrapper.addEventListener('click', showAnswer);
  wrapper.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
      showAnswer(e);
    }
  });
});

function showAnswer(e) {
  questionWrappers.forEach((wrapper) => {
    const h3 = wrapper.querySelector('h3');
    const svg = wrapper.querySelector('svg');
    const answer = wrapper.nextElementSibling;

    if (wrapper == e.currentTarget) {
      h3.classList.toggle('h3-active');
      svg.classList.toggle('svg-animation');
      answer.classList.toggle('p-visible');
    } else {
      h3.classList.remove('h3-active');
      svg.classList.remove('svg-animation');
      answer.classList.remove('p-visible');
    }
  });
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
