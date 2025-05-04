document.addEventListener("DOMContentLoaded", function () {
    // Tab data
    const tabs = [
      {
        id: 0,
        title: "کیفیت",
        content:
          "هدف اصلی پزشکی خانواده ایجاد اعتماد بین بیمار و پزشک عمومی است، که امکان دستیابی به بهترین نتیجه درمانی را فراهم می‌کند. ویژگی‌های خاص کار پزشک عمومی (پزشک خانواده) از بسیاری جهات هم برای پزشکان عمومی و هم برای بیماران منطقی‌تر و سودمندتر است.",
      },
      {
        id: 1,
        title: "واکنش",
        content:
          "اهدف اصلی پزشکی خانواده ایجاد اعتماد بین بیمار و پزشک عمومی است، که امکان دستیابی به بهترین نتیجه درمانی را فراهم می‌کند. ویژگی‌های خاص کار پزشک عمومی (پزشک خانواده) از بسیاری جهات هم برای پزشکان عمومی و هم برای بیماران منطقی‌تر و سودمندتر است.",
      },
      {
        id: 2,
        title: "تمرکز",
        content:
          "هدف اصلی پزشکی خانواده ایجاد اعتماد بین بیمار و پزشک عمومی است، که امکان دستیابی به بهترین نتیجه درمانی را فراهم می‌کند. ویژگی‌های خاص کار پزشک عمومی (پزشک خانواده) از بسیاری جهات هم برای پزشکان عمومی و هم برای بیماران منطقی‌تر و سودمندتر است.",
      },
    ];

    let activeTab = 0;
    const tabsContainer = document.getElementById("tabs-container");
    const tabContent = document.getElementById("tab-content");

    // Create tabs
    tabs.forEach((tab) => {
      const tabButton = document.createElement("button");
      tabButton.className = `py-2 md:py-3 px-2 md:px-4 focus:outline-none flex-1 text-center transition-all duration-300 text-xl md:text-2xl font-bold md:font-extrabold ${
        activeTab === tab.id
          ? "border-b-4 border-orange-400 text-blue-950"
          : "hover:text-gray-700 border-b-4 border-transparent text-stone-400"
      }`;
      tabButton.textContent = tab.title;

      tabButton.addEventListener("click", function () {
        setActiveTab(tab.id);
      });

      tabsContainer.appendChild(tabButton);
    });

    // Set initial content
    tabContent.textContent = tabs[activeTab].content;

    // Function to update active tab
    function setActiveTab(id) {
      activeTab = id;

      // Update tab buttons
      const tabButtons = tabsContainer.querySelectorAll("button");
      tabButtons.forEach((button, index) => {
        if (index === id) {
          button.className =
            "py-2 md:py-3 px-2 md:px-4 focus:outline-none flex-1 text-center transition-all duration-300 text-xl md:text-2xl font-bold md:font-extrabold border-b-4 border-orange-400 text-blue-950";
        } else {
          button.className =
            "py-2 md:py-3 px-2 md:px-4 focus:outline-none flex-1 text-center transition-all duration-300 text-xl md:text-2xl font-bold md:font-extrabold hover:text-gray-700 border-b-4 border-transparent text-stone-400";
        }
      });

      // Update content
      tabContent.textContent = tabs[id].content;
    }
  });