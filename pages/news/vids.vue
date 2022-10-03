<template>
    <div>
        <div class="banner-wrapper small-banner">
            <!-- <img :src="require('~/static/images/Calbayog.png')"  alt=""> -->
            <VueSlickCarousel v-bind="sliderHeader" class="officials-slider">
                <img :src="item.img"  alt=""  v-for="(item,i) in headerCarousel" :key="i">
            </VueSlickCarousel>
        </div>
        <div class="news-single-wrapper">
            <div class="container">
                <div class="title-search-wrapper">
                    <h3>Activities Post</h3>
                    <form action="#">
                        <div class="search-wrapper">
                            <button type="submit">
                                <img :src="require('~/static/images/Icon-search.png')">
                            </button>
                            <input type="text" class="search-input">
                        </div>
                    </form>
                </div>
                <div class="nsp-content" id="vid-sp">
                    <div class="news-vid-wrapper">
                        <div class="full-img" @click="vidsShowPopup">
                            <img :src="require('~/static/images/Mask Group 2.png')"  >
                        </div>
                        <div class="nsp-articles">
                            <div class="header">
                                <h5 class="title">Graduation Cerimony</h5>
                                <p class="date">15 JULY, 2022</p>
                            </div>
                            <div class="desc">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="grid-img">
                        <div class="nsp-imgs">
                            <div class="img-wrapper">
                                <img :src="require('~/static/images/news1.png')">
                            </div>
                            <div class="info-vids-news">
                                <p class="title-vid">Sample of video I Sample of video</p>
                                <p class="uploader">Damdamin ng bayan</p>
                                <p class="date-uploaded">1 week ago</p>
                                <span class="tag">New</span>
                            </div>
                        </div>
                        <div class="nsp-imgs">
                            <div class="img-wrapper">
                                <img :src="require('~/static/images/292726678_1291469795115252_6930857525423756891_n.png')">
                            </div>
                            <div class="info-vids-news">
                                <p class="title-vid">Sample of video I Sample of video</p>
                                <p class="uploader">Damdamin ng bayan</p>
                                <p class="date-uploaded">2 week ago</p>
                            </div>
                        </div>
                        <div class="nsp-imgs">
                            <div class="img-wrapper">
                                <img :src="require('~/static/images/news2.png')">
                            </div>
                            <div class="info-vids-news">
                                <p class="title-vid">Sample of video I Sample of video</p>
                                <p class="uploader">Damdamin ng bayan</p>
                                <p class="date-uploaded">3 week ago</p>
                            </div>
                        </div>
                        <div class="nsp-imgs">
                            <div class="img-wrapper">
                                <img :src="require('~/static/images/news2.png')">
                            </div>
                            <div class="info-vids-news">
                                <p class="title-vid">Sample of video I Sample of video</p>
                                <p class="uploader">Damdamin ng bayan</p>
                                <p class="date-uploaded">3 week ago</p>
                            </div>
                        </div>
                        <div class="nsp-imgs">
                            <div class="img-wrapper">
                                <img :src="require('~/static/images/news3.png')">
                            </div>
                            <div class="info-vids-news">
                                <p class="title-vid">Sample of video I Sample of video</p>
                                <p class="uploader">Damdamin ng bayan</p>
                                <p class="date-uploaded">4 week ago</p>
                            </div>
                        </div>
                        <div class="nsp-imgs">
                            <div class="img-wrapper">
                                <img :src="require('~/static/images/news4.png')">
                            </div>
                            <div class="info-vids-news">
                                <p class="title-vid">Sample of video I Sample of video</p>
                                <p class="uploader">Damdamin ng bayan</p>
                                <p class="date-uploaded">5 week ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nsp-comments">
                    <h5 class="title">Comments</h5>
                    <template>
                        <v-container>
                            <v-row>
                            <v-col
                                cols="12"
                            >
                                <v-textarea
                                class="mx-2 nsp-comment"
                                rows="1"
                                ></v-textarea>
                            </v-col>
                            </v-row>
                        </v-container>
                    </template>
                </div>
            </div>
            <modal name="vidsModal" width="100%" height="100%">
                <div class="newspopup">
                    <div class="images-slider" id="vids-popup-sp">
                        <!-- <v-carousel class="news-slider-img">
                            <v-carousel-item
                                v-for="(item,i) in newsArray"
                                :key="i"
                                :src="item.img"
                            ></v-carousel-item>
                        </v-carousel> -->
                        <div class="news-slider-img" @click="vidsShowPopup">
                            <img :src="require('~/static/images/Mask Group 2.png')"  >
                        </div>
                    </div>
                    <div class="right-content">
                        <div class="close">
                            <v-icon @click="closeVidsModal" class="x-close">mdi-close</v-icon>
                        </div>
                    <div class="title-close-wrapper">
                        <h3 class="title">
                        Graduation Ceremony
                        </h3>
                        <div class="date-info">
                        <p>15 JULY, 2022</p>
                        </div>
                    </div>
                    <div class="news-modal-content">
                        <div class="news-description">
                        <p>Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente,
                            Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </modal>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default {
      name: 'IndexPage',
      layouts: 'default',
      components: { VueSlickCarousel },
      data () {
          return {
            newsArray: [
              {
                title : 'Graduation Ceremony',
                date: '15 JULY, 2022',
                description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
                img: '/images/Mask Group 2.png',
              },
                {
                title : 'Graduation Ceremony',
                date: '15 JULY, 2022',
                description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
                img: '/images/news2.png',
              },
                 {
                title : 'Graduation Ceremony',
                date: '15 JULY, 2022',
                description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
                img: '/images/news3.png',
              },
                 {
                title : 'Graduation Ceremony',
                date: '15 JULY, 2022',
                description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
                img: '/images/news5.png',
              },
                 {
                title : 'Graduation Ceremony',
                date: '15 JULY, 2022',
                description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
                img: '/images/news2.png',
              },
            ],
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
      mounted () {
         
      },
      methods:{
        vidsShowPopup(val){
          this.activeNews = val;
          this.$modal.show('vidsModal');
        },
        closeVidsModal(){
          this.$modal.hide('vidsModal');
        },
        readMoreWelcome(){
          this.showWelcomeMessage = !this.showWelcomeMessage;
        }
      }
    }
</script>