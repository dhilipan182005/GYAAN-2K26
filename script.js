/* ========================================
   GYAAN 2K26 – Master JavaScript
   ======================================== */

// ===== LOADER =====
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.classList.add("hidden");
            // Remove from DOM after fade completes
            setTimeout(() => { loader.style.display = "none"; }, 700);
        }
    }, 2200);
});

// ===== MOBILE MENU TOGGLE =====
function toggleMenu() {
    const nav = document.getElementById("mainNav");
    const toggle = document.getElementById("menuToggle");
    if (nav) {
        nav.classList.toggle("open");
        toggle.classList.toggle("active");
    }
}

// Close menu when a link is clicked
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav a").forEach(a => {
        a.addEventListener("click", () => {
            const nav = document.getElementById("mainNav");
            nav && nav.classList.remove("open");
        });
    });
});

// ===== BACK TO TOP =====
window.addEventListener("scroll", function () {
    const btn = document.getElementById("topBtn");
    if (!btn) return;
    btn.style.display = document.documentElement.scrollTop > 250 ? "flex" : "none";
});

const topButton = document.getElementById("topBtn");
if (topButton) {
    topButton.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}

// ===== SCROLL PROGRESS BAR =====
window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById("scrollBar");
    if (bar) bar.style.width = scrolled + "%";
});

// ===== SECTION REVEAL ON SCROLL =====
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            sec.classList.add("visible");
        }
    });
});

// Run once on load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("section").forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight) sec.classList.add("visible");
    });
});

// ===== HERO PARALLAX =====
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.backgroundPositionY = window.scrollY * 0.4 + "px";
    }
});

// ===== HERO TYPING EFFECT =====
const words = [
    "National Level Technical Symposium",
    "ECE Department – JJ College",
    "Trichy, Tamil Nadu",
    "Innovate • Compete • Collaborate"
];

let wordIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById("typed");

function typeEffect() {
    if (!typedEl) return;
    const currentWord = words[wordIndex];
    typedEl.textContent = isDeleting
        ? currentWord.substring(0, charIndex--)
        : currentWord.substring(0, charIndex++);

    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1600);
        return;
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, isDeleting ? 45 : 85);
}

typeEffect();

// ===== COUNTDOWN TIMER =====
const eventDate = new Date("April 12, 2026 09:00:00").getTime();

setInterval(function () {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        return;
    }

    document.getElementById("days").innerText    = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
}, 1000);

// ===== PARTICLE BACKGROUND =====
const canvas = document.getElementById("techBackground");

if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    let mouse = { x: null, y: null };

    window.addEventListener("mousemove", e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 1;
            this.speedX = (Math.random() - 0.5) * 0.55;
            this.speedY = (Math.random() - 0.5) * 0.55;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

            if (mouse.x !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 110) {
                    this.x -= dx / 22;
                    this.y -= dy / 22;
                }
            }
        }

        draw() {
            ctx.fillStyle = "rgba(0, 234, 255, 0.8)";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function connect() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const dist = dx * dx + dy * dy;
                if (dist < 9000) {
                    ctx.strokeStyle = "rgba(0, 234, 255, 0.12)";
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < 80; i++) particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        connect();
        requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });
}

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll(".counter");
let countersStarted = false;

function startCounters() {
    if (countersStarted) return;
    countersStarted = true;
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const speed = 200;
        const inc = target / speed;
        let count = 0;
        const update = () => {
            count = Math.min(count + inc, target);
            counter.innerText = Math.ceil(count);
            if (count < target) setTimeout(update, 20);
            else counter.innerText = target;
        };
        update();
    });
}

const highlightsSection = document.querySelector(".highlights-section");
if (highlightsSection) {
    const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            startCounters();
            obs.disconnect();
        }
    }, { threshold: 0.2 });
    obs.observe(highlightsSection);
}

// ===== EVENT HOVER RADIAL =====
document.querySelectorAll(".event-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,234,255,.12), transparent 65%)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.background = "";
    });
});

// ===== 3D CARD TILT =====
document.querySelectorAll(".profile-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        card.style.transform = `rotateX(${(y - cy) / 12}deg) rotateY(${(cx - x) / 12}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

// ===== UNIFIED SLIDER FUNCTION =====
function scrollSlider(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    if (slider) {
        slider.scrollBy({ left: direction * 240, behavior: "smooth" });
    }
}

// Legacy aliases for compatibility
function scrollLeftFaculty()  { scrollSlider("facultySlider", -1); }
function scrollRightFaculty() { scrollSlider("facultySlider",  1); }
function scrollLeftStudent()  { scrollSlider("studentSlider", -1); }
function scrollRightStudent() { scrollSlider("studentSlider",  1); }

// ===== POSTER VIEWER =====
document.addEventListener("DOMContentLoaded", () => {
    const poster = document.querySelector(".poster-image");
    const modal  = document.getElementById("posterModal");
    const full   = document.getElementById("posterFull");
    const close  = document.querySelector(".poster-close");

    if (poster && modal && full) {
        poster.onclick = () => {
            full.src = poster.src;
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        };
    }

    if (close && modal) {
        close.onclick = () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        };
    }

    if (modal) {
        modal.addEventListener("click", e => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }
});

// ===== EVENT POPUP MODAL =====
const eventData = {
    paper: {
        title: "Paper Presentation",
        type: "Technical Event",
        desc: "Participants present innovative research ideas related to Electronics and Communication Engineering.",
        venue: "Seminar Hall", time: "09:45 AM – 11:00 AM", team: "1–2 Members", duration: "7 Minutes",
        handler: "Dr. S.Sumithra", contact: "9876543210",
        rules: ["Maximum 2 members per team", "PPT presentation required", "Time limit: 7 minutes", "Topics must be ECE-related"],
        image: "images/paper.jpg"
    },
    project: {
        title: "Project Expo",
        type: "Technical Event",
        desc: "Showcase innovative projects and working prototypes.",
        venue: "Project Lab",
        time: "02:00 PM – 04:00 PM",
        team: "1–3 Members",
        duration: "10 Minutes",
        handler: "Faculty Coordinator",
        contact: "9876543210",
        rules: [
            "Working model required",
            "Clear explanation needed",
            "Judges decision final"
        ],
        image: "images/project.jpg"
    },
    quiz: {
        title: "Technical Quiz",
        type: "Technical Event",
        desc: "Quiz covering electronics, communication systems, and engineering fundamentals.",
        venue: "ECE Classroom", time: "11:15 AM – 12:00 PM", team: "2 Members", duration: "45 Minutes",
        handler: "Dr. M.Shobana", contact: "9876543210",
        rules: ["Two members per team", "Multiple rounds will be conducted", "Quiz master's decision is final"],
        image: "images/quiz.jpg"
    },
    circuit: {
        title: "Circuit Debugging",
        type: "Technical Event",
        desc: "Identify faults in given circuits and fix them correctly within the time limit.",
        venue: "ECE Lab", time: "02:00 PM – 03:00 PM", team: "1–2 Members", duration: "60 Minutes",
        handler: "Mrs. K.Kokulavani", contact: "9876543210",
        rules: ["Find faults in the given circuit", "Limited tools provided", "Fastest correct solution wins"],
        image: "images/circuit.jpg"
    },
    ipl: {
        title: "IPL Auction",
        type: "Non-Technical Event",
        desc: "Strategy-based cricket auction event with live bidding.",
        venue: "Seminar Hall",
        time: "03:00 PM – 04:30 PM",
        team: "3–5 Members",
        duration: "90 Minutes",
        handler: "Student Coordinator",
        contact: "9876543210",
        rules: [
            "Budget-based selection",
            "Live bidding rounds",
            "Strategy matters"
        ],
        image: "images/ipl.jpg"
    },
    movie: {
        title: "Movie Quiz",
        type: "Non-Technical Event",
        desc: "A fun quiz based on popular movies, dialogues, and entertainment.",
        venue: "Seminar Hall", time: "03:30 PM – 04:00 PM", team: "2 Members", duration: "30 Minutes",
        handler: "Mrs. R.Meenakshi", contact: "9876543210",
        rules: ["Two members per team", "Multiple entertainment rounds", "No mobile phones allowed"],
        image: "images/movie.jpg"
    },
    jam: {
        title: "JAM (Just A Minute)",
        type: "Non-Technical Event",
        desc: "Speak for one minute on a given topic without hesitation, repetition or deviation.",
        venue: "Seminar Hall", time: "03:00 PM – 03:30 PM", team: "Individual", duration: "1 Minute per participant",
        handler: "Dr. M.Shobana", contact: "9876543210",
        rules: ["No hesitation allowed", "No repetition of words", "No deviation from the topic"],
        image: "images/jam.jpg"
    },
    connection: {
        title: "Connections",
        type: "Non-Technical Event",
        desc: "Find the common connection between given clues – fastest correct answer wins!",
        venue: "ECE Classroom", time: "04:00 PM – 04:30 PM", team: "2 Members", duration: "30 Minutes",
        handler: "Student Coordinator", contact: "9876543210",
        rules: ["Guess the common link between clues", "Multiple clue rounds", "Fastest correct answer wins"],
        image: "images/connection.jpg"
    }
};

function openEvent(key) {
    const data = eventData[key];
    if (!data) return;

    document.getElementById("eventTitle").innerText       = data.title;
    document.getElementById("eventType").innerText        = data.type;
    document.getElementById("eventDescription").innerText = data.desc;
    document.getElementById("eventVenue").innerText       = data.venue;
    document.getElementById("eventTime").innerText        = data.time;
    document.getElementById("eventTeam").innerText        = data.team;
    document.getElementById("eventDuration").innerText    = data.duration;
    document.getElementById("eventHandler").innerText     = data.handler;
    document.getElementById("eventContact").innerText     = data.contact;

    document.getElementById("eventRules").innerHTML =
        data.rules.map(r => `<li>${r}</li>`).join("");

    const modal = document.getElementById("eventModal");
    modal.style.backgroundImage = `url(${data.image})`;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeEvent() {
    const modal = document.getElementById("eventModal");
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "";
}

// Close modal on backdrop click
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("eventModal");
    if (modal) {
        modal.addEventListener("click", e => {
            if (e.target === modal) closeEvent();
        });
    }
});

// ===== SCHEDULE =====
const scheduleData = {
    welcome:    { title: "Welcome Address",    desc: "Opening ceremony of GYAAN 2K26 with welcome speech and event introduction." },
    paper:      { title: "Paper Presentation", desc: "Participants present innovative research ideas related to Electronics and Communication Engineering." },
    quiz:       { title: "Technical Quiz",     desc: "A quiz competition testing knowledge in electronics, communication, and core engineering concepts." },
    logic:      { title: "Project Expo",       desc: "Showcase innovative projects and working prototypes." },
    lunch:      { title: "Lunch Break",        desc: "Lunch will be provided for all registered participants and staff." },
    circuit:    { title: "Circuit Debugging",  desc: "Identify faults in given circuits and correct them within the time limit." },
    jam:        { title: "JAM (Just A Minute)", desc: "Participants speak on a random topic for one minute without hesitation, repetition, or deviation." },
    movie:      { title: "Movie Quiz",         desc: "Fun quiz based on popular movies, dialogues, and entertainment categories." },
    connection: { title: "Connections",        desc: "Find the common link between the given clues – multiple rounds with increasing difficulty." }
};

function showSchedule(key) {
    const d = scheduleData[key];
    if (!d) return;
    const panel = document.getElementById("schedulePanel");
    document.getElementById("scheduleTitle").innerText      = d.title;
    document.getElementById("scheduleDescription").innerText = d.desc;
    if (panel) {
        panel.style.display = "block";
        panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

// ===== CONTACT MODAL =====
function openContact(name, phone, email) {
    document.getElementById("contactModal").style.display = "flex";
    document.getElementById("contactName").innerText  = name;
    document.getElementById("contactPhone").innerText = phone;
    document.getElementById("contactEmail").innerText = email;
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const m = document.getElementById("contactModal");
    if (m) m.style.display = "none";
    document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const cm = document.getElementById("contactModal");
    if (cm) {
        cm.addEventListener("click", e => {
            if (e.target === cm) closeModal();
        });
    }
});