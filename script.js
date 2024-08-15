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
  