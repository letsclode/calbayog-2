<template>
    <v-app class="news-section">
        <div class="banner-wrapper small-banner" id="about-banner">
            <!-- <img :src="require('~/static/images/Calbayog.png')"  alt=""> -->
            <VueSlickCarousel v-bind="sliderHeader" class="officials-slider">
                <img :src="item.img"  alt=""  v-for="(item,i) in headerCarousel" :key="i">
            </VueSlickCarousel>
            <p class="banner-title">News</p>
        </div>
        <div class="search-bar">
            <div class="container">
                <form action="news/_id">
                    <div class="search-wrapper">
                        <!-- <input type="text" class="search-input" placeholder="Search News"> -->
                        <v-autocomplete
                            v-model="value"
                            :items="items"
                            class="search-autocom"
                            dense
                            placeholder="Search News"
                        ></v-autocomplete>
                        <button type="submit">
                            <img :src="require('~/static/images/Icon awesome-search.png')">
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="city-news-section latest-news-section">
            <div class="container">
                <h4 class="title" style="font-size: 2.25rem !important; font-weight: 700;">
                    News
                </h4>
                <div class="news-grid">
                    <template>
                        <v-card
                            width="300"
                            class="news-card-wrappper"
                            v-for="(news, index) in newsArray.slice(0,4)" :key="index">
                            <a href="news/_id">
                                <v-img
                                height="210"
                                class="news-card-img"
                                :src="news.img"
                                
                                ></v-img>
                                <v-card-text class="news-content-wrapper">
                                    <p class="news-date">{{news.date}}</p>
                                    <h5 class="news-title">{{news.title}}</h5>
                                    <p class="news-desc">{{news.description}}</p>
                                    <a href="news/_id">
                                    <Nuxtlink
                                    text
                                    class="readmore-btn"
                                    >
                                    Read More
                                    </Nuxtlink>
                                    </a>
                                </v-card-text>
                            </a>
                        </v-card>
                    </template>
                </div>
            </div>
        </div>
        <div class="city-news-section trending-news-section">
            <div class="container">
                <h4 class="title" style="font-size: 2.25rem !important; font-weight: 700;">
                    Trending
                </h4>
                <div class="news-grid">
                    <template>
                    <v-card
                        width="300"
                        class="news-card-wrappper"
                        v-for="(news, index) in newsArray.slice(0,4)" :key="index"
                    >
                        <a href="news/_id">
                            <v-img
                            height="210"
                            class="news-card-img"
                            :src="news.img"
                            ></v-img>
                            <v-card-text class="news-content-wrapper">
                                <p class="news-date">{{news.date}}</p>
                                <h5 class="news-title">{{news.title}}</h5>
                                <p class="news-desc">{{news.description}}</p>
                                <a href="news/_id">
                                    <Nuxtlink
                                    text
                                    class="readmore-btn"
                                    >
                                    Read More
                                    </Nuxtlink>
                                </a>
                            </v-card-text>
                        </a>
                    </v-card>
                    </template>
                </div>
            </div>
        </div>
        <!-- <div class="city-news-section upcoming-news-section">
            <div class="container">
                <h4 class="title">
                    Up coming
                </h4>
                <div class="news-grid">
                    <template>
                    <v-card
                        width="300"
                        class="news-card-wrappper"
                        v-for="(news, index) in newsArray" :key="index"
                    >

                        <v-img
                        height="210"
                        class="news-card-img"
                        :src="news.img"
                        ></v-img>
                        <v-card-text class="news-content-wrapper">
                            <p class="news-date">{{news.date}}</p>
                            <h5 class="news-title">{{news.title}}</h5>
                            <p class="news-desc">{{news.description}}</p>
                        </v-card-text>
                    </v-card>
                    </template>
                </div>
            </div>
        </div> -->
    </v-app>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default {
      name: 'News',
      layouts: 'default',
      components: { VueSlickCarousel },
      data () {
          return {
            newsArray: [
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
                img: '/images/news4.png',
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
            items: ['Graduation Ceremony', 'City Fiesta'],
            value: null,
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
      }
    }
    </script>