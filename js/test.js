// Function to open door1 to the left and door2 to the right
function openDoorsInDifferentDirections() {
    document.getElementById("door1").style.animation = "openToLeft 2s forwards";
    document.getElementById("door2").style.animation = "openToRight 2s forwards";
}

// Function to close door1 to the right and door2 to the left
function closeDoorsInDifferentDirections() {
    document.getElementById("door1").style.animation = "closeToRight 2s forwards";
    document.getElementById("door2").style.animation = "openToLeft 2s forwards";
}
