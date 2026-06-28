const text =
"Sunflowers always turn toward the light. I hope, with time, we can find ours again.";

let i = 0;
const typing = document.getElementById("typing");

function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = function () {
    typeWriter();
};

const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        btn.innerHTML = "🎵 Play Music";
    }
});

const petals = document.getElementById("petals");

function createPetal() {
    const petal = document.createElement("img");
    petal.src = "images/petals.png";

    petal.style.position = "fixed";
    petal.style.width = (20 + Math.random() * 30) + "px";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-50px";
    petal.style.opacity = Math.random();

    petal.style.pointerEvents = "none";
    petal.style.zIndex = "999";

    document.body.appendChild(petal);

    let y = -50;
    let x = parseFloat(petal.style.left);

    const speed = 2 + Math.random() * 3;

    const fall = setInterval(() => {
        y += speed;
        x += Math.sin(y / 40);

        petal.style.top = y + "px";
        petal.style.left = x + "px";

        if (y > window.innerHeight + 100) {
            clearInterval(fall);
            petal.remove();
        }
    }, 20);
}

setInterval(createPetal, 700);
