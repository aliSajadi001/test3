document.addEventListener("DOMContentLoaded", function () {
    // Stats data
    const stats = [
      {
        id: 1,
        icon: "fa-solid fa-heart-circle-plus",
        value: 1000,
        label: "بیماران راضی",
      },
      {
        id: 2,
        icon: "fa-solid fa-globe",
        value: 500,
        label: "بخش سلامت",
      },
      {
        id: 3,
        icon: "fa-solid fa-file-lines",
        value: 300,
        label: "انواع تحقیق",
      },
      {
        id: 4,
        icon: "fa-solid fa-trophy",
        value: 20,
        label: "برنده جوایز",
      },
    ];

    const statsContainer = document.getElementById("stats-container");

    // Create and append stat items
    stats.forEach((stat) => {
      const statItem = document.createElement("div");
      statItem.className = "stat-item";

      // Create icon
      const icon = document.createElement("i");
      icon.className = `${stat.icon} stat-icon`;

      // Create value counter
      const value = document.createElement("span");
      value.className = "stat-value";
      value.textContent = "0";
      value.id = `stat-value-${stat.id}`;

      // Create label
      const label = document.createElement("span");
      label.className = "stat-label";
      label.textContent = stat.label;

      // Append elements to stat item
      statItem.appendChild(icon);
      statItem.appendChild(value);
      statItem.appendChild(label);

      // Append stat item to container
      statsContainer.appendChild(statItem);
    });

    // Intersection Observer for counting animation
    const countUpElements = document.querySelectorAll(".stat-value");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const statId = parseInt(element.id.split("-")[2]);
            const statData = stats.find((stat) => stat.id === statId);

            if (statData) {
              countUp(element, 0, statData.value, 2000);
            }

            // Unobserve after animation starts
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all counter elements
    countUpElements.forEach((element) => {
      observer.observe(element);
    });

    // Count up animation function
    function countUp(element, startValue, endValue, duration) {
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(
          progress * (endValue - startValue) + startValue
        );

        element.textContent = currentCount;

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    }
  });