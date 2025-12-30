"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.querySelector(".contact-section__form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.querySelector("#email").value;

      if (!email.includes("@")) {
        alert("Введите корректный email!");
      } else {
        alert("Ваши данные отправлены!");
        contactForm.reset();
      }
    });
  }

  var viewAllBtn = document.getElementById("viewAllBtn");
  var postsContainer = document.getElementById("postsContainer");

  if (viewAllBtn && postsContainer) {
    var newPosts = [{
      date: "Sep 10, 2025",
      title: "New course on advanced writing techniques launched."
    }, {
      date: "Oct 5, 2025",
      title: "Interview with our top language tutor."
    }, {
      date: "Nov 12, 2025",
      title: "Tips for mastering pronunciation in 30 days."
    }];
    viewAllBtn.addEventListener("click", function () {
      newPosts.forEach(function (post) {
        var postArticle = document.createElement("article");
        postArticle.className = "post-card";
        postArticle.innerHTML = "\n        <time class=\"post-card__datetime\">By John Doe | ".concat(post.date, "</time>\n        <h3 class=\"post-card__title\">").concat(post.title, "</h3>\n      ");
        postsContainer.appendChild(postArticle);
      });
      viewAllBtn.textContent = "All Loaded";
      viewAllBtn.disabled = true;
      viewAllBtn.style.opacity = "0.6";
      viewAllBtn.style.cursor = "default";
    });
  }

  document.querySelectorAll('.nav__link .link[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});