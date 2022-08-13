window.addEventListener('DOMContentLoaded', () => {
  (function loadForm() {
    let inputs = document.querySelectorAll('.input-file-upload');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.previousElementSibling,
        labelVal = label.querySelector('.custom-file-upload span').innerText;

      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;

        if (countFiles)
          label.querySelector('.custom-file-upload span').innerText =
            'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.custom-file-upload span').innerText = labelVal;
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.catalog-section__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })();

  // * ===== Slider
  (function sliderWorks() {
    const sliderEl = document.querySelectorAll('.similar-products__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        slidesPerView: 'auto',
        spaceBetween: 23,
        navigation: {
          nextEl: document.querySelector(
            '.similar-products__slider .swiper-button-next'
          ),
          prevEl: document.querySelector(
            '.similar-products__slider .swiper-button-prev'
          ),
        },
      });
    });
  })();

  //* Change Background Header
  function scrollHeader() {
    const nav = document.querySelector('header');

    if (this.scrollY >= 100) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  }
  window.addEventListener('scroll', scrollHeader);

  // ! Change
  const header = document.querySelector('header');
  if (window.pageYOffset >= 100) {
    header.classList.add('scroll-header');
  }

  // * ==== Counter
  (function counter() {
    const counterEl = document.querySelectorAll('.counter');

    counterEl.forEach((item) => {
      if (item) {
        item.addEventListener('click', (e) => {
          if (e.target.classList.contains('counter__btn--increase')) {
            e.target.previousElementSibling.value++;
          }

          if (e.target.classList.contains('counter__btn--decrease')) {
            if (e.target.nextElementSibling.value > 1) {
              e.target.nextElementSibling.value--;
            }
          }
        });
      }
    });
  })();

  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      const select = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  })();

  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        991: {
          direction: 'vertical',
        },
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      spaceBetween: 10,
      loopedSlides: 4,
      thumbs: {
        swiper: mySwiperNav,
      },
    });
  })();

  // * ===== Slider Handle
  (function handlesSlider() {
    let handlesSlider = document.querySelectorAll('.range-slider__range');
    let minStep = document.querySelectorAll('.range-slider__min');
    let maxStep = document.querySelectorAll('.range-slider__max');
    if (handlesSlider) {
      handlesSlider.forEach((el) => {
        noUiSlider.create(el, {
          start: [100, 9000],
          connect: true,
          padding: [10, 10],
          range: {
            min: [0],
            max: [10000],
          },
        });

        el.noUiSlider.on('update', function (values, handle) {
          if (handle) {
            maxStep.forEach((el) => {
              el.innerHTML = values[handle];
            });
          } else {
            minStep.forEach((el) => {
              el.innerHTML = values[handle];
            });
          }
        });
      });
    }
  })();

  // * ===== Show Filters
  (function showFilters() {
    const menuBtn = document.querySelector('.catalog__filter');
    const menu = document.querySelector('.side__body');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
      });

      overlay.addEventListener('click', (e) => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    }
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);

    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);
        target.classList.toggle('active');
        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + '1px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };
  toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

  // * ===== Mixer
  (function mixer() {
    const mixContent = document.querySelector('.best-offers');
    if (mixContent) {
      const mixer = mixitup(mixContent);
    }
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');

      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });

        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });

        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.price-list-btn', '.popup--call', '.popup__close');
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();

        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });

          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }

        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }

        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;

              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }

  someTabs('.tabs', '.tabs-btn', '.tabs-content', 'tabs-btn--active');

  // * ===== Change View Product
  (function changeView() {
    const catalog = document.querySelector('.catalog');
    const list = catalog.querySelector('.catalog__list');
    const products = catalog.querySelectorAll('.product-card--list');
    const btnGrid = catalog.querySelector('.catalog__btn--grid');
    const btnList = catalog.querySelector('.catalog__btn--list');
    const btnList2 = catalog.querySelector('.catalog__btn--list-2');

    if (catalog) {
      btnGrid.addEventListener('click', (e) => {
        products.forEach((product) => {
          if (product) {
            product.className = 'product-card product-card--grid';
            list.classList.add('catalog__list--grid');
          }
        });
      });

      btnList.addEventListener('click', (e) => {
        products.forEach((product) => {
          if (product) {
            product.className = 'product-card product-card--list';
            list.classList.remove('catalog__list--grid');
          }
        });
      });

      btnList2.addEventListener('click', (e) => {
        products.forEach((product) => {
          if (product) {
            product.className = 'product-card product-card--row';
            list.classList.remove('catalog__list--grid');
          }
        });
      });
    }
  })();
});
