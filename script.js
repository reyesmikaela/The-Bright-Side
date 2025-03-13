// Bowl info section on the researc page
const bowlInfo = {
    tibetan: "Made of seven metals (gold, silver, copper, tin, iron, lead, mercury), each contributing unique sound qualities.",
    metal: "Grounded vibrations and complex overtones.",
    crystal: "Pure, sustained tones ideal for focus and mental clarity.",
    alchemical: "Warm, harmonic sound with richer overtones.",
    himalayan: "Bright, resonant tones that help with focus and alertness.",
    chakra: "Tuned to specific frequencies, ranging from deep to high tones."
};

// Function to change box content
function showInfo(bowlType) {
    let box = document.querySelector(`.bowl-box[data-type='${bowlType}']`);

    if (box.innerText === bowlInfo[bowlType]) {
        // Reset back to the name
        box.innerText = bowlType.charAt(0).toUpperCase() + bowlType.slice(1) + " Bowls";
    } else {
        // Change to the info
        box.innerText = bowlInfo[bowlType];
    }
}



// Navigation function to handle page navigation and smooth scrolling
function setupNavigation() {
    document.getElementById("home-link").addEventListener("click", function () {
        document.getElementById("home-section").scrollIntoView({ behavior: "smooth" }); // Scroll to Home section
    });

    document.getElementById("how-it-works-link").addEventListener("click", function () {
        document.getElementById("how-it-works-section").scrollIntoView({ behavior: "smooth" }); // Scroll to How It Works section
    });

    document.getElementById("research-link").addEventListener("click", function () {
        document.getElementById("research-section").scrollIntoView({ behavior: "smooth" }); // Scroll to Research section
    });

    document.getElementById("team-link").addEventListener("click", function () {
        document.getElementById("team-section").scrollIntoView({ behavior: "smooth" }); // Scroll to Team section
    });
}

// Initialize the setupNavigation function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", setupNavigation);







