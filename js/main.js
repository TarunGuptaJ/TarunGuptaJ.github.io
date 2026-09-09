// ========== Nav scroll state ==========
const nav = document.getElementById('nav');
const backToTop = document.getElementById('backToTop');

function onScroll() {
  const scrolled = window.scrollY > 20;
  nav.classList.toggle('scrolled', scrolled);
  backToTop.classList.toggle('visible', window.scrollY > 500);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== Mobile nav toggle ==========
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ========== Scroll reveal ==========
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

// ========== Footer year ==========
document.getElementById('year').textContent = new Date().getFullYear();

// ========== Hero terminal typing effect ==========
const terminalBody = document.getElementById('terminalBody');

const terminalLines = [
  { prompt: '$', text: 'whoami' },
  { output: 'tarun-gupta' },
  { prompt: '$', text: "cat role.txt" },
  { output: '[Your Title] — e.g. Software Engineer' },
  { prompt: '$', text: 'ls skills/' },
  { output: '[Skill]  [Skill]  [Skill]  [Skill]' },
];

let lineIndex = 0;
let charIndex = 0;

function typeNextLine() {
  if (lineIndex >= terminalLines.length) {
    const cursor = document.createElement('span');
    cursor.className = 'terminal-cursor';
    terminalBody.appendChild(cursor);
    return;
  }

  const line = terminalLines[lineIndex];

  if (line.output !== undefined) {
    const div = document.createElement('div');
    div.innerHTML = `<span class="t-dim">${line.output}</span>`;
    terminalBody.appendChild(div);
    lineIndex++;
    charIndex = 0;
    setTimeout(typeNextLine, 300);
    return;
  }

  if (charIndex === 0) {
    const div = document.createElement('div');
    div.innerHTML = `<span class="t-prompt">${line.prompt}</span> <span class="line-text"></span>`;
    terminalBody.appendChild(div);
  }

  const lineTextEl = terminalBody.lastElementChild.querySelector('.line-text');

  if (charIndex < line.text.length) {
    lineTextEl.textContent += line.text[charIndex];
    charIndex++;
    setTimeout(typeNextLine, 45);
  } else {
    lineIndex++;
    charIndex = 0;
    setTimeout(typeNextLine, 250);
  }
}

if (terminalBody) {
  setTimeout(typeNextLine, 500);
}
