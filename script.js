// ================= LOADER =================
document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.style.display = "none";
        }

    }, 2000);

});


// ================= COUNTDOWN =================
const eventDate = new Date("April 12, 2026 09:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const countdown = document.getElementById("countdown");

    if (countdown) {
        countdown.innerHTML =
            days + " Days " + hours + " Hours " + minutes + " Minutes";
    }

}, 1000);


// ================= EVENT POPUP =================
function openEvent(event) {

    let title = "";
    let description = "";
    let image = "";

    if (event == "paper") {
        title = "Paper Presentation";
        description = "Participants present innovative research ideas related to Electronics and Communication Engineering.";
        image = "images/paper.jpg";
    }

    if (event == "quiz") {
        title = "Technical Quiz";
        description = "A technical quiz covering electronics, communication systems, and general engineering knowledge.";
        image = "images/quiz.jpg";
    }

    if (event == "logic") {
        title = "Logic Design";
        description = "Participants solve digital logic problems and design circuits using Boolean logic.";
        image = "images/logic.jpg";
    }

    if (event == "circuit") {
        title = "Circuit Debugging";
        description = "Identify faults in given circuits and fix them correctly within time.";
        image = "images/circuit.jpg";
    }

    if (event == "movie") {
        title = "Movie Quiz";
        description = "Fun quiz based on popular movies.";
        image = "images/movie.jpg";
    }

    if (event == "jam") {
        title = "JAM";
        description = "Speak for one minute on a topic without hesitation.";
        image = "images/jam.jpg";
    }

    if (event == "connection") {
        title = "Connections";
        description = "Find the common connection between clues.";
        image = "images/connection.jpg";
    }

    const modal = document.getElementById("eventModal");

    document.getElementById("eventTitle").innerText = title;
    document.getElementById("eventDescription").innerText = description;

    modal.style.background =
        "url('" + image + "') center/cover no-repeat";

    modal.style.display = "flex";
}

function closeEvent() {
    document.getElementById("eventModal").style.display = "none";
}


// ================= BACK TO TOP =================
window.addEventListener("scroll", function () {

    const btn = document.getElementById("topBtn");

    if (!btn) return;

    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }

});

const topButton = document.getElementById("topBtn");

if (topButton) {
    topButton.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}


// ================= SCROLL REVEAL =================
if (typeof ScrollReveal !== "undefined") {

    ScrollReveal().reveal('.section-title', {
        distance: '60px',
        duration: 1200,
        origin: 'bottom',
        interval: 200
    });

    ScrollReveal().reveal('.card', {
        distance: '40px',
        duration: 1000,
        origin: 'bottom',
        interval: 200
    });

}


// ================= HERO TECH BACKGROUND =================
const techCanvas = document.getElementById("techBackground");

if (techCanvas) {

    const ctx = techCanvas.getContext("2d");

    techCanvas.width = window.innerWidth;
    techCanvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * techCanvas.width,
            y: Math.random() * techCanvas.height,
            vx: (Math.random() - 0.5) * 0.7,
            vy: (Math.random() - 0.5) * 0.7,
            size: Math.random() * 2
        });
    }

    function animateBackground() {

        ctx.clearRect(0, 0, techCanvas.width, techCanvas.height);

        for (let i = 0; i < particles.length; i++) {

            let p = particles[i];

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = "#00eaff";
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {

                let p2 = particles[j];
                let dist = Math.hypot(p.x - p2.x, p.y - p2.y);

                if (dist < 130) {

                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = "rgba(0,234,255,0.15)";
                    ctx.stroke();

                }

            }

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > techCanvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > techCanvas.height) p.vy *= -1;

        }

        requestAnimationFrame(animateBackground);

    }

    animateBackground();

    window.addEventListener("resize", () => {
        techCanvas.width = window.innerWidth;
        techCanvas.height = window.innerHeight;
    });

}


// ================= CIRCUIT BACKGROUND =================
const circuitCanvas = document.getElementById("circuitCanvas");

if (circuitCanvas) {

    const ctx = circuitCanvas.getContext("2d");

    circuitCanvas.width = window.innerWidth;
    circuitCanvas.height = window.innerHeight;

    let nodes = [];

    for (let i = 0; i < 40; i++) {
        nodes.push({
            x: Math.random() * circuitCanvas.width,
            y: Math.random() * circuitCanvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }

    function drawCircuit() {

        ctx.clearRect(0, 0, circuitCanvas.width, circuitCanvas.height);

        for (let i = 0; i < nodes.length; i++) {

            let n = nodes[i];

            ctx.beginPath();
            ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = "#00eaff";
            ctx.fill();

            for (let j = i + 1; j < nodes.length; j++) {

                let m = nodes[j];
                let dist = Math.hypot(n.x - m.x, n.y - m.y);

                if (dist < 150) {

                    ctx.beginPath();
                    ctx.moveTo(n.x, n.y);
                    ctx.lineTo(m.x, m.y);
                    ctx.strokeStyle = "rgba(0,234,255,0.2)";
                    ctx.stroke();

                }

            }

            n.x += n.vx;
            n.y += n.vy;

            if (n.x < 0 || n.x > circuitCanvas.width) n.vx *= -1;
            if (n.y < 0 || n.y > circuitCanvas.height) n.vy *= -1;

        }

        requestAnimationFrame(drawCircuit);

    }

    drawCircuit();

}