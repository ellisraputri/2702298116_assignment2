document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".star");
    const ratingText = document.getElementById("rating-text");
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener("mouseover", () => {
            highlightStars(star.getAttribute("data-value"));
        });

        star.addEventListener("click", () => {
            selectedRating = star.getAttribute("data-value");
            ratingText.textContent = `Your rating: ${selectedRating}`;
            highlightStars(selectedRating, true);
        });

        star.addEventListener("mouseleave", () => {
            highlightStars(selectedRating);
        });
    });

    function highlightStars(rating, permanent = false) {
        stars.forEach(star => {
            const value = star.getAttribute("data-value");
            star.classList.toggle("active", value <= rating);
        });
    }

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }
});



