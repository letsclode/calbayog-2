<template>
    <div>
        <div class="banner-wrapper">
            <!-- <img :src="require('~/static/images/Calbayog.png')"  alt=""> -->
            <VueSlickCarousel v-bind="sliderHeader" class="officials-slider">
                <img :src="item.img"  alt=""  v-for="(item,i) in headerCarousel" :key="i">
            </VueSlickCarousel>
        </div>
        <div class="section-dept-sp">
            <div class="welcome-text-section" id="dept-sp-welcome">
                <div class="container wt-container">
                    <div class="wt-wrapper">
                        <div class="img-holder">
                            <img :src="require('~/static/images/Mayor12 – 10.jpg')" alt="">
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
                                <div class="hid-message-welcome" :class="{animate : showWelcomeMesDept}">
                                    <p>
                                        Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                                    </p>
                                    <p>
                                        Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                                    </p>
                                </div>
                            </div>
                            <button class="read-more" @click="readMoreWelcome" :class="{animate : showWelcomeMesDept}">READ MORE</button>
                        </div>
                    </div>
                    <div class="mobile-wt-wrapper">
                        <div class="img-holder">
                            <img :src="require('~/static/images/Mayor12 – 10.jpg')" alt="">
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
                                <div class="hid-message-welcome" :class="{animate : showWelcomeMesDept}">
                                <p>
                                    Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                                </p>
                                <p>
                                    Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                                </p>
                                </div>
                            </div>
                            <button class="read-more" @click="readMoreWelcome" :class="{animate : showWelcomeMesDept}">READ MORE</button>
                    </div>
                </div>
            </div>
            <div class="city-news-section" id="dept-sp-desc">
                <div class="container dept-sp-con">
                    <a :href="service.url" class="service" v-for="(service, index) in servicesArray" :key="index" target="_blank">
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
                            <img :src="require('~/static/images/300819481_120140560796856_1936510054696472107_n.png')" @click="jobsModal">
                        </div>
                        <div class="grid-img">
                            <div class="nsp-imgs">
                                <img :src="require('~/static/images/301651196_120137000797212_6510033162591886582_n.png')"  @click="jobsModal">
                            </div>
                            <div class="nsp-imgs">
                                <img :src="require('~/static/images/301170044_120137067463872_2606454796904951662_n.png')"  @click="jobsModal">
                            </div>
                            <div class="nsp-imgs">
                                <img :src="require('~/static/images/299932715_120137040797208_2127528906162976991_n.png')"  @click="jobsModal">
                                <p class="more-img-jobs" @click="jobsModal">25+</p>
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
                <h4 class="title">Programmes and Accomplishment</h4>
                <div class="mandate-gal" id="manadte-scroll">
                    <div class="img-gal-wrapper" v-for="(img, index) in mandates" :key="index"  @click="programmesModal">
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
                            <p>Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.</p>
                        </div>
                    </div>
                </div>
                <div class="left-content gallery-content">
                    <div class="left-gallery">
                        <div class="img-wrapper" v-for="(img, index) in galleryMisiion" :key="index">
                            <img :src="img.url"  class="about-gallery-imgs"  @click="getImg(img.url)">
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
                            <img :src="img.url" :alt="img.title"  class="about-gallery-imgs" @click="getImg(img.url)">
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
                        <!-- <div class="official" v-for="(official, index) in officials" :key="index" @click="officialShowPopup(index)" :id="index"> -->
                        <div class="official" v-for="(official, index) in test" :key="index" @click="officialShowPopup(index)" :id="index">
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
        <modal name="jobsModal" width="100%" height="100%">
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
                        <v-icon @click="closeNewsModal()" class="x-close">mdi-close</v-icon>
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
        <modal name="progModal" width="100%" height="100%">
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
                        <v-icon @click="closeProgrammesModal" class="x-close">mdi-close</v-icon>
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
        <modal name="imgpop" width="600px" height="600px">
            <div class="imagepop">
                <img :src="imgUrl">
            </div>
        </modal>
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
            showWelcomeMesDept: false,
            imgUrl:'',
            galleryMisiion:[
                {
                    title: 'img1',
                    url: '/images/about1.png',
                },
                {
                    title: 'img2',
                    url: '/images/about2.png',
                },
                {
                    title: 'img3',
                    url: '/images/about3.png',
                }
            ],
            jobs:[
                {
                    title: 'img1',
                    img: '/images/300819481_120140560796856_1936510054696472107_n.png',
                },
                {
                    title: 'img2',
                    img: '/images/301651196_120137000797212_6510033162591886582_n.png',
                },
                {
                    title: 'img3',
                    img: '/images/301170044_120137067463872_2606454796904951662_n.png',
                },
                {
                    title: 'img4',
                    img: '/images/299932715_120137040797208_2127528906162976991_n.png',
                },
                {
                    title: 'img5',
                    img: '/images/301170044_120137067463872_2606454796904951662_n.png',
                },
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
            servicesArray:[
                {url: 'https://www.bir.gov.ph/' , icon: '/images/Bureau_of_Internal_Revenue_(BIR).svg.png'},
                {url: 'https://www.prc.gov.ph/' , icon: '/images/g7646.png'},
                {url: 'https://www.gsis.gov.ph/' , icon: '/images/Government_Service_Insurance_System_(Philippines)_(logo).svg.png'},
                {url: 'http://www.csc.gov.ph/' , icon: '/images/Civil_Service_Commission.svg.png'},
                {url: 'https://www.sss.gov.ph/' , icon: '/images/sss-logo-medium.png'},
                {url: 'https://www.philhealth.gov.ph/' , icon: '/images/Www.philhealth.gov.ph.png'},
            ],
            mandates:[
                {img: '/images/about1.png', title: 'Sample title'},
                {img: '/images/about2.png', title: 'Sample title'},
                {img: '/images/news5.png', title: 'Sample title'},
                {img: '/images/news4.png', title: 'Sample title'},
                {img: '/images/news3.png', title: 'Sample title'},
                {img: '/images/news2.png', title: 'Sample title'},
                {img: '/images/news1.png', title: 'Sample title'},
                {img: '/images/mutyahansamar2019.png', title: 'Sample title'},
                {img: '/images/Civic-Parade1.png', title: 'Sample title'},
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
                "swipeToSlide": true,
                "responsive": [
                        {
                        "breakpoint": 1300,
                        "settings": {
                            "slidesToShow": 4,
                        }
                        },
                        {
                        "breakpoint": 1200,
                        "settings": {
                            "slidesToShow": 3,
                            
                        }
                        },
                        {
                        "breakpoint": 1000,
                            "settings": {
                                "slidesToShow": 3,
                                "rows": 1,
                            }
                        },
                        {
                        "breakpoint": 991,
                            "settings": {
                                "slidesToShow": 3,
                                "rows": 1,
                                "dots": false,
                            }
                        },
                        {
                        "breakpoint": 767,
                            "settings": {
                                "slidesToShow": 2,
                                "rows": 1,
                                "dots": false,
                            }
                        },
                        {
                        "breakpoint": 600,
                            "settings": {
                                "slidesToShow": 2.2,
                                "rows": 1,
                                "dots": false,
                            }
                        },
                        {
                        "breakpoint": 500,
                            "settings": {
                                "slidesToShow": 1.3,
                                "rows": 1,
                                "dots": false,
                            }
                        },
                        {
                        "breakpoint": 400,
                            "settings": {
                                "slidesToShow": 1.2,
                                "rows": 1,
                                "dots": false,
                            }
                        },
                ]
            },
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
                },
        }
    },
    mounted() {
        this.params = this.$route.params.id
    },
    methods:{
        // getImg(val){
        //     this.$modal.show('imgpop');
        // },  
        officialShowPopup(index){
            // this.$modal.show('officialModal');
        },
        readMoreWelcome(){
             this.showWelcomeMesDept = !this.showWelcomeMesDept;
        },
        jobsModal(){
             this.$modal.show('jobsModal');
        },
        closeNewsModal(){
          this.$modal.hide('jobsModal');
        },
        programmesModal(){
             this.$modal.show('progModal');
        },
        closeProgrammesModal(){
          this.$modal.hide('progModal');
        },
        getImg(url){
           this.imgUrl = url
            this.$modal.show('imgpop');
        },  
    },
        
}
</script>