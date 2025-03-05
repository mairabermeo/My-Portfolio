document.addEventListener("DOMContentLoaded", function () {
    const text = "Get To Know Me!"; 
    let index = 0;
    const speed = 100;
    const target = document.getElementById("typewriter");
    if (target) {
        function typeWriter() {
            if (index < text.length) {
                target.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }
});
