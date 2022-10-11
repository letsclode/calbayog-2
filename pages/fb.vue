<template>
  <v-app>
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
      <p class="banner-title">Facebook Pages</p>
    </div>
    <div class="dept-section">
      <div class="container">
        <div class="header">
          <h4
            class="title v-app-title"
            style="font-size: 2.25rem !important; font-weight: 700;"
          >Facebook Pages</h4>
          <form action="departments/_id">
            <div class="search-wrapper">
              <!-- <input type="text" class="search-input" placeholder="Search Departments"> -->
              <v-autocomplete
                v-model="value"
                :items="items"
                class="search-autocom"
                dense
                placeholder="Search FB Pages"
              ></v-autocomplete>
              <button type="submit">
                <img :src="require('~/static/images/Icon awesome-search.png')">
              </button>
            </div>
          </form>
        </div>
        <div class="dept-wrapper">
          <div
            class="dept-info fb-info"
            v-for="(fb, index) in fblinks"
            :key="index"
          >
            <a
              :href="fb.fblink"
              target="_blank"
            >
              <div class="inner-info">
                <div class="dept-logo">
                  <img
                    :src="fb.logo"
                    :alt="fb.title"
                  >
                </div>
                <div class="dept-content">
                  <p class="dept-title">{{fb.title}}</p>
                  <!-- <p class="oic">{{dept.oic}}</p> -->
                  <v-divider></v-divider>
                  <a
                    :href="fb.fblink"
                    class="position"
                  >{{fb.fblink}}</a>
                </div>
              </div>
            </a>
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
import carousel_data from "~/components/json/carousel.json";
import fb_links_data from "~/components/json/fb_links.json";
export default {
  name: "fb",
  layouts: "default",
  components: { VueSlickCarousel },
  data() {
    return {
      fblinks: fb_links_data,
      items: [
        "City Mayor's Office",
        "City Vice - Mayor Office",
        "City Administrator's Office",
        "City Accountant Office",
        "Assesor`s Office",
        "BPLO",
      ],
      value: null,
      headerCarousel: carousel_data,
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
};
</script>