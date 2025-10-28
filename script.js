const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileSidebar = document.getElementById("mobileSidebar");
const closeSidebar = document.getElementById("closeSidebar");

// Open sidebar
mobileMenuBtn.addEventListener("click", () => {
  mobileSidebar.classList.add("active");
});

// Close sidebar
closeSidebar.addEventListener("click", () => {
  mobileSidebar.classList.remove("active");
});

// Handle dropdowns
document.querySelectorAll(".sidebar-item").forEach(item => {
  item.addEventListener("click", () => {
    const submenu = item.nextElementSibling;
    const icon = item.querySelector(".dropdown-icon");

    if (submenu && icon) {
      const isOpen = !submenu.classList.contains("d-none");
      document.querySelectorAll(".sidebar-submenu").forEach(sub => sub.classList.add("d-none"));
      document.querySelectorAll(".dropdown-icon").forEach(ic => ic.classList.remove("rotate"));

      if (!isOpen) {
        submenu.classList.remove("d-none");
        icon.classList.add("rotate");
      }
    }
  });
});

// Auto close sidebar on resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    mobileSidebar.classList.remove("active");
  }
});


// end of header script 


  // client section script 
const clientSwiper = new Swiper('.myClientSwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    allowTouchMove: true, // Only swipe
    navigation: false,     // Disable arrows
  });

  


  // Tab click logic
  const tabs = document.querySelectorAll('.service-tab');
  const contents = document.querySelectorAll('.service-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.add('d-none'));

      tab.classList.add('active');
      const target = tab.dataset.target;
      document.getElementById(target).classList.remove('d-none');
    });
  });

 var swiper = new Swiper(".myServiceSwiper", {
    slidesPerView: 3,           // Show 3 at a time (default)
    slidesPerGroup: 1,          // Move 1 per arrow click/swipe
    spaceBetween: 20,           // Gap between slides
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
    }
  });

  const awardsSwiper = new Swiper('.awardsSwiper', {
  slidesPerView: 1,  // default for very small screens
  spaceBetween: 20,
  loop: false,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    480: {   // small phones
      slidesPerView: 1,
    },
    576: {   // larger phones
      slidesPerView: 1.2,
    },
    768: {   // tablets
      slidesPerView: 2,
    },
    992: {   // desktops
      slidesPerView: 3,
    },
  },
});
 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// ✅ Initialize Swiper for Testimonials
const testimonialSlider = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});



// swiper for the searchtrendcard 
// Initialize Swiper for Trend Cards
const trendCardSlider = new Swiper(".trend-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false, // disable loop so arrows disable at edges
  navigation: {
    nextEl: ".swiper-button-next.trend-nav",
    prevEl: ".swiper-button-prev.trend-nav",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {

    // Close all other items
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    // Toggle clicked item
    item.classList.toggle("active");
  });
});

var swiper = new Swiper(".awardsSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 1.2
    },
    0: {
      slidesPerView: 1
    }
  },
  loop: true,
  grabCursor: true,
});
