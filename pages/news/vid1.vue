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
                    <!-- <form action="#">
                        <div class="search-wrapper">
                            <button type="submit">
                                <img :src="require('~/static/images/Icon-search.png')">
                            </button>
                            <input type="text" class="search-input">
                        </div>
                    </form> -->
                </div>
                <div class="nsp-content static-vid" id="vid-sp">
                    <div class="news-vid-wrapper">
                        <div class="full-img" @click="vidsShowPopup">
                            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FIRcalbayog247%2Fvideos%2F496738412041957%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                        </div>
                        <div class="nsp-articles">
                            <div class="header">
                                <h5 class="title">Opening Ceremony</h5>
                                <p class="date">3 OCTOBER, 2022</p>
                            </div>
                            <div class="desc">
                                <p>We invite all participating entries in the following competitions to be present during the opening ceremonies and awarding of winners later at the Calbayog City Convention Center at 6 pm.
                                    <br>
                                    1. LOGO MAKING CONTEST<br>
                                    2. TIKTURISMO<br>
                                    3. BIDYO<br>
                                </p>
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