document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.video');
    const overlay = document.querySelector('.overlay');

    overlay.addEventListener('mouseover', function () {
        video.play();
    });

    overlay.addEventListener('mouseout', function () {
        video.pause();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const content = document.querySelector('.content');

    darkModeToggle.addEventListener('change', function () {
        if (darkModeToggle.checked) {
            content.classList.add('dark-mode');
        } else {
            content.classList.remove('dark-mode');
        }
    });
});
