<template>
    <div v-if="$route.params.id">
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
                </div>
                <div class="nsp-content">
                    <div class="full-img">
                        <img :src="selected_news.cover" @click="newsShowPopup">
                    </div>
                    <div class="nsp-articles">
                        <div class="header">
                            <h5 class="title">{{selected_news.title}}</h5>
                            <p class="date">{{selected_news.date}}</p>
                        </div>
                        <div class="desc">
                            <p>{{selected_news.description}}
                            </p>
                        </div>  
                    </div>
                </div>
            </div>
            <modal name="newsModal" width="100%" height="100%">
                <div class="newspopup">
                    <div class="images-slider">
                        <v-carousel class="news-slider-img">
                            <v-carousel-item
                                v-for="(item,i) in selected_news.image"
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
                            {{selected_news.title}}
                        </h3>
                        <div class="date-info">
                        <p>{{selected_news.date}}</p>
                        </div>
                    </div>
                    <div class="news-modal-content">
                        <div class="news-description">
                        <p>{{selected_news.description}}
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
                tag:1,
                title : 'Meeting with the Federation of Pedicab Drivers of Calbayog',
                date: 'October 1, 2022',
                description: 'The members of the federation expressed their willingness to join the city in commemorating its Charter Day in October 16, 2022. They will celebrate Pedicab Drivers Day in October 14, 2022 with some series of activities. Also present during the meeting was Hon. Rosendo A. Morales, SP Chairman of the Committee on Transportation and Communications',
                image:[
                    {
                        img: '/images/news1.jpg',
                    }
                ],
                cover: '/images/news1.jpg',
              },
              {
                tag:2,
                title : 'COA EXIT CONFERENCE for 60 Barangays',
                date: 'September 30, 2022',
                description: 'COA EXIT CONFERENCE for 60 Barangays CY 2019-2021 @Baypark Hotel, Calbayog City',
                image:[
                    {
                        img: '/images/news2.jpg',
                    },
                    {
                        img: '/images/news2-min.jpg',
                    }
                ],
                cover: '/images/news2.jpg',
              },
              {
                tag:3,
                title : 'The 3-Year (2022-2025) Executive-Legislative Agenda (ELA) Conference.',
                date: 'September 21, 2022',
                description: 'The ELA was derived from the series of workshops previously conducted by the Technical Working Group Sectoral Teams with  their PPAs, Goals and Objectives.',
                image:[
                    {
                        img: '/images/news3-min.jpg',
                    },
                    {
                        img: '/images/news3-1-min.jpg',
                    },
                    {
                        img: '/images/news3-2-min.jpg',
                    },
                    {
                        img: '/images/news3-3-min.jpg',
                    },
                    {
                        img: '/images/news3-5-min.jpg',
                    },
                    {
                        img: '/images/news3-6jpg-min.jpg',
                    },
                ],
                cover: '/images/news3-min.jpg',
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
            },
            selected_news: {},
        }
      },
      mounted () {
         this.filterNews();
      },
      methods:{
        newsShowPopup(val){
          this.activeNews = val;
          this.$modal.show('newsModal');
        },
        closeNewsModal(){
          this.$modal.hide('newsModal');
        },
        readMoreWelcome(){
          this.showWelcomeMessage = !this.showWelcomeMessage;
        },
        filterNews(){
            this.newsArray.forEach((newsArray) => {
                if (newsArray.tag == this.$route.params.id) {
                this.selected_news = newsArray;
                console.log(this.selected_news, "news");
                }
            });
        }
      }
    }
</script>