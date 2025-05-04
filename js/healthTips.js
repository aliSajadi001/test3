// آرایه tabs
const tabs = [
  {
    id: 0,
    title: "همه",
    images: [
      "public/baner/workforce-feature.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg",
      "public/baner/unnamed.jpg",
      "public/baner/The Importance of Water in a Laboratory.png",
      "public/baner/pexels-pixabay-40568.jpg",
      "public/baner/nurses-patients-care-procedures.webp",
      "public/baner/istockphoto-1012405368-612x612.jpg",
      "public/baner/lab-quality-assurance-l.jpg",
    ],
  },
  {
    id: 1,
    title: "کلینیک",
    images: [
      "public/baner/istockphoto-1012405368-612x612.jpg",
      "public/baner/pexels-pixabay-40568.jpg",
      "public/baner/workforce-feature.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg",
      "public/baner/nurses-patients-care-procedures.webp",
      "public/baner/unnamed.jpg",
      "public/baner/lab-quality-assurance-l.jpg",
      "public/baner/The Importance of Water in a Laboratory.png",
    ],
  },
  {
    id: 2,
    title: "خانواده",
    images: [
      "public/baner/nurses-patients-care-procedures.webp",
      "public/baner/lab-quality-assurance-l.jpg",
      "public/baner/unnamed.jpg",
      "public/baner/The Importance of Water in a Laboratory.png",
      "public/baner/pexels-pixabay-40568.jpg",
      "public/baner/workforce-feature.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg",
      "public/baner/istockphoto-1012405368-612x612.jpg",
    ],
  },
  {
    id: 3,
    title: "آزمایشگاه",
    images: [
      "public/baner/pexels-pixabay-40568.jpg",
      "public/baner/workforce-feature.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg",
      "public/baner/unnamed.jpg",
      "public/baner/The Importance of Water in a Laboratory.png",
      "public/baner/lab-quality-assurance-l.jpg",
      "public/baner/nurses-patients-care-procedures.webp",
      "public/baner/istockphoto-1012405368-612x612.jpg",
    ],
  },
  {
    id: 4,
    title: "اطفال",
    images: [
      "public/baner/nurses-patients-care-procedures.webp",
      "public/baner/istockphoto-1012405368-612x612.jpg",
      "public/baner/unnamed.jpg",
      "public/baner/The Importance of Water in a Laboratory.png",
      "public/baner/pexels-pixabay-40568.jpg",
      "public/baner/lab-quality-assurance-l.jpg",
      "public/baner/workforce-feature.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg",
    ],
  },
  {
    id: 5,
    title: "درمان",
    images: [
      "public/baner/The Importance of Water in a Laboratory.png",
      "public/baner/nurses-patients-care-procedures.webp",
      "public/baner/istockphoto-1012405368-612x612.jpg",
      "public/baner/lab-quality-assurance-l.jpg",
      "public/baner/workforce-feature.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg",
      "public/baner/unnamed.jpg",
      "public/baner/pexels-pixabay-40568.jpg",
    ],
  },
];

let activeTab = 0;

function renderHealthTips() {
  const appContainer = document.getElementById("app");

  let html = `
        <div class="bg-white w-full p-4 md:p-8 rtl lg:mt-10 mt-52">
            <!-- Header -->
            <div class="mb-6 md:mb-10">
                <!-- Title at the top -->
                <div class="text-right mb-4">
                    <h3 class="lg:text-xl text-sm text-orange-400 md:text-2xl font-bold">نکات بهداشتی</h3>
                </div>
                
                <!-- Subtitle and button - stacked on mobile, side by side on larger screens -->
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                    <div class="text-right">
                        <h2 class="text-blue-950 text-2xl md:text-3xl font-extrabold">ایمنی و راحتی</h2>
                    </div>
                    <div>
                        <button class="bg-sky-600 text-white lg:px-4 px-3 text-sm lg:text-lg lg:py-2 py-1 md:px-6 md:py-3 rounded-lg hover:bg-blue-600 transition duration-300 inline-flex items-center gap-2 whitespace-nowrap">
                            اطلاعات بیشتر
                            <i class="fas fa-angle-left"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Tabs - راست چین شده -->
            <div class="mt-6 md:mt-10">
                <div class="mb-8">
                    <div class="tabs-wrapper">
                        ${tabs
                          .map(
                            (tab) => `
                            <button
                                data-id="${tab.id}"
                                class="py-1 px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 ml-2 mb-2 focus:outline-none text-sm md:text-base lg:text-lg font-bold transition-all duration-300 whitespace-nowrap rounded-lg ${
                                  activeTab === tab.id
                                    ? "bg-sky-600 text-white"
                                    : "text-gray-600 hover:text-blue-600 hover:bg-sky-50"
                                }"
                            >
                                ${tab.title}
                            </button>
                        `
                          )
                          .join("")}
                    </div>
                </div>
                
                <!-- Images -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    ${tabs[activeTab].images
                      .map(
                        (image, index) => `
                        <div
                            class="cursor-pointer transform transition-transform duration-300 hover:scale-105 relative group rounded-xl overflow-hidden shadow-md"
                        >
                            <img
                                src="${image}"
                                alt="${tabs[activeTab].title} - تصویر ${
                          index + 1
                        }"
                                class="w-full h-48 sm:h-56 md:h-64 object-cover"
                            />
                            
                            <!-- Effect -->
                            <div class="absolute inset-0 bg-sky-400 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                                <h3 class="text-white text-xl font-bold lg:font-extrabold lg:text-2xl px-4 py-2 text-center shadow-text">
                                    ${tabs[activeTab].title}
                                </h3>
                            </div>
                            
                            <!-- Bottom effect -->
                            <div class="absolute bottom-0 font-bold left-1/2 transform -translate-x-1/2 bg-sky-300 rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                <span class="text-sm font-medium text-white">
                                    ${tabs[activeTab].title}
                                </span>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `;

  appContainer.innerHTML = html;

  // اضافه کردن event listener برای دکمه‌های تب
  document.querySelectorAll("[data-id]").forEach((button) => {
    button.addEventListener("click", function () {
      activeTab = parseInt(this.getAttribute("data-id"));
      renderHealthTips(); // رندر مجدد کامپوننت
    });
  });
}

document.addEventListener("DOMContentLoaded", renderHealthTips);
