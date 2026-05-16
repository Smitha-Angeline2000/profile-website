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

// ======================================
// MOBILE NAVIGATION
// ======================================

const menuToggle =
  document.querySelector(".menu-toggle");

const navMenu =
  document.querySelector("nav ul");

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

  });

}

// ======================================
// CONTACT FORM
// ======================================

const form =
  document.getElementById("contact-form");

const status =
  document.getElementById("form-status");

if (form) {

  form.addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = new FormData(form);

    try {

      const response = await fetch(form.action, {

        method: form.method,

        body: data,

        headers: {
          'Accept': 'application/json'
        }

      });

      if (response.ok) {

        status.innerHTML =
          "Message sent successfully.";

        status.style.color =
          "#60a5fa";

        form.reset();

      } else {

        status.innerHTML =
          "Something went wrong.";

        status.style.color =
          "#ef4444";

      }

    } catch(error) {

      status.innerHTML =
        "Network error.";

      status.style.color =
        "#ef4444";

    }

  });

}

// ======================================
// SCROLL REVEAL SYSTEM
// ======================================

const reveals =
  document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
  );

function revealOnScroll() {

  const windowHeight =
    window.innerHeight;

  reveals.forEach((element) => {

    const revealTop =
      element.getBoundingClientRect().top;

    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {

      element.classList.add("active");

    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();