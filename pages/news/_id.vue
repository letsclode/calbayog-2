<template>
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
            <div class="nsp-content">
                <div class="full-img">
                    <img :src="require('~/static/images/Mask Group 2.png')"   @click="newsShowPopup">
                </div>
                <div class="grid-img">
                    <div class="nsp-imgs">
                        <img :src="require('~/static/images/news2.png')" @click="newsShowPopup">
                    </div>
                    <div class="nsp-imgs">
                        <img :src="require('~/static/images/news3.png')" @click="newsShowPopup">
                    </div>
                    <div class="nsp-imgs">
                        <img :src="require('~/static/images/news4.png')" @click="newsShowPopup">
                    </div>
                </div>
                <div class="nsp-articles">
                    <div class="header">
                        <h5 class="title">Graduation Cerimony</h5>
                        <p class="date">15 JULY, 2022</p>
                    </div>
                    <div class="desc">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
                            v-for="(item,i) in newsArray"
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
</template>

<script>

    export default {
      name: 'IndexPage',
      layouts: 'default',
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
           
        }
      },
      mounted () {
         
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
        }
      }
    }
    </script>