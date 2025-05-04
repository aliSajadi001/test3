document.addEventListener("DOMContentLoaded", function () {
    // Add hover effect for service cards
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        const label = this.querySelector(".service-label");
        label.style.transform = "translate(-50%, -16px)";
      });

      card.addEventListener("mouseleave", function () {
        const label = this.querySelector(".service-label");
        label.style.transform = "translate(-50%, 50%)";
      });
    });
  });