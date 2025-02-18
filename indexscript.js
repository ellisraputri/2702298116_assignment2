

function nmc_button() {
    var moreText = document.getElementById("content-hide");
    var btnText = document.getElementById("nmc-button");

    var currentDisplay = window.getComputedStyle(moreText).display;
  
    if (currentDisplay === "none") {
      btnText.innerHTML = "Hide details";
      moreText.style.display = "inline";
    } else {
      btnText.innerHTML = "Click here for details!";
      moreText.style.display = "none";
    }
}
