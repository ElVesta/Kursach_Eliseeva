document.addEventListener("DOMContentLoaded", () => {
  let contactForm = document.querySelector(".contact-section__form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let email = document.querySelector("#email").value;
      if (!email.includes("@")) {
        alert("Введите корректный email!");
      } else {
        alert("Ваши данные отправлены!");
        contactForm.reset(); 
      }
    });
  }

document.querySelectorAll(".skills__link, .all-posts__view-all").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => btn.style.transform = "scale(1)", 150);
  });
});

let viewAllBtn = document.getElementById("viewAllBtn");
let postsContainer = document.getElementById("postsContainer");
if (viewAllBtn && postsContainer) {
  let newPosts = [
    { date: "Sep 10, 2025", title: "New course on advanced writing techniques launched." },
    { date: "Oct 5, 2025", title: "Interview with our top language tutor." },
    { date: "Nov 12, 2025", title: "Tips for mastering pronunciation in 30 days." }
  ];
  viewAllBtn.addEventListener("click", () => {
    newPosts.forEach(post => {
      let postArticle = document.createElement("article");
      postArticle.className = "post-card";
      postArticle.innerHTML = `
        <time class="post-card__datetime">By John Doe | ${post.date}</time>
        <h3 class="post-card__title">${post.title}</h3>
      `;
      postsContainer.appendChild(postArticle);
    });
    viewAllBtn.textContent = "All Loaded";
    viewAllBtn.disabled = true;
    viewAllBtn.style.opacity = "0.6";
    viewAllBtn.style.cursor = "default";
  });
}
document.querySelectorAll('.nav__link .link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      let targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      let targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});