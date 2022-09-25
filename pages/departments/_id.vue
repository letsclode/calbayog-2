<template>
    <div>
        <div class="section-dept-sp">
            <div class="welcome-text-section" id="dept-sp-welcome">
                <div class="container wt-container">
                    <div class="wt-wrapper">
                        <div class="img-holder">
                            <img :src="require('~/static/images/cm.png')" alt="">
                        </div>
                        <div class="wt-content">
                            <div class="wtc-inner">
                                <h4>Welcome to Calbayog City</h4>
                                <p>
                                Welcome to the official website of the City Government of Calbayog!
                                </p>
                                <br>
                                <p>
                                Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                                </p>
                            </div>
                            <button class="read-more">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="city-news-section" id="dept-sp-desc">
                <div class="container">
                <p class="dept_desc">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                </p>
                <br>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                </div>
            </div>
            <div class="news-single-wrapper">
                <div class="container">
                    <div class="title-search-wrapper">
                        <h3>Activities Post</h3>
                    </div>
                    <div class="nsp-content">
                        <div class="full-img">
                            <img :src="require('~/static/images/300819481_120140560796856_1936510054696472107_n.png')">
                        </div>
                        <div class="grid-img">
                            <div class="nsp-imgs">
                                <img :src="require('~/static/images/301651196_120137000797212_6510033162591886582_n.png')">
                            </div>
                            <div class="nsp-imgs">
                                <img :src="require('~/static/images/301170044_120137067463872_2606454796904951662_n.png')">
                            </div>
                            <div class="nsp-imgs">
                                <img :src="require('~/static/images/299932715_120137040797208_2127528906162976991_n.png')">
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
        <div class="mission-section mission-visons-sections">
            <div class="container">
                <div class="right-content text-content">
                    <div class="inner-r-con">
                        <h5 class="title">
                            Our Mission
                        </h5>
                        <div class="content">
                            <p>Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.</p>
                        </div>
                    </div>
                </div>
                <div class="left-content gallery-content">
                    <div class="left-gallery">
                        <div class="img-wrapper" v-for="(img, index) in galleryMisiion" :key="index">
                            <img :src="img.img" :alt="img.title"  class="about-gallery-imgs">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vision-section mission-visons-sections">
            <div class="container">
                <div class="right-content gallery-content">
                    <div class="left-gallery">
                        <div class="img-wrapper" v-for="(img, index) in galleryMisiion" :key="index">
                            <img :src="img.img" :alt="img.title"  class="about-gallery-imgs" @click="getImg(img.title)">
                        </div>
                    </div>
                </div>
                <div class="left-content text-content">
                    <div class="inner-r-con">
                        <h5 class="title">
                            Our Vision
                        </h5>
                        <div class="content">
                            <p>Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.</p>
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
                <div class="officials-wrapper">
                    <VueSlickCarousel v-bind="sliderSettings" class="officials-slider">
                        <div class="official" v-for="(official, index) in officials" :key="index" @click="officialShowPopup(index)" :id="index">
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
            </div>
        </div>
         <!-- <modal name="officialModal" width="1000px" height="auto">
            <div class="official" v-for="(official, index) in popOfficial" :key="index" >
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
        </modal> -->
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default {
    name: 'About',
    layouts: 'default',
    components: { VueSlickCarousel },
    data () {
        return {
            officialIndex: '',
            galleryMisiion:[
                {
                    title: 'img1',
                    img: '/images/about1.png',
                },
                {
                    title: 'img2',
                    img: '/images/about2.png',
                },
                {
                    title: 'img3',
                    img: '/images/about3.png',
                }
            ],
            officials:[
                {name: 'Hon. Raymund C. Uy', position: 'Calbayog City Mayor', profile: '/images/cm.png'}, 
                {name: 'Jaynard Monterona', position: 'Damdamin ng Bayan', profile: '/images/cm.png'},
                {name: 'Hon. Raymund C. Uy', position: 'Calbayog City Mayor', profile: '/images/cm.png'}, 
                {name: 'Jaynard Monterona', position: 'Damdamin ng Bayan', profile: '/images/cm.png'}, 
                {name: 'Hon. Raymund C. Uy', position: 'Calbayog City Mayor', profile: '/images/cm.png'}, 
                {name: 'Jaynard Monterona', position: 'Damdamin ng Bayan', profile: '/images/cm.png'}, 
                {name: 'Hon. Raymund C. Uy', position: 'Calbayog City Mayor', profile: '/images/cm.png'}, 
                {name: 'Jaynard Monterona', position: 'Damdamin ng Bayan', profile: '/images/cm.png'}, 
                {name: 'Hon. Raymund C. Uy', position: 'Calbayog City Mayor', profile: '/images/cm.png'}, 
                {name: 'Jaynard Monterona', position: 'Damdamin ng Bayan', profile: '/images/cm.png'}, 
                {name: 'Hon. Raymund C. Uy', position: 'Calbayog City Mayor', profile: '/images/cm.png'}, 
                {name: 'Hon. Raymund C. Uy', position: 'Calbayog City Mayor', profile: '/images/cm.png'}, 
            ],
            sliderSettings:{
                "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
                "infinite": true,
                "slidesToShow": 5,
                "speed": 300,
                "rows": 2,
                "slidesPerRow": 1,
                "draggable": true,
                "swipeToSlide": true
            }
        }
    },
    methods:{
        getImg(val){
            this.$modal.show('imgpop');
        },  
        officialShowPopup(index){
            // this.$modal.show('officialModal');
        },
       
    }      
}
</script>