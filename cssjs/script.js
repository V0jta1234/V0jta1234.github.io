let revealed = false;

window.addEventListener('keydown', function(event) {
    if (!revealed && event.key.toLowerCase() === 's') {
        revealed = true;
        document.getElementById('obsah').innerHTML = `
            
        `;
    }
});