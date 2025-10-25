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

  // Enhanced FAQ Section
  const faq = document.querySelector(".faq-grid");

  if (faq) {
    faq.addEventListener("click", (e) => {
      const faqCard = e.target.closest('.faq-card');
      if (faqCard && (
        e.target.classList.contains('faq-question') ||
        e.target.classList.contains('faq-icon')
      )) {
        faqCard.classList.toggle('active');
        Array.from(faq.children)
          .filter(card => card !== faqCard)
          .forEach(card => card.classList.remove('active'));
      }
    });
  }

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

let selectedRating = 0;
let isHovered = false;
let scrollPosition = 0;
let animationFrame;

// Initialize the review section
function initializeReviews() {
    cloneReviews();
    initScrollAnimation();
    setupEventListeners();
}

// Clone reviews for infinite scroll effect
function cloneReviews() {
    const originalReviews = document.querySelectorAll('.review-card');
    originalReviews.forEach(review => {
        const clone = review.cloneNode(true);
        reviewContainer.appendChild(clone);
    });
}

// Setup scroll animation
function initScrollAnimation() {
    reviewContainer.style.position = 'relative';
    reviewContainer.style.transition = 'left 0.5s ease-out';
    
    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            isHovered = true;
            highlightReview(card);
            pauseScroll();
        });
        
        card.addEventListener('mouseleave', () => {
            isHovered = false;
            unhighlightReview(card);
            resumeScroll();
        });
    });
    
    startScroll();
}

// Highlight review card on hover
function highlightReview(card) {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    card.style.zIndex = '1';
}

// Remove highlight from review card
function unhighlightReview(card) {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
    card.style.zIndex = '0';
}

// Start scrolling animation
function startScroll() {
    function scroll() {
        if (!isHovered) {
            scrollPosition -= 0.5;
            const firstCard = document.querySelector('.review-card');
            const cardWidth = firstCard.offsetWidth + parseInt(getComputedStyle(firstCard).marginRight);
            const totalWidth = cardWidth * (document.querySelectorAll('.review-card').length / 2);
            
            if (Math.abs(scrollPosition) >= totalWidth) {
                scrollPosition = 0;
            }
            
            reviewContainer.style.left = `${scrollPosition}px`;
        }
        animationFrame = requestAnimationFrame(scroll);
    }
    
    animationFrame = requestAnimationFrame(scroll);
}

// Pause scrolling
function pauseScroll() {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }
}

// Resume scrolling
function resumeScroll() {
    startScroll();
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
          <p>${review.comment}</p>
          <div class="reviewer-info">
              <span class="reviewer">${review.name}</span> | <span>${formattedTime}</span>
          </div>
      </div>
  `;
  reviewContainer.insertAdjacentHTML("beforeend", reviewHTML);
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

// Add click event listeners to header cards
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
  // Set 1
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
    }
  ],
  // Set 2
  [
    {
      question: "How often do boarding pets get exercise and outdoor time?",
      answer: "We take pets out 3-4 times every day for exercise and play. Each pet gets personal attention and activities they enjoy. All playtime is watched by our trained staff to keep pets safe."
    },
    {
      question: "Do you offer mobile grooming services or only in-store?",
      answer: "We offer both in-store and mobile grooming. Our mobile van has all the same equipment as our store. You can choose what's easier for you - we come to your home or you visit our shop."
    },
    {
      question: "Can you accommodate special dietary requirements in food delivery?",
      answer: "Yes, we can deliver food for pets with special needs, allergies, or health conditions. We offer grain-free options and special diet foods. We'll help you find the right food for your pet."
    }
  ],
  // Set 3
  [
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
// Add this CSS to your stylesheet
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
  transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
  padding: 0 1rem;
}

.faq-card.active .faq-content {
  max-height: 300px;
  padding: 1rem;
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
// Function to update FAQ content
function updateFAQContent(questionSet) {
  const faqGrid = document.querySelector('.faq-grid');
  const faqCards = faqGrid.querySelectorAll('.faq-card');

  // Add fade out effect
  faqGrid.classList.add('fade-out');

  setTimeout(() => {
    // Update content
    questionSet.forEach((qa, index) => {
      const card = faqCards[index];
      const question = card.querySelector('.faq-question');
      const answer = card.querySelector('.faq-content p');
      
      question.textContent = qa.question;
      answer.textContent = qa.answer;
    });

    // Remove any active states
    faqCards.forEach(card => card.classList.remove('active'));

    // Add fade in effect
    faqGrid.classList.remove('fade-out');
    faqGrid.classList.add('fade-in');
  }, 300);
}

// Initialize rotation
let currentSetIndex = 0;

function rotateFAQs() {
  currentSetIndex = (currentSetIndex + 1) % faqSets.length;
  updateFAQContent(faqSets[currentSetIndex]);
}

// Set up initial content
updateFAQContent(faqSets[0]);

// Start rotation
setInterval(rotateFAQs, 30000); // Rotate every 30 seconds

// Enhanced click handler for FAQ cards
document.querySelector('.faq-grid').addEventListener('click', (e) => {
  const faqCard = e.target.closest('.faq-card');
  if (!faqCard) return;

  // Remove active class from all other cards with smooth transition
  const allCards = document.querySelectorAll('.faq-card');
  allCards.forEach(card => {
    if (card !== faqCard) {
      card.classList.remove('active');
    }
  });

  // Toggle active class on clicked card
  faqCard.classList.toggle('active');
});