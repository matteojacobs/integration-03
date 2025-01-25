document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("progressBar");

    gsap.to(progressBar, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: "html",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    });
});