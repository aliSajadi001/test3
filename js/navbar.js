document.addEventListener("DOMContentLoaded", function () {
    //  Bottons menu
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenuOverlay = document.getElementById(
      "mobile-menu-overlay"
    );
    const mobileMenu = document.getElementById("mobile-menu");
    const closeButton = document.getElementById("close-mobile-menu");
    const menuHeaders = document.querySelectorAll(".menu-header");

    // Open the menu
    mobileMenuButton.addEventListener("click", function () {
      mobileMenuOverlay.classList.remove("hidden");
      mobileMenu.style.width = "70%";
    });

    //  Close the  menu
    function closeMenu() {
      mobileMenu.style.width = "0";
      setTimeout(() => {
        mobileMenuOverlay.classList.add("hidden");
      }, 500);
    }

    closeButton.addEventListener("click", closeMenu);

    //   Close with click on overlay
    mobileMenuOverlay.addEventListener("click", function (event) {
      if (event.target === mobileMenuOverlay) {
        closeMenu();
      }
    });

    //  Close and Open the submenus
    menuHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const menuItem = this.closest(".menu-item");
        const submenu = menuItem.querySelector(".submenu");
        const icon = this.querySelector("i");
        const isActive = menuItem.classList.contains("active");

        // Close the all open submenu
        document.querySelectorAll(".menu-item.active").forEach((item) => {
          if (item !== menuItem) {
            const itemSubmenu = item.querySelector(".submenu");
            const itemIcon = item.querySelector("i");

            item.classList.remove("active");
            item.style.borderBottom = "none";
            itemIcon.style.transform = "rotate(0deg)";

            // Close the submenu
            itemSubmenu.style.maxHeight = "0";
            setTimeout(() => {
              itemSubmenu.classList.add("hidden");
            }, 300);
          }
        });

        // Open or close
        if (isActive) {
          menuItem.classList.remove("active");
          menuItem.style.borderBottom = "none";
          icon.style.transform = "rotate(0deg)";

          submenu.style.maxHeight = "0";
          setTimeout(() => {
            submenu.classList.add("hidden");
          }, 300);
        } else {
          menuItem.classList.add("active");
          menuItem.style.borderBottom = "4px solid #3b82f6";
          icon.style.transform = "rotate(-90deg)";

          submenu.classList.remove("hidden");
          submenu.style.maxHeight = submenu.scrollHeight + "px";
        }
      });
    });
  });