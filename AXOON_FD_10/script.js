  // Select all hide buttons
  const hideButtons = document.querySelectorAll('.hide-btn');
  const cards = document.querySelectorAll('.card');
  const showAllBtn = document.getElementById('showAllBtn');

  // Hide specific card on clicking its hide button
  hideButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
    cards[index].style.display = 'none';
  });
});

  // Show all cards on clicking "Show All Cards"
  showAllBtn.addEventListener('click', () => {
    cards.forEach(card => {
      card.style.display = 'block';
    });
  });
