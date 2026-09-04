"use strict";

/* =========================================================
   DADOS DOS PROJETOS
========================================================= */

const projects = {

    efnutri: {
        type: "INTELIGÊNCIA ARTIFICIAL",

        title: "EFNUTRI AI",

        description:
            "Agente de Inteligência Artificial especializado em Educação Física e Nutrição. O projeto integra uma interface web com cadastro, login, histórico de conversas e comunicação com um agente desenvolvido em Python. A aplicação utiliza Flask no back-end e PostgreSQL para gerenciamento dos dados.",

        tech: [
            "Python",
            "Flask",
            "PostgreSQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Inteligência Artificial"
        ],

        github: "https://github.com/Ju-LI0"
    },


    agente: {
        type: "INTELIGÊNCIA ARTIFICIAL",

        title: "Agente de IA",

        description:
            "Projeto desenvolvido para explorar o conceito de agentes de Inteligência Artificial utilizando Python. A aplicação faz parte da minha jornada de aprendizado e experimentação com tecnologias relacionadas à IA.",

        tech: [
            "Python",
            "Inteligência Artificial",
            "IA Generativa"
        ],

        github: "https://github.com/Ju-LI0"
    },


    pong: {
        type: "GAME DEVELOPMENT",

        title: "Ping Pong Game",

        description:
            "Meu primeiro jogo simples desenvolvido utilizando Python e a biblioteca Pygame. O projeto foi criado para colocar em prática conceitos de programação, lógica, eventos, movimentação e interação com elementos na tela.",

        tech: [
            "Python",
            "Pygame",
            "Game Development"
        ],

        github: "https://github.com/Ju-LI0"
    },


    festa: {
        type: "DESENVOLVIMENTO WEB",

        title: "Festa Junina",

        description:
            "Site desenvolvido durante minha formação técnica. O projeto foi criado utilizando tecnologias fundamentais do desenvolvimento web e serviu para colocar em prática conceitos de estruturação, estilização e interatividade.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        github: "https://github.com/Ju-LI0/Festa-Junina"
    },


    fala: {
        type: "JAVASCRIPT",

        title: "Fala — Texto",

        description:
            "Projeto de interação por voz desenvolvido utilizando JavaScript e recursos disponíveis no navegador. A aplicação transforma texto em fala, explorando recursos de interação e APIs nativas da web.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Web APIs"
        ],

        github: "https://github.com/Ju-LI0/FALA-TEXTO"
    }

};


/* =========================================================
   ELEMENTOS
========================================================= */

const header =
    document.getElementById("header");

const menuToggle =
    document.getElementById("menu-toggle");

const navMenu =
    document.getElementById("nav-menu");

const navLinks =
    document.querySelectorAll(".nav-link");

const backToTop =
    document.getElementById("back-to-top");

const currentYear =
    document.getElementById("current-year");


/* =========================================================
   MENU MOBILE
========================================================= */

function toggleMobileMenu() {

    if (!menuToggle || !navMenu) {
        return;
    }

    const isOpen =
        navMenu.classList.toggle("open");

    menuToggle.classList.toggle(
        "active",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Fechar menu"
            : "Abrir menu"
    );

}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMobileMenu
    );

}


/* =========================================================
   FECHAR MENU AO CLICAR NO LINK
========================================================= */

navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            if (!navMenu || !menuToggle) {
                return;
            }

            navMenu.classList.remove("open");

            menuToggle.classList.remove(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }
    );

});


/* =========================================================
   HEADER AO ROLAR
========================================================= */

function updateHeader() {

    if (!header) {
        return;
    }

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* =========================================================
   NAVEGAÇÃO ATIVA
========================================================= */

const sections =
    document.querySelectorAll("main section[id]");


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 160;

    let currentSection =
        "home";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.id;

        }

    });


    navLinks.forEach((link) => {

        const target =
            link.getAttribute("href");

        link.classList.toggle(
            "active",
            target === `#${currentSection}`
        );

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);

updateActiveNavigation();


/* =========================================================
   REVEAL DAS SEÇÕES
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}


/* =========================================================
   MODAL
========================================================= */

const projectModal =
    document.getElementById("project-modal");

const modalClose =
    document.getElementById("modal-close");

const modalBack =
    document.getElementById("modal-back");

const modalOverlay =
    document.querySelector(".modal-overlay");

const modalType =
    document.getElementById("modal-type");

const modalTitle =
    document.getElementById("modal-title");

const modalDescription =
    document.getElementById("modal-description");

const modalTech =
    document.getElementById("modal-tech");

const modalGithub =
    document.getElementById("modal-github");

const projectButtons =
    document.querySelectorAll(".project-details");


/* =========================================================
   ABRIR MODAL
========================================================= */

function openProjectModal(projectId) {

    const project =
        projects[projectId];

    if (
        !project ||
        !projectModal
    ) {
        return;
    }


    if (modalType) {

        modalType.textContent =
            project.type;

    }


    if (modalTitle) {

        modalTitle.textContent =
            project.title;

    }


    if (modalDescription) {

        modalDescription.textContent =
            project.description;

    }


    if (modalTech) {

        modalTech.innerHTML = "";

        project.tech.forEach((technology) => {

            const tag =
                document.createElement("span");

            tag.textContent =
                technology;

            modalTech.appendChild(tag);

        });

    }


    if (modalGithub) {

        modalGithub.href =
            project.github;

    }


    projectModal.classList.add(
        "active"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );


    if (modalClose) {

        setTimeout(() => {

            modalClose.focus();

        }, 100);

    }

}


/* =========================================================
   FECHAR MODAL
========================================================= */

function closeProjectModal() {

    if (!projectModal) {
        return;
    }

    projectModal.classList.remove(
        "active"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   BOTÕES DOS PROJETOS
========================================================= */

projectButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const projectId =
                button.dataset.project;

            openProjectModal(
                projectId
            );

        }
    );

});


/* =========================================================
   EVENTOS DO MODAL
========================================================= */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


if (modalBack) {

    modalBack.addEventListener(
        "click",
        closeProjectModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeProjectModal
    );

}


/* =========================================================
   ESC FECHA MODAL
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            projectModal &&
            projectModal.classList.contains("active")
        ) {

            closeProjectModal();

        }

    }
);


/* =========================================================
   BACK TO TOP
========================================================= */

function updateBackToTop() {

    if (!backToTop) {
        return;
    }

    if (window.scrollY > 600) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
);

updateBackToTop();


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   PARALLAX DO HERO
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


function updateHeroParallax() {

    if (
        !heroVisual ||
        reducedMotion.matches
    ) {
        return;
    }


    const scroll =
        window.scrollY;

    const heroHeight =
        window.innerHeight;


    if (scroll > heroHeight) {
        return;
    }


    const movement =
        scroll * 0.08;


    heroVisual.style.transform =
        `translateY(${movement}px)`;

}


window.addEventListener(
    "scroll",
    updateHeroParallax,
    { passive: true }
);

updateHeroParallax();


/* =========================================================
   RESET PARALLAX QUANDO REDUZ MOTION
========================================================= */

function handleMotionPreference() {

    if (
        !heroVisual
    ) {
        return;
    }

    if (
        reducedMotion.matches
    ) {

        heroVisual.style.transform =
            "none";

    }

}


if (
    typeof reducedMotion.addEventListener ===
    "function"
) {

    reducedMotion.addEventListener(
        "change",
        handleMotionPreference
    );

}

handleMotionPreference();


/* =========================================================
   ANO DO FOOTER
========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   FECHAR MENU AO REDIMENSIONAR
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 900 &&
            navMenu &&
            menuToggle
        ) {

            navMenu.classList.remove(
                "open"
            );

            menuToggle.classList.remove(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }

    }
);


/* =========================================================
   LINKS DE ÂNCORA — PEQUENO AJUSTE DE SCROLL
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }


                event.preventDefault();


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;


                window.scrollTo({
                    top:
                        targetPosition,
                    behavior:
                        reducedMotion.matches
                            ? "auto"
                            : "smooth"
                });

            }
        );

    });


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateHeader();

        updateActiveNavigation();

        updateBackToTop();

        handleMotionPreference();

    }
);