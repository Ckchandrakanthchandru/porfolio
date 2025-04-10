document.addEventListener("DOMContentLoaded", function () {
    gsap.from("header", { opacity: 0, y: -50, duration: 1 });

    gsap.from(".profile img", { opacity: 0, x: -100, duration: 1.2, delay: 0.5 });
    gsap.from(".intro h1", { opacity: 0, x: 50, duration: 1, delay: 0.8 });
    gsap.from(".intro h2", { opacity: 0, x: 50, duration: 1, delay: 1 });
    gsap.from(".intro p", { opacity: 0, y: 30, duration: 1, delay: 1.2 });

    gsap.from(".buttons .btn", {
        opacity: 0,
        scale: 0.5,
        stagger: 0.3,
        duration: 1,
        delay: 1.5,
    });

    // Button Hover Animation
    document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, { scale: 1.2, duration: 0.3, ease: "power1.out" });
        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { scale: 1, duration: 0.3, ease: "power1.out" });
        });
    });

    // Social Media Icons Animation
    gsap.from(".social-links img", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        delay: 2,
    });
});
