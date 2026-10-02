// Small reveal animation — no libraries required.
const revealItems = document.querySelectorAll(".contact-card, .intro-card, .message-left, #contactForm");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item, index) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(30px)";
  item.style.transition =
    `opacity .8s ease ${index * .08}s, transform .8s cubic-bezier(.22,1,.36,1) ${index * .08}s`;
  revealObserver.observe(item);
});

// Contact form — opens the user's email client with the entered message.
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name");
  const email = data.get("email");
  const text = data.get("message");

  const subject = encodeURIComponent(`InnoveX enquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${text}`
  );

  window.location.href =
    `mailto:innovexcommunity@gmail.com?subject=${subject}&body=${body}`;

  message.textContent = "Opening your email app…";
});

// Activate elements after the browser has painted them.
requestAnimationFrame(() => {
  document.querySelectorAll(".visible").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
});

const observerFix = new MutationObserver(() => {
  document.querySelectorAll(".visible").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
});

observerFix.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["class"] });
