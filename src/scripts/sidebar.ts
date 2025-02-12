const initSideBarFilter = sidebarLeft => {
  const cards = document.querySelectorAll('.card-frame');
  let currentFilter = 'all';

  // Retrieve the icon names (e.g.: .icon-vr => vr)
  const iconNames = [];
  sidebarLeft.querySelectorAll('.icon').forEach(elmt => {
    if (elmt) {
      elmt.classList.forEach(className => {
        if (className.includes('icon-')) iconNames.push(className.replace('icon-', ''));
      });
    }
  });

  iconNames.forEach(iconName => {
    const iconElmt = sidebarLeft.querySelector(`.icon-${iconName}`);
    const targetCards = document.querySelectorAll(`.card-${iconName}`);
    // Handle click on each icon of the sidebar
    iconElmt.addEventListener('click', event => {
      event.preventDefault();
      // Hide all the cards
      cards.forEach(card => {
        card.style.display = 'none';
        card.classList.remove('visible');
      });
      // If the current filter is the one clicked show all
      if (currentFilter === iconName) {
        cards.forEach(card => {
          card.style.display = 'block';
          card.classList.add('visible');
        });
        currentFilter = 'all';
      }
      // Only show the targetted cards
      else if (targetCards[0]) {
        targetCards.forEach(card => {
          card.style.display = 'block';
          card.classList.add('visible');
        });
        // Update the current filter status
        currentFilter = iconName;
      }
    });
  });
};

export default initSideBarFilter;
