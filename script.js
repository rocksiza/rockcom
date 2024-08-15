$("#start").click(function(){
    $("#start_sound").get(0).play();
    $("#start").hide();
    var top_cover = document.getElementById('top-cover');
    var bottom_cover = document.getElementById('bottom-cover');
    top_cover.style.transform = 'translateY(-100%)';
    bottom_cover.style.transform = 'translateY(100%)';
})


function adjustMapContainerHeight() {
    const mapContainer = document.getElementById('cards');
    const aspectRatio = 768 / 1366; // Original aspect ratio
    const viewportWidth = window.innerWidth;
    const newHeight = viewportWidth * aspectRatio;
    mapContainer.style.height = `${newHeight}px`;
}

// Adjust the height on page load
adjustMapContainerHeight();

// Adjust the height on window resize
window.addEventListener('resize', adjustMapContainerHeight);

if (window.innerWidth > 768) {  // 768px is a common breakpoint for tablets
    // Lock scrolling on computers and larger tablets
    document.body.style.overflow = 'hidden'; // Prevent scrolling through the body
    window.addEventListener('wheel', function(e) {
        e.preventDefault(); // Prevent scrolling through the wheel event
    }, { passive: false });
} else {
    // Allow scrolling on mobile devices
    document.body.style.overflow = 'auto'; // Ensure scrolling is enabled on mobile
}

function getRandomPosition(maxWidth, maxHeight) {
    return {
        x: Math.floor(Math.random() * maxWidth),
        y: Math.floor(Math.random() * maxHeight)
    };
}

function placeSVGImages(svgPaths) {
    const body = document.body;
    const maxWidth = body.clientWidth - 100; // Subtract the width of the image to prevent overflow
    const maxHeight = body.clientHeight - 100; // Subtract the height of the image to prevent overflow

    svgPaths.forEach(path => {
        const img = document.createElement('img');
        img.src = path;
        img.style.width = '50px'; // Set fixed width
        img.style.height = '50px'; // Set fixed height
        const position = getRandomPosition(maxWidth, maxHeight);
        img.style.left = `${position.x}px`;
        img.style.top = `${position.y}px`;
        body.appendChild(img);
    });
}

// Paths to SVG images
const svgPaths = ['star (1).svg', 'star (2).svg', 'star (3).svg', 'star (4).svg', 'star (5).svg', 'star (6).svg', 'star (7).svg'];

// Place SVG images randomly on page load
window.onload = () => {
    placeSVGImages(svgPaths);
    placeSVGImages(svgPaths);
};

  