<template>
  <v-app>
    <div
      class="banner-wrapper small-banner"
      id="about-banner"
    >
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
      <p class="banner-title">Departments</p>
    </div>
    <!-- <div class="search-bar-section">
            <div class="container">
                <form action="#" class="search-bar">
                    <div class="sb-wrapper">
                        <button type="submit">
                            <img :src="require('~/static/images/icon-search.png')">
                        </button>
                        <input type="text" class="search-dept-input">
                    </div>
                </form>
            </div>
        </div> -->
    <div class="dept-section">
      <div class="container">
        <div class="header">
          <h4
            class="title v-app-title"
            style="font-size: 2.25rem !important; font-weight: 700;"
          >Departments</h4>
          <form action="departments/_id">
            <div class="search-wrapper">
              <!-- <input type="text" class="search-input" placeholder="Search Departments"> -->
              <v-autocomplete
                v-model="value"
                :items="items"
                class="search-autocom"
                dense
                placeholder="Search Departments"
              ></v-autocomplete>
              <button type="submit">
                <img :src="require('~/static/images/Icon awesome-search.png')">
              </button>
            </div>
          </form>
        </div>
        <div class="dept-wrapper">
          <div
            class="dept-info"
            v-for="(dept, index) in departments"
            :key="index"
          >
            <!-- <a href="departments/_id"> -->
            <div
              class="inner-info"
              @click="testing(dept.tag)"
            >
              <div class="dept-logo">
                <img
                  :src="dept.logo"
                  :alt="dept.title"
                >
              </div>
              <div class="dept-content">
                <p class="dept-title">{{dept.title}}</p>
                <p class="oic">{{dept.oic}}</p>
                <v-divider></v-divider>
                <span class="position">{{dept.position}}</span>
              </div>
            </div>
            <!-- </a> -->
          </div>
        </div>
      </div>

    </div>
  </v-app>

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
      departments: [
        {
          title: "City Mayors Office",
          oic: "Raymund C. Uy",
          position: "CITY MAYOR",
          logo: "/images/City_seal.png",
          tag: 1,
        },
        {
          title: "The Sangguniang Panlunsod Office",
          oic: "Rex M. Daguman",
          position: "CITY VICE - MAYOR",
          logo: "/images/City_seal.png",
          tag: 2,
        },
        {
          title: "City Administrator Office",
          oic: "Augusto L. Magdaraog",
          position: "DEPARTMENT HEAD",
          logo: "/images/City_seal.png",
          tag: 3,
        },
        {
          title: "City Accountant Office",
          oic: "",
          position: "DEPARTMENT HEAD",
          logo: "/images/City_seal.png",
          tag: 4,
        },
        {
          title: "Assesor`s Office",
          oic: "Joselito A. Montealto, JD",
          position: "DEPARTMENT HEAD",
          logo: "/images/City_seal.png",
          tag: 5,
        },
        {
          title: "Bussiness Permits and Licensing Office",
          oic: "Leonardo A. Bedio",
          position: "DEPARTMENT HEAD",
          logo: "/images/City_seal.png",
          tag: 6,
        },
        {
          title: "Social Welfare and Development Office",
          oic: "Betty Jane V. Arnejo",
          position: "CSWD OFFICER",
          logo: "/images/City_seal.png",
          tag: 7,
        },
        {
          title: "City Planning and Development Office",
          oic: "Alberto Pablo O. Lucero, Jd",
          position: "OIC-CPD Coordinator",
          logo: "/images/City_seal.png",
          tag: 8,
        },
        {
          title: "City Veterenary Office",
          oic: "Dr. Editha Ancheta",
          position: "CITY VETERINARIAN",
          logo: "/images/City_seal.png",
          tag: 9,
        },
        {
          title: "City Population",
          oic: "Atty. Ma. Cecil Y. Rueda",
          position: "",
          logo: "/images/City_seal.png",
          tag: 10,
        },
        {
          title: "City Legal Office",
          oic: "Atty. Agustin M. Avalos",
          position: "",
          logo: "/images/City_seal.png",
          tag: 11,
        },
        {
          title: "City Cooperatives Office",
          oic: "Clarita B. Oliver",
          position: "OIC-COOP",
          logo: "/images/City_seal.png",
          tag: 12,
        },
        {
          title: "City Budget Office",
          oic: "Agnes R. Dordines",
          position: "CITY BUDGET OFFICER",
          logo: "/images/City_seal.png",
          tag: 13,
        },
        {
          title: "CHR",
          oic: "",
          position: "",
          logo: "/images/City_seal.png",
          tag: 14,
        },
        {
          title: "City Housing and Development Office",
          oic: "Engr. Ricky A. Moreno",
          position: "OIC-CHDO",
          logo: "/images/City_seal.png",
          tag: 15,
        },
        
        {
          title: "City Environment Office",
          oic: "Lorenzo C. Raz Jr.",
          position: "",
          logo: "/images/City_seal.png",
          tag: 16,
        },
        {
          title: "City Disaster Risk and Management Office",
          oic: "Dr. Sandro C. Daguman",
          position: "",
          logo: "/images/City_seal.png",
          tag: 17,
        },
        {
          title: "City Drug Abuse Prevention Office",
          oic: "Dr. Teodoro U. Fortaleza",
          position: "",
          logo: "/images/City_seal.png",
          tag: 18,
        },
        {
          title: "City Agriculture Office",
          oic: "Engr. Teachie G. Pagunsan",
          position: "OIC-AGRICULTURE",
          logo: "/images/City_seal.png",
          tag: 19,
        },
        {
          title: "The Solid Waste Management Office (SWMO)",
          oic: "Engr. Reynaldo L. Gonzaga",
          position: "CGDH1",
          logo: "/images/City_seal.png",
          tag: 20,
        },
        {
          title: "City Economic Enterprise Development and Management Office",
          oic: "Felipe F. Gonzaga",
          position: "OIC",
          logo: "/images/City_seal.png",
          tag: 21,
        },
        {
          title: "City Engineering Office (CEEO)",
          oic: "Engr. Ashley M. Albaña",
          position: "City Engineer",
          logo: "/images/City_seal.png",
          tag: 22,
        },
        {
          title: "GSO",
          oic: "Atty. Isagani G. Togonon",
          position: "General Services Officer",
          logo: "/images/City_seal.png",
          tag: 23,
        },
        {
          title: "City Treasures`s Office",
          oic: "MA. EVELYN OBONG JUNIO",
          position: "Acting City Treasurer",
          logo: "/images/City_seal.png",
          tag: 24,
        }
      ],
      items: [
        "City Mayors Office",
        "City Vice - Mayor Office",
        "City Administrator Office",
        "City Accountant Office",
        "Assesor`s Office",
        "BPLO",
      ],
      value: null,
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
    };
  },
  methods: {
    testing(tag) {
      this.goTo("departments-single", { id: tag });
      this.goTo("departments-id", { id: tag });
    },
  },
};
</script>