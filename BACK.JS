function changeMessage() {
    document.getElementById("message").innerText =
        "Thanks for clicking the button!";
}

// Mobile nav toggle
(function setupNavToggle(){
    const btn = document.querySelector('.nav-toggle');
    const links = document.getElementById('nav-links');
    if (!btn || !links) return;
    btn.addEventListener('click', function(){
        const open = links.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
})();