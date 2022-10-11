<template>
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
        <!-- <div class="profile">
                    <img :src="official.profile" alt="">
                </div> -->
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
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import officials_data from "~/components/json/officials.json";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      officials: officials_data,
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
            breakpoint: 500,
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
};
</script>