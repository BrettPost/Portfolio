/*
    Function updates the current selected nav link.
*/
window.addEventListener("load", updateNav, true); 
function updateNav() {
    const navList = ["index", "projects"];
    const pageId = location.pathname.split("/").slice(-1).toLocaleString().split(".")[0].toLocaleString();

    navList.forEach(element => {
        if (element !== pageId) { 
            document.getElementById(pageId).style.borderStyle = "none";
        }
    });
    document.getElementById(pageId).style.borderBottom = "1px solid #AAF0D1";
};


/*
*  Function counts down from a target date every second.
*/
function countdownTo(targetDate) {
    const target = new Date(targetDate).getTime();
    const countdown = document.getElementById('countdown');
  
    // Update the count down every 1 second
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = target - now;
    
        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Output the result in a variable
        const countdownText = days + " Days - " + hours + " Hours - " + minutes + " Minutes - " + seconds + " Seconds";
    
        // If the count down is over, write some text and stop the interval
        if (distance < 0) {
            clearInterval(interval);
            console.log("The countdown is over!");
            countdown.innerText = "00 Days - 00 Hours - 00 Minutes - 00 Seconds";
        } else {
            countdown.innerText = countdownText;
            // console.log(countdownText);
        }
    }, 1000);
}

