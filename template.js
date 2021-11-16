function insertHeaderTemplate(bannerPath) {
  let $header = document.querySelector("header");
  let template = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <a class="navbar-brand navbar-brand--header" href="#">
          <svg class="main-logo"
            width="157"
            height="100"
            viewBox="0 0 157 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="45.805"
              cy="53.805"
              r="45.805"
              fill="url(#paint0_linear_302:4251)"
            />
            <path
              d="M63.9115 66.0503L42.8881 72.4778L41.2643 68.8082C41.5031 68.1663 42.1902 67.4041 43.3258 66.5215L36.9124 45.544C35.5173 45.4686 34.5167 45.2056 33.9106 44.7552L33.2048 40.8049L43.946 37.521L45.5698 41.1906C45.258 41.9217 44.5755 42.6992 43.5223 43.5231L50.034 64.822L57.2867 62.6046C57.198 60.8917 57.4179 59.5864 57.9465 58.6886L61.4696 58.0632L63.9115 66.0503ZM78.481 61.9975C74.1355 63.326 70.4929 63.0677 67.5529 61.2227C64.6436 59.3682 62.3329 55.641 60.6208 50.0408C58.8993 44.4101 58.8098 39.9034 60.3521 36.5206C61.9157 33.0979 64.8856 30.7176 69.2616 29.3797C73.6683 28.0325 77.3075 28.2248 80.1794 29.9569C83.0819 31.6795 85.3892 35.3409 87.1013 40.9411C88.8135 46.5412 88.8911 51.1185 87.3343 54.6729C85.7776 58.2274 82.8264 60.6689 78.481 61.9975ZM66.4361 38.5254C65.821 40.4535 66.1168 43.3914 67.3237 47.339C68.5307 51.2867 69.9915 53.9855 71.7064 55.4354C73.4213 56.8854 75.2886 57.3017 77.3083 56.6842C79.3586 56.0573 80.6926 54.7293 81.3103 52.7C81.9186 50.6401 81.6193 47.6364 80.4124 43.6888C78.167 36.3443 74.841 33.3458 70.4343 34.693C68.384 35.3199 67.0513 36.5973 66.4361 38.5254ZM100.114 25.619C98.033 26.2552 96.6544 27.5467 95.978 29.4936C95.3323 31.431 95.6129 34.3736 96.8198 38.3212C99.1307 45.8798 102.367 49.0229 106.529 47.7505C108.181 47.2453 109.571 46.5361 110.697 45.6229L109.111 40.4359C107.563 40.4073 106.426 40.1359 105.7 39.6217L105.05 35.855L115.792 32.5711L117.359 36.0571C117.111 36.6683 116.537 37.3625 115.637 38.1397L118.233 46.6316C117.092 48.1518 115.704 49.4127 114.069 50.4144C112.456 51.3761 110.333 52.2592 107.702 53.0638C103.326 54.4017 99.7334 54.1447 96.9253 52.2928C94.1078 50.4103 91.843 46.669 90.1309 41.0689C88.4094 35.4382 88.3457 30.9068 89.94 27.4747C91.5648 24.0333 94.4887 21.667 98.7117 20.3759C102.965 19.0754 106.733 18.9775 110.016 20.0821C110.072 20.2657 110.18 20.6176 110.339 21.1378C110.498 21.6581 110.662 22.5783 110.831 23.8984C111.001 25.2186 111.008 26.3373 110.853 27.2546L106.63 28.5457C105.909 27.8292 105.215 26.6528 104.548 25.0165C103.091 24.9597 101.613 25.1606 100.114 25.619ZM136.442 44.277C132.097 45.6055 128.454 45.3473 125.514 43.5022C122.605 41.6478 120.294 37.9205 118.582 32.3204C116.86 26.6896 116.771 22.1829 118.313 18.8002C119.877 15.3774 122.847 12.9971 127.223 11.6592C131.629 10.312 135.269 10.5044 138.14 12.2364C141.043 13.9591 143.35 17.6205 145.062 23.2206C146.775 28.8207 146.852 33.398 145.295 36.9525C143.739 40.507 140.787 42.9485 136.442 44.277ZM124.397 20.805C123.782 22.7331 124.078 25.6709 125.285 29.6186C126.492 33.5662 127.953 36.265 129.667 37.715C131.382 39.1649 133.25 39.5812 135.269 38.9637C137.32 38.3369 138.654 37.0088 139.271 34.9795C139.88 32.9197 139.58 29.9159 138.373 25.9683C136.128 18.6239 132.802 15.6253 128.395 16.9725C126.345 17.5994 125.012 18.8769 124.397 20.805Z"
              fill="url(#paint1_linear_302:4251)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_302:4251"
                x1="45.805"
                y1="8"
                x2="45.805"
                y2="99.61"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#073773" />
                <stop offset="0.604067" stop-color="#093974" />
                <stop offset="0.604167" stop-color="#C4C4C4" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_302:4251"
                x1="41.5309"
                y1="56.0084"
                x2="143.481"
                y2="22.9319"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.442708" stop-color="white" />
                <stop offset="0.485971" stop-color="#073773" />
                <stop offset="1" stop-color="#073773" />
              </linearGradient>
            </defs>
          </svg>
          <div class="brand-title">
            Mamasita
            <span class="brand-title__subtext text-black-50"
              >Dance School</span
            >
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav navbar-nav--header">
            <li class="nav-item">
              <a class="nav-link nav-link--header active" aria-current="page" href="./index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--header" href="./about-us.html">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--header" href="./coaches.html">Coaches</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link--header" href="./contacts">Contacts</a>
            </li>
          </ul>
        </div>
        <div class="link-box">
          <a href="#" class="link-box__item"
            ><img
              src="./styles/img/Group_48.png"
              alt="logo"
              class="link-box__logo"
          /></a>
          <a href="#" class="link-box__item"
            ><img
              src="./styles/img/Group_46.png"
              alt="logo"
              class="link-box__logo"
          /></a>
          <a href="#" class="link-box__item"
            ><img
              src="./styles/img/Group_47.png"
              alt="logo"
              class="link-box__logo"
          /></a>
        </div>
      </div>
      <svg
        class="navbar-mask"
        width="554"
        height="58"
        viewBox="0 0 554 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-19.5 2.81934H500.436C459.526 8.24371 419.996 16.8132 380.101 25.4616C374.761 26.6192 369.415 27.7783 364.057 28.9314C301.495 42.3975 237.383 55.0779 164.667 55.5C118.889 55.2195 92.4984 49.25 2.62571 27.0205L-19.5 21.0544V2.81934Z"
          fill="white"
          stroke="url(#paint0_linear_302:4153)"
          stroke-width="5"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_302:4153"
            x1="-12"
            y1="28.4564"
            x2="526.368"
            y2="14.2305"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1D74E9" />
            <stop offset="1" stop-color="#1E4578" />
          </linearGradient>
        </defs>
      </svg>
    </nav>
    <img
      class="img-fluid banner-img"
      src="${bannerPath}"
      alt="banner"
    />
    <svg
      class="banner-mask img-fluid"
      width="1920"
      height="218"
      viewBox="0 0 1920 218"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2051.84 0.852538L2054.11 36.654C1558.64 53.3622 1145.41 137.936 597.358 146.143C423.808 147.949 323.015 139.678 -16.8078 108.685L-16.9392 106.616L-9.55137 107.15C347.201 133.036 449.735 139.779 625.351 134.873C800.354 129.222 960.026 115.982 1112.72 99.7556C1280.73 81.8933 1439.88 60.44 1601.03 41.5344C1747.01 24.3254 1894.69 9.2914 2051.84 0.852538Z"
        fill="url(#paint0_linear_0:110)"
      />
      <path
        d="M1955.75 32.2546V217.822H-1.05273V107.656L5.8806 108.249C340.681 136.963 436.947 144.556 602.814 142.005C768.147 138.742 919.614 128.123 1064.41 114.597C1216.41 100.419 1361.08 83.0365 1506.81 67.6121C1514.01 66.8409 1521.08 66.0697 1528.28 65.3578C1666.95 50.8232 1807.08 38.3651 1955.75 32.2546Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0:110"
          x1="-104.434"
          y1="90.6169"
          x2="5.69724"
          y2="-403.829"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#009EE2" />
          <stop offset="1" stop-color="#273992" />
        </linearGradient>
      </defs>
    </svg>`;
  return ($header.innerHTML = template);
}

function insertFooterTemplate() {
  let $footer = document.querySelector("footer");
  let template = `
  <a class="navbar-brand navbar-brand--footer" href="#">
  <svg
    class="main-logo--footer"
    width="157"
    height="100"
    viewBox="0 0 157 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="45.805"
      cy="53.805"
      r="45.805"
      fill="url(#paint0_linear_302:4251)"
    />
    <path
      d="M63.9115 66.0503L42.8881 72.4778L41.2643 68.8082C41.5031 68.1663 42.1902 67.4041 43.3258 66.5215L36.9124 45.544C35.5173 45.4686 34.5167 45.2056 33.9106 44.7552L33.2048 40.8049L43.946 37.521L45.5698 41.1906C45.258 41.9217 44.5755 42.6992 43.5223 43.5231L50.034 64.822L57.2867 62.6046C57.198 60.8917 57.4179 59.5864 57.9465 58.6886L61.4696 58.0632L63.9115 66.0503ZM78.481 61.9975C74.1355 63.326 70.4929 63.0677 67.5529 61.2227C64.6436 59.3682 62.3329 55.641 60.6208 50.0408C58.8993 44.4101 58.8098 39.9034 60.3521 36.5206C61.9157 33.0979 64.8856 30.7176 69.2616 29.3797C73.6683 28.0325 77.3075 28.2248 80.1794 29.9569C83.0819 31.6795 85.3892 35.3409 87.1013 40.9411C88.8135 46.5412 88.8911 51.1185 87.3343 54.6729C85.7776 58.2274 82.8264 60.6689 78.481 61.9975ZM66.4361 38.5254C65.821 40.4535 66.1168 43.3914 67.3237 47.339C68.5307 51.2867 69.9915 53.9855 71.7064 55.4354C73.4213 56.8854 75.2886 57.3017 77.3083 56.6842C79.3586 56.0573 80.6926 54.7293 81.3103 52.7C81.9186 50.6401 81.6193 47.6364 80.4124 43.6888C78.167 36.3443 74.841 33.3458 70.4343 34.693C68.384 35.3199 67.0513 36.5973 66.4361 38.5254ZM100.114 25.619C98.033 26.2552 96.6544 27.5467 95.978 29.4936C95.3323 31.431 95.6129 34.3736 96.8198 38.3212C99.1307 45.8798 102.367 49.0229 106.529 47.7505C108.181 47.2453 109.571 46.5361 110.697 45.6229L109.111 40.4359C107.563 40.4073 106.426 40.1359 105.7 39.6217L105.05 35.855L115.792 32.5711L117.359 36.0571C117.111 36.6683 116.537 37.3625 115.637 38.1397L118.233 46.6316C117.092 48.1518 115.704 49.4127 114.069 50.4144C112.456 51.3761 110.333 52.2592 107.702 53.0638C103.326 54.4017 99.7334 54.1447 96.9253 52.2928C94.1078 50.4103 91.843 46.669 90.1309 41.0689C88.4094 35.4382 88.3457 30.9068 89.94 27.4747C91.5648 24.0333 94.4887 21.667 98.7117 20.3759C102.965 19.0754 106.733 18.9775 110.016 20.0821C110.072 20.2657 110.18 20.6176 110.339 21.1378C110.498 21.6581 110.662 22.5783 110.831 23.8984C111.001 25.2186 111.008 26.3373 110.853 27.2546L106.63 28.5457C105.909 27.8292 105.215 26.6528 104.548 25.0165C103.091 24.9597 101.613 25.1606 100.114 25.619ZM136.442 44.277C132.097 45.6055 128.454 45.3473 125.514 43.5022C122.605 41.6478 120.294 37.9205 118.582 32.3204C116.86 26.6896 116.771 22.1829 118.313 18.8002C119.877 15.3774 122.847 12.9971 127.223 11.6592C131.629 10.312 135.269 10.5044 138.14 12.2364C141.043 13.9591 143.35 17.6205 145.062 23.2206C146.775 28.8207 146.852 33.398 145.295 36.9525C143.739 40.507 140.787 42.9485 136.442 44.277ZM124.397 20.805C123.782 22.7331 124.078 25.6709 125.285 29.6186C126.492 33.5662 127.953 36.265 129.667 37.715C131.382 39.1649 133.25 39.5812 135.269 38.9637C137.32 38.3369 138.654 37.0088 139.271 34.9795C139.88 32.9197 139.58 29.9159 138.373 25.9683C136.128 18.6239 132.802 15.6253 128.395 16.9725C126.345 17.5994 125.012 18.8769 124.397 20.805Z"
      fill="url(#paint1_linear_302:4251)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_302:4251"
        x1="45.805"
        y1="8"
        x2="45.805"
        y2="99.61"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#073773" />
        <stop offset="0.604067" stop-color="#093974" />
        <stop offset="0.604167" stop-color="#C4C4C4" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_302:4251"
        x1="41.5309"
        y1="56.0084"
        x2="143.481"
        y2="22.9319"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="0.442708" stop-color="white" />
        <stop offset="0.485971" stop-color="#073773" />
        <stop offset="1" stop-color="#073773" />
      </linearGradient>
    </defs>
  </svg>
  <div class="brand-title brand-title--footer">
    Mamasita
    <span
      class="
        brand-title__subtext brand-title__subtext--footer
        text-white-25
      "
      >Dance School</span
    >
  </div>
</a>
<ul class="navbar-nav navbar-nav--footer">
  <li class="nav-item">
    <a class="nav-link nav-link--footer" aria-current="page" href="./index.html"
      >Home</a
    >
  </li>
  <li class="nav-item">
    <a class="nav-link nav-link--footer" href="./about-us.html">About us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link nav-link--footer" href="./coaches.html">Coaches</a>
  </li>
  <li class="nav-item">
    <a class="nav-link nav-link--footer" href="./contacts.html">Contacts</a>
  </li>
</ul>
<div class="footer-mid-bar">
  <ul class="adresses">
    <li class="adresses__item">Odesa, Shevchenko Avenue 11A</li>
    <li class="adresses__item">mamasitadance@gmail.com</li>
    <li class="adresses__item">+380987450110</li>
  </ul>
  <div class="link-box">
    <a href="#" class="link-box__item"
      ><img
        src="./styles/img/Group_48.png"
        alt="logo"
        class="link-box__logo"
    /></a>
    <a href="#" class="link-box__item"
      ><img
        src="./styles/img/Group_46.png"
        alt="logo"
        class="link-box__logo"
    /></a>
    <a href="#" class="link-box__item"
      ><img
        src="./styles/img/Group_47.png"
        alt="logo"
        class="link-box__logo"
    /></a>
  </div>
</div>
<p class="copyrights">©2021. Mamasita Dance School. All rights reserved</p>`;
  $footer.innerHTML = template;
}

function insertTeacherCards(numberOfCards) {
  let sectionTemplate = `<section class="teachers">
    <h2 class="teachers__title">Teachers</h2>
    <div class="teacher-cards">
    </div>
    </section>`
  
  let cardTemplate = `<div class="teacher-card">
    <img
      src="./styles/img/teacher-photo.png"
      alt="teachers photo"
      class="teacher-card__photo"
    />
    <div class="teacher-card__info">
      <h3 class="teacher-card__fullname">John Doe</h3>
      <p class="teacher-card__personal-info">
        Ukrainian
        <strong>
          Ballroom Champion, Blackpool, and World semifinalist
        </strong>
        in both amateur and professional categories.
        <br />
        <br />
        Denis is the leader, teacher, and the heart of the Mamasita
        dance school. Tango, foxtrot, Viennese waltz, and quickstep—this
        is all him.
      </p>
    </div>
  </div>`

  let $main = document.querySelector('main');
  $main.innerHTML += sectionTemplate;
  let $cardContainer = document.querySelector('.teacher-cards')

  for(let i = 0; i < numberOfCards; i++){
    $cardContainer.innerHTML += cardTemplate;
  }
}