(function () {
  const yearNodes = document.querySelectorAll('[data-year]');
  const year = String(new Date().getFullYear());
  yearNodes.forEach((node) => {
    node.textContent = year;
  });

  const filterButtons = document.querySelectorAll('.filter-btn');
  const reviewCards = document.querySelectorAll('.review-card');
  const reviewCount = document.getElementById('review-count');

  if (filterButtons.length && reviewCards.length) {
    const applyFilter = (filter) => {
      let visible = 0;
      reviewCards.forEach((card) => {
        const match = filter === 'all' || card.dataset.platform === filter;
        card.style.display = match ? 'flex' : 'none';
        if (match) visible += 1;
      });
      if (reviewCount) reviewCount.textContent = String(visible);
    };

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        applyFilter(button.dataset.filter || 'all');
      });
    });

    applyFilter('all');
  }

  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      formStatus.textContent =
        'Thanks! Your message is ready. Click the email button below to send it to khgfunder@gmail.com.';
    });
  }
})();
