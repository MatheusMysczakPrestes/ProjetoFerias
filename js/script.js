/* ==========================================
   PROJETO FEIRAS
   JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // FECHAR MENU NO CELULAR
    // ==========================

    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navbarCollapse.classList.contains("show")) {

                bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();

            }

        });

    });

    // ==========================
    // SCROLL SUAVE
    // ==========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {

                destino.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // ==========================
    // NAVBAR ATIVA
    // ==========================

    const secoes = document.querySelectorAll("section, header");

    window.addEventListener("scroll", () => {

        let atual = "";

        secoes.forEach(secao => {

            const topo = secao.offsetTop - 150;

            if (pageYOffset >= topo) {

                atual = secao.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + atual) {

                link.classList.add("active");

            }

        });

    });

    // ==========================
    // FORMULÁRIO
    // ==========================

    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const nome = formulario.querySelector('input[type="text"]').value.trim();

        const email = formulario.querySelector('input[type="email"]').value.trim();

        const mensagem = formulario.querySelector("textarea").value.trim();

        if (nome === "" || email === "" || mensagem === "") {

            alert("Preencha todos os campos obrigatórios.");

            return;

        }

        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    });

    // ==========================
    // ANIMAÇÃO DA GALERIA
    // ==========================

    const imagens = document.querySelectorAll(".gallery-img");

    imagens.forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.08)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

    // ==========================
    // ANIMAÇÃO DOS CARDS
    // ==========================

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

    // ==========================
    // BOTÃO VOLTAR AO TOPO
    // ==========================

    const botaoTopo = document.createElement("button");

    botaoTopo.innerHTML = "↑";

    botaoTopo.id = "btnTopo";

    document.body.appendChild(botaoTopo);

    Object.assign(botaoTopo.style, {

        position: "fixed",

        bottom: "20px",

        right: "20px",

        width: "50px",

        height: "50px",

        border: "none",

        borderRadius: "50%",

        background: "#0d6efd",

        color: "#fff",

        fontSize: "22px",

        cursor: "pointer",

        display: "none",

        zIndex: "9999",

        boxShadow: "0 5px 15px rgba(0,0,0,.3)",

        transition: ".3s"

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            botaoTopo.style.display = "block";

        } else {

            botaoTopo.style.display = "none";

        }

    });

    botaoTopo.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    // ==========================
    // ANIMAÇÃO AO ROLAR
    // ==========================

    const elementos = document.querySelectorAll(

        ".card, .gallery-img, #sobre img, form"

    );

    const aparecer = () => {

        elementos.forEach(elemento => {

            const topo = elemento.getBoundingClientRect().top;

            const alturaTela = window.innerHeight;

            if (topo < alturaTela - 100) {

                elemento.style.opacity = "1";

                elemento.style.transform = "translateY(0)";

            }

        });

    };

    elementos.forEach(elemento => {

        elemento.style.opacity = "0";

        elemento.style.transform = "translateY(40px)";

        elemento.style.transition = "0.8s";

    });

    aparecer();

    window.addEventListener("scroll", aparecer);

});
