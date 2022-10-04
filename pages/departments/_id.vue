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
              <!-- <button class="read-more" @click="readMoreWelcome" :class="{animate : showWelcomeMesDept}">READ MORE</button> -->
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
              <p>{{ selected_department.mission ??'No data yet' }}</p>
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
              <p>{{ selected_department.vision ??'No data yet' }}</p>
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
          img: "/images/Mayor12 – 10.jpg",
          tag: 1,
          mission:
            "The office of the mayor is tasked with promoting the general welfare of the city and its constituents the efficient, effective, relevant and economical governance. It exercises general supervision and control over all programs, projects, services and activities of the City Government which aims to put emphasis on prioritizing the citizens' needs at the core of the development agenda. 'Tao ang una'. The office serves as the coordinating body which goal is to maximize the generation of resources and revenues and apply the same to the effective implementation of development plans, programs, objectives and priorities to ensure",
          vision:
            "Good Governance, Better Quality life for empowered God Loving citizens and Private- Public partnership for a sustainable economic development, entrepreneurship and self-reliance.",
          welcome:
            "<p>The Mayor's Office Operation coordinates and oversees the management of city governmental operations to promote the efficient and effective delivery of agency services.<br><br> The office mandate to both provide the operational support for all agencies as well as measure and report on agency performance.<br><br> Operations helps City agencies to improve productivity by providing recommendations and institutional support in addition to reporting areas of success and identifying the areas of possible improvement. Vision: Good Governance, Better Quality life for empowered God Loving citizens and Private-Public partnership for a sustainable economic development, entrepreneurship and self-reliance.",
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
          img: "/images/Mayor12 – 10.jpg",
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
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assesors%2Fhead%2FJoselito%20A.%20Montealto%2C%20JD%20-%20OIC-%20Assessor.png?alt=media&token=9b0b18db-a995-4217-8788-dd709e4a49d6",
          tag: 5,
          mission:
            "Implement a quick Reference System on Real Property Tax Assessment and Appraisal and come up with real property records management.",
          vision:
            "Effective & Efficient Real Property Tax Assessment Office through upgraded assessment techniques, procedures, & practices by automation.",
          welcome: "",
          employees: [
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assesors%2FIMG_6014-removebg-preview.png?alt=media&token=b13d994e-d9d3-4b7c-9a84-75ec388e4148",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assesors%2FIMG_6016-removebg-preview.png?alt=media&token=4ae6f631-d079-44c6-afd0-f58d442578eb",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assesors%2FIMG_6020-removebg-preview.png?alt=media&token=0837af96-247b-40be-a581-2abf117f5f09",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assesors%2FIMG_6023-removebg-preview.png?alt=media&token=a55b6a22-9f76-483c-a299-b817033c6f76",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assesors%2FIMG_6026-removebg-preview.png?alt=media&token=c19a01fa-d9e8-4e40-9724-80dfac069c7a",
            },
          ],
        },
        {
          title: "Bussiness Permits and Licensing Office",
          oic: "Leonardo A. Bedio",
          position: "DEPARTMENT HEAD",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/bplo%2Fhead%2FLeonardo%20A.%20Bedio-OIC-%20BPL%20Chief.png?alt=media&token=a5b83c11-6180-41d8-93d6-bf760ed256e2",
          tag: 6,
          mission: "",
          vision: "",
          welcome:
            "<p>Welcome to the Business Permit and Licensing Office page. Our Office is in charge of the business permitting and licensing of private commercial, industrial and other business ventures within the jurisdiction of the local government of Calbayog, in relation to the implementation of tax ordinances pursuant to the provisions provided under Book II of RA 7160 otherwise known as the Local Government Code of 1991. We are also tasked to monitor and impose mandatory standards to ensure compliance with applicable laws, rules and regulations in order to protect the interests of the public and promote business activities for the welfare of our city. If you have any concerns please feel free to send us a message or visit BPLO inside the Calbayog City Hall Compound.</p>",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "Social Welfare and Development Office",
          oic: "Betty Jane V. Arnejo",
          position: "CSWD OFFICER",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cswd%2Fhead%2FBetty%20Jane%20V.%20Arnejo%20-%20CSWD%20Officer.png?alt=media&token=268fa2e0-4cc7-4fa9-87ed-9e9456bbb6c2",
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
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cpdo%2Fhead%2FAlberto%20Pablo%20O.%20Lucero%2C%20JD%20-%20OIC-CPD%20Coordinator.png?alt=media&token=fe864924-923d-4f6b-8671-65e60c7ba6ae",
          tag: 8,
          mission:
            "To formulate viable and responsive plans, projects and programs that will promote sustainable and holistic development of the city and enhance competitiveness for a productive and improved Calbayognons",
          vision:
            "A City Planning & Development Office with multi-disciplined public servants, adhering to the values of professionalism, competence and innovation working as a team, responsive to the needs of time towards a balance development of the city of Calbayog",
          welcome:
            "<p>The City Planning and Development Office is the department mandated to craft comprehensive development plans and other fiscal and other socio-economic policies. We analyze the income and expenditure pattern of the city government and provide recommendations for consideration of the Local Finance Committee. It is also our responsibility to monitor and evaluate the implementation of the different development programs, projects and activities in our local government, in accordance with the approved Development Plan. Should you have any concerns please feel free to send us a message or visit the City Planning and Development Office in the Calbayog City Hall Compound. We are glad to be of service.</p>",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Veterenary Office",
          oic: "Dr. Editha Ancheta",
          position: "CITY VETERINARIAN",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2Fhead%2FDr.%20Editha%20Anchet%20-%20City%20veterinarian.png?alt=media&token=4a23af6e-cc0e-4990-b449-8871ddc477c8",
          tag: 9,
          mission:
            "An agency with productive programs feared towards the livestock & poultry sufficiency, and public health and having efficient staff with harmonious working relationship. City Veterinary Office improving lives through sound animal production.",
          vision:
            "The City Veterinary Office commits to the attainment of Livestock & Poultry sufficiency & public health through the conduct of participatory research promotion of livestock investment & marketing assistance & human resource development.",
          welcome:
            "<p>The City Veterinary Office is the local lead agency on animal welfare and all matters pertaining to the slaughter of animals for human consumption. We regulate the keeping of domestic animals. We likewise regulate and inspect meat, poultry, milk and dairy products for public consumption.<br><br>Moreover, we enforce all laws and regulations for the prevention of cruelty to animals, and implement measures to eradicate, prevent and cure all kinds of animal diseases.<br><br>At present, our office operates a slaughterhouse and handles meat inspection.</p>",
          employees: [
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7745-removebg-preview.png?alt=media&token=bf2ca656-a629-44c8-b593-36e28552179c",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7747-removebg-preview.png?alt=media&token=33115cea-7bcc-46c3-8649-3a1a5fe9bccd",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7749-removebg-preview.png?alt=media&token=3fd48303-0bcc-46c0-9c3e-359ff2ed5cb2",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7751-removebg-preview.png?alt=media&token=0a9b24cb-2b38-4400-ba83-4f2248579e1e",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7753-removebg-preview.png?alt=media&token=872c0b3d-d9a2-40d7-9f21-7c41a7e54be0",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7755-removebg-preview.png?alt=media&token=26ce5b56-1ede-4797-a722-7f7ae6118613",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7756-removebg-preview.png?alt=media&token=a27cd098-5af4-4850-b29d-ada0d8e79edc",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7758-removebg-preview.png?alt=media&token=746738a7-cc2e-4dbe-98c2-49a4e4b8f6dd",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7760-removebg-preview.png?alt=media&token=793aaf13-3c12-487f-a206-65b6c1ff7825",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7762-removebg-preview.png?alt=media&token=c1d25b5c-e685-483b-9347-63343934ab9c",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7764-removebg-preview.png?alt=media&token=2d4532d6-8468-49e1-9603-0e12a2a09443",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7766-removebg-preview.png?alt=media&token=c4937daa-c318-4253-b4e8-ab7355cdd527",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7769-removebg-preview.png?alt=media&token=4d930357-ba25-486e-b63e-c6b2e35f6edc",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7771-removebg-preview.png?alt=media&token=018beaea-3421-46a3-b791-420ff37ff4e3",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7773-removebg-preview.png?alt=media&token=79e0d111-bce2-49bf-ad8b-ef2fa0500419",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7775-removebg-preview.png?alt=media&token=f626ab2b-b6ec-4cf3-8b52-8c6ae3105ba0",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7777-removebg-preview.png?alt=media&token=87c896b9-584b-45e3-83c1-3918f5602308",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cityvet%2FIMG_7779-removebg-preview.png?alt=media&token=d6355644-358d-450d-bed5-b7e0a540f009",
            },
          ],
        },
        {
          title: "City Population",
          oic: "Atty. Ma. Cecil Y. Rueda",
          position: "",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/citypopulation%2Fhead%2FAtty.%20Ma.%20Cecil%20Y.%20Rueda%20-%20City%20Pop.png?alt=media&token=c7c247f6-0ef7-444f-886f-002df2138417",
          tag: 10,
          mission:
            "To realize this vision, the office is committed to ensure that the Calbayognons are well-informed about Population and Development, Responsible Parenthood, Family Planning, Reproductive Health, Gender Sensitivity and Child and Youth Development so that each and every family can be able to make an informed choice with regards to the number and age-spacing of children they are capable of sustaining and for the young men and women to delay early marriage instead engage in beneficial and wholesome relationships with their peers.",
          vision:
            "The City Population Office envisions Calbayog City to be a community of well-planned, happy, prosperous and empowered families.",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Legal Office",
          oic: "Atty. Agustin M. Avalos",
          position: "",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/citylegal%2Fhead%2FAtty.%20Agustin%20M.%20Avalon.png?alt=media&token=18982954-99a7-40c4-b74d-0cfde9f07605",
          tag: 11,
          mission:
            "The officers and employees of the CLSO resolve to serve the public with more vigor and, in so doing, become more effective agents in providing information on matters pertaining to the rule of law.",
          vision:
            "For the year 2020, the City Legal Services Office, aside from its statutory mandate, endeavors to improve coordination with other offices, both local and national.",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Cooperatives Office",
          oic: "Clarita B. Oliver",
          position: "OIC-COOP",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/citycoop%2Fhead%2FClarita%20B.%20Oliver%20-%20OIC-COOP.png?alt=media&token=68b8009d-e8c2-4178-a19d-039b304acce7",
          tag: 12,
          mission:
            "To encourage the membership of cooperatives to immerse and participate the socio-economic capability building initiatives, thereby assist them to become productive communities.",
          vision:
            "A cooperative Calbayog City, pursuing the objectives of social justice and ensuring the socio-economic gains thru a holistic community development with people empowerment.",
          welcome:
            "<p>The City Cooperative Office was created in 1993, by virtue of Budget Ordinance No. 93-01002, during the incumbency of the late City Mayor Reynaldo S. Uy.<br><br>Our Office adheres to the policies and mandate spelled-out in the Local Government Code, Republic Act No. 6939 or the Cooperative Development Authority, and Republic Act 9520 or the Cooperative Code of 2008.<br><br>We extend services needed for the growth and development of cooperatives in the City of Calbayog. We also conduct advocacy campaigns to encourage participation in the organization of cooperatives and provide assistance in improving management skills.<br><br>Working together is our heart. Creating great result is the best part.We inspire, we innovate, and we create.Your growth and success will be great.<br><br>Tara na sa City Cooperatives Office.An Opisina nga may pag alakapa Ngan may paghigugma sa kada tagsa.</p>",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Budget Office",
          oic: "Agnes R. Dordines",
          position: "CITY BUDGET OFFICER",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/citybudget%2Fhead%2FAgnes%20R.%20Dordines%20-%20City%20Budget%20Officer.png?alt=media&token=ce690457-2106-41f0-9ae9-243d7177d7dd",
          tag: 13,
          mission:
            "To carry out all local government activities under a comprehensive development and fiscal plan prepared, authorized and executed in accordance with prevailing status, administrative regulations and principles of sound management.",
          vision: "",
          welcome:
            "<p>Our Office reviews and consolidates budget proposals of different departments and offices of the local government of Calbayog, both annual and supplemental. Hence, we are primarily responsible for the preparation of the Executive Budget and Supplemental Budget.<br><br>As a financial management office, we promote efficient, prudent and effective management utilization of government funds in the implementation of programs, projects and activities. We also provide technical assistance on various budgetary concerns.</p>",
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
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/chdo%2Fhead%2FEngr.%20Ricky%20A.%20Moreno%20-%20OIC-CHDO.png?alt=media&token=f4b2f5a2-34bc-413d-8bde-842f992fb76c",
          tag: 15,
          mission:
            "To provide security of tenure to the under privileged and homeless citizens in the locality.",
          vision:
            "To establish and innovative a responsive housing program to attain zero informal settler families by the year 2024.",
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
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cenro%2Fhead%2FLorenzo%20C.%20Ras%2C%20Jr.png?alt=media&token=a71a82e7-d668-4c17-ad33-0b0766c6acae",
          tag: 16,
          mission:
            "Manage local resources into productive and protected conditions and uphold the value of awareness for the people and environment Ecological balance leading to sustainable development.",
          vision:
            "The City Environment and Natural Resource Office is committed to address environmental concern consistent with the policy of efficient conservation to be beneficial to sustain economic growth.",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Disaster Risk and Management Office",
          oic: "Dr. Sandro C. Daguman",
          position: "",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cdrrmo%2Fhead%2Fhead%2FDr.%20Sandro%20C.%20Daguman%20-%20CGDH%201.png?alt=media&token=26434e33-5106-46a7-9ca7-01c438c638ed",
          tag: 17,
          mission:
            "To minimize the disaster's impact to the people, properties and business operation.",
          vision:
            "By the year 2021 Calbayog City is equipped with people and facilities in disaster reduction, response and rehabilitation.",
          welcome: "",
          employees: [{ name: "", position: "", img: "" }],
        },
        {
          title: "City Drug Abuse Prevention Office",
          oic: "Dr. Teodoro U. Fortaleza",
          position: "",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/cdapro%2Fhead%2FDr.%20Teodoro%20U.%20Fortaleza%20-%20CGDH%201.png?alt=media&token=925aacb7-f500-4697-bd79-bd66d74b15f0",
          tag: 18,
          mission:
            "We are committed to promote drug abuse prevention and control through Information Dissemination, Diagnosis, Treatment & Rehabilitation and After Care.",
          vision:
            "A Drug Free Calbayog that is safe and progressive, through a dynamic and responsive partnership between the local government and its community, contributing towards national effort to eradicate drug abuse.",
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
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6484-removebg-preview.png?alt=media&token=cd99db9b-04a0-40ac-988b-6d0eb1998982",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6486-removebg-preview.png?alt=media&token=4264d1ae-adcb-4299-93e0-0d118ce2525c",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6488-removebg-preview.png?alt=media&token=ae5d3de6-e46e-4e8e-aadf-d2e57433ceff",
            },
            {
              name: "",
              position: "",
              img: "https://console.firebase.google.com/project/calbayogapp/storage/calbayogapp.appspot.com/files/~2Fagriculture",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6494-removebg-preview.png?alt=media&token=662a4b90-7ed0-4c09-8ba4-beb93ff7f4b6",
            },
            {
              name: "",
              position: "",
              img: "https://console.firebase.google.com/project/calbayogapp/storage/calbayogapp.appspot.com/files/~2Fagriculture",
            },
            {
              name: "",
              position: "",
              img: "https://console.firebase.google.com/project/calbayogapp/storage/calbayogapp.appspot.com/files/~2Fagriculture",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6500-removebg-preview.png?alt=media&token=26f09017-f331-4aaa-9f57-d96dabb31332",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6502-removebg-preview.png?alt=media&token=a816e340-1c70-4f5c-9643-4e2e6113108d",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6504-removebg-preview.png?alt=media&token=873d5fea-de60-4878-917d-a52cacc8c198",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6507-removebg-preview.png?alt=media&token=10ba7a6d-b295-4de4-bfc2-4fe33ae6a609",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6510-removebg-preview.png?alt=media&token=4f881fb4-054a-4152-bd02-fcdb52cc225f",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6515-removebg-preview.png?alt=media&token=51bf09dd-ef2a-497c-bc0a-4f899a2bf075",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6517-removebg-preview.png?alt=media&token=339e7433-4dc5-45e4-9ad1-0dc714e4f412",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6519-removebg-preview.png?alt=media&token=56026b9d-875a-4168-a141-3ea7da7a2746",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6522-removebg-preview.png?alt=media&token=c4369dc0-e4e7-4a5b-9a40-8b3a54d6b29d",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6524-removebg-preview.png?alt=media&token=6b118c9d-91b1-4cfa-82b6-05f1e8d66473",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6526-removebg-preview.png?alt=media&token=7cffd30a-822c-41f7-83f9-43b84558c322",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6528-removebg-preview.png?alt=media&token=31968f70-e9e9-40d0-85f7-7461293980cd",
            },
            {
              name: "",
              position: "",
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/agriculture%2FIMG_6532-removebg-preview.png?alt=media&token=94544a72-ad9d-41c0-83a6-737031449d82",
            },
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