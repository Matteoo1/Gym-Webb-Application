// Javascript for date
function displayDate(){
    const currentDate = new Date();
    const dateDisplay = document.getElementById('date-display');
    dateDisplay.textContent = currentDate.toDateString();
}

// Call the function when the page loads
window.onload = displayDate;

// Javascript for the hamburger menu
document.querySelector(".hamburger").addEventListener("click", function() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
});
