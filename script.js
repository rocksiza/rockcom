
function randomColor(){
    const colors = [
    "linear-gradient(to bottom, #270064, #0d1c6c, #002b70, #003770, #00426d, #00486b, #004d66, #005161, #005359, #005348, #00522f, #004f0e)",
    "radial-gradient(circle, #3f0000, #3b000d, #360015, #2f001a, #28001e, #24001c, #20001a, #1c0018, #190012, #14000a, #0c0004, #000000)",
    "linear-gradient(to left bottom, #3a5e4d, #325643, #2a4f39, #23472f, #1c4025, #22371a, #242f11, #252608, #261b06, #211308, #160a08, #000000)",
    "linear-gradient(to left, #3a5e4d, #2d554b, #234c48, #1c4244, #17393f, #17313a, #192934, #19222c, #191a22, #161318, #0f0a0d, #000000)",
    "linear-gradient(to right top, #000000, #20181f, #2e2d3f, #2b4660, #096379, #29788c, #418e9f, #58a5b3, #8bb9ce, #b9cee1, #e1e5f0, #ffffff)"
];
    var colorNum = Math.floor(Math.random() * 5);
    $('body').css('background-image', colors[colorNum]);

}

randomColor();

function textBoxBigger(id){
    $(id).css({
        "position": "fixed",        // Make sure the element stays in place while expanding
        "top": "0",                 // Align to the top
        "left": "0",                // Align to the left
        "width": "100vw",           // Full viewport width
        "height": "100vh",          // Full viewport height
        "z-index": 3,
        "transform": "none",        // Reset any existing transformations
        "transition": "all 0.5s ease-in-out"
        });

    $(".card").addClass("fade-out");

    $(".card img").css({"opacity": 0})

    $(".card").css({
        "color": "rgb(255, 235, 205, 0)",
        "border-radius": "0px"
    })


}


$("#cont3").click(function(){
    textBoxBigger("#cont3")
    setTimeout(function(){
        window.location.href = "testpage.html";
    }, 500);
})

$("#cont2").click(function(){
    textBoxBigger("#cont2")
    setTimeout(function(){
        window.location.href = "testpage.html";
    }, 500);
})

$("#cont1").click(function(){
    textBoxBigger("#cont1")
    setTimeout(function(){
        window.location.href = "testpage.html";
    }, 500);
})

$("#start").click(function(){
    $("#start_sound").get(0).play();
    $("#start").hide();
    $("#top-cover").css('transform', 'translateY(-100%)')
    $("#bottom-cover").css('transform', 'translateY(100%)');
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
const svgPaths = ['images/star (1).svg', 'images/star (2).svg', 'images/star (3).svg', 'images/star (4).svg', 'images/star (5).svg', 'images/star (6).svg', 'images/star (7).svg'];

// Place SVG images randomly on page load

placeSVGImages(svgPaths);
placeSVGImages(svgPaths);

  