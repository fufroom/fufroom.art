function getRandomBoldColor() {
    const boldColors = [
        "#ef8622", // Orange
        "#fdc20f", // Yellow-orange
        "#a1cd3a", // Green
        "#49bea7", // Teal
        "#6dcbd2", // Light-teal
        "#27bfd1", // Bright-blue
        "#6666ae", // Purple-blue
        "#85458a", // Purple
        "#b86bac", // Light-purple
        "#e84699", // Pink
        "#e3088c", // Fuschia
    ];
    const randomIndex = Math.floor(Math.random() * boldColors.length);
    return boldColors[randomIndex];
}


document.addEventListener("DOMContentLoaded", function() {
    function changeLinkColors() {
        const links = document.querySelectorAll('a'); 
        links.forEach(link => {
            const randomColor = getRandomBoldColor(); 
            link.style.color = randomColor; 
        });
    }
    //Change link colors once on load
    changeLinkColors();

    //Change link colors every 20sec
    setInterval(changeLinkColors, 20000);
});
