
function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByTagName("BODY")[0].style.backgroundColor = b;
}

// Function to apply selected font
function applyFont(font) {
    document.body.style.fontFamily = font;
}

// Event listener for font selector
document.getElementById('fontSelector').addEventListener('change', function() {
    var selectedFont = this.value;
    applyFont(selectedFont);
});

function showDetails(imageSrc, description) {
    var modal = document.getElementById('modal');
    var fullImage = document.getElementById('fullImage');
    var descriptionElement = document.getElementById('description');

    fullImage.src = imageSrc;
    descriptionElement.textContent = description;

    modal.style.display = 'block';
}

function hideDetails() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

