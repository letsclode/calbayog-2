<template>
  <div v-if="$route.params.id">
    <div class="banner-wrapper small-banner">
      <!-- <img :src="require('~/static/images/Calbayog.png')"  alt=""> -->
      <VueSlickCarousel
        v-bind="sliderHeader"
        class="officials-slider"
      >
        <img
          :src="item.img"
          alt=""
          v-for="(item,i) in headerCarousel"
          :key="i"
        >
      </VueSlickCarousel>
    </div>
    <div class="section-dept-sp">
      <div
        class="welcome-text-section"
        id="dept-sp-welcome"
      >
        <div class="container wt-container">
          <div class="wt-wrapper">
            <!-- header -->
            <div
              class="img-holder"
              style=" background-image: url('/images/bg-logo.jpg'); background-size: cover; background-position: center -3px;"
            >
              <!-- <img :src="require('~/static/images/Mayor12 – 10.jpg')" alt=""> -->
              <img
                :src="selected_department.img"
                alt=""
              >
              <!--leader pic-->
            </div>
            <div class="wt-content">
              <div class="wtc-inner">
                <h4>{{ 'Welcome to the '+selected_department.title }}</h4>
                <span
                  style="color:white"
                  v-html="selected_department.welcome"
                ></span>
                <!--panhumalatag-->
                <!-- <p>
                              Welcome to the official website of the City Government of Calbayog!
                              </p>
                              <br>
                              <p>
                              Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                              </p>
                              <div class="hid-message-welcome" :class="{animate : showWelcomeMesDept}">
                                  <p>
                                      Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                                  </p>
                                  <p>
                                      Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                                  </p>
                              </div> -->
              </div>
              <button
                class="read-more"
                @click="readMoreWelcome"
                :class="{animate : showWelcomeMesDept}"
              >READ MORE</button>
            </div>
          </div>
          <div class="mobile-wt-wrapper">
            <div class="img-holder">
              <img
                :src="require('~/static/images/Mayor12 – 10.jpg')"
                alt=""
              >
            </div>
            <div class="wtc-inner">
              <h4>Welcome to Calbayog City</h4>
              <p>
                Welcome to the official website of the City Government of Calbayog!
              </p>
              <br>
              <p>
                Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
              </p>
              <div
                class="hid-message-welcome"
                :class="{animate : showWelcomeMesDept}"
              >
                <p>
                  Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                </p>
                <p>
                  Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                </p>
              </div>
            </div>
            <button
              class="read-more"
              @click="readMoreWelcome"
              :class="{animate : showWelcomeMesDept}"
            >READ MORE</button>
          </div>
        </div>
      </div>
      <div
        class="city-news-section"
        id="dept-sp-desc"
      >
        <div class="container dept-sp-con">
          <a
            :href="service.url"
            class="service"
            v-for="(service, index) in servicesArray"
            :key="index"
            target="_blank"
          >
            <span class="icon">
              <img :src="service.icon">
            </span>
          </a>
        </div>
      </div>
      <div class="news-single-wrapper">
        <div class="container">
          <div class="title-search-wrapper">
            <h3>Activities Post</h3>
          </div>
          <div class="nsp-content">
            <div class="full-img">
              <img
                :src="require('~/static/images/300819481_120140560796856_1936510054696472107_n.png')"
                @click="jobsModal"
              >
            </div>
            <div class="grid-img">
              <div class="nsp-imgs">
                <img
                  :src="require('~/static/images/301651196_120137000797212_6510033162591886582_n.png')"
                  @click="jobsModal"
                >
              </div>
              <div class="nsp-imgs">
                <img
                  :src="require('~/static/images/301170044_120137067463872_2606454796904951662_n.png')"
                  @click="jobsModal"
                >
              </div>
              <div class="nsp-imgs">
                <img
                  :src="require('~/static/images/299932715_120137040797208_2127528906162976991_n.png')"
                  @click="jobsModal"
                >
                <p
                  class="more-img-jobs"
                  @click="jobsModal"
                >25+</p>
              </div>
            </div>
            <div class="nsp-articles">
              <div class="desc">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <br>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <br>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mandate-section">
      <div class="container">
        <h4 class="title">Programs and Accomplishments</h4>
        <div
          class="mandate-gal"
          id="manadte-scroll"
        >
          <div
            class="img-gal-wrapper"
            v-for="(img, index) in mandates"
            :key="index"
            @click="programmesModal"
          >
            <img :src="img.img">
            <p class="title-m">{{img.title}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mission-section mission-visons-sections">
      <div class="container">
        <div class="right-content text-content">
          <div class="inner-r-con">
            <h5 class="title">
              Our Mission
            </h5>
            <div class="content">
              <p>{{ selected_department.mission }}</p>
            </div>
          </div>
        </div>
        <div class="left-content gallery-content">
          <div class="left-gallery">
            <div
              class="img-wrapper"
              v-for="(img, index) in galleryMisiion"
              :key="index"
            >
              <img
                :src="img.url"
                class="about-gallery-imgs"
                @click="getImg(img.url)"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vision-section mission-visons-sections">
      <div class="container">
        <div class="right-content gallery-content">
          <div class="left-gallery">
            <div
              class="img-wrapper"
              v-for="(img, index) in galleryMisiion"
              :key="index"
            >
              <img
                :src="img.url"
                :alt="img.title"
                class="about-gallery-imgs"
                @click="getImg(img.url)"
              >
            </div>
          </div>
        </div>
        <div class="left-content text-content">
          <div class="inner-r-con">
            <h5 class="title">
              Our Vision
            </h5>
            <div class="content">
              <p>{{ selected_department.vision }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="official-section">
      <div class="container">
        <h4 class="title">
          Your Calbayog City Public Servants
        </h4>
        <!-- <div class="officials-wrapper">
                  <VueSlickCarousel v-bind="sliderSettings" class="officials-slider">
                      <div class="official" v-for="(official, index) in officials" :key="index" @click="officialShowPopup(index)" :id="index">
                          <v-avatar
                              class="profile"
                              height="117"
                              width="117"
                              rounded="true"
                          >
                              <img :src="official.profile">
                          </v-avatar>
                          <div class="name-and-position">
                              <p>{{official.name}}</p>
                              <v-divider class="line"></v-divider>
                              <span>{{official.position}}</span>
                          </div>
                      </div>
                  </VueSlickCarousel>
              </div> -->
        <div
          class="officials-wrapper"
          v-if="selected_department.employees"
        >
          <VueSlickCarousel
            v-bind="sliderSettings"
            class="officials-slider"
          >
            <div
              class="official"
              v-for="(official, index) in selected_department.employees"
              :key="index"
              @click="officialShowPopup(index)"
              :id="index"
            >
              <v-avatar
                class="profile"
                height="117"
                width="117"
                rounded="true"
              >
                <img :src="official.img">
              </v-avatar>
              <div class="name-and-position">
                <p>{{official.name??'Name'}}</p>
                <v-divider class="line"></v-divider>
                <span>{{official.position ?? 'Position'}}</span>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
    <modal
      name="jobsModal"
      width="100%"
      height="100%"
    >
      <div class="newspopup">
        <div class="images-slider">
          <v-carousel class="news-slider-img">
            <v-carousel-item
              v-for="(item,i) in jobs"
              :key="i"
              :src="item.img"
            ></v-carousel-item>
          </v-carousel>
        </div>
        <div class="right-content">
          <div class="close">
            <v-icon
              @click="closeNewsModal()"
              class="x-close"
            >mdi-close</v-icon>
          </div>
          <div class="title-close-wrapper">
            <h3 class="title">
              Activities Post
            </h3>
          </div>
          <div class="news-modal-content">
            <div class="news-description">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <modal
      name="progModal"
      width="100%"
      height="100%"
    >
      <div class="newspopup">
        <div class="images-slider">
          <v-carousel class="news-slider-img">
            <v-carousel-item
              v-for="(item,i) in mandates"
              :key="i"
              :src="item.img"
            ></v-carousel-item>
          </v-carousel>
        </div>
        <div class="right-content">
          <div class="close">
            <v-icon
              @click="closeProgrammesModal"
              class="x-close"
            >mdi-close</v-icon>
          </div>
          <div class="title-close-wrapper">
            <h3 class="title">
              Programmes and Accomplishment
            </h3>
          </div>
          <div class="news-modal-content">
            <div class="news-description">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <modal
      name="imgpop"
      width="600px"
      height="600px"
    >
      <div class="imagepop">
        <img :src="imgUrl">
      </div>
    </modal>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "About",
  layouts: "default",
  components: { VueSlickCarousel },
  data() {
    return {
      officialIndex: "",
      showWelcomeMesDept: false,
      imgUrl: "",
      galleryMisiion: [
        {
          title: "img1",
          url: "/images/about1.png",
        },
        {
          title: "img2",
          url: "/images/about2.png",
        },
        {
          title: "img3",
          url: "/images/about3.png",
        },
      ],
      jobs: [
        {
          title: "img1",
          img: "/images/300819481_120140560796856_1936510054696472107_n.png",
        },
        {
          title: "img2",
          img: "/images/301651196_120137000797212_6510033162591886582_n.png",
        },
        {
          title: "img3",
          img: "/images/301170044_120137067463872_2606454796904951662_n.png",
        },
        {
          title: "img4",
          img: "/images/299932715_120137040797208_2127528906162976991_n.png",
        },
        {
          title: "img5",
          img: "/images/301170044_120137067463872_2606454796904951662_n.png",
        },
      ],
      officials: [
        {
          name: "Hon. Raymund C. Uy",
          position: "Calbayog City Mayor",
          profile: "/images/cm.png",
        },
        {
          name: "Jaynard Monterona",
          position: "Damdamin ng Bayan",
          profile: "/images/cm.png",
        },
        {
          name: "Hon. Raymund C. Uy",
          position: "Calbayog City Mayor",
          profile: "/images/cm.png",
        },
        {
          name: "Jaynard Monterona",
          position: "Damdamin ng Bayan",
          profile: "/images/cm.png",
        },
        {
          name: "Hon. Raymund C. Uy",
          position: "Calbayog City Mayor",
          profile: "/images/cm.png",
        },
        {
          name: "Jaynard Monterona",
          position: "Damdamin ng Bayan",
          profile: "/images/cm.png",
        },
        {
          name: "Hon. Raymund C. Uy",
          position: "Calbayog City Mayor",
          profile: "/images/cm.png",
        },
        {
          name: "Jaynard Monterona",
          position: "Damdamin ng Bayan",
          profile: "/images/cm.png",
        },
        {
          name: "Hon. Raymund C. Uy",
          position: "Calbayog City Mayor",
          profile: "/images/cm.png",
        },
        {
          name: "Jaynard Monterona",
          position: "Damdamin ng Bayan",
          profile: "/images/cm.png",
        },
        {
          name: "Hon. Raymund C. Uy",
          position: "Calbayog City Mayor",
          profile: "/images/cm.png",
        },
        {
          name: "Hon. Raymund C. Uy",
          position: "Calbayog City Mayor",
          profile: "/images/cm.png",
        },
      ],
      servicesArray: [
        {
          url: "https://www.bir.gov.ph/",
          icon: "/images/Bureau_of_Internal_Revenue_(BIR).svg.png",
        },
        { url: "https://www.prc.gov.ph/", icon: "/images/g7646.png" },
        {
          url: "https://www.gsis.gov.ph/",
          icon: "/images/Government_Service_Insurance_System_(Philippines)_(logo).svg.png",
        },
        {
          url: "http://www.csc.gov.ph/",
          icon: "/images/Civil_Service_Commission.svg.png",
        },
        { url: "https://www.sss.gov.ph/", icon: "/images/sss-logo-medium.png" },
        {
          url: "https://www.philhealth.gov.ph/",
          icon: "/images/Www.philhealth.gov.ph.png",
        },
      ],
      mandates: [
        { img: "/images/about1.png", title: "Sample title" },
        { img: "/images/about2.png", title: "Sample title" },
        { img: "/images/news5.png", title: "Sample title" },
        { img: "/images/news4.png", title: "Sample title" },
        { img: "/images/news3.png", title: "Sample title" },
        { img: "/images/news2.png", title: "Sample title" },
        { img: "/images/news1.png", title: "Sample title" },
        { img: "/images/mutyahansamar2019.png", title: "Sample title" },
        { img: "/images/Civic-Parade1.png", title: "Sample title" },
      ],
      sliderSettings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        infinite: true,
        slidesToShow: 5,
        speed: 300,
        rows: 2,
        slidesPerRow: 1,
        draggable: true,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              rows: 1,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2.2,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1.3,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1.2,
              rows: 1,
              dots: false,
            },
          },
        ],
      },
      headerCarousel: [
        { title: "Cathedral", img: "/images/Calbayog.png" },
        { title: "Falls", img: "/images/calbcover.png" },
        { title: "Falls", img: "/images/falls.png" },
      ],
      sliderHeader: {
        dots: false,
        dotsClass: "slick-dots header-dots",
        infinite: true,
        slidesToShow: 1,
        slidesPerRow: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        fade: true,
        adaptiveHeight: false,
      },
      selected_department: {},
      departments: [
        {
          title: "City Mayors Office",
          oic: "Raymund C. Uy",
          position: "CITY MAYOR",
          img: "",
          tag: 1,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ img: "" }],
          programs: [
            {
              title: "",
              description: "",
              img: "",
            },
          ],
        },
        {
          title: "City Vice - Mayor Office",
          oic: "Rex M. Daguman",
          position: "CITY VICE - MAYOR",
          img: "/images/City_seal.png",
          tag: 2,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ img: "" }],
        },
        {
          title: "City Administrator Office",
          oic: "Augusto L. Magdaraog",
          position: "DEPARTMENT HEAD",
          img: "/images/City_seal.png",
          tag: 3,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Accountant Office",
          oic: "",
          position: "DEPARTMENT HEAD",
          img: "/images/City_seal.png",
          tag: 4,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "Assesor`s Office",
          oic: "Joselito A. Montealto, JD",
          position: "DEPARTMENT HEAD",
          img: "/images/City_seal.png",
          tag: 5,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "Bussiness Permits and Licensing Office",
          oic: "Leonardo A. Bedio",
          position: "DEPARTMENT HEAD",
          img: "/images/City_seal.png",
          tag: 6,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "Social Welfare and Development Office",
          oic: "Betty Jane V. Arnejo",
          position: "CSWD OFFICER",
          img: "/images/City_seal.png",
          tag: 7,
          mission:
            "To provide windows of opportunities in cooperation with partner government agencies, non-government agencies and other sectors of the civil society and achieve full implementation of the programs and services gaining empowerment and governance for an improved quality of life.",
          vision:
            "Individuals, families and communities empowered through comprehensive and integrated delivery of services, thus, attain an improved quality of life.",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Planning and Development Office",
          oic: "Alberto Pablo O. Lucero, Jd",
          position: "OIC-CPD Coordinator",
          img: "/images/City_seal.png",
          tag: 8,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Veterenary Office",
          oic: "Dr. Editha Ancheta",
          position: "CITY VETERINARIAN",
          img: "/images/City_seal.png",
          tag: 9,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Population",
          oic: "Atty. Ma. Cecil Y. Rueda",
          position: "",
          img: "/images/City_seal.png",
          tag: 10,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Legal Office",
          oic: "Atty. Agustin M. Avalos",
          position: "",
          img: "/images/City_seal.png",
          tag: 11,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Cooperatives Office",
          oic: "Clarita B. Oliver",
          position: "OIC-COOP",
          img: "/images/City_seal.png",
          tag: 12,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Budget Office",
          oic: "Agnes R. Dordines",
          position: "CITY BUDGET OFFICER",
          img: "/images/City_seal.png",
          tag: 13,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "CHR",
          oic: "",
          position: "",
          img: "/images/City_seal.png",
          tag: 14,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Housing and Development Office",
          oic: "Engr. Ricky A. Moreno",
          position: "OIC-CHDO",
          img: "/images/City_seal.png",
          tag: 15,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        // {
        //     title: 'City Mayors Office',
        //     oic: 'Raymund C. Uy',
        //     position: 'CITY MAYOR',
        //     img: '/images/City_seal.png',
        //     tag:16

        // },
        {
          title: "City Environment Office",
          oic: "Lorenzo C. Raz Jr.",
          position: "",
          img: "/images/City_seal.png",
          tag: 16,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Disaster Risk and Management Office",
          oic: "Dr. Sandro C. Daguman",
          position: "",
          img: "/images/City_seal.png",
          tag: 17,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Drug Abuse Prevention Office",
          oic: "Dr. Teodoro U. Fortaleza",
          position: "",
          img: "/images/City_seal.png",
          tag: 18,
          mission: "",
          vision: "",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Agriculture Office",
          oic: "Engr. Teachie G. Pagunsan",
          position: "OIC-AGRICULTURE",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2Fhead%2FEngr.%20Teachie%20G.%20%20Pagunsan%2C%20JD%20-%20OIC-%20AGRICULTURE.png?alt=media&token=83901176-4298-4b04-a8be-168a1f4a127c",
          tag: 19,
          mission:
            "To uplift the living conditions of farmers & fisherfolks: promote development without compromising the next generation by adopting effective measures not to disregard the ecologically sound environment, develop economic growth and attain food security through sustainable agriculture",
          vision:
            "The City Agriculture Office is envisioned to be manned by professional, competent and public service-oriented employees and at molding self-reliant and self-sufficient farmers and fisherfolks with entrepreneurial capabilities in an ecologically sound environment.",
          welcome:
            "<p>Our Office takes the lead in promoting agricultural development by providing the policy framework, public investment and support services, which are needed for domestic and export-oriented enterprises.<br><br>We also adhere to the mandate of the City Agriculturist as provided for in the Local Government Code: Formulate measures to ensure the delivery of basic agricultural services; develop plans and strategies, agricultural programs and projects; and ensure assistance and access to resources in the production and processing of agricultural and fisheries and marine products are extended to farm families and fisher folks;<br><br>We look forward to uplift the living conditions of farmers and fisher folks and  promote development without compromising the welfare of the next generation by adopting effective measures that takes into consideration an ecologically sound environment. We  strive for economic growth and food security through sustainable agriculture.<br><br>“Agriculture is the greatest and fundamentally the most important of our industries. The cities are but the branches of the tree of national life, the roots of which go deeply into the land. We all flourish or decline with the farmer.” - Bernard Baruch<br><br>Should you have an concerns please feel free to contact us or visit  The City Agriculture Office, Brgy. Payahan.",
          employees: [
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6461-removebg-preview.png?alt=media&token=ebdca730-a0d2-4ab9-9c8b-07c7e54fb1cd",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6464-removebg-preview.png?alt=media&token=9ccc33cc-eab1-4cd8-a499-4adb47c4a025",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6466-removebg-preview.png?alt=media&token=006f97a3-4112-454a-9539-0c80f32edc69",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6468-removebg-preview.png?alt=media&token=e0d16260-6975-422c-a721-54797e4ef8a1",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6471-removebg-preview.png?alt=media&token=454535f7-6467-41e6-b7a4-7df813fbeedc",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6474-removebg-preview.png?alt=media&token=c298335b-9746-475b-83a8-fa60ab93346e",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6476-removebg-preview.png?alt=media&token=0a73baaf-cf08-489d-83c3-10249a779071",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6478-removebg-preview.png?alt=media&token=cb50ba9f-0c5d-4547-a0a8-11f7cc68df9f",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6480-removebg-preview.png?alt=media&token=18241f66-802f-4e7b-aade-22a2ffbc377a",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6482-removebg-preview.png?alt=media&token=9f45f32e-b2d2-40a2-a87f-5d7edb9f390a",
            },

            { name: "", position: "", img: "" },
          ],
        },
      ],
    };
  },
  mounted() {
    this.filterDepartments();
  },
  methods: {
    // getImg(val){
    //     this.$modal.show('imgpop');
    // },
    officialShowPopup(index) {
      // this.$modal.show('officialModal');
    },
    readMoreWelcome() {
      this.showWelcomeMesDept = !this.showWelcomeMesDept;
    },
    jobsModal() {
      this.$modal.show("jobsModal");
    },
    closeNewsModal() {
      this.$modal.hide("jobsModal");
    },
    programmesModal() {
      this.$modal.show("progModal");
    },
    closeProgrammesModal() {
      this.$modal.hide("progModal");
    },
    getImg(url) {
      this.imgUrl = url;
      this.$modal.show("imgpop");
    },
    filterDepartments() {
      this.departments.forEach((department) => {
        if (department.tag == this.$route.params.id) {
          this.selected_department = department;
          console.log(this.selected_department, "department");
        }
      });
    },
  },
};
</script>