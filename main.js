document.addEventListener('DOMContentLoaded', () => {
  const cursorEffect = document.querySelector('.cursor-effect');
  const navContent = document.querySelector(".nav__content");
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.querySelector('.nav__mobile__menu');
  const menuBtnIcon = menuBtn.querySelector('i');
  const navLinks = document.querySelectorAll('.nav__links a');

  // Toggle menu function
  function toggleMenu() {
    mobileMenu.classList.toggle('active');

    // Toggle menu icon
    if (mobileMenu.classList.contains('active')) {
      menuBtnIcon.className = 'ri-close-line';
      document.body.style.overflow = 'hidden';
    } else {
      menuBtnIcon.className = 'ri-menu-line';
      document.body.style.overflow = '';
    }
  }

  // Event listener for menu button
  menuBtn.addEventListener('click', toggleMenu);

  // Close menu and smooth scroll when clicking on a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Close the mobile menu
      if (mobileMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Close menu when clicking outside the menu
  document.addEventListener('click', (e) => {
    if (
      mobileMenu.classList.contains('active') &&
      !mobileMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  // Reset menu state on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 400) {
      mobileMenu.classList.remove('active');
      menuBtnIcon.className = 'ri-menu-line';
      document.body.style.overflow = '';
    }
  });

  // Footer Animation
  window.addEventListener('scroll', () => {
    const footer = document.querySelector('footer');
    if (footer) {
      const footerPosition = footer.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (footerPosition < screenHeight) {
        footer.classList.add('animate');
      }
    }
  });

  let whatsappClickCount = 0;
  let whatsappClickTimer;
  // Enhanced WhatsApp Button with Mobile Support
  function createWhatsAppButton() {
    const whatsappButton = document.createElement('a');
    whatsappButton.href = "https://wa.me/message/XJ5IC4UJVYYRJ1";
    whatsappButton.className = "whatsapp-float-button";
    whatsappButton.innerHTML = `
      <div class="whatsapp-icon-container">
        <i class="ri-whatsapp-fill"></i>
        <span class="whatsapp-tooltip">Need Help?</span>
      </div>
    `;
    document.body.appendChild(whatsappButton);

    // Enhanced mobile click handling
    const whatsappContainer = whatsappButton.querySelector('.whatsapp-icon-container');
    
    whatsappButton.addEventListener('click', (e) => {
      if (window.innerWidth <= 400) {
        e.preventDefault();
        whatsappClickCount++;
        
        if (whatsappClickCount === 1) {
          // First click - show tooltip
          whatsappContainer.classList.add('active');
          
          // Reset after 3 seconds if no second click
          whatsappClickTimer = setTimeout(() => {
            whatsappContainer.classList.remove('active');
            whatsappClickCount = 0;
          }, 3000);
          
        } else if (whatsappClickCount === 2) {
          // Second click - navigate to WhatsApp
          clearTimeout(whatsappClickTimer);
          window.location.href = whatsappButton.href;
          whatsappClickCount = 0;
        }
      }
    });
  }

  // createWhatsAppButton();

  
});
// Boarding Modal
const bookBoardingBtn = document.querySelector(".services__card-boarding .services__btn");
const modalOverlay = document.getElementById("modal-overlay");
const closeBtn = document.getElementById("close-btn");
const bookNowBtn = document.getElementById("book-now-btn");
const queryNowBtn = document.querySelectorAll("#book-now-btn")[1];

// Grooming Modal
const bookGroomingBtn = document.querySelector(".services__card-grooming .services__btn");
const modalOverlayGrooming = document.getElementById("modal-overlay-grooming");
const closeBtnGrooming = document.getElementById("close-btn-grooming");
const bookNowBtnGrooming = document.querySelector("#modal-overlay-grooming .book-now-btn");
const queryNowBtnGrooming = document.querySelectorAll("#modal-overlay-grooming .book-now-btn")[1];

// Food Delivery Modal
const orderFoodBtn = document.querySelector(".services__card-food .services__btn");
const modalOverlayFood = document.getElementById("modal-overlay-food");
const closeBtnFood = document.getElementById("close-btn-food");
const orderNowBtnFood = document.querySelector("#modal-overlay-food .book-now-btn");
const queryNowBtnFood = document.querySelectorAll("#modal-overlay-food .book-now-btn")[1];

// Boarding Modal Functions
// bookBoardingBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   // modalOverlay.style.display = "flex";
//   // document.body.style.overflow = "hidden";
// });

// closeBtn.addEventListener("click", () => {
//   modalOverlay.style.display = "none";
//   document.body.style.overflow = "auto";
// });

bookNowBtn.addEventListener("click", () => {
  window.location.href = "https://wa.link/tssicm";
});

queryNowBtn.addEventListener("click", () => {
  window.location.href = "tel:+917386930476";
});

// Grooming Modal Functions
// bookGroomingBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   modalOverlayGrooming.style.display = "flex";
//   // document.body.style.overflow = "hidden";
// });

// closeBtnGrooming.addEventListener("click", () => {
//   modalOverlayGrooming.style.display = "none";
//   document.body.style.overflow = "auto";
// });

bookNowBtnGrooming.addEventListener("click", () => {
  window.location.href = "https://wa.link/tssicm";
});

queryNowBtnGrooming.addEventListener("click", () => {
  window.location.href = "tel:+917386930476";
});

// Food Delivery Modal Functions
// orderFoodBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   modalOverlayFood.style.display = "flex";
//   // document.body.style.overflow = "hidden";
// });

// closeBtnFood.addEventListener("click", () => {
//   modalOverlayFood.style.display = "none";
//   document.body.style.overflow = "auto";
// });

orderNowBtnFood.addEventListener("click", () => {
  window.location.href = "https://wa.link/tssicm";
});

queryNowBtnFood.addEventListener("click", () => {  // Fixed this line - changed from queryNowBtnGrooming
  window.location.href = "tel:+917386930476";
});

// Close modals when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
  if (e.target === modalOverlayGrooming) {
    modalOverlayGrooming.style.display = "none";
    document.body.style.overflow = "auto";
  }
  if (e.target === modalOverlayFood) {
    modalOverlayFood.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
const writeReviewBtn = document.getElementById("writeReviewBtn");
const reviewForm = document.getElementById("reviewForm");
const starRating = document.querySelectorAll("#starRating span");
const reviewContainer = document.getElementById("reviewContainer");
const reviewCardsContainer = document.querySelector(".review-cards-container");

let selectedRating = 0;
let currentReviewBatch = 0;
const reviewsPerBatch = 3;
let reviewCards = [];
let reviewDots = [];
let reviewRotationTimer = null;
const reviewRotationDelay = 2500;

function initializeReviews() {
  reviewContainer.style.position = 'relative';
  reviewContainer.style.left = '0';
  reviewCards = Array.from(document.querySelectorAll('.review-card'));
  renderReviewDots();
  showReviewBatch(0);
  startReviewAutoRotation();
  setupEventListeners();
}

function getReviewBatchCount() {
  return Math.max(1, Math.ceil(reviewCards.length / reviewsPerBatch));
}

function renderReviewDots() {
  if (!reviewCardsContainer) {
    return;
  }

  const existingDots = reviewCardsContainer.querySelector('.review-dots');
  if (existingDots) {
    existingDots.remove();
  }

  const dotsWrapper = document.createElement('div');
  dotsWrapper.className = 'review-dots';

  reviewDots = [];
  const batchCount = getReviewBatchCount();

  for (let index = 0; index < batchCount; index += 1) {
    const dotButton = document.createElement('button');
    dotButton.type = 'button';
    dotButton.className = 'review-dot';
    dotButton.setAttribute('aria-label', `Show review batch ${index + 1}`);
    dotButton.addEventListener('click', () => {
      showReviewBatch(index);
      resetReviewAutoRotation();
    });
    reviewDots.push(dotButton);
    dotsWrapper.appendChild(dotButton);
  }

  reviewCardsContainer.appendChild(dotsWrapper);
}

function showReviewBatch(batchIndex) {
  const batchCount = getReviewBatchCount();
  currentReviewBatch = Math.min(Math.max(batchIndex, 0), batchCount - 1);
  const startIndex = currentReviewBatch * reviewsPerBatch;
  const endIndex = startIndex + reviewsPerBatch;

  reviewCards.forEach((card, index) => {
    card.style.display = index >= startIndex && index < endIndex ? 'block' : 'none';
  });

  reviewDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentReviewBatch);
  });
}

function startReviewAutoRotation() {
  if (getReviewBatchCount() <= 1) {
    return;
  }

  reviewContainer.addEventListener('mouseenter', pauseReviewAutoRotation);
  reviewContainer.addEventListener('mouseleave', resumeReviewAutoRotation);
  scheduleNextReviewBatch();
}

function scheduleNextReviewBatch() {
  clearTimeout(reviewRotationTimer);

  if (getReviewBatchCount() <= 1) {
    return;
  }

  reviewRotationTimer = setTimeout(() => {
    showReviewBatch((currentReviewBatch + 1) % getReviewBatchCount());
    scheduleNextReviewBatch();
  }, reviewRotationDelay);
}

function resetReviewAutoRotation() {
  if (getReviewBatchCount() <= 1) {
    return;
  }

  scheduleNextReviewBatch();
}

function pauseReviewAutoRotation() {
  clearTimeout(reviewRotationTimer);
}

function resumeReviewAutoRotation() {
  scheduleNextReviewBatch();
}
// Setup all event listeners
function setupEventListeners() {
  // Write Review button
  writeReviewBtn.addEventListener("click", () => {
      reviewForm.style.display = "block";
      writeReviewBtn.style.display = "none";
  });

  // Star rating
  starRating.forEach((star) => {
      star.addEventListener("mouseover", () => highlightStars(star.dataset.value));
      star.addEventListener("mouseout", () => highlightStars(selectedRating));
      star.addEventListener("click", () => {
          selectedRating = star.dataset.value;
          highlightStars(selectedRating);
      });
  });

  // Form submission
  reviewForm.addEventListener("submit", handleReviewSubmission);

  // Close button
  setupCloseButton();
}

// Handle form submission
function handleReviewSubmission(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();

  if (selectedRating === 0) {
      alert("Please select a star rating!");
      return;
  }

  const newReview = {
      name: name,
      comment: comment,
      rating: selectedRating,
      timestamp: new Date().toISOString()
  };

  addReviewToDOM(newReview);
  saveReviewToLocalStorage(newReview);

  // Reset form
  reviewForm.reset();
  selectedRating = 0;
  highlightStars(0);
  reviewForm.style.display = "none";
  writeReviewBtn.style.display = "block";
}

// Setup close button for form
function setupCloseButton() {
  const closeFormButton = document.createElement("span");
  closeFormButton.innerHTML = "&times;";
  closeFormButton.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      color: #ff5733;
      font-size: 24px;
      cursor: pointer;
      transition: color 0.3s ease;
  `;

  closeFormButton.addEventListener("mouseenter", () => {
      closeFormButton.style.color = "#ff8c66";
  });

  closeFormButton.addEventListener("mouseleave", () => {
      closeFormButton.style.color = "#ff5733";
  });

  closeFormButton.addEventListener("click", () => {
      reviewForm.style.display = "none";
      writeReviewBtn.style.display = "block";
  });

  reviewForm.appendChild(closeFormButton);
}

// Highlight star rating
function highlightStars(rating) {
  starRating.forEach((star) => {
      star.classList.toggle("selected", star.dataset.value <= rating);
  });
}

// Format timestamp
function formatTime(timestamp) {
  const currentTime = new Date();
  const reviewTime = new Date(timestamp);
  const difference = Math.floor((currentTime - reviewTime) / 1000);

  if (difference < 60) return `${difference} second${difference === 1 ? '' : 's'} ago`;
  if (difference < 3600) return `${Math.floor(difference / 60)} minute${Math.floor(difference / 60) === 1 ? '' : 's'} ago`;
  if (difference < 86400) return `${Math.floor(difference / 3600)} hour${Math.floor(difference / 3600) === 1 ? '' : 's'} ago`;
  if (difference < 2592000) return `${Math.floor(difference / 86400)} day${Math.floor(difference / 86400) === 1 ? '' : 's'} ago`;
  if (difference < 31536000) return `${Math.floor(difference / 2592000)} month${Math.floor(difference / 2592000) === 1 ? '' : 's'} ago`;
  return `${Math.floor(difference / 31536000)} year${Math.floor(difference / 31536000) === 1 ? '' : 's'} ago`;
}

// Add review to DOM
function addReviewToDOM(review) {
  const formattedTime = formatTime(review.timestamp);
  const reviewHTML = `
      <div class="review-card">
          <div class="stars">${"★".repeat(review.rating)}</div>
      <p class="review-text">${review.comment}</p>
      <div class="review-meta">
        <img class="reviewer-avatar" src="assets/food.jpg" alt="Reviewer avatar">
        <div class="reviewer-details">
          <span class="reviewer">${review.name}</span>
          <span class="review-date">${formattedTime}</span>
        </div>
          </div>
      </div>
  `;
  reviewContainer.insertAdjacentHTML("beforeend", reviewHTML);
  reviewCards = Array.from(document.querySelectorAll('.review-card'));
  renderReviewDots();
  showReviewBatch(currentReviewBatch);
}

// Save review to localStorage
function saveReviewToLocalStorage(review) {
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  savedReviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(savedReviews));
}

// Initialize on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  savedReviews.forEach(addReviewToDOM);
  initializeReviews();
});
// Function to clear all reviews
// function clearAllReviews() {
//   localStorage.removeItem("reviews");
//   alert("All reviews have been deleted!");
//   window.location.reload(); // Refresh the page to clear the reviews on the screen
// }
// const clearReviewsBtn = document.getElementById("clearReviewsBtn");
// clearReviewsBtn.addEventListener("click", clearAllReviews);


// Get the header card buttons
const headerFoodCard = document.querySelector('.header__card:nth-child(1)');
const headerBoardingCard = document.querySelector('.header__card:nth-child(2)');
const headerGroomingCard = document.querySelector('.header__card:nth-child(3)');

// Get the service cards
const foodServiceCard = document.querySelector('.services__card-food');
const boardingServiceCard = document.querySelector('.services__card-boarding');
const groomingServiceCard = document.querySelector('.services__card-grooming');

// Function to scroll to element with offset for the fixed header
function scrollToElement(element) {
    const headerHeight = document.querySelector('nav').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: elementPosition - headerHeight - 20, // 20px additional offset for spacing
        behavior: 'smooth'
    });
}

// Function to simulate hover effect
function simulateHover(element) {
    // First remove hover simulation from all cards
    [foodServiceCard, boardingServiceCard, groomingServiceCard].forEach(card => {
        card.classList.remove('simulated-hover');
        // Remove any inline styles that might have been added
        card.style.transform = '';
        card.querySelector('.services__card-content').style.transform = '';
        card.querySelector('.services__icon').style.transform = '';
        card.querySelector('.services__icon').style.opacity = '';
        card.querySelector('h4').style.transform = '';
        card.querySelector('h4').style.opacity = '';
        card.querySelector('p').style.transform = '';
        card.querySelector('p').style.opacity = '';
        card.querySelector('.services__btn').style.transform = '';
        card.querySelector('.services__btn').style.opacity = '';
    });

    // Add hover simulation to selected card
    element.classList.add('simulated-hover');
    // Apply hover styles programmatically
    element.style.transform = 'translateY(-10px)';
    element.querySelector('.services__card-content').style.transform = 'translateY(0)';
    element.querySelector('.services__icon').style.transform = 'translateY(0)';
    element.querySelector('.services__icon').style.opacity = '1';
    element.querySelector('h4').style.transform = 'translateY(0)';
    element.querySelector('h4').style.opacity = '1';
    element.querySelector('p').style.transform = 'translateY(0)';
    element.querySelector('p').style.opacity = '1';
    element.querySelector('.services__btn').style.transform = 'translateY(0)';
    element.querySelector('.services__btn').style.opacity = '1';

    // Remove the simulation after 3 seconds
    setTimeout(() => {
        element.classList.remove('simulated-hover');
        // Remove inline styles
        element.style.transform = '';
        element.querySelector('.services__card-content').style.transform = '';
        element.querySelector('.services__icon').style.transform = '';
        element.querySelector('.services__icon').style.opacity = '';
        element.querySelector('h4').style.transform = '';
        element.querySelector('h4').style.opacity = '';
        element.querySelector('p').style.transform = '';
        element.querySelector('p').style.opacity = '';
        element.querySelector('.services__btn').style.transform = '';
        element.querySelector('.services__btn').style.opacity = '';
    }, 5000);
}

// Add click event listeners to header cards only when cards exist.
if (
  headerFoodCard &&
  headerBoardingCard &&
  headerGroomingCard &&
  foodServiceCard &&
  boardingServiceCard &&
  groomingServiceCard
) {
  headerFoodCard.addEventListener('click', () => {
    scrollToElement(foodServiceCard);
    simulateHover(foodServiceCard);
  });

  headerBoardingCard.addEventListener('click', () => {
    scrollToElement(boardingServiceCard);
    simulateHover(boardingServiceCard);
  });

  headerGroomingCard.addEventListener('click', () => {
    scrollToElement(groomingServiceCard);
    simulateHover(groomingServiceCard);
  });
}

// Add this CSS to your stylesheet
const style = document.createElement('style');
style.textContent = `
    .simulated-hover::before {
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.8)
        );
    }
`;
document.head.appendChild(style);

const faqSets = [
  [
    {
      question: "What amenities are included in your pet boarding services?",
      answer: "We provide comfortable rooms with climate control, daily meals, and playtime sessions. Your pet gets 24/7 care, regular exercise, and cozy bedding. You can check on your pet anytime through our webcams."
    },
    {
      question: "What specialized grooming services do you offer for different breeds?",
      answer: "We offer special haircuts for each breed, gentle bathing, nail trimming, and ear cleaning. Our groomers know how to handle all breeds and coat types. We use gentle products that are safe for your pet's skin."
    },
    {
      question: "What types of pet food do you deliver and how fresh is it?",
      answer: "We deliver high-quality dry food, wet food, and special diet options. All food is fresh and stored properly. We can set up regular deliveries based on when your pet needs food."
    },
    {
      question: "How often do boarding pets get exercise and outdoor time?",
      answer: "We take pets out 3-4 times every day for exercise and play. Each pet gets personal attention and activities they enjoy. All playtime is watched by our trained staff to keep pets safe."
    }
  ],
  [
    {
      question: "Do you offer mobile grooming services or only in-store?",
      answer: "We offer both in-store and mobile grooming. Our mobile van has all the same equipment as our store. You can choose what's easier for you - we come to your home or you visit our shop."
    },
    {
      question: "Can you accommodate special dietary requirements in food delivery?",
      answer: "Yes, we can deliver food for pets with special needs, allergies, or health conditions. We offer grain-free options and special diet foods. We'll help you find the right food for your pet."
    },
    {
      question: "What medical supervision is available during boarding?",
      answer: "We have vets on call 24/7 and keep health records for every pet. We can give medications and watch any health issues. Our staff knows pet first aid and how to handle emergencies."
    },
    {
      question: "What safety measures do you take during grooming sessions?",
      answer: "We use non-slip mats and gentle restraints to keep pets safe. We check each pet's health before grooming and use clean tools. Our groomers are trained in safe pet handling."
    },
    {
      question: "What is your food quality assurance process?",
      answer: "We check all food carefully and store it at the right temperature. We track when food expires and keep frozen items properly stored. We make sure everything stays fresh and safe."
    }
  ]
];

const faqStyles = document.createElement('style');
faqStyles.textContent = `
.faq-card {
  transition: all 0.3s ease-in-out;
}

.faq-header {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.faq-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out, opacity 0.5s ease-in-out;
  padding: 0 1rem;
  opacity: 0;
}

.faq-card.active .faq-content {
  max-height: 320px;
  padding: 1rem;
  opacity: 1;
}

.faq-icon {
  transition: transform 0.3s ease;
}

.faq-card.active .faq-icon {
  transform: rotate(180deg);
}

.faq-grid {
  transition: opacity 0.3s ease-in-out;
}

.fade-out {
  opacity: 0;
}

.fade-in {
  opacity: 1;
}
`;
document.head.appendChild(faqStyles);

function updateFAQContent(questionSet) {
  const faqGrid = document.querySelector('.faq-grid');
  if (!faqGrid) return;

  faqGrid.classList.add('fade-out');

  setTimeout(() => {
    faqGrid.innerHTML = questionSet.map((qa) => `
      <div class="faq-card">
        <div class="faq-header">
          <h4 class="faq-question">${qa.question}</h4>
          <span class="faq-icon"><i class="ri-arrow-down-s-line"></i></span>
        </div>
        <div class="faq-content">
          <p>${qa.answer}</p>
        </div>
      </div>
    `).join('');

    faqGrid.classList.remove('fade-out');
    faqGrid.classList.add('fade-in');
  }, 300);
}

let currentSetIndex = 0;

function rotateFAQs() {
  currentSetIndex = (currentSetIndex + 1) % faqSets.length;
  updateFAQContent(faqSets[currentSetIndex]);
}

const faqGridElement = document.querySelector('.faq-grid');
if (faqGridElement) {
  updateFAQContent(faqSets[0]);
  setInterval(rotateFAQs, 30000);

  faqGridElement.addEventListener('click', (e) => {
    const faqCard = e.target.closest('.faq-card');
    const faqHeader = e.target.closest('.faq-header');
    if (!faqCard || !faqHeader) return;

    const allCards = faqGridElement.querySelectorAll('.faq-card');
    allCards.forEach((card) => {
      if (card !== faqCard) {
        card.classList.remove('active');
      }
    });

    faqCard.classList.toggle('active');
  });
}

// Locations 
const hyderabadLocations = [
  { name: 'LB Nagar' },
  { name: 'Kothapet' },
  { name: 'Malakpet' },
  { name: 'Uppal' },
  { name: 'Amberpet' },
  { name: 'Bahadurpura' },
  { name: 'Himayathnagar' },
  { name: 'Karmanghat' },
  { name: 'Tarnaka' },
  { name: 'Vanasthalipuram' }
];

const locationPinSVG = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 23.75C12.0625 21.5833 9.87 19.4792 8.4225 17.4375C6.975 15.3958 6.25083 13.3958 6.25 11.4375C6.25 8.83333 7.0625 6.69292 8.6875 5.01625C10.3125 3.33958 12.4167 2.50083 15 2.5C17.5833 2.49917 19.6875 3.33792 21.3125 5.01625C22.9375 6.69458 23.75 8.835 23.75 11.4375C23.75 13.3958 23.0263 15.3958 21.5788 17.4375C20.1313 19.4792 17.9383 21.5833 15 23.75ZM15 13.75C15.6875 13.75 16.2762 13.5054 16.7663 13.0163C17.2563 12.5271 17.5008 11.9383 17.5 11.25C17.4992 10.5617 17.2546 9.97333 16.7663 9.485C16.2779 8.99667 15.6892 8.75167 15 8.75C14.3108 8.74833 13.7225 8.99333 13.235 9.485C12.7475 9.97667 12.5025 10.565 12.5 11.25C12.4975 11.935 12.7425 12.5238 13.235 13.0163C13.7275 13.5088 14.3158 13.7533 15 13.75ZM6.25 27.5V25H23.75V27.5H6.25Z" fill="#FFCF02"/>
</svg>`;

function renderLocations() {
  const locationsContainer = document.querySelector('.locations');
  if (!locationsContainer) return;

  const locationsHTML = hyderabadLocations.map((location, index) => `
    <div class="location-card" style="animation-delay: ${index * 0.1}s;">
      <div class="location-icon">
        ${locationPinSVG}
      </div>
      <h3 class="location-name">${location.name}</h3>
    </div>
  `).join('');

  locationsContainer.innerHTML = locationsHTML;
  setupLocationsCarousel();
}

function setupLocationsCarousel() {
  const locationsContainer = document.querySelector('.locations');
  if (!locationsContainer) return;

  const cards = Array.from(locationsContainer.querySelectorAll('.location-card'));
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    locationsContainer.appendChild(clone);
  });

  locationsContainer.style.animation = 'slideLocations 30s linear infinite';
}

const locationsStyle = document.createElement('style');
locationsStyle.textContent = `
  @keyframes slideLocations {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;
document.head.appendChild(locationsStyle);

document.addEventListener('DOMContentLoaded', () => {
  renderLocations();
});