<template>
  <div>
    <Banners/>
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
                  height="auto"
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
                        class="readmore-btn-mobile"
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
              <!-- <NuxtLink
                to="news"
                class="news-seemore"
                outlined
              >
                See More
              </NuxtLink> -->
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
          Programs and Accomplishments
        </h4>
        <div class="agencies-wrapper">
          <div class="agency" v-for="(agency, index) in agencyArray" :key="index" :id="agency.name">
            <div class="front-desc">
              <!-- <span class="icon">
                <img :src="agency.icon">
              </span> -->
              <p class="dep-name">{{agency.title}}</p>
            </div>
            <div class="back-desc">
              <!-- <p class="dep-name">{{agency.title}}</p> -->
              <a href="departments/_id#manadte-scroll" class="desc">{{agency.mandate}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="welcome-statement-section">
      <div class="container">
        <div class="logo-wrapper">
          <a href="https://www.dbm.gov.ph/index.php/about-us/philippine-transparency-seal" target="_blank">
           <img src="images/Transparency_seal-01.png" alt="Transparency seal Seal">
          </a>
        </div>
        <v-divider vertical class="wss-hr"></v-divider>
        <div class="statement">
          <p>National Budget Circular No. 542, issued by the Department of Budget and Management on August 29, 2012, reiterates compliance with Section 93 of the General Appropriations Act of FY 2012. Section 93 is the Transparency Seal provision, to wit:<br>
            Sec. 93. Transparency Seal. To enhance transparency and enforce accountability, all national government agencies shall maintain a transparency seal on their official websites. The transparency seal shall contain the following information: (i) the agency’s mandates and functions, names of its officials with their position and designation, and contact information; (ii) annual reports, as required under National Budget Circular Nos. 507 and 507-A dated January 31, 2007 and June 12, 2007, respectively, for the last three (3) years; (iii) their respective approved budgets and corresponding targets immediately upon approval of this Act; (iv) major programs and projects categorized in accordance with the five key results areas under E.O. No. 43, s. 2011; (v) the program/projects beneficiaries as identified in the applicable special provisions; (vi) status of implementation and program/project evaluation and/or assessment reports; and (vii) annual procurement plan, contracts awarded and the name of contractors/suppliers/consultants.
            The respective heads of the agencies shall be responsible for ensuring compliance with this section.</p>
        </div>
      </div>
    </div>
    <div class="maps-section">
      <img src="images/snazzy-image.png">
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
            <a :href="service.url" class="service" v-for="(service, index) in servicesArray" :key="index" target="_blank">
              <span class="icon">
                <img :src="service.icon">
              </span>
              <p class="dep-name">{{service.title}}</p>
            </a>
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
            <VueSlickCarousel v-bind="sliderSettings" class="officials-slider">
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
            </VueSlickCarousel>
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
import Banners from '../components/Banners.vue'
export default {
  name: 'IndexPage',
  layouts: 'default',
  components: { VueSlickCarousel, Banners },
  data () {
      return {
        newsArray: [
          {
            title : 'Meeting with the Federation of Pedicab Drivers of Calbayog ',
            date: 'October 1, 2022',
            description: 'The members of the federation expressed their willingness to join the city in commemorating its Charter Day in October 16, 2022. They will celebrate Pedicab Drivers Day in October 14, 2022 with some series of activities.',
            img: '/images/news1.jpg',
          },
            {
            title : 'COA EXIT CONFERENCE for 60 Barangays',
            date: '15 JULY, 2022',
            description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
            img: '/images/news3.png',
          },
             {
            title : 'The 3-Year (2022-2025) Executive-Legislative Agenda (ELA) Conference. ',
            date: 'September 21, 2022',
            description: 'The ELA was derived from the series of workshops previously conducted by the Technical Working Group Sectoral Teams with  their PPAs, Goals and Objectives.',
            img: '/images/news3.jpg',
          },
          {
            title : 'ANG SUMBUNGAN NG BAYAN... AT ANG AMA NG BAYAN... MAGKASAMA NA SA IISANG PROGRAMA ',
            date: '15 JULY, 2022',
            description: 'DAMDAMIN NG BAYAN WITH THE CHIEF EXECUTIVE!',
            img: '/images/infinite-home.jpg',
          },
             {
            title : 'CALBAYOG LGU AT NWSSU... SANIB PWERSA SA PAGPAPALAKAS NG TURISMO SA LUNGSOD',
            date: '15 JULY, 2022',
            description: 'SIMULCAST AT OUR YOUTUBE CHANNEL: INFINITE RADIO CALBAYOG',
            img: '/images/infinite-home.jpg',
          },
          {
            title : 'Graduation Ceremony',
            date: '15 JULY, 2022',
            description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
            img: '/images/infinite-home.jpg',
          },
        ],
        eventGallery: [
          { title: 'October' , img: '/images/spark-oct.jpg'},
          { title: 'September' , img: '/images/sept.png'},
          { title: 'August' , img: '/images/event1.png'},
          { title: 'July' , img: '/images/Civic-Parade1.png'},
          { title: 'June' , img: '/images/2378565_orig.png'},
         
        ],
        // agencyArray: [
        //   {
        //     title: 'Agriculture',
        //     icon: '/images/Icon awesome-leaf.png', 
        //     name: 'agri',
        //     mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
        //   },
        //   {
        //     title: 'Disaster Risk Reduction', 
        //     icon: '/images/Icon ionic-md-warning.png', 
        //     name: 'disaster',
        //     mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
        //   },
        //   {
        //     title: 'Education', 
        //     icon: '/images/Icon awesome-graduation-cap.png', 
        //     name: 'educ',
        //     mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
        //   },
        //   {
        //     title: 'Health', 
        //     icon: '/images/Icon awesome-briefcase-medical.png', 
        //     name: 'health',
        //     mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
        //   },
        //   {
        //     title: 'Infrastructure Development', 
        //     icon: '/images/Icon awesome-building.png', 
        //     name: 'infra',
        //     mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
        //   },
        //   {
        //     title: 'Peace and Order', 
        //     icon: '/images/Icon awesome-dove.png', 
        //     name: 'peace',
        //     mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
        //   },
        //   {
        //     title: 'Poverty Alleviation', 
        //     icon: '/images/Icon open-graph.png', 
        //     name: 'pov',
        //     mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
        //   },
        //   {
        //     title: 'Solid Waste Management', 
        //     icon: '/images/Icon awesome-recycle.png', 
        //     name: 'waste',
        //     mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
        //   },
        //   {
        //     title: 'Tourism', 
        //     icon: '/images/Icon awesome-umbrella-beach.png', 
        //     name: 'tourism',
        //     mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
        //   },
        //   {
        //     title: 'Transportation Planning and Traffic Management', 
        //     icon: '/images/Icon awesome-traffic-light.png', 
        //     name: 'transpo',
        //     mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
        //   },
        // ],
        agencyArray: [
          {
            title: 'CITY MAYOR`S OFFICE',
            icon: '/images/Icon awesome-leaf.png', 
            name: 'agri',
            mandate: 'The Mayor`s Office Operation coordinates and oversees the management of city governmental operations to promote the efficient and effective delivery of agency services. The office mandate to both provide the operational support for all agencies as well as measure and report on agency performance. Operations helps City agencies to improve productivity by providing recommendations and institutional support in addition to reporting areas of success and identifying the areas of possible improvement.',
          },
          {
            title: 'Disaster Risk Reduction', 
            icon: '/images/Icon ionic-md-warning.png', 
            name: 'disaster',
            mandate: 'The office is tasked to conduct and organized disaster preparedness activities to save lives and properties.',
          },
          {
            title: 'CITY HOUSING AND DEVELOPMENT', 
            icon: '/images/Icon awesome-graduation-cap.png', 
            name: 'educ',
            mandate: 'Formulate plans and program applicable to the Housing Program of the city based on RA 7279 or otherwise known as Urban Development and Housing Act of 1992',
          },
          {
            title: 'Business Permits and Licensing', 
            icon: '/images/Icon awesome-briefcase-medical.png', 
            name: 'health',
            mandate: 'In charge of the business permitting and licensing on private commercial, industrial and other business establishments within the jurisdiction of the local government unit in relation to the implementation of tax ordinances pursuant to the provisions provided under Book II of RA # 7160 otherwise known as the Local Government Code of 1991',
          },
          {
            title: 'SANGGUNIANG PANLUNGSOD', 
            icon: '/images/Icon awesome-building.png', 
            name: 'infra',
            mandate: 'Appropriate Funds for expenses of the City Government in accordance with law.',
          },
          {
            title: 'CITY ADMINISTRATOR', 
            icon: '/images/Icon awesome-dove.png', 
            name: 'peace',
            mandate: 'Develop management and administrative-related plans and strategies upon approval of the LCE/Delivery of administrative services during and after man-made and natural disasters and calamities.',
          },
          {
            title: 'City Civil Registrar', 
            icon: '/images/Icon open-graph.png', 
            name: 'pov',
            mandate: 'Records all vital occurrences of a person, natural or through judicial order, in civil registry forms and books required by law and file, compile, keep and preserve these documents in secure place.',
          },
          {
            title: 'Solid Waste Management', 
            icon: '/images/Icon awesome-recycle.png', 
            name: 'waste',
            mandate: 'The City Solid Waste Management Office was created to answer the needs towards preventing Health hazards to Human Lives and mitigating Environmental degradation. Thus, on October 10, 1997 an Ordinance No. 97-42-3682 was approved by the Sangguniang Panlungsod.',
          },
          {
            title: 'CITY GENERAL SERVICES', 
            icon: '/images/Icon awesome-umbrella-beach.png', 
            name: 'tourism',
            mandate: 'The City General Services Office was formally created and established in 1993 by virtue of Local Government Code of 1991 or RA. 7160, empowering local government units or decentralizing government&#39;s operation.',
          },
          {
            title: 'City Budget Office', 
            icon: '/images/Icon awesome-traffic-light.png', 
            name: 'transpo',
            mandate: 'Provide periodic review and disclosure of budgetary status of the Local Government',
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
          {name: 'Mayor Office' , hotline: '09278134896'},
          {name: 'City Council' , hotline: '09553758304'},
          {name: 'Police Emergency' , hotline: '09054254511'},
          {name: 'City Health' , hotline: '2091267 / 09173121174'},
          {name: 'E-Service' , hotline: '09051234567'},
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
                                "slidesToShow": 1.2,
                                "rows": 1,
                                "dots": false,
                            }
                        },
                        {
                        "breakpoint": 360,
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
  // mounted() {
  //   window.addEventListener("scroll", this.onScroll)
  // },
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.onScroll)
  // },
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
    // onScroll(e) {
    //   this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
    //   if(this.windowTop >= 2000){

    //   }
    // }
  }
}
</script>
