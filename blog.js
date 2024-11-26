// JavaScript for Sri Kalahasthi Blog

// Toggle Mobile Navigation Menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Smooth Scrolling for Navigation Links
const links = document.querySelectorAll('.nav-links a');

for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = e.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for header height
        behavior: 'smooth',
      });
    }
  });
}
/*lazy loading*/
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll(".lazy");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => {
    imageObserver.observe(img);
  });
});

  

// Contact Form Validation
const contactForm = document.querySelector('form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();

    // Simple Validation
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thank you for reaching out! We will get back to you soon.');
    contactForm.reset(); // Clear the form after submission
  });
}

// Email Validation Function
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Highlight Active Section on Scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop &&
      scrollPosition < section.offsetTop + section.offsetHeight
    ) {
      const id = section.getAttribute('id');
      document
        .querySelector('.nav-links a[href="#' + id + '"]')
        ?.classList.add('active');
    } else {
      const id = section.getAttribute('id');
      document
        .querySelector('.nav-links a[href="#' + id + '"]')
        ?.classList.remove('active');
    }
  });
});
