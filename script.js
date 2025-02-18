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
});

$(document).ready(function(){
    $(".accordion").click(function(){
        $(this).toggleClass("active");
        $(this).next(".panel").slideToggle(300); 
    });
});



