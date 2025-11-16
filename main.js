/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  // strings : ["Programmer","Youtuber","Developer"],
  strings: ["Wachirawit Tanleng"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- EDUCATIONAL BOX -- */
sr.reveal(".section#educational .education-info", { delay: 100 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

(function () {
  // Project cards -> navigate to detail page
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const link = card.dataset.link || "#";
    // mouse click
    card.addEventListener("click", () => {
      if (link && link !== "#") window.location.href = link;
    });
    // keyboard support
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (link && link !== "#") window.location.href = link;
      }
    });
    card.setAttribute("tabindex", "0");
    card.style.cursor = "pointer";
  });
})();

(function () {
  // certificate read more toggle (auto hide cards > 8)
  const certSection = document.getElementById('certificate');
  const certGrid = document.getElementById('certificateGrid');
  const certToggle = document.getElementById('certToggle');

  if (certGrid && certSection && certToggle) {
    const cards = Array.from(certGrid.querySelectorAll('.cert-card'));
    const VISIBLE = 8; // จำนวนแรกที่ให้โชว์
    if (cards.length > VISIBLE) {
      // เพิ่ม class extra ให้การ์ดที่เกิน
      cards.forEach((card, i) => {
        if (i >= VISIBLE) card.classList.add('extra');
      });
      // แสดงปุ่ม Read more
      certToggle.style.display = 'inline-block';
      certToggle.addEventListener('click', () => {
        const expanded = certSection.classList.toggle('expanded');
        certToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        certToggle.textContent = expanded ? 'Show less' : 'Read more';
        if (expanded) certSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      // ไม่มีการ์ดเกิน 8 ก็ซ่อนปุ่ม
      certToggle.style.display = 'none';
    }
  }
})();

window.addEventListener("scroll", scrollActive);
