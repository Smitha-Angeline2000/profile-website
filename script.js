// ======================================
// PORTFOLIO WEBSITE SCRIPT
// ======================================

console.log("Portfolio Website Loaded");

// ======================================
// ACTIVE NAVBAR LINK
// ======================================

const navLinks = document.querySelectorAll("nav ul li a");

const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {

  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {

    link.style.color = "#22d3ee";
    link.style.fontWeight = "bold";

  }

});

// ======================================
// SIMPLE FADE-IN ANIMATION
// ======================================

const cards = document.querySelectorAll(".card, .project-card");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0.1
});

cards.forEach(card => {
  observer.observe(card);
});

// ======================================
// SCROLL TO TOP BUTTON
// ======================================

const scrollButton = document.createElement("button");

scrollButton.innerText = "↑";

scrollButton.id = "scrollTopBtn";

document.body.appendChild(scrollButton);

scrollButton.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    scrollButton.style.display = "block";

  } else {

    scrollButton.style.display = "none";

  }

});

// ======================================
// HERO TYPING EFFECT
// ======================================

const heroTitle = document.querySelector(".hero-text h2");

if (heroTitle) {

  const text = "Biomedical Engineering Student";

  heroTitle.textContent = "";

  let index = 0;

  function typeEffect() {

    if (index < text.length) {

      heroTitle.textContent += text[index];

      index++;

      setTimeout(typeEffect, 70);

    }

  }

  typeEffect();

}

// ======================================
// PROFILE GLOW FOLLOW EFFECT
// ======================================

const heroImage = document.querySelector(".hero-image");
const glow = document.querySelector(".profile-glow");

if (heroImage && glow) {

  heroImage.addEventListener("mousemove", (e) => {

    const rect = heroImage.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) * 0.15;
    const moveY = (y - rect.height / 2) * 0.15;

    glow.style.transform =
      `translate(${moveX}px, ${moveY}px)`;

  });

  heroImage.addEventListener("mouseleave", () => {

    glow.style.transform =
      `translate(0px, 0px)`;

  });

}

