<template>
    <div class="news-section">
        <div class="search-bar">
            <div class="container">
                <form action="#">
                    <div class="search-wrapper">
                        <input type="text" class="search-input" placeholder="Search News">
                        <button type="submit">
                            <img :src="require('~/static/images/Icon awesome-search.png')">
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="city-news-section latest-news-section">
            <div class="container">
                <h4 class="title">
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
                <h4 class="title">
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
    </div>
</template>
<script>
    export default {
      name: 'IndexPage',
      layouts: 'default',
      data () {
          return {
            newsArray: [
              {
                title : 'Gaduation Ceremony',
                date: '15 JULY, 2022',
                description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
                img: '/images/news2.png',
              },
                {
                title : 'Gaduation Ceremony',
                date: '15 JULY, 2022',
                description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
                img: '/images/news3.png',
              },
                 {
                title : 'Gaduation Ceremony',
                date: '15 JULY, 2022',
                description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
                img: '/images/news4.png',
              },
                 {
                title : 'Gaduation Ceremony',
                date: '15 JULY, 2022',
                description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
                img: '/images/news5.png',
              },
                 {
                title : 'Gaduation Ceremony',
                date: '15 JULY, 2022',
                description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
                img: '/images/news2.png',
              },
            //   {
            //     title : 'Gaduation Ceremony',
            //     date: '15 JULY, 2022',
            //     description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
            //     img: '/images/news2.png',
            //   },
            //   {
            //     title : 'Gaduation Ceremony',
            //     date: '15 JULY, 2022',
            //     description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
            //     img: '/images/news2.png',
            //   },
            //   {
            //     title : 'Gaduation Ceremony',
            //     date: '15 JULY, 2022',
            //     description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
            //     img: '/images/news2.png',
            //   }
            ],
        }
      }
    }
    </script>