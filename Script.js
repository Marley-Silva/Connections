// Objeto com as traduções
const translations = {
    pt: {
        brand: "Conexões",
        galeria: "Galeria",
        sobre: "Sobre",
        autores: "Autores",
        authorsTitle: "Autores",
        title: "Conexões",
        subtitle: "Uma exploração visual sobre as formas de conexão humana em um mundo cada vez mais digital.",
        btn: "VER GALERIA",
        footer: "Conexões © 2026",
        galleryTitle: "Galeria",
        chapter1Number: "CAPÍTULO 1",
        chapter1Title: "Mundo Conectado / Decadente",
        chapter2Number: "CAPÍTULO 2",
        chapter2Title: "Conexão / Infecção"
    },
    en: {
        brand: "Connections",
        galeria: "Gallery",
        sobre: "About",
        autores: "Authors",
        authorsTitle: "Authors",
        title: "Connections",
        subtitle: "A visual exploration of human connection forms in an increasingly digital world.",
        btn: "VIEW GALLERY",
        footer: "Connections © 2026",
        galleryTitle: "Gallery",
        chapter1Number: "CHAPTER 1",
        chapter1Title: "Connected World / Decadent",
        chapter2Number: "CHAPTER 2",
        chapter2Title: "Connection / Infection"
    }
};

// Idioma atual
let currentLang = 'pt';

// Função para mudar o idioma
function switchLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';

    // Atualizar textos (só se o elemento existir)
    if (document.querySelector('.brand')) document.querySelector('.brand').textContent = translations[currentLang].brand;
    const authorsTitleEl = document.getElementById('authors-title');
    if (authorsTitleEl) authorsTitleEl.textContent = translations[currentLang].authorsTitle;
    if (document.querySelector('a[href="galeria.html"]')) document.querySelector('a[href="galeria.html"]').textContent = translations[currentLang].galeria;
    if (document.querySelector('a[href="sobre.html"]')) document.querySelector('a[href="sobre.html"]').textContent = translations[currentLang].sobre;
    if (document.querySelector('a[href="autores.html"]')) document.querySelector('a[href="autores.html"]').textContent = translations[currentLang].autores;
    if (document.querySelector('.hero-title')) document.querySelector('.hero-title').textContent = translations[currentLang].title;
    if (document.querySelector('.hero-subtitle')) document.querySelector('.hero-subtitle').textContent = translations[currentLang].subtitle;
    if (document.querySelector('.btn-gallery')) document.querySelector('.btn-gallery').textContent = translations[currentLang].btn;
    if (document.querySelector('.site-footer p')) document.querySelector('.site-footer p').textContent = translations[currentLang].footer;
    if (document.querySelector('.gallery-title h1')) document.querySelector('.gallery-title h1').textContent = translations[currentLang].galleryTitle;
    if (document.querySelectorAll('.chapter-number').length > 0) {
        document.querySelectorAll('.chapter-number')[0].textContent = translations[currentLang].chapter1Number;
        if (document.querySelectorAll('.chapter-number').length > 1) document.querySelectorAll('.chapter-number')[1].textContent = translations[currentLang].chapter2Number;
    }
    if (document.querySelectorAll('.chapter-title').length > 0) {
        document.querySelectorAll('.chapter-title')[0].textContent = translations[currentLang].chapter1Title;
        if (document.querySelectorAll('.chapter-title').length > 1) document.querySelectorAll('.chapter-title')[1].textContent = translations[currentLang].chapter2Title;
    }


    // Atualizar o texto do botão
    document.getElementById('lang-toggle').innerHTML = currentLang === 'pt' ? '<img src="Images/Icons/Eua.png" alt="English" style="width: 25px; height: 20px; vertical-align: middle;">' : '<img src="Images/Icons/Br.png" alt="Português" style="width: 25px; height: 20px; vertical-align: middle;">';
}

// Adicionar evento ao botão
document.getElementById('lang-toggle').addEventListener('click', switchLanguage);

/* ================= NAV TOGGLE (mobile hamburger) ================= */
(function(){
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');
    const BREAKPOINT = 768; // px

    if(!navToggle || !navList) return; // nothing to do on pages without the new markup

    // ensure initial state
    if(window.innerWidth <= BREAKPOINT) navList.classList.add('mobile-closed');

    function openNav(){
        navToggle.setAttribute('aria-expanded','true');
        navList.classList.remove('mobile-closed');
        navList.classList.add('mobile-open');
    }

    function closeNav(){
        navToggle.setAttribute('aria-expanded','false');
        navList.classList.remove('mobile-open');
        navList.classList.add('mobile-closed');
    }

    navToggle.addEventListener('click', ()=>{
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        if(expanded) closeNav(); else openNav();
    });

    // close when clicking a nav link or language button (mobile)
    navList.addEventListener('click', (e)=>{
        const target = e.target.closest('a, button');
        if(!target) return;
        if(window.innerWidth <= BREAKPOINT) closeNav();
    });

    // close on Escape
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeNav(); });

    // on resize, remove mobile classes when switching to desktop
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > BREAKPOINT){
            navList.classList.remove('mobile-open','mobile-closed');
            navToggle.setAttribute('aria-expanded','false');
        } else if(!navList.classList.contains('mobile-open')){
            navList.classList.add('mobile-closed');
        }
    });

})();
