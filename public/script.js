const filterButtons = document.querySelectorAll('.filter-button');
const routeCards = document.querySelectorAll('.route-card');
const filterStatus = document.querySelector('#filter-status');

const filterLabels = {
  all: 'Показаны все маршруты',
  short: 'Маршруты до 30 минут',
  long: 'Маршруты до часа',
};

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle('is-active', isSelected);
      item.setAttribute('aria-pressed', String(isSelected));
    });

    routeCards.forEach((card) => {
      const minutes = Number(card.dataset.minutes);
      const isVisible = selectedFilter === 'all' || (selectedFilter === 'short' ? minutes <= 30 : minutes <= 60);
      card.hidden = !isVisible;
    });

    filterStatus.textContent = filterLabels[selectedFilter];
  });
});