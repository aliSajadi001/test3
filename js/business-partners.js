      const partners = [
        { id: 1, name: "شرکت الف", logo: "public/baner/clients-3.png" },
        { id: 2, name: "شرکت ب", logo: "public/baner/clients-8.png" },
        { id: 3, name: "شرکت ج", logo: "public/baner/clients-6.png" },
        { id: 4, name: "شرکت د", logo: "public/baner/clients-6.png" },
        { id: 5, name: "شرکت ه", logo: "public/baner/clients-5.png" },
        { id: 6, name: "شرکت و", logo: "public/baner/clients-4.png" },
        { id: 7, name: "شرکت ز", logo: "public/baner/clients-3.png" },
        { id: 8, name: "شرکت ح", logo: "public/baner/clients-2.png" },
        { id: 9, name: "شرکت ط", logo: "public/baner/clients-1.png" },
      ];

      function renderBusinessPartners() {
        const appContainer = document.getElementById("business-partners-app");

        let html = `
        <div class="bg-white py-10 px-4 md:px-8 rtl py-[90px]">
            <div class="container mx-auto">
                <div class="relative overflow-hidden">
                    <div id="scroll-container" class="flex overflow-x-auto py-4 space-x-8 rtl:space-x-reverse cursor-grab scroll-container" style="scroll-behavior: smooth; user-select: none;">
                        <div class="w-4 shrink-0"></div>
                        ${partners
                          .map(
                            (partner) => `
                            <div class="shrink-0 w-32 md:w-40 h-24 md:h-28 flex items-center justify-center p-4 transition-transform duration-300">
                                <img
                                    src="${partner.logo}"
                                    alt="${partner.name}"
                                    class="max-w-full max-h-full object-contain"
                                    draggable="false"
                                />
                            </div>
                        `
                          )
                          .join("")}
                        <div class="w-4 shrink-0"></div>
                    </div>
                    <div class="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                    <div class="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                </div>
            </div>
        </div>
    `;

        appContainer.innerHTML = html;

        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;
        let autoScrollEnabled = true;
        let scrollInterval;

        const scrollContainer = document.getElementById("scroll-container");

        function startAutoScroll() {
          if (!autoScrollEnabled) return;

          scrollInterval = setInterval(() => {
            if (scrollContainer && !isDragging) {
              if (
                scrollContainer.scrollLeft >=
                scrollContainer.scrollWidth - scrollContainer.clientWidth
              ) {
                scrollContainer.scrollLeft = 0;
              } else {
                scrollContainer.scrollLeft += 1;
              }
            }
          }, 20);
        }

        startAutoScroll();

        scrollContainer.addEventListener("mousedown", function (e) {
          isDragging = true;
          autoScrollEnabled = false;
          clearInterval(scrollInterval);
          startX = e.pageX - scrollContainer.offsetLeft;
          scrollLeft = scrollContainer.scrollLeft;
          scrollContainer.style.scrollBehavior = "auto";
          scrollContainer.classList.remove("cursor-grab");
          scrollContainer.classList.add("cursor-grabbing");
        });

        scrollContainer.addEventListener("mousemove", function (e) {
          if (!isDragging) return;
          e.preventDefault();
          const x = e.pageX - scrollContainer.offsetLeft;
          const walk = (x - startX) * 2;
          scrollContainer.scrollLeft = scrollLeft - walk;
        });

        function stopDragging() {
          if (!isDragging) return;
          isDragging = false;
          scrollContainer.style.scrollBehavior = "smooth";
          scrollContainer.classList.add("cursor-grab");
          scrollContainer.classList.remove("cursor-grabbing");

          setTimeout(() => {
            autoScrollEnabled = true;
            startAutoScroll();
          }, 2000);
        }

        scrollContainer.addEventListener("mouseup", stopDragging);
        scrollContainer.addEventListener("mouseleave", stopDragging);

        scrollContainer.addEventListener("touchstart", function (e) {
          isDragging = true;
          autoScrollEnabled = false;
          clearInterval(scrollInterval);
          startX = e.touches[0].pageX - scrollContainer.offsetLeft;
          scrollLeft = scrollContainer.scrollLeft;
          scrollContainer.style.scrollBehavior = "auto";
        });

        scrollContainer.addEventListener("touchmove", function (e) {
          if (!isDragging) return;
          const x = e.touches[0].pageX - scrollContainer.offsetLeft;
          const walk = (x - startX) * 2;
          scrollContainer.scrollLeft = scrollLeft - walk;
        });

        scrollContainer.addEventListener("touchend", stopDragging);

        window.addEventListener("beforeunload", function () {
          clearInterval(scrollInterval);
        });
      }

      document.addEventListener("DOMContentLoaded", renderBusinessPartners);
