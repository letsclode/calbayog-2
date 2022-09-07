<template>
    <div class="banner-wrapper">
        <!-- <img :src="require('~/static/images/Calbayog.png')"  alt=""> -->
        <VueSlickCarousel v-bind="sliderHeader" class="officials-slider">
            <img :src="item.img"  alt=""  v-for="(item,i) in headerCarousel" :key="i">
        </VueSlickCarousel>
    </div>
</template>
<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
      // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default {
        components: { VueSlickCarousel },
        data () {
            return {
            headerCarousel: [
                { title: 'Cathedral' , img: '/images/Calbayog.png'},
                { title: 'Falls' , img: '/images/calbcover.png'},
                { title: 'Falls' , img: '/images/falls.png'},
            ],
            sliderHeader:{
                    "dots": false,
                    "dotsClass": "slick-dots header-dots",
                    "infinite": true,
                    "slidesToShow": 1,
                    "slidesPerRow": 1,
                    "autoplay": true,
                    "speed": 5000,
                    "autoplaySpeed": 5000,
                    "fade": true,
                    "adaptiveHeight": false,
                }
            }
        },
    }
    </script>