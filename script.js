// ===== Sidebar Toggle (Mobile) =====
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

// Open sidebar when hamburger is clicked
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("show");
  menuBtn.style.display = "none"; // hide hamburger
});

// Close sidebar when close button is clicked
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
  menuBtn.style.display = "block"; // show hamburger again
});

// Close sidebar when a nav link is clicked
const sidebarLinks = document.querySelectorAll("#sidebar .nav-links a");
sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("show");
    menuBtn.style.display = "block";
  });
});

  const brain = document.getElementById('brainImg');
  const skills = ['skill1', 'skill2', 'skill3', 'skill4'].map(id => document.getElementById(id));
  let isBurst = false;

  brain.addEventListener('click', () => {
    isBurst = !isBurst;
    skills.forEach(skill => {
      if (isBurst) {
        skill.classList.add('show');
      } else {
        skill.classList.remove('show');
      }
    });
  });



// ===== Typewriter Effect =====
const text = "HELLO I'M EUSAN MAHATAB";
let i = 0;
const speed = 100;
const typewriter = document.getElementById("typewriter");

function typeWriter() {
  if (i < text.length) {
    typewriter.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);

document.querySelectorAll('.accordion-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.classList.toggle('open');
  });
});
