document.addEventListener('DOMContentLoaded', function() {
    const slides = [
        document.getElementById('slide-1'),
        document.getElementById('slide-2'),
        document.getElementById('slide-3'),
        document.getElementById('slide-4')
    ];
    
    let currentSlide = 0;
    const slideInterval = 5000; // 5 ثانیه
    
    function nextSlide() {
        // مخفی کردن اسلاید فعلی
        slides[currentSlide].classList.remove('opacity-100');
        slides[currentSlide].classList.add('opacity-0');
        
        // رفتن به اسلاید بعدی
        currentSlide = (currentSlide + 1) % slides.length;
        
        // نمایش اسلاید جدید
        slides[currentSlide].classList.remove('opacity-0');
        slides[currentSlide].classList.add('opacity-100');
    }
    
    // شروع اسلایدر
    let slider = setInterval(nextSlide, slideInterval);
    
    // توقف اسلایدر هنگام هاور روی بنر
    const banner = document.querySelector('.relative');
    banner.addEventListener('mouseenter', () => {
        clearInterval(slider);
    });
    
    // شروع مجدد اسلایدر هنگام خروج هاور
    banner.addEventListener('mouseleave', () => {
        slider = setInterval(nextSlide, slideInterval);
    });
});