<template>
    <div>
        <div class="banner-wrapper small-banner" id="about-banner">
            <!-- <img :src="require('~/static/images/Calbayog.png')"  alt=""> -->
            <VueSlickCarousel v-bind="sliderHeader" class="officials-slider">
                <img :src="item.img"  alt=""  v-for="(item,i) in headerCarousel" :key="i">
            </VueSlickCarousel>
            <p class="banner-title">Contact Us</p>
        </div>
        <div class="contact-section">
        <div class="container">
            <div class="cs-row">
                <!-- <h2 class="cs-title">Contact Us</h2> -->
                <div class="contact-infos">
                    <div class="address">
                        <span class="mdi mdi-map-marker-radius-outline"></span>
                        <h6>Address:</h6>
                        <p>JD. Avelino St. Calbayog City, Western Samar</p>
                    </div>
                    <div class="phone">
                        <span class="mdi mdi-phone-outline"></span>
                        <h6>Phone:</h6>
                        <p>09- 261-954-254</p>
                    </div>
                    <div class="email">
                        <span class="mdi mdi-email-outline"></span>
                        <h6>Email:</h6>
                        <p>lgucalbayog@gmail.com</p>
                    </div>
                </div>
                <div class="contact-forms">
                    <h2 class="cs-title">Get in touch with us</h2>
                    <div class="cf-form">
                        <template>
                            <v-form
                                class="form-message"
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >
                                <v-text-field
                                v-model="name"
                                :rules="nameRules"
                                label="Name"
                                required
                                ></v-text-field>

                                <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                                ></v-text-field>

                                <v-text-field
                                v-model="subject"
                                :rules="subjectRules"
                                label="Subject"
                                required
                                ></v-text-field>
                                <v-textarea
                                label="Message"
                                ></v-textarea>
                                <v-btn
                                class="send-btn"
                                type="submit"
                                >
                                Send Message
                                </v-btn>
                            </v-form>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default{
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