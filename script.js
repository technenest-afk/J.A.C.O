// Navegación suave y resaltado simple del enlace activo.
const links = [...document.querySelectorAll("nav a")];
const sections = [...document.querySelectorAll("main > section")];

const updateActive = () => {
  const y = window.scrollY + 120;
  let current = "inicio";
  for (const section of sections) {
    if (y >= section.offsetTop) current = section.id;
  }
  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
};

window.addEventListener("scroll", updateActive, {passive:true});
updateActive();
