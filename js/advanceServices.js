    // Optional JavaScript for button functionality
    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll(".card-back button");
        buttons.forEach((button) => {
          button.addEventListener("click", function (e) {
            e.stopPropagation(); // Prevent card flip when clicking the button
            console.log("بیشتر بدانید کلیک شد");
          });
        });
      });