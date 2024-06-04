
// JS Script for open contact us form as popup
const contactBtn = document.getElementById('contactBtn');
const popupForm = document.getElementById('popupForm');
const closeBtn = document.querySelector('.close-btn');

// Open pop-up form
contactBtn.addEventListener('click', () => {
  popupForm.style.display = 'block';
});

// Close pop-up form
closeBtn.addEventListener('click', () => {
  popupForm.style.display = 'none';
});

// Close pop-up form when clicked outside
window.addEventListener('click', (event) => {
  if (event.target == popupForm) {
    popupForm.style.display = 'none';
  }
});

// show image according to right side content js script
const contentItems = document.querySelectorAll('.desc');
const imageElement = document.querySelector('.left img');

contentItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.getAttribute('data-image');
        imageElement.src = imageSrc;

        contentItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    });
});