// ================= LOADER =================
document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.style.display = "none";
        }

    }, 2000);

});


// ================= EVENT POPUP =================
function openEvent(event) {

    let data = {}

    // PAPER PRESENTATION
    if (event == "paper") {
        data = {
            title: "Paper Presentation",
            type: "Technical Event",
            desc: "Participants present innovative research ideas related to Electronics and Communication Engineering.",

            venue: "Seminar Hall",
            time: "09:45 AM – 11:00 AM",
            team: "1 - 2 Members",
            duration: "7 Minutes",

            handler: "Dr. N. L. Venkataraman",
            contact: "9876543210",

            rules: [
                "Maximum 2 members per team",
                "PPT presentation required",
                "Time limit: 7 minutes",
                "Topics must be related to ECE"
            ],

            image: "images/paper.jpg"
        }
    }

    // TECHNICAL QUIZ
    if (event == "quiz") {
        data = {
            title: "Technical Quiz",
            type: "Technical Event",
            desc: "Quiz covering electronics, communication systems, and engineering fundamentals.",

            venue: "ECE Classroom",
            time: "11:15 AM – 12:00 PM",
            team: "2 Members",
            duration: "45 Minutes",

            handler: "Faculty Coordinator",
            contact: "9876543210",

            rules: [
                "Two members per team",
                "Multiple rounds will be conducted",
                "Quiz master's decision is final"
            ],

            image: "images/quiz.jpg"
        }
    }

    // LOGIC DESIGN
    if (event == "logic") {
        data = {
            title: "Logic Design",
            type: "Technical Event",
            desc: "Solve digital logic problems and implement circuits using Boolean logic.",

            venue: "Digital Lab",
            time: "12:00 PM – 01:00 PM",
            team: "1 Member",
            duration: "60 Minutes",

            handler: "Faculty Coordinator",
            contact: "9876543210",

            rules: [
                "Individual participation",
                "Questions based on digital logic",
                "Time based challenge"
            ],

            image: "images/logic.jpg"
        }
    }

    // CIRCUIT DEBUGGING
    if (event == "circuit") {
        data = {
            title: "Circuit Debugging",
            type: "Technical Event",
            desc: "Identify faults in given circuits and fix them correctly within time.",

            venue: "ECE Lab",
            time: "02:00 PM – 03:00 PM",
            team: "1 - 2 Members",
            duration: "60 Minutes",

            handler: "Faculty Coordinator",
            contact: "9876543210",

            rules: [
                "Find faults in the circuit",
                "Limited tools provided",
                "Fastest correct solution wins"
            ],

            image: "images/circuit.jpg"
        }
    }

    // MOVIE QUIZ
    if (event == "movie") {
        data = {
            title: "Movie Quiz",
            type: "Non Technical Event",
            desc: "Fun quiz based on popular movies and entertainment.",

            venue: "Seminar Hall",
            time: "03:30 PM – 04:00 PM",
            team: "2 Members",
            duration: "30 Minutes",

            handler: "Student Coordinator",
            contact: "9876543210",

            rules: [
                "Two members per team",
                "Multiple entertainment rounds",
                "No mobile phones allowed"
            ],

            image: "images/movie.jpg"
        }
    }

    // JAM
    if (event == "jam") {
        data = {
            title: "JAM (Just A Minute)",
            type: "Non Technical Event",
            desc: "Speak for one minute on a topic without hesitation, repetition or deviation.",

            venue: "Seminar Hall",
            time: "03:00 PM – 03:30 PM",
            team: "Individual",
            duration: "1 Minute per participant",

            handler: "Student Coordinator",
            contact: "9876543210",

            rules: [
                "No hesitation",
                "No repetition",
                "No deviation from topic"
            ],

            image: "images/jam.jpg"
        }
    }

    // CONNECTIONS
    if (event == "connection") {
        data = {
            title: "Connections",
            type: "Non Technical Event",
            desc: "Find the common connection between given clues.",

            venue: "ECE Classroom",
            time: "04:00 PM – 04:30 PM",
            team: "2 Members",
            duration: "30 Minutes",

            handler: "Student Coordinator",
            contact: "9876543210",

            rules: [
                "Guess the common link",
                "Multiple clue rounds",
                "Fastest correct answer wins"
            ],

            image: "images/connection.jpg"
        }
    }

    // ================= ASSIGN DATA TO MODAL =================

    document.getElementById("eventTitle").innerText = data.title
    document.getElementById("eventType").innerText = data.type
    document.getElementById("eventDescription").innerText = data.desc

    document.getElementById("eventVenue").innerText = data.venue
    document.getElementById("eventTime").innerText = data.time
    document.getElementById("eventTeam").innerText = data.team
    document.getElementById("eventDuration").innerText = data.duration
    document.getElementById("eventHandler").innerText = data.handler
    document.getElementById("eventContact").innerText = data.contact

    // RULES LIST
    let rulesHTML = ""
    data.rules.forEach(rule => {
        rulesHTML += `<li>${rule}</li>`
    })

    document.getElementById("eventRules").innerHTML = rulesHTML

    // BACKGROUND IMAGE
    const modal = document.getElementById("eventModal")
    modal.style.backgroundImage = `url(${data.image})`
    modal.style.display = "flex"
    document.body.style.overflow = "hidden"
}


function closeEvent() {
    document.getElementById("eventModal").style.display = "none"
    document.body.style.overflow = "auto"
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

/* ===== 3D CARD TILT ===== */

const cards = document.querySelectorAll(".profile-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });

});

/* ===== ELECTRONICS GRID BACKGROUND ===== */

const gridCanvas = document.getElementById("gridCanvas");

if (gridCanvas) {

    const ctx = gridCanvas.getContext("2d");

    gridCanvas.width = window.innerWidth;
    gridCanvas.height = window.innerHeight * 0.6;

    let offset = 0;

    function drawGrid() {

        ctx.clearRect(0, 0, gridCanvas.width, gridCanvas.height);

        ctx.strokeStyle = "rgba(0,234,255,0.4)";
        ctx.lineWidth = 1;

        let spacing = 40;

        for (let x = 0; x < gridCanvas.width; x += spacing) {

            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, gridCanvas.height);
            ctx.stroke();

        }

        for (let y = 0; y < gridCanvas.height; y += spacing) {

            ctx.beginPath();
            ctx.moveTo(0, y + offset);
            ctx.lineTo(gridCanvas.width, y + offset);
            ctx.stroke();

        }

        offset += 0.4;

        if (offset > spacing) {
            offset = 0;
        }

        requestAnimationFrame(drawGrid);

    }

    drawGrid();

    window.addEventListener("resize", () => {

        gridCanvas.width = window.innerWidth;
        gridCanvas.height = window.innerHeight * 0.6;

    });

}

/* ===== COUNTDOWN ===== */

const eventDate = new Date("April 12, 2026 09:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;

}, 1000);