document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
 
// Responsive navigation
const toggleButton = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.navbar-nav');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function validateForm() {
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var name = document.getElementById("name").value;

    if (!date || !time || !name) {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    var moreText = document.getElementById("read-more");
    var btnText = document.querySelector("#about button");
    
    // Initially hide the additional text
    moreText.style.display = "none";
    
    // Add event listener to the button
    btnText.addEventListener("click", function() {
        if (moreText.style.display === "none") {
            moreText.style.display = "block";
            btnText.innerHTML = "Read Less";
        } else {
            moreText.style.display = "none";
            btnText.innerHTML = "Read More";
        }
    });
});

