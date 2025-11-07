// Smooth Scroll
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Year Update
document.getElementById("year").innerText = new Date().getFullYear();

// Affiliate Link
const affiliateLink = ""; // <-- Add your affiliate link here

function buyNow() {
  if (affiliateLink) {
    window.open(affiliateLink, "_blank");
  } else {
    alert("Affiliate link not set yet!");
  }
}

// Scroll Animations
const items = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

items.forEach((item) => observer.observe(item));
