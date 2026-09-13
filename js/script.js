/* =========================================
   OUR GANPATI — GMC SEONI 2026
   INTERACTIVE JAVASCRIPT
========================================= */


/* =========================================
   1. WELCOME SCREEN
========================================= */

const welcomeScreen = document.getElementById("welcome-screen");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    welcomeScreen.classList.add("hide");

    // Small vibration on supported mobile devices
    if (navigator.vibrate) {
        navigator.vibrate(40);
    }

});


/* =========================================
   2. GANPATI STHAPNA COUNTDOWN
========================================= */

// 14 September 2026 — 4:00 PM
const eventDate = new Date("2026-09-14T16:00:00+05:30").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = eventDate - now;


    // Event has started
    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        const heading =
            document.querySelector(".countdown-section h2");

        if (heading) {
            heading.textContent =
                "🪔 गणपति बप्पा मोरया! 🙏";
        }

        return;
    }


    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (difference / (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================
   3. DIGITAL DIYA
========================================= */

const diya = document.getElementById("diya");
const lightDiyaBtn =
    document.getElementById("lightDiyaBtn");

const diyaMessage =
    document.getElementById("diyaMessage");


function lightDiya() {

    diya.classList.add("lit");

    diyaMessage.textContent =
        "✨ आपका दीप बप्पा के स्वागत में जल उठा। 🙏";

    if (navigator.vibrate) {
        navigator.vibrate([30, 40, 30]);
    }

    createFlowers(12);

}


lightDiyaBtn.addEventListener(
    "click",
    lightDiya
);

diya.addEventListener(
    "click",
    lightDiya
);


/* =========================================
   4. FLOWER PARTICLES
========================================= */

function createFlowers(number) {

    const flowers = [
        "🌸",
        "🌺",
        "🌼",
        "🌻",
        "🪷"
    ];

    for (let i = 0; i < number; i++) {

        const flower =
            document.createElement("div");

        flower.textContent =
            flowers[
                Math.floor(
                    Math.random() * flowers.length
                )
            ];

        flower.style.position = "fixed";
        flower.style.left =
            Math.random() * 100 + "vw";

        flower.style.top = "-50px";

        flower.style.fontSize =
            (18 + Math.random() * 20) + "px";

        flower.style.zIndex = "9998";

        flower.style.pointerEvents = "none";

        document.body.appendChild(flower);


        const duration =
            3000 + Math.random() * 3000;

        const horizontalMovement =
            (Math.random() * 200 - 100);


        flower.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${horizontalMovement}px, 110vh)
                         rotate(360deg)`,
                    opacity: 0.2
                }
            ],
            {
                duration: duration,
                easing: "ease-in-out"
            }
        );


        setTimeout(
            () => flower.remove(),
            duration
        );

    }

}


/* =========================================
   5. PERIODIC FLOATING PARTICLES
========================================= */

setInterval(() => {

    if (
        document.visibilityState ===
        "visible"
    ) {

        createFlowers(2);

    }

}, 7000);


/* =========================================
   6. PAGE SCROLL REVEAL
========================================= */

const sections =
    document.querySelectorAll("section");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(25px)";

    section.style.transition =
        "opacity .9s ease, transform .9s ease";

    revealObserver.observe(section);

});


/* =========================================
   7. WELCOME SCREEN KEYBOARD ACCESS
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" &&
            !welcomeScreen.classList.contains("hide")
        ) {

            enterBtn.click();

        }

    }
);


/* =========================================
   8. PREVENT DOUBLE TAP ZOOM
========================================= */

let lastTouchEnd = 0;

document.addEventListener(
    "touchend",
    function (event) {

        const now =
            new Date().getTime();

        if (
            now - lastTouchEnd <= 300
        ) {

            event.preventDefault();

        }

        lastTouchEnd = now;

    },
    false
);
