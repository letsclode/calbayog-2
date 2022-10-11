<template>
  <div>
    <Banners />
    <div class="section2">
      <div class="welcome-text-section">
        <div class="container wt-container">
          <div class="wt-wrapper">
            <div class="img-holder">
              <img
                :src="('https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assets%2FMayor12%20%E2%80%93%2010.jpg?alt=media&token=65cc8f64-159c-4117-845c-18798d19e0e0')"
                alt=""
              >
            </div>
            <div class="wt-content">
              <div class="wtc-inner">
                <h4>Welcome to Calbayog City</h4>
                <p>
                  Welcome to the website of the Local Government of Calbayog City.
                </p>
                <br>
                <p>
                  We are pleased to introduce to you the different departments and offices of the city government and the links to their online pages.
                </p>
                <p>
                  We want to reach out to our stakeholders and encourage feedback from them. It is our vision to develop an empowered people with a high sense of community belongingness. We want our community to actively engage in the affairs of the city and the task of city-building.
                </p>
                <div
                  class="hid-message-welcome"
                  :class="{animate : showWelcomeMessage}"
                >
                  <p>
                    Your city government envisions a family of truly dedicated and hard-working public servants worthy of the trust and confidence of Calbayagnons and other clients. We commit to deliver timely and efficient services the best we can.
                  </p>
                  <p>We assure you that we will be responsive to your inquiries for information and services.</p>
                  <p>Happy browsing.</p>
                </div>
              </div>
              <button
                class="read-more"
                @click="readMoreWelcome"
                :class="{animate : showWelcomeMessage}"
              >READ MORE</button>
            </div>
          </div>
          <div class="mobile-wt-wrapper">
            <div class="img-holder">
              <img
                :src="('https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assets%2FMayor12%20%E2%80%93%2010.jpg?alt=media&token=65cc8f64-159c-4117-845c-18798d19e0e0')"
                alt=""
              >
            </div>
            <div class="wtc-inner">
              <h4>Welcome to Calbayog City</h4>
              <p>
                Welcome to the website of the Local Government of Calbayog City.
              </p>
              <br>
              <p>
                We are pleased to introduce to you the different departments and offices of the city government and the links to their online pages.
              </p>
              <p>
                We want to reach out to our stakeholder and encourage feedback from them. It is our vision to develop an empowered people with a high sense of community belongingness. We want our community to actively engage in the affairs of the city and the task of city-building.
              </p>
              <div
                class="hid-message-welcome"
                :class="{animate : showWelcomeMessage}"
              >
                <p>
                  Your city government envisions a family of truly dedicated and hard-working public servants worthy of the trust and confidence of Calbayagnons and other clients. We commit to deliver timely and efficient services the best we can.
                </p>
                <p>We assure you that we will be responsive to your inquiries for information and services.</p>
                <p>Happy browsing.</p>
              </div>
            </div>
            <button
              class="read-more"
              @click="readMoreWelcome"
              :class="{animate : showWelcomeMessage}"
            >READ MORE</button>
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
                v-for="(news, index) in newsArray"
                :key="index"
              >
                <a @click="newToSp(news.tag)">
                  <v-img
                    height="210"
                    class="news-card-img"
                    :src="news.img"
                  ></v-img>
                  <v-card-text class="news-content-wrapper">
                    <p class="news-date">{{news.date}}</p>
                    <h5 class="news-title">{{news.title}}</h5>
                    <p class="news-desc">{{news.description}}</p>
                    <a
                      @click="testing(news.tag)"
                      class="readmore-a"
                    >
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
            <template>
              <v-card
                :class="activeNews == index ? 'active' : ''"
                @click="newsShowPopup(index)"
                class="news-card-wrappper vids-wrap"
                v-for="(item, index) in newsVids"
                :key="index"
              >
                <a :href="item.url">
                  <iframe
                    :src="item.frame"
                    width="100%"
                    height="210"
                    style="border:none;overflow:hidden"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                  <v-card-text class="news-content-wrapper">
                    <p class="news-date">{{item.date}}</p>
                    <h5 class="news-title">{{item.title}}</h5>
                    <p class="news-desc">{{item.description}}</p>
                    <a
                      :href="item.url"
                      class="readmore-a"
                    >
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
          <VueSlickCarousel
            v-bind="newsSettings"
            class="mobile-news"
          >
            <v-card
              :class="activeNews == index ? 'active' : ''"
              @click="newsShowPopup(index)"
              class="news-card-wrappper"
              v-for="(news, index) in newsArray"
              :key="index"
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
                  <a
                    href="news/_id"
                    class="readmore-a"
                  >
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
          <p class="section-desc">During the next few months, you will be learning about the different initiatives through our planned activities, seminar, and special events where you will be able to join in and get hands on experiences. I hope these will help you grow to be more productive and smart.
          </p>
          <div class="events-gallery">
            <div
              class="img-gallery"
              v-for="(item, index) in eventGallery"
              :key="index"
            >
              <img
                :src="item.img"
                :alt="item.title"
              >
              <div class="events-content">
                <p>
                  {{item.title}}
                </p>
                <a @click="eventToSp(item.tag)">
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
          <div
            class="agency"
            v-for="(agency, index) in agencyArray"
            :key="index"
            :id="agency.name"
          >
            <div class="front-desc">
              <!-- <span class="icon">
                <img :src="agency.icon">
              </span> -->
              <p class="dep-name">{{agency.title}}</p>
            </div>
            <div
              class="back-desc"
              @click="eventScroll(agency.tag)"
            >
              <!-- <p class="dep-name">{{agency.title}}</p> -->
              <a class="desc">{{agency.mandate}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="welcome-statement-section">
      <div class="container">
        <div class="logo-wrapper">
          <a
            href="https://www.dbm.gov.ph/index.php/about-us/philippine-transparency-seal"
            target="_blank"
          >
            <img
              src="images/Transparency_seal-01.png"
              alt="Transparency seal Seal"
            >
          </a>
        </div>
        <v-divider
          vertical
          class="wss-hr"
        ></v-divider>
        <div class="statement">
          <p>National Budget Circular No. 542, issued by the Department of Budget and Management on August 29, 2012, reiterates compliance with Section 93 of the General Appropriations Act of FY 2012. Section 93 is the Transparency Seal provision, to wit:<br>
            Sec. 93. Transparency Seal. To enhance transparency and enforce accountability, all national government agencies shall maintain a transparency seal on their official websites. The transparency seal shall contain the following information: (i) the agency’s mandates and functions, names of its officials with their position and designation, and contact information; (ii) annual reports, as required under National Budget Circular Nos. 507 and 507-A dated January 31, 2007 and June 12, 2007, respectively, for the last three (3) years; (iii) their respective approved budgets and corresponding targets immediately upon approval of this Act; (iv) major programs and projects categorized in accordance with the five key results areas under E.O. No. 43, s. 2011; (v) the program/projects beneficiaries as identified in the applicable special provisions; (vi) status of implementation and program/project evaluation and/or assessment reports; and (vii) annual procurement plan, contracts awarded and the name of contractors/suppliers/consultants.
            The respective heads of the agencies shall be responsible for ensuring compliance with this section.</p>
        </div>
      </div>
    </div>
    <div class="maps-section">
      <iframe
        width=100%
        height="783"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=calbayog%20city%20hall&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
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
            <a
              :href="service.url"
              class="service"
              v-for="(service, index) in servicesArray"
              :key="index"
              target="_blank"
            >
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
                  <v-expansion-panel-header
                    expand-icon="mdi-menu-down"
                    class="hp-header"
                  >
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
          <VueSlickCarousel
            v-bind="sliderSettings"
            class="officials-slider"
          >
            <div
              class="official"
              v-for="(official, index) in officials"
              :key="index"
            >
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Banners from "../components/Banners.vue";
import news_data from "../components/json/news.json";
import officials_data from "../components/json/officials.json";
import events_data from "../components/json/events.json";
import agency_data from "../components/json/agency.json";
import news_vids_data from "../components/json/news_vids.json";
import service_data from "../components/json/service.json";
import helpLines_data from "../components/json/help_lines.json";
export default {
  name: "IndexPage",
  layouts: "default",
  components: { VueSlickCarousel, Banners },
  data() {
    return {
      newsArray: news_data,
      eventGallery: events_data,
      agencyArray: agency_data,
      newsVids: news_vids_data,
      servicesArray: service_data,
      helpLines: helpLines_data,
      activeNews: "",
      showWelcomeMessage: false,
      items: [],
      limitationList: 3,
      screenWidth: 0,
      officials: officials_data,
      sliderSettings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        infinite: false,
        slidesToShow: 5,
        speed: 300,
        rows: 2,
        slidesPerRow: 1,
        draggable: true,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              rows: 1,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2.2,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 475,
            settings: {
              slidesToShow: 1.3,
              rows: 1,
              dots: false,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              rows: 1,
              dots: false,
            },
          },
        ],
      },
      newsSettings: {
        dots: false,
        infinite: true,
        slidesToShow: 1.4,
        speed: 300,
        rows: 1,
        slidesPerRow: 1,
        draggable: true,
        swipeToSlide: true,
        responsive: [
          {
            tag: 18,
            title: "City Drug Abuse Prevention Office",
            icon: "/images/Icon awesome-traffic-light.png",
            name: "waste",
            mandate: "",
          },
          {
            tag: 19,
            title: "City Agriculture Office",
            icon: "/images/Icon awesome-traffic-light.png",
            name: "peace",
            mandate:
              "To promote agricultural development by providing the policy framework, public investment and support services, which re needed for domestic and export-oriented enterprise",
          },
          {
            tag: 20,
            title: "Solid Waste Management Office (SWMO)",
            icon: "/images/Icon awesome-traffic-light.png",
            name: "disaster",
            mandate: "",
          },
          {
            tag: 21,
            title: "City Economic Enterprise Development and Management Office",
            icon: "/images/Icon awesome-traffic-light.png",
            name: "peace",
            mandate: "",
          },
          {
            tag: 22,
            title: "City Engineering Office",
            icon: "/images/Icon awesome-traffic-light.png",
            name: "disaster",
            mandate: "",
          },
          {
            tag: 23,
            title: "General Services office",
            icon: "/images/Icon awesome-traffic-light.png",
            name: "agri",
            mandate: "",
          },
          {
            tag: 24,
            title: "City Treasurer`s Office",
            icon: "/images/Icon awesome-traffic-light.png",
            name: "waste",
            mandate: "",
          },
        ],
        servicesArray: service_data,
        helpLines: helpLines_data,
        activeNews: "",
        showWelcomeMessage: false,
        items: [],
        limitationList: 3,
        screenWidth: 0,
        officials: officials_data,
        sliderSettings: {
          dots: true,
          dotsClass: "slick-dots custom-dot-class",
          infinite: false,
          slidesToShow: 5,
          speed: 300,
          rows: 2,
          slidesPerRow: 1,
          draggable: true,
          swipeToSlide: true,
          responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                rows: 1,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                rows: 1,
                dots: false,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                rows: 1,
                dots: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2.2,
                rows: 1,
                dots: false,
              },
            },
            {
              breakpoint: 475,
              settings: {
                slidesToShow: 1.3,
                rows: 1,
                dots: false,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                rows: 1,
                dots: false,
              },
            },
          ],
        },
        newsSettings: {
          dots: false,
          infinite: true,
          slidesToShow: 1.4,
          speed: 300,
          rows: 1,
          slidesPerRow: 1,
          draggable: true,
          swipeToSlide: true,
          responsive: [
            {
              breakpoint: 475,
              settings: {
                slidesToShow: 1.3,
                rows: 1,
                dots: false,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1.2,
                rows: 1,
                dots: false,
              },
            },
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1,
                rows: 1,
                dots: false,
              },
            },
          ],
        },
      },
    };
  },
  methods: {
    newsShowPopup(val) {
      this.activeNews = val;
      this.$modal.show("newsModal");
    },
    closeNewsModal() {
      this.$modal.hide("newsModal");
    },
    readMoreWelcome() {
      this.showWelcomeMessage = !this.showWelcomeMessage;
    },
    newToSp(tag) {
      this.goTo("news-id", { id: tag });
    },
    eventToSp(tag) {
      this.goTo("events-id", { id: tag });
    },
    eventScroll(tag) {
      if (tag == 0) {
        alert("Department still on development");
      } else {
        this.goTo("departments-id", { id: tag });
      }
    },
  },
};
</script>