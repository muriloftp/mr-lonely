
document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const mainContainer = document.getElementById("mainContainer");
    const contentContainer = document.getElementById("contentContainer");

    yesBtn.addEventListener("click", function () {
        
        mainContainer.style.display = 'none';

        
        contentContainer.innerHTML = '';

        
        const iframe = document.createElement('iframe');
        iframe.width = '1920';
        iframe.height = '1080';
        iframe.src = 'https://www.youtube.com/embed/j1nvD6MZiVw?autoplay=1';
        iframe.frameborder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowfullscreen = true;

        
        contentContainer.appendChild(iframe);

    });

    noBtn.addEventListener("click", function () {
        
        mainContainer.style.display = 'none';

        
        contentContainer.innerHTML = '';

        
        const iframe = document.createElement('iframe');
        iframe.width = '1920';
        iframe.height = '1080';
        iframe.src = 'https://www.youtube.com/embed/j1nvD6MZiVw?autoplay=1';
        iframe.frameborder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowfullscreen = true;

        
        contentContainer.appendChild(iframe);
    });
});