// subitem of our service 
const items = document.querySelectorAll('.submenu-left-item');
const itemcontent = document.querySelectorAll('.submenu-content');

// default show SEO
showContent("seo");

items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const target = item.getAttribute('data-target');
    showContent(target);
  });
});

function showContent(target) {
  itemcontent.forEach(content => {
    content.classList.add('d-none');
    if (content.getAttribute('data-content') === target) {
      content.classList.remove('d-none');
    }
  });
}


const mobileMenuBtn = document.getElementById("hamburger");
const mobileSidebar = document.getElementById("mobileSidebar");
const closeSidebar = document.getElementById("closeSidebar");

// Open sidebar
mobileMenuBtn.addEventListener("click", () => {
  mobileSidebar.classList.add("active");
  mobileMenuBtn.classList.add("hideit")
  closeSidebar.classList.remove('hideit')
});

// Close sidebar
closeSidebar.addEventListener("click", () => {
  mobileSidebar.classList.remove("active");
  mobileMenuBtn.classList.remove("hideit")
  closeSidebar.classList.add("hideit")
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


// end of header script 

// logoslider script 

var slider = new Swiper('.logoswiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  simulateTouch: true,   // Enable dragging/swiping
  grabCursor: true,      // Show hand cursor on desktop
  pagination: {
    el: ".logopagination",
    clickable: true,
  },

});

// logoslider script end 





// service slider 

const serviceswiper = new Swiper(".sliderservice", {
  slidesPerView: 2,      // how many slides visible
  spaceBetween: 20,      // gap between slides in px
  // infinite loop
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiperright",
    prevEl: ".swiperleft",
  },

})

var swiperss = new Swiper(".contentSwiperTabs", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".contenttab-next",
    prevEl: ".contenttab-prev",
  },
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



const awardsSwiper = new Swiper('.awardsSwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
    disabledClass: 'swiper-button-disabled',
  },
  breakpoints: {
    480: { slidesPerView: 1 },
    576: { slidesPerView: 1.2 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
  watchOverflow: true,
});


// testimonial slider 
var swiper = new Swiper(".testimonial-slider", {
  loop: false, // ❌ No looping
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      const { isBeginning, isEnd } = this;

      // Disable/Enable buttons
      document.querySelector(".swiper-button-prev").classList.toggle("disabled", isBeginning);
      document.querySelector(".swiper-button-next").classList.toggle("disabled", isEnd);
    },
  },
});



// faqswiper 
var faqSwiper = new Swiper(".faqswiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".faq-next",
    prevEl: ".faq-prev",
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    }
  },
  on: {
    // Auto disable arrows when not enough slides
    afterInit: function (swiper) {
      toggleArrows(swiper);
    },
    resize: function (swiper) {
      toggleArrows(swiper);
    }
  }
});

function toggleArrows(swiper) {
  const prev = document.querySelector(".faq-prev");
  const next = document.querySelector(".faq-next");

  if (swiper.slides.length <= swiper.params.slidesPerView) {
    prev.classList.add("disabled");
    next.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
    next.classList.remove("disabled");
  }
}
// faq q/a 
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");
  const icon = item.querySelector(".icon");

  btn.addEventListener("click", () => {

    // Desktop: only one open
    if (window.innerWidth > 800) {
      faqItems.forEach(i => {
        if (i !== item) {
          i.classList.remove("active");
          i.querySelector(".icon").textContent = "+";
        }
      });
    }

    item.classList.toggle("active");

    // Icon change
    if (item.classList.contains("active")) {
      icon.textContent = "×";
    } else {
      icon.textContent = "+";
    }
  });
});


// faq tabs 
const faqTabs = document.querySelectorAll(".faq-slider");
const faqitems = document.querySelectorAll(".faq-items");

faqitems.forEach((items) => {
  if (items.className == "forseoservices") {
    items.style.display = 'block'
  }
  else {
    items.style.display = 'none'
  }
})


faqTabs.forEach(faqtab => {
  faqtab.addEventListener("click", () => {
    const faqCategory = faqtab.dataset.category;

    // Remove active from all tabs
    faqTabs.forEach(t => t.classList.remove("active"));

    // Add active to clicked tab
    faqtab.classList.add("active");

    // Show/hide FAQs based on category
    faqitems.forEach(faq => {
      if (faq.classList.contains(faqCategory)) {
        faq.style.display = "block";
      } else {
        faq.style.display = "none";
      }
    });
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">
                <span class="tick"></span>
              </span>`;
    },
  },
  breakpoints: {
    0: { slidesPerView: 3 },
    768: { slidesPerView: 3 }
  }
});

var statsSwiper = new Swiper(".stats-test-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true, // optional: make slides loop infinitely
  pagination: {
    el: ".stats-test-swiper .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 1 },
    992: { slidesPerView: 1 }
  }
});


// sidefixed and sidetabs 
const sideFixed = document.querySelector('.sidefixed');
const fixedTabs = document.querySelector('.fixedtabs');
const closeBtn = document.querySelector('.closefaq');

sideFixed.addEventListener('click', () => {
  fixedTabs.classList.add('active');
  sideFixed.classList.add('hide');
});

closeBtn.addEventListener('click', () => {
  fixedTabs.classList.remove('active');
  sideFixed.classList.remove('hide');
});
