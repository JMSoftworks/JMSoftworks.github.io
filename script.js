document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        const targetId = this.getAttribute('data-target');
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(targetId).style.display = 'block';
    });
});