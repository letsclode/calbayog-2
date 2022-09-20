<template>
  <div>
      <!-- <div class="banner-section">
        <Banners/>
      </div> -->
    <div class="section2">
      <div class="welcome-text-section">
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
      <div class="city-news-section">
        <div class="container">
          <h4 class="title">
            Be Updated With City News
          </h4>
          <div class="news-grid">
            <template>
              <v-card
                width="300"
                :class="activeNews == index ? 'active' : ''"
                @click="newsShowPopup(index)"
                class="news-card-wrappper"
                v-for="(news, index) in newsArray.slice(0,6)" :key="index"
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
                    <v-btn
                      text
                      class="readmore-btn"
                    >
                      Read More
                    </v-btn>
                </v-card-text>
              </v-card>
            </template>
          </div>
          <div class="news-slider-wrapper">
            <!-- <div class="next-prev-w">
              <v-btn elevation="1" class="n-slider-btn"><span class="mdi mdi-chevron-left"></span></v-btn>
              <v-btn elevation="1" class="n-slider-btn"><span class="mdi mdi-chevron-right"></span></v-btn>
            </div> -->
            <div class="viewall-news">
              <v-btn
                class="news-seemore"
                outlined
              >
                See More
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="events-section">
      <div class="overlay">
        <div class="container">
          <h4 class="title">Events</h4>
          <p class="section-desc">Our aim to provide transparency and accountability
          to our constituents and to others who take interest in our beloved City 
          is further extended in this website. As Calbayog consistently delivers good 
          governance and is an emporium of natural attractions, we are indeed dubbed as a 
          City “Where Good Things Happen”.
          </p>
          <div class="events-gallery">
            <div class="img-gallery" v-for="(item, index) in eventGallery" :key="index">
              <img :src="item.img" :alt="item.title">
              <div class="events-content">
                <p>
                  {{item.title}}
                </p>
                <v-btn
                  class="ma-2 events-btn"
                  outlined
                >
                  View Event
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="plans-program-section">
      <div class="container">
        <h4 class="title">
          Plans and Programs
        </h4>
        <div class="agencies-wrapper">
          <div class="agency" v-for="(agency, index) in agencyArray" :key="index" :id="agency.name">
            <div class="front-desc">
              <span class="icon">
                <img :src="agency.icon">
              </span>
              <p class="dep-name">{{agency.title}}</p>
            </div>
            <div class="back-desc">
              <p class="dep-name">{{agency.title}}</p>
              <p class="desc">Sample text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="welcome-statement-section">
      <div class="container">
        <div class="logo-wrapper">
           <img :src="require('~/static/images/City_seal.png')" alt="City Official Seal">
        </div>
        <v-divider vertical class="wss-hr"></v-divider>
        <div class="statement">
          <p>Welcome to the official website of the City Government of Calbayog!</p><br>
          <p>Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.</p>
        </div>
      </div>
    </div>
    <div class="maps-section">
      <img :src="require('~/static/images/snazzy-image.png')">
    </div>
    <div class="services-section">
      <div class="container services-con">
        <div class="services-offer">
          <h4 class="title">
            Services
          </h4>
          <p class="section-desc">Our aim to provide transparency and accountability
            to our constituents and to others who take interest in our beloved City 
            is further extended in this website.
          </p>
          <div class="services-wrapper">
            <div class="service" v-for="(service, index) in servicesArray" :key="index">
              <span class="icon">
                <img :src="service.icon">
              </span>
              <p class="dep-name">{{service.title}}</p>
            </div>
          </div>
        </div>
        <div class="helplines-wrapper">
          <h4 class="title">
            Helplines & Emergency Services
          </h4>
          <template>
            <div class="collapsible-helplines">
              <v-expansion-panels class="mb-6 hp-item">
                <v-expansion-panel
                  v-for="(item,i) in helpLines"
                  :key="i"
                >
                  <v-expansion-panel-header expand-icon="mdi-menu-down" class="hp-header">
                    {{item.name}}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="hp-details">{{item.hotline}}</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="official-section">
      <div class="container">
         <h4 class="title">
            Your Calbayog City Public Servants
          </h4>
          <Officials/>
      </div>
    </div>
    <!-- <modal name="newsModal" width="1000px" height="auto">
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
                Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente
              </p>
            </div>
            <v-btn
              class="full-artcl ma-2"
              outlined
              color="red"
            >
              Read Full Article
            </v-btn>
          </div>
        </div>
      </div>
    </modal> -->
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
            img: '/images/news2.png',
          },
          {
            title : 'Graduation Ceremony',
            date: '15 JULY, 2022',
            description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
            img: '/images/news2.png',
          }
        ],
        eventGallery: [
          { title: 'September' , img: '/images/event1.png'},
          { title: 'August' , img: '/images/mutyahansamar2019.png'},
          { title: 'July' , img: '/images/Civic-Parade1.png'},
          { title: 'June' , img: '/images/2378565_orig.png'},
          { title: 'May' , img: '/images/downloadsd.png'}
        ],
        agencyArray: [
          {title: 'Agriculture', icon: '/images/Icon awesome-leaf.png', name: 'agri'},
          {title: 'Disaster Risk Reduction', icon: '/images/Icon ionic-md-warning.png', name: 'disaster'},
          {title: 'Education', icon: '/images/Icon awesome-graduation-cap.png', name: 'educ'},
          {title: 'Health', icon: '/images/Icon awesome-briefcase-medical.png', name: 'health'},
          {title: 'Infrastructure Development', icon: '/images/Icon awesome-building.png', name: 'infra'},
          {title: 'Peace and Order', icon: '/images/Icon awesome-dove.png', name: 'peace'},
          {title: 'Poverty Alleviation', icon: '/images/Icon open-graph.png', name: 'pov'},
          {title: 'Solid Waste Management', icon: '/images/Icon awesome-recycle.png', name: 'waste'},
          {title: 'Tourism', icon: '/images/Icon awesome-umbrella-beach.png', name: 'tourism'},
          {title: 'Transportation Planning and Traffic Management', icon: '/images/Icon awesome-traffic-light.png', name: 'transpo'},
        ],
        servicesArray:[
          {title: 'Social Services' , icon: '/images/Icon awesome-hand-holding-usd.png'},
          {title: 'Civil Registry Services' , icon: '/images/Icon awesome-folder-open.png'},
          {title: 'Online Payment' , icon: '/images/Icon material-storage.png'},
          {title: 'Landmark Legislation' , icon: '/images/Icon awesome-landmark.png'},
          {title: 'Career Opportunities' , icon: '/images/Icon awesome-shopping-bag.png'},
          {title: 'Vacination' , icon: '/images/medical.png'},
        ],
        helpLines: [
          {name: 'Mayor Office' , hotline: '0000-0000'},
          {name: 'City Council' , hotline: '0000-0000'},
          {name: 'Police Emergency' , hotline: '0000-0000'},
          {name: 'Ambulance' , hotline: '0000-0000'},
          {name: 'E-Service' , hotline: '0000-0000'},
        ],
        activeNews: '',
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
    }
  }
}
</script>
