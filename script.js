// Function to adjust the height of the map-container based on its width
function adjustMapContainerHeight() {
    const mapContainer = document.getElementById('map-container');
    const aspectRatio = 768 / 1366; // Original aspect ratio
    const viewportWidth = window.innerWidth;
    const newHeight = viewportWidth * aspectRatio;
    mapContainer.style.height = `${newHeight}px`;
}

// Adjust the height on page load
adjustMapContainerHeight();

// Adjust the height on window resize
window.addEventListener('resize', adjustMapContainerHeight);

// Lock scrolling
document.body.style.overflow = 'hidden'; // Prevent scrolling through the body
window.addEventListener('wheel', function(e) {
    e.preventDefault(); // Prevent scrolling through the wheel event
}, { passive: false });
