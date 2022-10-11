<template>
  <div>
    <div
      class="banner-wrapper small-banner"
      id="about-banner"
    >

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
      <p class="banner-title">About Us</p>
    </div>
    <div class="about-section">
      <div class="container">
        <!-- <h4 class="title">
                    About Us
                </h4> -->
        <div class="desc">
          <p>
            The Mayor's Office Operation coordinates and oversees the management of city governmental operations to promote the efficient and effective delivery of agency services. The office mandate to both provide the operational support for all agencies as well as measure and report on agency performance. Operations helps City agencies to improve productivity by providing recommendations and institutional support in addition to reporting areas of success and identifying the areas of possible improvement.
            Vision: Good Governance, Better Quality life for empowered God Loving citizens and Private-Public partnership for a sustainable economic development, entrepreneurship and self-reliance.
          </p>
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
              <p>The office of the mayor is tasked with promoting the general welfare of the city and its
                constituents the efficient, effective, relevant and economical governance. It exercises general
                supervision and control over all programs, projects, services and activities of the City
                Government which aims to put emphasis on prioritizing the citizens&#39; needs at the core of the
                development agenda. &quot;Tao ang una&quot;. The office serves as the coordinating body which goal is to
                maximize the generation of resources and revenues and apply the same to the effective
                implementation of development plans, programs, objectives and priorities to ensure</p>
            </div>
          </div>
        </div>
        <div class="left-content gallery-content">
          <div class="left-gallery">
            <div
              class="img-wrapper"
              v-for="(img, index) in galleryMisiion.slice(0,3)"
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
      </div>
    </div>
    <div class="vision-section mission-visons-sections">
      <div class="container">
        <div class="right-content gallery-content">
          <div class="left-gallery">
            <div
              class="img-wrapper"
              v-for="(img, index) in galleryMisiion.slice(3,6)"
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
              <p>Good Governance, Better Quality life for empowered God Loving citizens and Private-
                Public partnership for a sustainable economic development, entrepreneurship and self-reliance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="official-section">
      <div class="container">
        <h4
          class="title"
          id="about-ocf-title"
        >
          Our City Officials
        </h4>
        <div class="officials-wrapper">
          <VueSlickCarousel
            v-bind="sliderSettings"
            class="officials-slider"
          >
            <div
              class="official"
              v-for="(official, index) in officials"
              :key="index"
            >
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
        </div>
      </div>
    </div>
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
import officials_data from "../components/json/officials.json";
export default {
  name: "About",
  layouts: "default",
  components: { VueSlickCarousel },
  data() {
    return {
      galleryMisiion: [
        {
          title: "img1",
          id: 1,
          url: "/images/abt1.png",
        },
        {
          title: "img2",
          id: 2,
          url: "/images/abt2.png",
        },
        {
          title: "img3",
          id: 3,
          url: "/images/abt3.png",
        },
        {
          title: "img4",
          id: 4,
          url: "/images/abt4.png",
        },
        {
          title: "img5",
          id: 5,
          url: "/images/abt5.png",
        },
        {
          title: "img6",
          id: 6,
          url: "/images/abt6.png",
        },
      ],
      imgUrl: "",
      headerCarousel: [
        {
          title: "Cathedral",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assets%2FCalbayog.png?alt=media&token=40378d2a-0f3b-474e-85f8-837dbebad3f8",
        },
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
      officials: officials_data,
      sliderSettings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        infinite: false,
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
            breakpoint: 475,
            settings: {
              slidesToShow: 1.3,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              rows: 1,
              dots: false,
            },
          },
        ],
      },
    };
  },
  methods: {
    getImg(url) {
      this.imgUrl = url;
      this.$modal.show("imgpop");
    },
  },
};
</script>