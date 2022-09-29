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
                        <div class="hid-message-welcome" :class="{animate : showWelcomeMessage}">
                          <p>
                            Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                          </p>
                          <p>
                            Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                          </p>
                        </div>
                    </div>
                    <button class="read-more" @click="readMoreWelcome" :class="{animate : showWelcomeMessage}">READ MORE</button>
                </div>
              </div>
              <div class="mobile-wt-wrapper">
                <div class="img-holder">
                    <img :src="require('~/static/images/cm.png')" alt="">
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
                        <div class="hid-message-welcome" :class="{animate : showWelcomeMessage}">
                          <p>
                            Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                          </p>
                          <p>
                            Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                          </p>
                        </div>
                    </div>
                    <button class="read-more" @click="readMoreWelcome" :class="{animate : showWelcomeMessage}">READ MORE</button>
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
                :class="activeNews == index ? 'active' : ''"
                @click="newsShowPopup(index)"
                class="news-card-wrappper"
                v-for="(news, index) in newsArray" :key="index"
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
                    <a href="news/_id" class="readmore-a">
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
          <VueSlickCarousel v-bind="newsSettings" class="mobile-news">
              <v-card
                :class="activeNews == index ? 'active' : ''"
                @click="newsShowPopup(index)"
                class="news-card-wrappper"
                v-for="(news, index) in newsArray" :key="index"
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
                    <a href="news/_id" class="readmore-a">
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
            </VueSlickCarousel>
          <div class="news-slider-wrapper">
            <div class="viewall-news">
              <NuxtLink
                to="news"
                class="news-seemore"
                outlined
              >
                See More
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="events-section">
      <div class="overlay">
        <div class="container">
          <h4 class="title">Calendar of Activities</h4>
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
                <a href="events/_id">
                  <v-btn
                    class="ma-2 events-btn"
                    outlined
                  >
                    View Event
                  </v-btn>
                </a>
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
              <!-- <p class="dep-name">{{agency.title}}</p> -->
              <a href="departments/_id" class="desc">{{agency.mandate}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="welcome-statement-section">
      <div class="container">
        <div class="logo-wrapper">
          <a href="https://www.dbm.gov.ph/index.php/about-us/philippine-transparency-seal" target="_blank">
           <img :src="require('~/static/images/Transparency_seal-01.png')" alt="Transparency seal Seal">
          </a>
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
          <div class="officials-wrapper">
            <!-- <VueSlickCarousel v-bind="sliderSettings" class="officials-slider">
                <div class="official" v-for="(official, index) in officials" :key="index">
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
            </VueSlickCarousel> -->
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
          {
            title: 'Agriculture',
            icon: '/images/Icon awesome-leaf.png', 
            name: 'agri',
            mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
          },
          {
            title: 'Disaster Risk Reduction', 
            icon: '/images/Icon ionic-md-warning.png', 
            name: 'disaster',
            mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
          },
          {
            title: 'Education', 
            icon: '/images/Icon awesome-graduation-cap.png', 
            name: 'educ',
            mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
          },
          {
            title: 'Health', 
            icon: '/images/Icon awesome-briefcase-medical.png', 
            name: 'health',
            mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
          },
          {
            title: 'Infrastructure Development', 
            icon: '/images/Icon awesome-building.png', 
            name: 'infra',
            mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
          },
          {
            title: 'Peace and Order', 
            icon: '/images/Icon awesome-dove.png', 
            name: 'peace',
            mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
          },
          {
            title: 'Poverty Alleviation', 
            icon: '/images/Icon open-graph.png', 
            name: 'pov',
            mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
          },
          {
            title: 'Solid Waste Management', 
            icon: '/images/Icon awesome-recycle.png', 
            name: 'waste',
            mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
          },
          {
            title: 'Tourism', 
            icon: '/images/Icon awesome-umbrella-beach.png', 
            name: 'tourism',
            mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
          },
          {
            title: 'Transportation Planning and Traffic Management', 
            icon: '/images/Icon awesome-traffic-light.png', 
            name: 'transpo',
            mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
          },
        ],
        servicesArray:[
            {url: 'https://www.bir.gov.ph/' , icon: '/images/Bureau_of_Internal_Revenue_(BIR).svg.png'},
            {url: 'https://www.prc.gov.ph/' , icon: '/images/g7646.png'},
            {url: 'https://www.gsis.gov.ph/' , icon: '/images/Government_Service_Insurance_System_(Philippines)_(logo).svg.png'},
            {url: 'http://www.csc.gov.ph/' , icon: '/images/Civil_Service_Commission.svg.png'},
            {url: 'https://www.sss.gov.ph/' , icon: '/images/sss-logo-medium.png'},
            {url: 'https://www.philhealth.gov.ph/' , icon: '/images/Www.philhealth.gov.ph.png'},
        ],
        helpLines: [
          {name: 'Mayor Office' , hotline: '0000-0000'},
          {name: 'City Council' , hotline: '0000-0000'},
          {name: 'Police Emergency' , hotline: '0000-0000'},
          {name: 'Ambulance' , hotline: '0000-0000'},
          {name: 'E-Service' , hotline: '0000-0000'},
        ],
        activeNews: '',
        showWelcomeMessage: false,
        items: [],
        limitationList:3,
        screenWidth:0,
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
                {name: 'Jaynard Monterona', position: 'Damdamin ng Bayan', profile: '/images/cm.png'}, 
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
                        "breakpoint": 475,
                            "settings": {
                                "slidesToShow": 1.3,
                                "rows": 1,
                                "dots": false,
                            }
                        },
                        {
                        "breakpoint": 400,
                            "settings": {
                                "slidesToShow": 1,
                                "rows": 1,
                                "dots": false,
                            }
                        },
                    ]
            },
            newsSettings:{
                "dots": false,
                "infinite": true,
                "slidesToShow": 1.4,
                "speed": 300,
                "rows": 1,
                "slidesPerRow": 1,
                "draggable": true,
                "swipeToSlide": true,
                "responsive": [
                        {
                        "breakpoint": 475,
                            "settings": {
                                "slidesToShow": 1.3,
                                "rows": 1,
                                "dots": false,
                            }
                        },
                        {
                        "breakpoint": 400,
                            "settings": {
                                "slidesToShow": 1,
                                "rows": 1,
                                "dots": false,
                            }
                        },
                    ]
            }
    }
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
  }
}
</script>
