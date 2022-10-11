<template>
  <div class="banner-wrapper">

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
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
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
    };
  },
};
</script>