
let slides = [
    { img: "./images/img1.jpg", caption: "✨ “Every wall tells a royal story." },
    { img: "./images/img2.jpg", caption: "💫Windows of the Wind, Heart of Jaipur." },
    { img: "./images/img4.jpg", caption: "🌙 “Symmetry that steals your breath.”" },
    { img: "./images/img3.jpg", caption: "🌞 “Golden city, golden memories.”" },
    { img: "./images/img5.jpg", caption: "💖 “Made of marble, powered by love.”" },
    { img: "./images/img6.jpg", caption: "✨London nights, bridge lights." },
    
];

let currentIndex = 0;
let autoPlayInterval = null;

const slideImg = document.getElementById("slideImg");
const caption = document.getElementById("caption");
const counter = document.getElementById("counter");
const message = document.getElementById("message");


function showSlide(index) {
    slideImg.src = slides[index].img;
    caption.textContent = `${slides[index].caption}`;
    counter.textContent = `Slide ${index + 1} of ${slides.length}`;
    message.textContent = "";
}


document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
    }
    else {
        document.getElementById("message").textContent = "This is The Last Slide";
    }
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
    else {
        document.getElementById("message").textContent = "This is the first slide.";
    }
});

document.getElementById("addBtn").addEventListener("click", () => {
    const imgUrl = document.getElementById("imgUrl").value.trim();
    const captionInput = document.getElementById("captionInput").value.trim();
    if (imgUrl && captionInput) {
        slides.push({ img: imgUrl, caption: captionInput });
        currentIndex = slides.length - 1;
        showSlide(slides.length - 1);
        document.getElementById("imgUrl").value = "";
        document.getElementById("captionInput").value = "";
        alert("New image added successfully!");
    } else {
        alert("Please enter both image URL and caption.");
    }
});

document.getElementById("autoPlayBtn").addEventListener("click", () => {
    if (!autoPlayInterval) {
        autoPlayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 3000);
    }
});

document.getElementById("pauseBtn").addEventListener("click", () => {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
});

showSlide(currentIndex);