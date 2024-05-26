document.getElementById('open-button').addEventListener('click', function() {
    document.getElementById('card').classList.add('flipped');
});

document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('card').classList.remove('flipped');
});

const heart = document.getElementById('heart');
heart.addEventListener('click', function() {
    const colors = [
        'linear-gradient(to right, #ffafbd, #ffc3a0)',
        'linear-gradient(to right, #a1c4fd, #c2e9fb)',
        'linear-gradient(to right, #fbc2eb, #a6c1ee)',
        'linear-gradient(to right, #d4fc79, #96e6a1)',
        'linear-gradient(to right, #84fab0, #8fd3f4)',
        'linear-gradient(to right, #a18cd1, #fbc2eb)'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
});
