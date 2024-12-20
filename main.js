document.addEventListener('DOMContentLoaded', () => {
  const cursorEffect = document.querySelector('.cursor-effect');
  const menuBtn = document.getElementById("menu-btn");
  const navContent = document.querySelector(".nav__content");
  const menuBtnIcon = menuBtn.querySelector("i");
  const navLinks = navContent.querySelector(".nav__links");
  const faq = document.querySelector(".faq-grid");

  document.addEventListener('mousemove', (e) => {
    cursorEffect.style.left = `${e.clientX}px`;
    cursorEffect.style.top = `${e.clientY}px`;
  });

  menuBtn.addEventListener("click", () => {
    navContent.classList.toggle("open");
    menuBtnIcon.setAttribute("class", navContent.classList.contains("open") ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === 'A') {
      navContent.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
  });

  // Enhanced FAQ Accordion
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

  window.addEventListener('scroll', () => {
    const footer = document.querySelector('footer');
    const footerPosition = footer.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (footerPosition < screenHeight) {
      footer.classList.add('animate');
    }
  });

  // Floating WhatsApp Button
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
  }

  createWhatsAppButton();
});

 // handle modal functionality
 const bookBoardingBtn = document.querySelector(".services__card-boarding .services__btn");
 const modalOverlay = document.getElementById("modal-overlay");
 const bookNowBtn = document.getElementById("book-now-btn");
 const queryNowBtn = document.querySelectorAll("#book-now-btn")[1];
 const closeBtn = document.getElementById("close-btn");

 bookBoardingBtn.addEventListener("click", (e) => {
   e.preventDefault();
   modalOverlay.style.display = "flex";
 });

 bookNowBtn.addEventListener("click", () => {
  window.location.href = "https://wa.link/tssicm";
 });

 queryNowBtn.addEventListener("click", () => {
  window.location.href = "tel:+917386930476";
});

 modalOverlay.addEventListener("click", (e) => {
   if (e.target === modalOverlay) {
     modalOverlay.style.display = "none";
   }
 });

bookNowBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
  document.body.style.overflow = "hidden"; 
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
  document.body.style.overflow = "auto"; 
});

const writeReviewBtn = document.getElementById("writeReviewBtn");
const reviewForm = document.getElementById("reviewForm");
const starRating = document.querySelectorAll("#starRating span");
const reviewContainer = document.getElementById("reviewContainer");

let selectedRating = 0;
let currentIndex = 0; 
const reviewsPerPage = 1; 

writeReviewBtn.addEventListener("click", () => {
  reviewForm.style.display = "block";
  writeReviewBtn.style.display = "none";
});

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

reviewForm.style.position = "relative"; 
reviewForm.appendChild(closeFormButton);

// Star Rating Logic
starRating.forEach((star) => {
  star.addEventListener("mouseover", () => highlightStars(star.dataset.value));
  star.addEventListener("mouseout", () => highlightStars(selectedRating));
  star.addEventListener("click", () => {
    selectedRating = star.dataset.value;
    highlightStars(selectedRating);
  });
});

function highlightStars(rating) {
  starRating.forEach((star) => {
    star.classList.toggle("selected", star.dataset.value <= rating);
  });
}

function updateReviewsDisplay() {
  const reviewCards = document.querySelectorAll('.review-card');
  const totalReviews = reviewCards.length;
  const offset = currentIndex * reviewsPerPage;
  const maxOffset = Math.ceil(totalReviews / reviewsPerPage) - 1; 
  if (currentIndex > maxOffset) {
    currentIndex = maxOffset;
  }

  // Apply the scroll position
  reviewContainer.style.transform = `translateX(-${offset * 320}px)`; 

  // Disable right arrow if no more reviews to scroll to
  const rightArrow = document.querySelector('.right');
  const leftArrow = document.querySelector('.left');

  // Disable right arrow if at the last review
  rightArrow.disabled = currentIndex >= maxOffset;
  leftArrow.disabled = currentIndex === 0; 

  // Adjust cursor styles to show arrow is disabled
  rightArrow.style.cursor = rightArrow.disabled ? 'not-allowed' : 'pointer';
  leftArrow.style.cursor = leftArrow.disabled ? 'not-allowed' : 'pointer';
}


document.querySelector('.left').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateReviewsDisplay();
  }
});

document.querySelector('.right').addEventListener('click', () => {
  const reviewCards = document.querySelectorAll('.review-card');
  const totalReviews = reviewCards.length;
  const maxOffset = Math.ceil(totalReviews / reviewsPerPage) - 1;

  if (currentIndex < maxOffset) {
    currentIndex++;
    updateReviewsDisplay();
  }
});

// Time formatting function
function formatTime(timestamp) {
  const currentTime = new Date();
  const reviewTime = new Date(timestamp);
  const difference = Math.floor((currentTime - reviewTime) / 1000); 

  if (difference < 60) {
    return `${difference} second${difference === 1 ? '' : 's'} ago`;
  } else if (difference < 3600) {
    return `${Math.floor(difference / 60)} minute${Math.floor(difference / 60) === 1 ? '' : 's'} ago`;
  } else if (difference < 86400) {
    return `${Math.floor(difference / 3600)} hour${Math.floor(difference / 3600) === 1 ? '' : 's'} ago`;
  } else if (difference < 2592000) {
    return `${Math.floor(difference / 86400)} day${Math.floor(difference / 86400) === 1 ? '' : 's'} ago`;
  } else if (difference < 31536000) {
    return `${Math.floor(difference / 2592000)} month${Math.floor(difference / 2592000) === 1 ? '' : 's'} ago`;
  } else {
    return `${Math.floor(difference / 31536000)} year${Math.floor(difference / 31536000) === 1 ? '' : 's'} ago`;
  }
}

// Add review to DOM and update time
function addReviewToDOM(review) {
  const formattedTime = formatTime(review.timestamp);
  const reviewHTML = `
    <div class="review-card">
      <div class="stars">${"&#9733;".repeat(review.rating)}</div>
      <p>${review.comment}</p>
      <div class="reviewer-info">
        <span class="reviewer">${review.name}</span> | <span>${formattedTime}</span>
      </div>
    </div>
  `;
  reviewContainer.insertAdjacentHTML("beforeend", reviewHTML);

  updateReviewsDisplay();
}


// When submitting a review, include a timestamp
reviewForm.addEventListener("submit", function (e) {
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
    timestamp: new Date().toISOString(), 
  };

  // Add review to DOM and localStorage
  addReviewToDOM(newReview);
  saveReviewToLocalStorage(newReview);

  // Reset form and hide
  reviewForm.reset();
  selectedRating = 0;
  highlightStars(0);
  reviewForm.style.display = "none";
  writeReviewBtn.style.display = "block";
});

// Save review to localStorage
function saveReviewToLocalStorage(review) {
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  savedReviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(savedReviews));
}

// Load reviews from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  savedReviews.forEach(addReviewToDOM);
  updateReviewsDisplay();
});

// Function to clear all reviews
// function clearAllReviews() {
//   localStorage.removeItem("reviews");
//   alert("All reviews have been deleted!");
//   window.location.reload(); // Refresh the page to clear the reviews on the screen
// }
// const clearReviewsBtn = document.getElementById("clearReviewsBtn");
// clearReviewsBtn.addEventListener("click", clearAllReviews);
