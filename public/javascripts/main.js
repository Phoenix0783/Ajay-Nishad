
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('#theme-toggle');
  const themeIcon = themeToggle.querySelector('.theme-toggle-icon');
  const themeLabel = themeToggle.querySelector('.theme-toggle-label');
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const applyTheme = theme => {
    const isDark = theme === 'dark';
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute(
      'aria-label',
      `Switch to ${isDark ? 'light' : 'dark'} theme`
    );
    themeLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
    themeIcon.innerHTML = isDark
      ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
      : '<path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z"/>';
    themeColor.setAttribute('content', isDark ? '#101827' : '#F1F1EE');
  };

  applyTheme(document.documentElement.dataset.theme || 'light');

  const menuToggle = document.querySelector('#mobile-menu-toggle');
  const mainNavigation = document.querySelector('#main-navigation');
  const navOverlay = document.querySelector('#nav-overlay');

  const setMenuOpen = isOpen => {
    document.body.classList.toggle('nav-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      `${isOpen ? 'Close' : 'Open'} navigation menu`
    );
  };

  menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });
  navOverlay.addEventListener('click', () => setMenuOpen(false));
  mainNavigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  themeToggle.addEventListener('click', () => {
    const nextTheme =
      document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';

    if (typeof document.startViewTransition === 'function') {
      document.startViewTransition(() => applyTheme(nextTheme));
    } else {
      applyTheme(nextTheme);
    }

    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch (error) {
      console.warn('Theme preference could not be saved.', error);
    }
  });

  const contactForm = document.querySelector('#contact-form');
  const contactStatus = document.querySelector('#contact-status');
  const contactSubmit = document.querySelector('#contact-submit');
  const contactToast = document.createElement('div');
  contactToast.className = 'contact-toast';
  contactToast.setAttribute('role', 'status');
  contactToast.setAttribute('aria-live', 'polite');
  contactToast.setAttribute('aria-atomic', 'true');
  document.body.appendChild(contactToast);
  let toastTimeout;

  const showContactToast = message => {
    window.clearTimeout(toastTimeout);
    contactToast.textContent = message;
    contactToast.classList.add('is-visible');
    toastTimeout = window.setTimeout(() => {
      contactToast.classList.remove('is-visible');
    }, 4000);
  };

  if (contactForm) {
    const endpointIsPlaceholder = contactForm.action.includes('YOUR_FORM_ID');

    if (endpointIsPlaceholder) {
      contactSubmit.disabled = true;
    } else {
      contactStatus.textContent = 'Your message will be sent securely via Formspree.';
    }

    contactForm.addEventListener('submit', async event => {
      event.preventDefault();

      if (endpointIsPlaceholder) {
        contactStatus.textContent =
          'The contact form is not connected yet. Please email nishadajay1099@gmail.com directly.';
        return;
      }

      contactSubmit.disabled = true;
      contactStatus.textContent = 'Sending your message...';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' }
        });

        if (!response.ok) {
          throw new Error(`Formspree returned HTTP ${response.status}.`);
        }

        contactForm.reset();
        contactStatus.textContent =
          'Thanks for reaching out! Your message has been sent.';
        showContactToast('Message sent successfully!');
      } catch (error) {
        console.error('Contact form submission failed.', error);
        contactStatus.textContent =
          'Your message could not be sent. Please email nishadajay1099@gmail.com directly.';
      } finally {
        contactSubmit.disabled = false;
      }
    });
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll(
    '.projects-page-grid .project-card'
  );

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.dataset.filter;

      filterButtons.forEach(item => {
        const isActive = item === button;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });

      projectCards.forEach(card => {
        const category = card.dataset.category;
        const shouldShow =
          selectedCategory === 'all' ||
          category === selectedCategory ||
          (selectedCategory === 'Full Stack Development' &&
            category === 'Web Development');

        card.hidden = !shouldShow;
      });
    });
  });

  document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const slides = Array.from(
      carousel.querySelectorAll('[data-carousel-slide]')
    );
    const indicators = Array.from(
      carousel.querySelectorAll('[data-carousel-go-to]')
    );
    let activeIndex = 0;

    const showSlide = index => {
      activeIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIndex) => {
        slide.hidden = slideIndex !== activeIndex;
      });

      indicators.forEach((indicator, indicatorIndex) => {
        const isActive = indicatorIndex === activeIndex;
        indicator.classList.toggle('active', isActive);
        indicator.setAttribute('aria-current', String(isActive));
      });
    };

    const previousButton = carousel.querySelector('[data-carousel-previous]');
    const nextButton = carousel.querySelector('[data-carousel-next]');

    if (previousButton && nextButton) {
      previousButton.addEventListener('click', () => {
        showSlide(activeIndex - 1);
      });
      nextButton.addEventListener('click', () => {
        showSlide(activeIndex + 1);
      });
    }

    indicators.forEach(indicator => {
      indicator.addEventListener('click', () => {
        showSlide(Number(indicator.dataset.carouselGoTo));
      });
    });
  });
});
