const initSideBarFilter = sidebarLeft => {
  const cards = document.querySelectorAll('.card');

  // Retrieve the icon names (e.g.: .icon-vr => vr)
  const iconNames = [];
  sidebarLeft.querySelectorAll('i').forEach(elmt => {
    elmt.classList.forEach(className => {
      if (className.includes('icon')) iconNames.push(className.replace('icon-', ''));
    });
  });

  // Define the first card as the grid first card
  cards[0].classList.add('card-first');

  iconNames.forEach(iconName => {
    const iconElmt = sidebarLeft.querySelector(`.icon-${iconName}`);
    const targetCards = document.querySelectorAll(`.card-${iconName}`);
    // Handle click on each icon of the sidebar
    iconElmt.addEventListener('click', event => {
      event.preventDefault();
      // Hide all the cards
      cards.forEach(card => {
        card.style.display = 'none';
        card.classList.remove('card-first');
      });
      // Only show the targetted cards
      targetCards.forEach(card => card.style.display = 'block');
      // Redine the first card of the grid
      targetCards[0].classList.add('card-first');
    });
  });
};

export default initSideBarFilter;
