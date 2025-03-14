document.addEventListener("DOMContentLoaded", () => {
    const circle = document.createElement("div");
    const dot = document.createElement("div");

    circle.classList.add("cursor-circle");
    dot.classList.add("cursor-dot");

    document.body.appendChild(circle);
    document.body.appendChild(dot);

    document.addEventListener("mousemove", (event) => {
        gsap.to(circle, {
            x: event.clientX - 15,
            y: event.clientY - 15,
            ease: "power2.out",
            duration: 0.3
        });

        gsap.to(dot, {
            x: event.clientX - 3,
            y: event.clientY - 3,
            ease: "power2.out",
            duration: 0.1
        });
    });
 

    // Dark Mode Toggle
    const themeButton = document.getElementById("theme-button");

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
});
