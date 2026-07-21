/**
 * Trio Boutique - Core JS Script
 * Premium UX Interactions and State Management
 */

// ==========================================
// 1. MOCK DATABASE (Luxury Product Catalog)
// ==========================================
const PRODUCTS = [
  {
    id: 12,
    name: "چيبة مشجرة راقية",
    price: 350,
    oldPrice: 500,
    category: "skirts",
    categoryName: "جيبات",
    badge: "sale",
    badgeText: "خصم 30% 🔥",
    description: "لو بتدوري على چيبة شيك ومريحة وتعيش معاكي طول السنة. چيبة مشجرة، مبطنة ومش بتشف، مريحة في اللبس وتنفع لكل المواسم.",
    longDescription: "چيبة مشجرة راقية من تشكيلة Trio الحصرية، مبطنة بالكامل وغير شفافة لتمنحكِ الراحة والأمان. تصميم مريح جداً في اللبس بفضل خاماتها الخفيفة وتصميمها الانسيابي الذي يناسب كل المواسم والوزن من 50 إلى 80 كيلو بكل ثقة.",
    colors: [
      { name: "موف", hex: "#9A7B9F", image: "assets/skirt_printed_mauve.jpg" },
      { name: "أخضر", hex: "#4C9E76", image: "assets/skirt_printed_green.jpg" }
    ],
    sizes: ["فري سايز (50 لـ 80 كيلو)"],
    features: [
      "تصميم مشجر كلاسيكي أنيق ومميز للغاية.",
      "مبطنة بالكامل لتكون غير شفافة (مش بتشف) بنسبة 100%.",
      "مريحة جداً في الحركة واللبس ومناسبة لجميع فصول السنة.",
      "تنسدل بنعومة لتمنحكِ قواماً متناسقاً ومميزاً.",
      "مقاس فري سايز مناسب ومرن للأوزان من 50 إلى 80 كجم."
    ],
    fabric: "شيفون حريري ناعم مبطن ببطانة قطنية خفيفة ومريحة.",
    care: "يُغسل يدوياً أو في الغسالة ببرنامج للملابس الرقيقة بماء بارد. الكي بحرارة خفيفة جداً.",
    inStock: true,
    bestSeller: false,
    newArrival: true,
    dateAdded: "2026-07-20",
    gallery: [
      "assets/skirt_printed_mauve.jpg",
      "assets/skirt_printed_green.jpg"
    ]
  },
  {
    id: 11,
    name: "سوت شيك ستايل تركي",
    price: 850,
    oldPrice: 1200,
    category: "sets",
    categoryName: "أطقم",
    badge: "best",
    badgeText: "الأكثر طلباً 🔥",
    description: "سوت شيك ستايل تركي من قطعتين تمنحكِ إطلالة مميزة ومريحة في كل وقت. خامة كتان قطن طبيعي ومقاس مناسب.",
    longDescription: "سوت نسائية شيك جداً بتصميم وستايل تركي راقٍ مكون من قطعتين (بلوزة انسيابية أنيقة مع بنطلون واسع). مصنوعة من خامة كتان قطن طبيعي عالية الجودة تضمن لكِ أعلى درجات الراحة والمرونة في الحركة مع المحافظة على المظهر الشيك والمميز.",
    colors: [
      { name: "أزرق", hex: "#1F4E5B", image: "assets/suit_turkish_blue.jpg" },
      { name: "زيتي", hex: "#4F5D2F", image: "assets/suit_turkish_olive.jpg" },
      { name: "بيبي بينك", hex: "#F4C2C2", image: "assets/suit_turkish_pink.jpg" },
      { name: "بيج", hex: "#E1D0C1", image: "assets/suit_turkish_beige.jpg" }
    ],
    sizes: ["فري سايز (50 لـ 80 كيلو)"],
    features: [
      "سوت قطعتين بستايل تركي شيك ومميز للغاية.",
      "خامة كتان قطن طبيعي ناعمة ومريحة ومناسبة لجميع الأوقات.",
      "تتضمن بلوزة أنيقة مزينة بحلية نجمة البحر الذهبية الراقية على الجانب.",
      "بنطلون واسع ومريح يكمل إطلالة السوت بشكل مثالي.",
      "مقاس فري سايز مناسب ومرن للأوزان من 50 إلى 80 كجم."
    ],
    fabric: "كتان قطن طبيعي ناعم ومسامي عالي الجودة.",
    care: "يغسل ببرنامج لطيف بالماء البارد. يُكوى بحرارة متوسطة من الداخل للمحافظة على ألياف الكتان الطبيعية.",
    inStock: true,
    bestSeller: true,
    newArrival: true,
    dateAdded: "2026-07-20",
    gallery: [
      "assets/suit_turkish_blue.jpg",
      "assets/suit_turkish_olive.jpg",
      "assets/suit_turkish_pink.jpg",
      "assets/suit_turkish_beige.jpg"
    ]
  },
  {
    id: 9,
    name: "عباية ستان جلاكسي تركي راقية",
    price: 850,
    oldPrice: 1200,
    category: "abayas",
    categoryName: "عبايات",
    badge: "sale",
    badgeText: "خصم 30% 🔥",
    description: "عباية قطعة واحدة مفتوحة، ستايلها شيك وبسيط. خامتها ستان جلاكسي تركي تقيلة ومريحة وتظبط الشكل وتعيش معاكي.",
    longDescription: "تألقي بطلة ساحرة وأنيقة مع عباية الستان الجلاكسي التركي الفاخر المفتوحة. تصميم قطعة واحدة بسيط وشيك جداً، مصنوع من خامة ستان جلاكسي تركي تقيلة، مريحة، تظبط شكل الجسم، وتعيش معك طويلاً دون أن تفقد رونقها.",
    colors: [
      { name: "نبيتي", hex: "#800020", image: "assets/abaya_galaxy_burgundy.jpg" },
      { name: "كافيه", hex: "#6F4E37", image: "assets/abaya_galaxy_cafe.jpg" },
      { name: "فيروزي", hex: "#30D5C8", image: "assets/abaya_galaxy_turquoise.jpg" }
    ],
    sizes: ["فري سايز"],
    features: [
      "تصميم قطعة واحدة مفتوحة، ستايل شيك وبسيط.",
      "خامة ستان جلاكسي تركي تقيلة ومريحة للارتداء اليومي.",
      "تظبط شكل الجسم وتمنحكِ قواماً متناسقاً.",
      "خامة فاخرة عالية الجودة تعيش معكِ لفترات طويلة.",
      "ألوان غنية وراقية وجذابة تناسب جميع المناسبات."
    ],
    fabric: "ستان جلاكسي تركي أصلي تقيل ذو ملمس ناعم ولمعان فاخر.",
    care: "يُفضل الغسيل اليدوي بماء بارد ومنظف لطيف، والكي بالبخار على درجة حرارة منخفضة من الداخل.",
    inStock: true,
    bestSeller: true,
    newArrival: true,
    dateAdded: "2026-07-20",
    gallery: [
      "assets/abaya_galaxy_burgundy.jpg",
      "assets/abaya_galaxy_cafe.jpg",
      "assets/abaya_galaxy_turquoise.jpg"
    ]
  },
  {
    id: 10,
    name: "فستان كل المناسبات",
    price: 850,
    oldPrice: 1200,
    category: "dresses",
    categoryName: "فساتين",
    badge: "new",
    badgeText: "وصل حديثاً 🌸",
    description: "فستان كل المناسبات بخامة كتان قطن طبيعي مريحة وشيك جداً. متوفر بـ 4 ألوان مميزة ومقاس مريح.",
    longDescription: "فستان كل المناسبات الاستثنائي المصمم ليلائم جميع خروجاتكِ ومناسباتكِ السعيدة الراقية. يتميز بقصة مريحة وأنيقة مع حزام خصر بحلية ذهبية راقية تبرز جمال التصميم، ومصنوع من خامة كتان قطن طبيعي ممتاز تعطي ملمساً ناعماً وتهوية مثالية.",
    colors: [
      { name: "بيج", hex: "#E5D3BF", image: "assets/dress_eid_beige.jpg" },
      { name: "نبيتي", hex: "#800020", image: "assets/dress_eid_burgundy.jpg" },
      { name: "بني", hex: "#5C4033", image: "assets/dress_eid_brown.jpg" },
      { name: "بيستاشيو", hex: "#93C572", image: "assets/dress_eid_pistachio.jpg" }
    ],
    sizes: ["فري سايز (50 لـ 85 كيلو)"],
    features: [
      "كتان قطن طبيعي ممتاز ناعم ولطيف على البشرة.",
      "يأتي مع حزام خصر عريض بحلية ذهبية أنيقة لضبط المقاس.",
      "مناسب تماماً لعيد الفطر وعيد الأضحى وجميع الزيارات العائلية والمناسبات.",
      "قصة أكمام واسعة ومريحة تعطي طابعاً عصرياً وجميلاً.",
      "تصميم فري سايز مرن ومناسب لجميع الأجسام من وزن 50 إلى 85 كيلو."
    ],
    fabric: "كتان قطن طبيعي 100% عالي الجودة ومعالج ضد الانكماش والتجعد الزائد.",
    care: "يغسل بماء بارد ببرنامج لطيف، يُفضل استخدام مكواة البخار للحفاظ على طبيعة خامة الكتان.",
    inStock: true,
    bestSeller: true,
    newArrival: true,
    dateAdded: "2026-07-20",
    gallery: [
      "assets/dress_eid_burgundy.jpg",
      "assets/dress_eid_beige.jpg",
      "assets/dress_eid_brown.jpg",
      "assets/dress_eid_pistachio.jpg",
      "assets/dress_eid_burgundy_detail.jpg"
    ]
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
const state = {
  wishlist: JSON.parse(localStorage.getItem("trio_wishlist")) || [],
  recentlyViewed: JSON.parse(localStorage.getItem("trio_recent")) || [],
  currentModalProduct: null,
  selectedColor: "",
  selectedSize: "",
  quantity: 1,
  currentModalImageIndex: 0,
  activeFilters: {
    search: "",
    category: "all",
    priceMax: 5000,
    colors: [],
    sizes: []
  },
  sortBy: "default"
};

// ==========================================
// 3. DOM ELEMENTS
// ==========================================
const DOM = {
  // Navigation & Drawer
  header: document.querySelector(".main-header"),
  mobileMenuBtn: document.getElementById("mobileMenuBtn"),
  mobileDrawer: document.getElementById("mobileDrawer"),
  drawerOverlay: document.getElementById("drawerOverlay"),
  drawerCloseBtn: document.getElementById("drawerCloseBtn"),
  drawerLinks: document.querySelectorAll(".drawer-link"),
  
  // Search Triggers
  desktopSearchInput: document.getElementById("desktopSearchInput"),
  searchTriggerBtn: document.getElementById("searchTriggerBtn"),
  
  // Wishlist controls
  headerWishlistBtn: document.getElementById("headerWishlistBtn"),
  mobileNavWishlistBtn: document.getElementById("mobileNavWishlistBtn"),
  wishlistDrawer: document.getElementById("wishlistDrawer"),
  wishlistOverlay: document.getElementById("wishlistOverlay"),
  wishlistCloseBtn: document.getElementById("wishlistCloseBtn"),
  wishlistDrawerContent: document.getElementById("wishlistDrawerContent"),
  wishlistBadge: document.getElementById("wishlistBadge"),
  mobileWishlistBadge: document.getElementById("mobileWishlistBadge"),
  wishlistDrawerCount: document.getElementById("wishlistDrawerCount"),
  
  // Catalog DOM elements
  productsGrid: document.getElementById("productsGrid"),
  catalogSearchInput: document.getElementById("catalogSearchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  filterToggleBtn: document.getElementById("filterToggleBtn"),
  filterPanel: document.getElementById("filterPanel"),
  catalogSortSelect: document.getElementById("catalogSortSelect"),
  categoryFilterGrid: document.getElementById("categoryFilterGrid"),
  priceRange: document.getElementById("priceRange"),
  priceRangeValue: document.getElementById("priceRangeValue"),
  colorFilterFlex: document.getElementById("colorFilterFlex"),
  sizeFilterFlex: document.getElementById("sizeFilterFlex"),
  applyFiltersBtn: document.getElementById("applyFiltersBtn"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),
  activeFiltersSummary: document.getElementById("activeFiltersSummary"),
  catalogEmptyState: document.getElementById("catalogEmptyState"),
  resetCatalogBtn: document.getElementById("resetCatalogBtn"),
  
  // Sliders
  bestSellersTrack: document.getElementById("bestSellersTrack"),
  bestSellersPrev: document.getElementById("bestSellersPrev"),
  bestSellersNext: document.getElementById("bestSellersNext"),
  newArrivalsTrack: document.getElementById("newArrivalsTrack"),
  newArrivalsPrev: document.getElementById("newArrivalsPrev"),
  newArrivalsNext: document.getElementById("newArrivalsNext"),
  
  // Product Details Modal DOM elements
  modalBackdrop: document.getElementById("productModalBackdrop"),
  productModal: document.getElementById("productModal"),
  modalCloseBtn: document.getElementById("modalCloseBtn"),
  modalMainImage: document.getElementById("modalMainImage"),
  zoomContainer: document.getElementById("zoomContainer"),
  galleryPrevBtn: document.getElementById("galleryPrevBtn"),
  galleryNextBtn: document.getElementById("galleryNextBtn"),
  modalLightboxBtn: document.getElementById("modalLightboxBtn"),
  modalThumbnailsTrack: document.getElementById("modalThumbnailsTrack"),
  modalProductBadge: document.getElementById("modalProductBadge"),
  modalProductTitle: document.getElementById("modalProductTitle"),
  modalProductPrice: document.getElementById("modalProductPrice"),
  modalProductOldPrice: document.getElementById("modalProductOldPrice"),
  modalShortDesc: document.getElementById("modalShortDesc"),
  selectedColorLabel: document.getElementById("selectedColorLabel"),
  modalColorOptions: document.getElementById("modalColorOptions"),
  selectedSizeLabel: document.getElementById("selectedSizeLabel"),
  modalSizeOptions: document.getElementById("modalSizeOptions"),
  qtyMinusBtn: document.getElementById("qtyMinusBtn"),
  qtyPlusBtn: document.getElementById("qtyPlusBtn"),
  qtyValue: document.getElementById("qtyValue"),
  modalAvailability: document.getElementById("modalAvailability"),
  whatsappOrderBtn: document.getElementById("whatsappOrderBtn"),
  modalFeaturesList: document.getElementById("modalFeaturesList"),
  modalFabricText: document.getElementById("modalFabricText"),
  modalCareText: document.getElementById("modalCareText"),
  modalRelatedGrid: document.getElementById("modalRelatedGrid"),
  
  // Mobile Sticky CTA DOM elements
  mobileStickyCta: document.getElementById("mobileStickyCta"),
  stickyProductTitle: document.getElementById("stickyProductTitle"),
  stickyProductPrice: document.getElementById("stickyProductPrice"),
  mobileStickyOrderBtn: document.getElementById("mobileStickyOrderBtn"),
  
  // Image Lightbox
  lightboxBackdrop: document.getElementById("lightboxBackdrop"),
  lightboxCloseBtn: document.getElementById("lightboxCloseBtn"),
  lightboxPrevBtn: document.getElementById("lightboxPrevBtn"),
  lightboxNextBtn: document.getElementById("lightboxNextBtn"),
  lightboxImage: document.getElementById("lightboxImage"),
  
  // Recently Viewed Section
  recentlyGrid: document.getElementById("recentlyGrid"),
  
  // Counters
  countClients: document.getElementById("count-clients"),
  countModels: document.getElementById("count-models"),
  countLocal: document.getElementById("count-local"),
  countGovs: document.getElementById("count-govs"),
  
  // Floating Controls
  scrollToTopBtn: document.getElementById("scrollToTopBtn")
};

// ==========================================
// 4. CORE CONTROLLERS & FUNCTIONS
// ==========================================

/**
 * Initialize application state & register event listeners
 */
function init() {
  registerEventListeners();
  updateWishlistUI();
  renderFilters();
  makeLogoTransparent();
  
  // Simulate skeleton loaders before rendering real catalog
  showSkeletonLoaders();
  setTimeout(() => {
    renderCatalog();
  }, 1200);

  // Render static components
  renderBestSellers();
  renderNewArrivals();
  renderRecentlyViewed();
  
  setupHeroSlider();
  setupScrollEffects();
  setupAccordions();
}

/**
 * Show skeleton cards during mock loading
 */
function showSkeletonLoaders() {
  DOM.productsGrid.innerHTML = Array(4).fill(0).map(() => `
    <div class="skeleton-card">
      <div class="skeleton-media"></div>
      <div class="skeleton-text short"></div>
      <div class="skeleton-text medium"></div>
      <div class="skeleton-text short"></div>
    </div>
  `).join("");
}

// ==========================================
// 5. EVENT LISTENERS SETUP
// ==========================================
function registerEventListeners() {
  // Mobile Menu Drawer Toggles
  DOM.mobileMenuBtn.addEventListener("click", () => toggleMobileDrawer(true));
  DOM.drawerCloseBtn.addEventListener("click", () => toggleMobileDrawer(false));
  DOM.drawerOverlay.addEventListener("click", () => toggleMobileDrawer(false));
  DOM.drawerLinks.forEach(link => link.addEventListener("click", () => toggleMobileDrawer(false)));

  // Desktop Inline Search Expansion Trigger
  DOM.searchTriggerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    DOM.desktopSearchInput.classList.toggle("open");
    if (DOM.desktopSearchInput.classList.contains("open")) {
      DOM.desktopSearchInput.focus();
    }
  });
  
  // Search inputs
  DOM.desktopSearchInput.addEventListener("input", (e) => {
    state.activeFilters.search = e.target.value;
    DOM.catalogSearchInput.value = e.target.value;
    handleSearchInput(e.target.value);
  });

  DOM.catalogSearchInput.addEventListener("input", (e) => {
    state.activeFilters.search = e.target.value;
    DOM.desktopSearchInput.value = e.target.value;
    handleSearchInput(e.target.value);
  });

  DOM.clearSearchBtn.addEventListener("click", () => {
    state.activeFilters.search = "";
    DOM.catalogSearchInput.value = "";
    DOM.desktopSearchInput.value = "";
    DOM.clearSearchBtn.classList.remove("show");
    renderCatalog();
  });

  // Wishlist Drawer Toggles
  DOM.headerWishlistBtn.addEventListener("click", () => toggleWishlistDrawer(true));
  DOM.mobileNavWishlistBtn.addEventListener("click", () => toggleWishlistDrawer(true));
  DOM.wishlistCloseBtn.addEventListener("click", () => toggleWishlistDrawer(false));
  DOM.wishlistOverlay.addEventListener("click", () => toggleWishlistDrawer(false));
  document.getElementById("wishlistShopNowBtn").addEventListener("click", () => toggleWishlistDrawer(false));

  // Sorting
  DOM.catalogSortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderCatalog();
  });

  // Filter Drawer Toggle
  DOM.filterToggleBtn.addEventListener("click", () => {
    DOM.filterPanel.classList.toggle("open");
    DOM.filterToggleBtn.classList.toggle("active");
  });

  // Range Slider Value Change
  DOM.priceRange.addEventListener("input", (e) => {
    state.activeFilters.priceMax = parseInt(e.target.value);
    DOM.priceRangeValue.textContent = `${e.target.value} ج.م`;
  });

  // Filter Buttons inside Drawer
  DOM.applyFiltersBtn.addEventListener("click", () => {
    renderCatalog();
    DOM.filterPanel.classList.remove("open");
    DOM.filterToggleBtn.classList.remove("active");
  });

  DOM.resetFiltersBtn.addEventListener("click", () => {
    resetAllFilters();
  });

  DOM.resetCatalogBtn.addEventListener("click", () => {
    resetAllFilters();
  });

  // Scroll to Top Button Action
  DOM.scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Details Modal close and quantity events
  DOM.modalCloseBtn.addEventListener("click", () => toggleProductModal(false));
  DOM.modalBackdrop.addEventListener("click", (e) => {
    if (e.target === DOM.modalBackdrop) toggleProductModal(false);
  });
  
  DOM.qtyMinusBtn.addEventListener("click", () => updateQuantity(-1));
  DOM.qtyPlusBtn.addEventListener("click", () => updateQuantity(1));

  // Modal Gallery Arrows
  DOM.galleryPrevBtn.addEventListener("click", () => navigateModalGallery(-1));
  DOM.galleryNextBtn.addEventListener("click", () => navigateModalGallery(1));

  // Zoom Hover Effects
  DOM.zoomContainer.addEventListener("mousemove", handleZoomHover);
  DOM.zoomContainer.addEventListener("mouseleave", handleZoomLeave);

  // Lightbox Triggers
  DOM.modalLightboxBtn.addEventListener("click", openLightbox);
  DOM.lightboxCloseBtn.addEventListener("click", () => toggleLightbox(false));
  DOM.lightboxBackdrop.addEventListener("click", (e) => {
    if (e.target === DOM.lightboxBackdrop) toggleLightbox(false);
  });
  DOM.lightboxPrevBtn.addEventListener("click", () => navigateLightbox(-1));
  DOM.lightboxNextBtn.addEventListener("click", () => navigateLightbox(1));
  
  // Close triggers on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleProductModal(false);
      toggleLightbox(false);
      toggleMobileDrawer(false);
      toggleWishlistDrawer(false);
    } else if (DOM.lightboxBackdrop.classList.contains("open")) {
      if (e.key === "ArrowLeft") navigateLightbox(1); // RTL flip
      if (e.key === "ArrowRight") navigateLightbox(-1);
    }
  });

  // Main & Sticky Order CTAs
  DOM.whatsappOrderBtn.addEventListener("click", submitOrder);
  DOM.mobileStickyCta.addEventListener("click", submitOrder);

  // Slider buttons listeners
  setupSlidersNav();
}

// ==========================================
// 6. GENERAL LAYOUT & SCROLL INTERACTIONS
// ==========================================
function toggleMobileDrawer(open) {
  DOM.mobileDrawer.classList.toggle("open", open);
  DOM.drawerOverlay.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
}

function toggleWishlistDrawer(open) {
  DOM.wishlistDrawer.classList.toggle("open", open);
  DOM.wishlistOverlay.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
}

function handleSearchInput(val) {
  if (val.length > 0) {
    DOM.clearSearchBtn.classList.add("show");
  } else {
    DOM.clearSearchBtn.classList.remove("show");
  }
  renderCatalog();
}

function setupScrollEffects() {
  let lastScrollY = window.scrollY;
  
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    
    // Header shrinking effect
    if (currentScrollY > 50) {
      DOM.header.classList.add("shrink");
    } else {
      DOM.header.classList.remove("shrink");
    }
    
    // Scroll To Top button visibility
    if (currentScrollY > 600) {
      DOM.scrollToTopBtn.classList.add("show");
    } else {
      DOM.scrollToTopBtn.classList.remove("show");
    }

    // Sticky mobile order CTA visibility (only when product details modal is open on small viewports)
    if (DOM.modalBackdrop.classList.contains("open") && window.innerWidth <= 991) {
      const modalInfoElement = DOM.productModal.querySelector(".modal-details-info");
      const modalInfoRect = modalInfoElement.getBoundingClientRect();
      const buyBtnElement = DOM.whatsappOrderBtn;
      const buyBtnRect = buyBtnElement.getBoundingClientRect();
      
      // If the buy button is scrolled out of viewport view, show mobile sticky order CTA
      if (buyBtnRect.bottom < 0 || buyBtnRect.top > window.innerHeight) {
        DOM.mobileStickyCta.classList.add("show");
      } else {
        DOM.mobileStickyCta.classList.remove("show");
      }
    } else {
      DOM.mobileStickyCta.classList.remove("show");
    }
    
    lastScrollY = currentScrollY;
  });

  // Stats numbers counting animation with IntersectionObserver
  const statsSection = document.querySelector(".stats-section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStatsCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

function animateStatsCounters() {
  const counters = [
    { el: DOM.countClients, target: 1250, suffix: "+" },
    { el: DOM.countModels, target: 20, suffix: "+" },
    { el: DOM.countLocal, target: 100, suffix: "%" },
    { el: DOM.countGovs, target: 20, suffix: "+" }
  ];

  counters.forEach(counter => {
    let start = 0;
    const duration = 1500; // ms
    const increment = counter.target / (duration / 16);
    
    const countUp = () => {
      start += increment;
      if (start >= counter.target) {
        counter.el.textContent = counter.target;
      } else {
        counter.el.textContent = Math.floor(start);
        requestAnimationFrame(countUp);
      }
    };
    
    countUp();
  });
}

function setupAccordions() {
  const triggers = document.querySelectorAll(".accordion-trigger");
  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const parent = trigger.parentElement;
      const panel = parent.querySelector(".accordion-panel");
      const isActive = trigger.classList.contains("active");

      // Close all panels in this accordion
      const allTriggers = trigger.closest(".details-accordion").querySelectorAll(".accordion-trigger");
      const allPanels = trigger.closest(".details-accordion").querySelectorAll(".accordion-panel");
      
      allTriggers.forEach(t => t.classList.remove("active"));
      allPanels.forEach(p => p.style.display = "none");

      if (!isActive) {
        trigger.classList.add("active");
        panel.style.display = "block";
      }
    });
  });
}

// ==========================================
// 7. HERO SLIDER LOGIC
// ==========================================
function setupHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const indicators = document.querySelectorAll(".hero-indicators .indicator");
  let currentSlide = 0;
  let sliderInterval;

  const goToSlide = (idx) => {
    slides.forEach(s => s.classList.remove("active"));
    indicators.forEach(i => i.classList.remove("active"));
    
    slides[idx].classList.add("active");
    indicators[idx].classList.add("active");
    currentSlide = idx;
  };

  const nextSlide = () => {
    const nextIdx = (currentSlide + 1) % slides.length;
    goToSlide(nextIdx);
  };

  const startAutoSlide = () => {
    sliderInterval = setInterval(nextSlide, 5000);
  };

  indicators.forEach(btn => {
    btn.addEventListener("click", () => {
      clearInterval(sliderInterval);
      const slideIdx = parseInt(btn.getAttribute("data-slide"));
      goToSlide(slideIdx);
      startAutoSlide();
    });
  });

  startAutoSlide();
}

// ==========================================
// 8. RENDER FILTER INTERFACE
// ==========================================
function renderFilters() {
  // 1. Gather all unique categories
  const categories = [...new Set(PRODUCTS.map(p => p.category))];
  const categoryFilterGrid = DOM.categoryFilterGrid;
  
  categoryFilterGrid.innerHTML = `
    <button class="filter-btn active" data-filter="category" data-value="all">الكل</button>
    ${categories.map(cat => {
      const prod = PRODUCTS.find(p => p.category === cat);
      return `<button class="filter-btn" data-filter="category" data-value="${cat}">${prod.categoryName}</button>`;
    }).join("")}
  `;

  // Add click listeners to category buttons
  categoryFilterGrid.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      categoryFilterGrid.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeFilters.category = btn.getAttribute("data-value");
      renderCatalog();
    });
  });

  // 2. Gather all unique colors
  const allColors = [];
  const colorMap = new Map();
  PRODUCTS.forEach(p => {
    p.colors.forEach(c => {
      if (!colorMap.has(c.name)) {
        colorMap.set(c.name, c.hex);
      }
    });
  });
  
  const colorFilterFlex = DOM.colorFilterFlex;
  colorFilterFlex.innerHTML = Array.from(colorMap.entries()).map(([name, hex]) => `
    <div class="color-dot" data-value="${name}" title="${name}">
      <div class="color-dot-inner" style="background-color: ${hex};"></div>
    </div>
  `).join("");

  // Add click listeners for colors
  colorFilterFlex.querySelectorAll(".color-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      dot.classList.toggle("active");
      const colorVal = dot.getAttribute("data-value");
      const idx = state.activeFilters.colors.indexOf(colorVal);
      
      if (idx > -1) {
        state.activeFilters.colors.splice(idx, 1);
      } else {
        state.activeFilters.colors.push(colorVal);
      }
      renderCatalog();
    });
  });

  // 3. Sizes filters action binding
  DOM.sizeFilterFlex.querySelectorAll(".filter-size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const sizeVal = btn.getAttribute("data-value");
      const idx = state.activeFilters.sizes.indexOf(sizeVal);
      
      if (idx > -1) {
        state.activeFilters.sizes.splice(idx, 1);
      } else {
        state.activeFilters.sizes.push(sizeVal);
      }
      renderCatalog();
    });
  });
}

function resetAllFilters() {
  state.activeFilters = {
    search: "",
    category: "all",
    priceMax: 5000,
    colors: [],
    sizes: []
  };
  state.sortBy = "default";
  
  DOM.catalogSearchInput.value = "";
  DOM.desktopSearchInput.value = "";
  DOM.clearSearchBtn.classList.remove("show");
  
  DOM.priceRange.value = 5000;
  DOM.priceRangeValue.textContent = "5000 ج.م";
  
  DOM.categoryFilterGrid.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-value") === "all");
  });
  
  DOM.colorFilterFlex.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
  DOM.sizeFilterFlex.querySelectorAll(".filter-size-btn").forEach(s => s.classList.remove("active"));
  
  DOM.catalogSortSelect.value = "default";
  
  renderCatalog();
  DOM.filterPanel.classList.remove("open");
  DOM.filterToggleBtn.classList.remove("active");
}

// ==========================================
// 9. DYNAMIC PRODUCTS GRID RENDERING
// ==========================================
function getFilteredProducts() {
  return PRODUCTS.filter(prod => {
    // 1. Search Query filter (matches name, description, category or fabric)
    if (state.activeFilters.search) {
      const q = state.activeFilters.search.toLowerCase().trim();
      const matchName = prod.name.toLowerCase().includes(q);
      const matchDesc = prod.description.toLowerCase().includes(q);
      const matchCat = prod.categoryName.toLowerCase().includes(q);
      const matchFabric = prod.fabric.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchCat && !matchFabric) return false;
    }

    // 2. Category filter
    if (state.activeFilters.category !== "all" && prod.category !== state.activeFilters.category) {
      return false;
    }

    // 3. Price filter
    if (prod.price > state.activeFilters.priceMax) {
      return false;
    }

    // 4. Color filter (checks intersection)
    if (state.activeFilters.colors.length > 0) {
      const pColors = prod.colors.map(c => c.name);
      const colorMatch = state.activeFilters.colors.some(c => pColors.includes(c));
      if (!colorMatch) return false;
    }

    // 5. Size filter
    if (state.activeFilters.sizes.length > 0) {
      const sizeMatch = state.activeFilters.sizes.some(s => prod.sizes.includes(s));
      if (!sizeMatch) return false;
    }

    return true;
  }).sort((a, b) => {
    // Sorting logic
    if (state.sortBy === "price-asc") return a.price - b.price;
    if (state.sortBy === "price-desc") return b.price - a.price;
    if (state.sortBy === "newest") return new Date(b.dateAdded) - new Date(a.dateAdded);
    if (state.sortBy === "best-seller") return (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0);
    return 0; // Default
  });
}

function renderCatalog() {
  const filtered = getFilteredProducts();
  
  // Render active filters summary badges
  renderActiveFiltersSummary();

  if (filtered.length === 0) {
    DOM.productsGrid.innerHTML = "";
    DOM.catalogEmptyState.classList.remove("hidden");
    return;
  }
  
  DOM.catalogEmptyState.classList.add("hidden");
  DOM.productsGrid.innerHTML = filtered.map(prod => createProductCardMarkup(prod)).join("");
  
  // Register click listeners to dynamically created cards
  attachCardEvents(DOM.productsGrid);
}

function createProductCardMarkup(prod) {
  const isWishlisted = state.wishlist.includes(prod.id);
  const primaryImg = prod.colors[0]?.image || prod.gallery[0];
  const secondaryImg = prod.gallery[1] || primaryImg;
  
  const oldPriceHtml = prod.oldPrice ? `<span class="product-card-old-price">${prod.oldPrice} ج.م</span>` : "";
  const badgeHtml = prod.badge ? `<span class="product-badge ${prod.badge}">${prod.badgeText}</span>` : "";
  
  // Generate small preview colors
  const colorDots = prod.colors.map(c => `<span class="card-color-dot" style="background-color: ${c.hex};" title="${c.name}"></span>`).join("");

  return `
    <div class="product-card" data-id="${prod.id}">
      <div class="product-card-media">
        <div class="product-badge-container">
          ${badgeHtml}
        </div>
        
        <button class="product-card-wishlist ${isWishlisted ? 'active' : ''}" aria-label="أضف للمفضلة">
          <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
        </button>

        <img src="${primaryImg}" alt="${prod.name}" class="product-card-img" loading="lazy">
        <img src="${secondaryImg}" alt="${prod.name}" class="product-card-img-secondary" loading="lazy">
        
        <div class="product-card-quickview">تفاصيل سريعة</div>
      </div>
      
      <div class="product-card-info">
        <span class="product-card-category">${prod.categoryName}</span>
        <h3 class="product-card-title">${prod.name}</h3>
        <div class="product-card-price-row">
          <span class="product-card-price">${prod.price} ج.م</span>
          ${oldPriceHtml}
        </div>
        <div class="product-card-colors">
          ${colorDots}
        </div>
      </div>
    </div>
  `;
}

function attachCardEvents(parentContainer) {
  // Wishlist clicks
  parentContainer.querySelectorAll(".product-card-wishlist").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = btn.closest(".product-card");
      const id = parseInt(card.getAttribute("data-id"));
      toggleWishlist(id, btn);
    });
  });

  // Modal open triggers
  parentContainer.querySelectorAll(".product-card-media").forEach(media => {
    media.addEventListener("click", () => {
      const card = media.closest(".product-card");
      const id = parseInt(card.getAttribute("data-id"));
      openProductDetails(id);
    });
  });
}

function renderActiveFiltersSummary() {
  const summaryEl = DOM.activeFiltersSummary;
  let badges = [];

  if (state.activeFilters.category !== "all") {
    const catName = PRODUCTS.find(p => p.category === state.activeFilters.category)?.categoryName;
    badges.push(`<span class="active-filter-badge">النوع: ${catName} <button onclick="removeFilter('category')"><i class="fa-solid fa-xmark"></i></button></span>`);
  }

  if (state.activeFilters.priceMax < 5000) {
    badges.push(`<span class="active-filter-badge">السعر أقل من: ${state.activeFilters.priceMax} ج.م <button onclick="removeFilter('price')"><i class="fa-solid fa-xmark"></i></button></span>`);
  }

  state.activeFilters.colors.forEach(col => {
    badges.push(`<span class="active-filter-badge">لون: ${col} <button onclick="removeFilter('color', '${col}')"><i class="fa-solid fa-xmark"></i></button></span>`);
  });

  state.activeFilters.sizes.forEach(sz => {
    badges.push(`<span class="active-filter-badge">مقاس: ${sz} <button onclick="removeFilter('size', '${sz}')"><i class="fa-solid fa-xmark"></i></button></span>`);
  });

  if (state.activeFilters.search) {
    badges.push(`<span class="active-filter-badge">بحث: "${state.activeFilters.search}" <button onclick="removeFilter('search')"><i class="fa-solid fa-xmark"></i></button></span>`);
  }

  if (badges.length > 0) {
    summaryEl.innerHTML = `
      ${badges.join("")}
      <button class="btn-clear-all" onclick="clearAllFilterBadges()">حذف الكل</button>
    `;
  } else {
    summaryEl.innerHTML = "";
  }
}

// Expose removal actions to global scope for button onclicks
window.removeFilter = function(type, val) {
  if (type === "category") {
    state.activeFilters.category = "all";
    DOM.categoryFilterGrid.querySelectorAll(".filter-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-value") === "all");
    });
  } else if (type === "price") {
    state.activeFilters.priceMax = 5000;
    DOM.priceRange.value = 5000;
    DOM.priceRangeValue.textContent = "5000 ج.م";
  } else if (type === "search") {
    state.activeFilters.search = "";
    DOM.catalogSearchInput.value = "";
    DOM.desktopSearchInput.value = "";
    DOM.clearSearchBtn.classList.remove("show");
  } else if (type === "color") {
    const idx = state.activeFilters.colors.indexOf(val);
    if (idx > -1) state.activeFilters.colors.splice(idx, 1);
    DOM.colorFilterFlex.querySelectorAll(`.color-dot[data-value="${val}"]`).forEach(d => d.classList.remove("active"));
  } else if (type === "size") {
    const idx = state.activeFilters.sizes.indexOf(val);
    if (idx > -1) state.activeFilters.sizes.splice(idx, 1);
    DOM.sizeFilterFlex.querySelectorAll(`.filter-size-btn[data-value="${val}"]`).forEach(s => s.classList.remove("active"));
  }
  renderCatalog();
};

window.clearAllFilterBadges = function() {
  resetAllFilters();
};

// ==========================================
// 10. BEST SELLERS & NEW ARRIVALS SLIDERS
// ==========================================
function renderBestSellers() {
  const best = PRODUCTS.filter(p => p.bestSeller);
  DOM.bestSellersTrack.innerHTML = best.map(p => createProductCardMarkup(p)).join("");
  attachCardEvents(DOM.bestSellersTrack);
}

function renderNewArrivals() {
  const newest = PRODUCTS.filter(p => p.newArrival);
  DOM.newArrivalsTrack.innerHTML = newest.map(p => createProductCardMarkup(p)).join("");
  attachCardEvents(DOM.newArrivalsTrack);
}

function setupSlidersNav() {
  setupSliderArrows(DOM.bestSellersPrev, DOM.bestSellersNext, DOM.bestSellersTrack);
  setupSliderArrows(DOM.newArrivalsPrev, DOM.newArrivalsNext, DOM.newArrivalsTrack);
}

function setupSliderArrows(prevBtn, nextBtn, track) {
  let scrollAmount = 0;
  
  nextBtn.addEventListener("click", () => {
    const cardWidth = track.firstElementChild.getBoundingClientRect().width + 25;
    const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
    scrollAmount = Math.min(scrollAmount + cardWidth, maxScroll);
    track.style.transform = `translateX(${scrollAmount}px)`; // RTL scroll shift
  });

  prevBtn.addEventListener("click", () => {
    const cardWidth = track.firstElementChild.getBoundingClientRect().width + 25;
    scrollAmount = Math.max(scrollAmount - cardWidth, 0);
    track.style.transform = `translateX(${scrollAmount}px)`;
  });
  
  // Touch Drag Support for premium feel
  let isDown = false;
  let startX;
  let scrollLeftState;

  track.parentElement.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeftState = scrollAmount;
  });

  track.parentElement.addEventListener("mouseleave", () => {
    isDown = false;
  });

  track.parentElement.addEventListener("mouseup", () => {
    isDown = false;
  });

  track.parentElement.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollAmount = scrollLeftState + walk;
    
    // Bounds check
    const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    
    track.style.transform = `translateX(${scrollAmount}px)`;
  });

  // Touch screens
  track.parentElement.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeftState = scrollAmount;
  });

  track.parentElement.addEventListener("touchend", () => {
    isDown = false;
  });

  track.parentElement.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollAmount = scrollLeftState + walk;
    
    const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
    if (scrollAmount < 0) scrollAmount = 0;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    
    track.style.transform = `translateX(${scrollAmount}px)`;
  });
}

// ==========================================
// 11. WISHLIST LOGIC
// ==========================================
function toggleWishlist(id, btnElement = null) {
  const idx = state.wishlist.indexOf(id);
  const prod = PRODUCTS.find(p => p.id === id);
  
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
  } else {
    state.wishlist.push(id);
  }

  // Save to localStorage
  localStorage.setItem("trio_wishlist", JSON.stringify(state.wishlist));
  
  // Update heart buttons states across DOM
  updateAllHeartButtons(id, idx === -1);
  updateWishlistUI();
}

function updateAllHeartButtons(id, isAdded) {
  const heartSelectors = [
    `.product-card[data-id="${id}"] .product-card-wishlist`,
    `.product-card-wishlist[data-id="${id}"]`
  ];
  
  heartSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(btn => {
      btn.classList.toggle("active", isAdded);
      const icon = btn.querySelector("i");
      if (icon) {
        icon.className = isAdded ? "fa-solid fa-heart" : "fa-regular fa-heart";
      }
    });
  });
}

function updateWishlistUI() {
  const count = state.wishlist.length;
  if (DOM.wishlistBadge) DOM.wishlistBadge.textContent = count;
  if (DOM.mobileWishlistBadge) DOM.mobileWishlistBadge.textContent = count;
  if (DOM.wishlistDrawerCount) DOM.wishlistDrawerCount.textContent = count;

  if (count === 0) {
    if (DOM.wishlistDrawerContent) {
      DOM.wishlistDrawerContent.innerHTML = `
        <div class="wishlist-empty-state">
          <i class="fa-regular fa-heart"></i>
          <p>قائمة المفضلة فارغة حالياً</p>
          <button class="btn btn-luxury btn-sm" onclick="toggleWishlistDrawer(false)">تسوقي الآن</button>
        </div>
      `;
    }
    return;
  }

  const wishlistProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  DOM.wishlistDrawerContent.innerHTML = wishlistProducts.map(prod => `
    <div class="wishlist-item" data-id="${prod.id}">
      <img src="${prod.colors[0]?.image || prod.gallery[0]}" alt="${prod.name}" class="wishlist-item-img">
      <div class="wishlist-item-info">
        <h4 class="wishlist-item-title">${prod.name}</h4>
        <span class="wishlist-item-price">${prod.price} ج.م</span>
        <button class="wishlist-item-remove" onclick="toggleWishlist(${prod.id})">حذف</button>
      </div>
      <button class="btn wishlist-item-order" onclick="openProductDetails(${prod.id}); toggleWishlistDrawer(false);">اطلبي الآن</button>
    </div>
  `).join("");
}

// Expose toggleWishlist to global click callbacks in generated list items
window.toggleWishlist = function(id) {
  toggleWishlist(id);
};

// ==========================================
// 12. PRODUCT DETAILS MODAL INTERACTIONS
// ==========================================
function openProductDetails(id) {
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) return;

  state.currentModalProduct = prod;
  state.selectedColor = prod.colors[0]?.name || "";
  state.selectedSize = ""; // Reset size choice
  state.quantity = 1;
  state.currentModalImageIndex = 0;

  // Build modal gallery and contents
  DOM.modalMainImage.src = prod.colors[0]?.image || prod.gallery[0];
  DOM.modalMainImage.alt = prod.name;
  
  // Set main elements values
  DOM.modalProductTitle.textContent = prod.name;
  DOM.stickyProductTitle.textContent = prod.name;
  
  DOM.modalProductPrice.textContent = `${prod.price} ج.م`;
  DOM.stickyProductPrice.textContent = `${prod.price} ج.م`;
  
  if (prod.oldPrice) {
    DOM.modalProductOldPrice.textContent = `${prod.oldPrice} ج.م`;
  } else {
    DOM.modalProductOldPrice.textContent = "";
  }
  
  DOM.modalShortDesc.textContent = prod.description;
  DOM.qtyValue.textContent = "1";
  
  // Badge setup
  if (prod.badge) {
    DOM.modalProductBadge.textContent = prod.badgeText;
    DOM.modalProductBadge.className = `product-badge ${prod.badge}`;
    DOM.modalProductBadge.style.display = "inline-block";
  } else {
    DOM.modalProductBadge.style.display = "none";
  }

  // Stock status
  if (prod.inStock) {
    DOM.modalAvailability.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>متوفر في المخزون جاهز للشحن</span>`;
    DOM.modalAvailability.className = "availability-status";
  } else {
    DOM.modalAvailability.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <span>نفذت الكمية حالياً</span>`;
    DOM.modalAvailability.className = "availability-status out-of-stock";
  }

  // Colors rendering
  DOM.selectedColorLabel.textContent = state.selectedColor;
  DOM.modalColorOptions.innerHTML = prod.colors.map((c, i) => `
    <div class="color-dot ${i === 0 ? 'active' : ''}" data-value="${c.name}" title="${c.name}">
      <div class="color-dot-inner" style="background-color: ${c.hex};"></div>
    </div>
  `).join("");

  DOM.modalColorOptions.querySelectorAll(".color-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      DOM.modalColorOptions.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      state.selectedColor = dot.getAttribute("data-value");
      DOM.selectedColorLabel.textContent = state.selectedColor;
      
      // Update image according to selected color
      const colObj = prod.colors.find(c => c.name === state.selectedColor);
      if (colObj && colObj.image) {
        DOM.modalMainImage.src = colObj.image;
        // Sync thumbnail highlights
        const thumbIdx = prod.gallery.indexOf(colObj.image);
        if (thumbIdx > -1) {
          state.currentModalImageIndex = thumbIdx;
          syncThumbnailHighlight(thumbIdx);
        }
      }
    });
  });

  // Sizes rendering
  if (prod.sizes.length === 1) {
    state.selectedSize = prod.sizes[0];
    DOM.selectedSizeLabel.textContent = state.selectedSize;
    DOM.modalSizeOptions.innerHTML = `
      <button class="modal-size-btn active" data-value="${prod.sizes[0]}">${prod.sizes[0]}</button>
    `;
  } else {
    DOM.selectedSizeLabel.textContent = "لم يتم الاختيار";
    DOM.modalSizeOptions.innerHTML = prod.sizes.map(s => `
      <button class="modal-size-btn" data-value="${s}">${s}</button>
    `).join("");
  }

  DOM.modalSizeOptions.querySelectorAll(".modal-size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      DOM.modalSizeOptions.querySelectorAll(".modal-size-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedSize = btn.getAttribute("data-value");
      DOM.selectedSizeLabel.textContent = state.selectedSize;
    });
  });

  // Thumbnails rendering
  DOM.modalThumbnailsTrack.innerHTML = prod.gallery.map((img, idx) => `
    <img src="${img}" alt="صورة ${idx + 1}" class="thumbnail-item ${idx === 0 ? 'active' : ''}" data-index="${idx}">
  `).join("");

  DOM.modalThumbnailsTrack.querySelectorAll(".thumbnail-item").forEach(thumb => {
    thumb.addEventListener("click", () => {
      const idx = parseInt(thumb.getAttribute("data-index"));
      state.currentModalImageIndex = idx;
      DOM.modalMainImage.src = prod.gallery[idx];
      syncThumbnailHighlight(idx);
    });
  });

  // Accordion details updates
  DOM.modalFeaturesList.innerHTML = prod.features.map(f => `<li>${f}</li>`).join("");
  DOM.modalFabricText.textContent = prod.fabric;
  DOM.modalCareText.textContent = prod.care;

  // Render related products (4 random matching categories)
  renderModalRelatedProducts(prod);

  // Add to recently viewed localStorage database
  addToRecentlyViewed(prod.id);

  // Open modal screen
  toggleProductModal(true);
}

function toggleProductModal(open) {
  DOM.modalBackdrop.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
  
  if (!open) {
    DOM.mobileStickyCta.classList.remove("show");
  }
}

function updateQuantity(diff) {
  let newQty = state.quantity + diff;
  if (newQty < 1) newQty = 1;
  state.quantity = newQty;
  DOM.qtyValue.textContent = newQty;
}

function syncThumbnailHighlight(idx) {
  const thumbs = DOM.modalThumbnailsTrack.querySelectorAll(".thumbnail-item");
  thumbs.forEach(t => t.classList.remove("active"));
  thumbs[idx]?.classList.add("active");
}

function navigateModalGallery(direction) {
  const prod = state.currentModalProduct;
  if (!prod) return;
  
  let newIdx = state.currentModalImageIndex - direction; // RTL flip
  if (newIdx < 0) newIdx = prod.gallery.length - 1;
  if (newIdx >= prod.gallery.length) newIdx = 0;
  
  state.currentModalImageIndex = newIdx;
  DOM.modalMainImage.src = prod.gallery[newIdx];
  syncThumbnailHighlight(newIdx);
}

// Premium zoom on hover logic
function handleZoomHover(e) {
  const containerWidth = DOM.zoomContainer.clientWidth;
  const containerHeight = DOM.zoomContainer.clientHeight;
  const x = e.clientX - DOM.zoomContainer.getBoundingClientRect().left;
  const y = e.clientY - DOM.zoomContainer.getBoundingClientRect().top;
  
  const xPercent = (x / containerWidth) * 100;
  const yPercent = (y / containerHeight) * 100;
  
  DOM.modalMainImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  DOM.modalMainImage.style.transform = "scale(2)";
}

function handleZoomLeave() {
  DOM.modalMainImage.style.transform = "scale(1)";
  DOM.modalMainImage.style.transformOrigin = "center center";
}

// Related products generator inside details sheet
function renderModalRelatedProducts(currentProd) {
  // Get other products of same category, or simple randoms
  let related = PRODUCTS.filter(p => p.category === currentProd.category && p.id !== currentProd.id);
  if (related.length === 0) {
    related = PRODUCTS.filter(p => p.id !== currentProd.id);
  }
  
  // Cut down to 4
  related = related.slice(0, 4);

  DOM.modalRelatedGrid.innerHTML = related.map(prod => `
    <div class="product-card" data-id="${prod.id}">
      <div class="product-card-media" style="aspect-ratio: 3 / 4;">
        <img src="${prod.colors[0]?.image || prod.gallery[0]}" alt="${prod.name}" class="product-card-img" loading="lazy">
      </div>
      <div class="product-card-info">
        <h5 class="product-card-title">${prod.name}</h5>
        <span class="product-card-price">${prod.price} ج.م</span>
      </div>
    </div>
  `).join("");

  // Re-bind clicks for related items
  DOM.modalRelatedGrid.querySelectorAll(".product-card-media").forEach(media => {
    media.addEventListener("click", () => {
      const card = media.closest(".product-card");
      const id = parseInt(card.getAttribute("data-id"));
      openProductDetails(id); // Reload modal details with new product
      // Scroll modal contents to top
      DOM.productModal.querySelector(".modal-details-info").scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// ==========================================
// 13. WHATSAPP ORDER GENERATOR
// ==========================================
function submitOrder() {
  const prod = state.currentModalProduct;
  if (!prod) return;

  // Validation
  if (!state.selectedColor) {
    alert("برجاء اختيار اللون المطلوب أولاً");
    return;
  }

  if (!state.selectedSize) {
    alert("برجاء اختيار المقاس المطلوب أولاً");
    // Shake animation on size section for accessibility UI cues
    DOM.modalSizeOptions.parentElement.classList.add("shake-error");
    setTimeout(() => DOM.modalSizeOptions.parentElement.classList.remove("shake-error"), 500);
    return;
  }

  // Construct message
  const textMessage = `السلام عليكم،
أرغب في طلب المنتج التالي:

اسم المنتج:
${prod.name}

اللون:
${state.selectedColor}

المقاس:
${state.selectedSize}

الكمية:
${state.quantity}

وأرغب في معرفة تفاصيل الشحن.`;

  const encodedMsg = encodeURIComponent(textMessage);
  const waURL = `https://api.whatsapp.com/message/54YRNW43YVJ7K1?autoload=1&app_absent=0&text=${encodedMsg}`;
  
  // Open in new tab
  window.open(waURL, "_blank");
}

// ==========================================
// 14. IMAGE LIGHTBOX GALLERY (FULLSCREEN)
// ==========================================
function openLightbox() {
  const prod = state.currentModalProduct;
  if (!prod) return;

  DOM.lightboxImage.src = prod.gallery[state.currentModalImageIndex];
  toggleLightbox(true);
}

function toggleLightbox(open) {
  DOM.lightboxBackdrop.classList.toggle("open", open);
}

function navigateLightbox(direction) {
  const prod = state.currentModalProduct;
  if (!prod) return;

  let newIdx = state.currentModalImageIndex - direction; // RTL flip
  if (newIdx < 0) newIdx = prod.gallery.length - 1;
  if (newIdx >= prod.gallery.length) newIdx = 0;

  state.currentModalImageIndex = newIdx;
  DOM.lightboxImage.src = prod.gallery[newIdx];
  syncThumbnailHighlight(newIdx); // Sync back to modal gallery state
}

// ==========================================
// 15. RECENTLY VIEWED STORAGE ENGINE
// ==========================================
function addToRecentlyViewed(id) {
  const idx = state.recentlyViewed.indexOf(id);
  if (idx > -1) {
    state.recentlyViewed.splice(idx, 1); // Remove old position to bump to top
  }
  
  state.recentlyViewed.unshift(id); // Add to front of array
  
  // Keep last 4 items only
  if (state.recentlyViewed.length > 4) {
    state.recentlyViewed.pop();
  }

  localStorage.setItem("trio_recent", JSON.stringify(state.recentlyViewed));
  renderRecentlyViewed();
}

function renderRecentlyViewed() {
  if (state.recentlyViewed.length === 0) {
    document.getElementById("recently-viewed").style.display = "none";
    return;
  }
  
  document.getElementById("recently-viewed").style.display = "block";
  const recentProducts = PRODUCTS.filter(p => state.recentlyViewed.includes(p.id));

  // Sort by index in state.recentlyViewed array to retain order
  recentProducts.sort((a, b) => {
    return state.recentlyViewed.indexOf(a.id) - state.recentlyViewed.indexOf(b.id);
  });

  DOM.recentlyGrid.innerHTML = recentProducts.map(p => createProductCardMarkup(p)).join("");
  attachCardEvents(DOM.recentlyGrid);
}

// Dynamically process black-background logo to transparent PNG with autocrop
function makeLogoTransparent() {
  const logoImgs = document.querySelectorAll('.brand-logo-img, .brand-logo-img-drawer, .brand-logo-img-footer');
  if (logoImgs.length === 0) return;

  const tempImg = new Image();
  tempImg.crossOrigin = "anonymous";
  tempImg.src = "assets/logo.png";
  tempImg.onload = () => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = tempImg.width;
      canvas.height = tempImg.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(tempImg, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];
      
      const minVal = Math.min(r, g, b);
      if (minVal > 240) {
        data[i+3] = 0;
      } else if (minVal > 210) {
        const factor = (240 - minVal) / 30;
        data[i+3] = Math.max(0, Math.min(255, Math.floor(factor * 255)));
      }
    }

    ctx.putImageData(imgData, 0, 0);

    // Bounding box detection for autocrop
    let minX = canvas.width, minY = canvas.height, maxX = 0, maxY = 0;
    let found = false;
    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const alpha = data[((y * canvas.width) + x) * 4 + 3];
        if (alpha > 0) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
          found = true;
        }
      }
    }

    const cropWidth = maxX - minX + 1;
    const cropHeight = maxY - minY + 1;

    if (found && cropWidth > 0 && cropHeight > 0) {
      const croppedCanvas = document.createElement('canvas');
      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeight;
      const croppedCtx = croppedCanvas.getContext('2d');

      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      tempCanvas.getContext('2d').putImageData(imgData, 0, 0);

      croppedCtx.drawImage(tempCanvas, minX, minY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
      const croppedDataUrl = croppedCanvas.toDataURL();

      logoImgs.forEach(img => {
        img.src = croppedDataUrl;
      });
    } else {
      const transparentDataUrl = canvas.toDataURL();
      logoImgs.forEach(img => {
        img.src = transparentDataUrl;
      });
    }
    } catch (e) {
      console.warn("Logo transparency processing skipped:", e);
    }
  };
}

// Run Initializer
document.addEventListener("DOMContentLoaded", init);

