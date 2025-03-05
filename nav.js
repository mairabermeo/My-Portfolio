document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-bar a");

    navLinks.forEach(link => {
        const text = link.innerText;
        let newHTML = "";

        for (let i = 0; i < text.length; i++) {
            if (text[i] === " ") {
                newHTML += " "; 
            } else {
                newHTML += `<span style="display: inline-block">${text[i]}</span>`;
            }
        }

        link.innerHTML = newHTML;

        link.addEventListener("mouseenter", () => {
            let delay = 0;
            link.querySelectorAll("span").forEach(span => {
                span.style.transition = "transform 0.3s ease-out";
                span.style.transform = "translateY(-10px)";
                span.style.transitionDelay = `${delay}s`;
                delay += 0.05;
            });
        });

        link.addEventListener("mouseleave", () => {
            let delay = 0;
            link.querySelectorAll("span").forEach(span => {
                span.style.transform = "translateY(0)";
                span.style.transitionDelay = `${delay}s`;
                delay += 0.05;
            });
        });
    });
});

