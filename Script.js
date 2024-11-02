// Function to open the lightbox with the selected image
document.querySelectorAll('.profile-pic, .gallery img, .chat-screenshots img').forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = image.src;  // Set the image source
        lightbox.style.display = 'flex';  // Show the lightbox
    });
});

// Function to close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
function calculateLove() {
    const name1 = document.getElementById("name1").value.trim().toLowerCase();
    const name2 = document.getElementById("name2").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");

    // Define pairs that should always show 100%
    const perfectPairs = [
        { partner1: "tulisa", partner2: "youssef" },
        { partner1: "tulisa", partner2: "hoodie" },
        { partner1: "tulisa", partner2: "hoodie guy" }
    ];

    // Check if the entered names match any of the perfect pairs
    const isPerfectMatch = perfectPairs.some(pair => 
        (name1 === pair.partner1 && name2 === pair.partner2) ||
        (name1 === pair.partner2 && name2 === pair.partner1)
    );

    if (isPerfectMatch) {
        resultDiv.innerText = "❤️ 100% Match! ❤️";
    } else {
        // For other names, generate a random percentage
        const randomPercentage = Math.floor(Math.random() * 100) + 1;
        resultDiv.innerText = `💖 ${randomPercentage}% Match 💖`;
    }
}