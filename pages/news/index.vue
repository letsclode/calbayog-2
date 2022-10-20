<template>
  <v-app class="news-section">
    <div
      class="banner-wrapper small-banner"
      id="about-banner"
    >
      <VueSlickCarousel
        v-bind="sliderHeader"
        class="officials-slider"
      >
        <img
          :src="item.img"
          alt=""
          v-for="(item,i) in headerCarousel"
          :key="i"
        >
      </VueSlickCarousel>
      <p class="banner-title">News</p>
    </div>
    <div class="search-bar">
      <div class="container">
        <form action="news/_id">
          <div class="search-wrapper">
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
        <h4
          class="title"
          style="font-size: 2.25rem !important; font-weight: 700;"
        >
          News
        </h4>
        <!-- <div class="news-grid">
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
                </div> -->
        <div class="news-grid">
          <template>
            <v-card
              :class="activeNews == index ? 'active' : ''"
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
      </div>
    </div>
    <!-- <div class="city-news-section trending-news-section">
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
        </div> -->

  </v-app>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "News",
  layouts: "default",
  components: { VueSlickCarousel },
  data() {
    return {
      // newsArray: [
      //   {
      //     title : 'Graduation Ceremony',
      //     date: '15 JULY, 2022',
      //     description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
      //     img: '/images/news2.png',
      //   },
      //     {
      //     title : 'Graduation Ceremony',
      //     date: '15 JULY, 2022',
      //     description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
      //     img: '/images/news3.png',
      //   },
      //      {
      //     title : 'Graduation Ceremony',
      //     date: '15 JULY, 2022',
      //     description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
      //     img: '/images/news4.png',
      //   },
      //      {
      //     title : 'Graduation Ceremony',
      //     date: '15 JULY, 2022',
      //     description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
      //     img: '/images/news5.png',
      //   },
      //      {
      //     title : 'Graduation Ceremony',
      //     date: '15 JULY, 2022',
      //     description: 'Tumambong Si Calbayog City Mayor Raymund Monmon Uy san graduation ceremony san 123 nga mga bag-o nga graduate san Philippine Army sa camp Vicente Lucban,  Brgy. Maulong, Catbalogan.',
      //     img: '/images/news2.png',
      //   },
      // ],
      items: ["Graduation Ceremony", "City Fiesta"],
      value: null,
      headerCarousel: [
        {
          title: "Cathedral",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assets%2FCalbayog.png?alt=media&token=40378d2a-0f3b-474e-85f8-837dbebad3f8",
        },
        { title: "Falls", img: "/images/calbcover.png" },
        { title: "Falls", img: "/images/falls.png" },
      ],
      sliderHeader: {
        dots: false,
        dotsClass: "slick-dots header-dots",
        infinite: true,
        slidesToShow: 1,
        slidesPerRow: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        fade: true,
        adaptiveHeight: false,
      },
      // newsArray: [
      //   {
      //     tag: 1,
      //     title: "Meeting with the Federation of Pedicab Drivers of Calbayog ",
      //     date: "October 1, 2022",
      //     description:
      //       "The members of the federation expressed their willingness to join the city in commemorating its Charter Day in October 16, 2022. They will celebrate Pedicab Drivers Day in October 14, 2022 with some series of activities.",
      //     img: "/images/news1.jpg",
      //   },
      //   {
      //     tag: 2,
      //     title: "COA EXIT CONFERENCE for 60 Barangays",
      //     date: "September 30, 2022",
      //     description:
      //       "COA EXIT CONFERENCE for 60 Barangays CY 2019-2021 @Baypark Hotel, Calbayog City",
      //     img: "/images/news2.jpg",
      //   },
      //   {
      //     tag: 3,
      //     title:
      //       "The 3-Year (2022-2025) Executive-Legislative Agenda (ELA) Conference. ",
      //     date: "September 21, 2022",
      //     description:
      //       "The ELA was derived from the series of workshops previously conducted by the Technical Working Group Sectoral Teams with  their PPAs, Goals and Objectives.",
      //     img: "/images/news3.jpg",
      //   },
      //   // {
      //   //     tag: 4,
      //   //     title : 'The governor visited the Parksyadahan site after the successful meeting',
      //   //     date: 'September 17, 2022',
      //   //     description: 'Consultative Meeting with Samar Governor Sharee Ann Tan and Vice-governor Arnold Tan with some Calbayog lgu officials and employees for 2023 programs in collaboration with the provincial government particularly on priority programs for health, agriculture and tourism. ',
      //   //     img: '/images/news3.jpg',
      //   // },
      // ],
      newsArray: [
        {
          tag: 1,
          title: "SAN JUANICO BRIDGE LIGHTING CEREMONY WITH PBBM",
          date: "October 19, 2022",
          description:
            "Kasama ang ilang mga ahensya, mga opisyales at si President Ferdinand Bongbong Marcos Jr. pormal ng binuksan ngayong gabi ang San Juanico Aesthetic Lights and Sounds. 🇵🇭\nSa pagbubukas ng kinikilalang mahabang tulay sa Pilipinas na puno ng kulay inaasahan ng Department of Tourism, Lokal na Probinsya ng Samar at mga mamamayan na magdadala ito ng magandang epekto sa pag akit ng mga torista sa rehiyon.\nKasama din natin ang ilang mga Kabataan, mga kaibigan at ang GlamTeam.Ph sa mismong tulay para sa opening ceremony na pinangunahan ng ating mahal na pangulong Ferdinand Romualdez Marcos Jr. 🇵🇭✨ See less",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/news%2Fsanjuanico%2F307879117_465627678718110_2203915891287451119_n.jpg?alt=media&token=e526e24a-2eb6-497e-a4b6-ebd455d715df"
        },
        {
          tag: 2,
          title: "CALBAYOG CITY MAYOR, GINPRESENTAR AN IYA MGA ACCOMPLISHMENTS HA IYA 1ST 100 DAYS.",
          date: "October 16, 2022",
          description:
            "Igin-report ni Calbayog City Mayor Raymund Uy an mga accomplishments han iya administrasyon ha iya 1st 100 days kumo alkalde ha syudad han Calbayog ipinaagi han pagdumara han iya pinaka-una nga State of the City Address (SOCA) kakulop, October 16, 2022 ha Calbayog City Sports Center.\nIginpresentar ni Mayor Uy an Social, Economic, Environmental, Infrastructure, ngan Institutional Development ha ilarom han iya pamumuno.\nHa gin dumara nga SOCA, iginparayaw han alkalde an pagkaada hin City Drug Abuse Prevention and Rehabilitation Office kun diin ha bug-os nga rehiyon otso an Calbayog City la an mayda day-time rehabilitation center.\nGinpatapod naman ni Uy an padayon nga pagsuporta han iya pamunuan ha peace keeping mission han magkalainlain nga local nga awtoridad lakip na an pag dumara hin Serbisyo Caravan para ha mga residente han Calbayog ha ilarom han Retooled Community Swevice Program han PNP.\nIginpapatuman na gihapon an mga housing projects kun diin maabot ha 3000 nga nanginginahanglan nga Calbayognon an gin lalauman nga marelocate.\nIginpasabot gihapon an paghataas han COVID-19 accomplishment rate kun diin umabot na ha 78% o 134,699 nga mga Calbayognon an nabakunahan.\nNagdonar naman an City Gov’t han Calbayog hin tuna nga pagtitindogan han level 3 hospital nga Samar Island Medical Center kun diin nagbutang hin P100-million nga budget para han site development project han SIMC ha Brgy Gadgaran Calbayog City.\nNaghatag hin maabot P10-milyones nga subsidiya an Calbayog LGU ha Calbayog District Hospital kumo kabalyo han pira katuig nga serbisyo ha mga Calbayognon.\nLivelihood assistance grant naman an ginhatag han LGU ha magkalainlain nga farmers association ha syudad.\nSamtang, maabot ha 560 an bag-o nga negosyo nga gintindog ha Calbayog kun diin umabot na ha 3,034 nga mga mayor’s and business permit an na-issue han LGU.\nIginpasabot gihapon ni Uy an paghataas han real property tax collection ha Calbayog kun diin umabot ha 30,888,647.34 an kabug-osan nga nakolektar kun diin harani P7-milyones an gindak-an kumpara han naglabay nga tuig.\nNagbuhat naman hin Disaster Risk Reduction Management Plan 2022-2027, paghatag hin basic life support trainings, pagbutang hin kadugangan nga rescue teams ngan pagpatuman hin helmet law ha sulod han syudad.\"Change is a process. There are a lot of changes that we need to learn and follow. And I would like to take it one at a time\"\\“The 1st 100 days presented has a lot of challenges, ine nga 100 days amo ine an magigin pondasyon,” sumala kan Mayor Uy.Iya naman ginpasalamatan an provincial government han Samar ipinaagi kan Samar Governor Sharee Ann Tan sugad man kan Samar 1st District Congressman Jimboy Tan ha padayon nga suporta ha syudad han Calbayog.Labot la han 1st 100 days, gin seselebrar gihapon ha Calbayog City an ika-74 nga Charter Day.",
          img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/news%2Fcharter%2F310398273_1483909582017558_8253559385598990816_n.jpg?alt=media&token=7a66577a-8339-44b9-b945-935ed7349589"
        },
        {
          tag: 3,
          title: "Meeting with the Federation of Pedicab Drivers of Calbayog",
          date: "October 1, 2022",
          description:
            "The members of the federation expressed their willingness to join the city in commemorating its Charter Day in October 16, 2022. They will celebrate Pedicab Drivers Day in October 14, 2022 with some series of activities. Also present during the meeting was Hon. Rosendo A. Morales, SP Chairman of the Committee on Transportation and Communications",
          img: "/images/news1.jpg",
        },
        {
          tag: 4,
          title: "COA EXIT CONFERENCE for 60 Barangays",
          date: "September 30, 2022",
          description:
            "COA EXIT CONFERENCE for 60 Barangays CY 2019-2021 @Baypark Hotel, Calbayog City",
          img: "/images/news2.jpg",
        },
        {
          tag: 5,
          title:
            "The 3-Year (2022-2025) Executive-Legislative Agenda (ELA) Conference.",
          date: "September 21, 2022",
          description:
            "The ELA was derived from the series of workshops previously conducted by the Technical Working Group Sectoral Teams with  their PPAs, Goals and Objectives.",
          
          img: "/images/news3-min.jpg",
        },
      ],
      newsVids: [
        {
          title: "Opening Ceremony",
          date: "3 OCTOBER, 2022",
          description:
            "We invite all participating entries in the following competitions to be present during the opening ceremonies and awarding of winners later at the Calbayog City Convention Center at 6 pm.",
          frame:
            "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FIRcalbayog247%2Fvideos%2F496738412041957%2F&show_text=false&width=560&t=0 ",
          url: "news/vid1",
        },

        {
          title: "SANGGUNIANG PANLUNGSOD PUBLIC HEARING",
          date: "21 SEPTEMBER, 2022",
          description:
            "SAMELCO 1 UMATUBANG SA KONSEHO SAN CALBAYOG PARA BATUNON AN MGA PAKIANA HIUNONG SAN SOBRA NGA PAGHATAAS SAN SUKOT SA KURYENTE",
          frame:
            "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FIRcalbayog247%2Fvideos%2F465375588855152%2F&show_text=false&width=560&t=0",
          url: "news/vid2",
        },
        {
          title:
            "THE LEGISLATIVE HOUR WITH VICE MAYOR REX DAGUMAN & CITY COUNCILOR ABBIE IRIGON-YULO",
          date: "AUGUST 17, 2022",
          description:
            "MAYOR REX DAGUMAN & CITY COUNCILOR ABBIE IRIGON-YULO KNOW HOW OUR VICE MAYOR RENDER HIS WORKS.",
          frame:
            "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FIRcalbayog247%2Fvideos%2F781763489628704%2F&show_text=false&width=560&t=0",
          url: "news/vid3",
        },
      ],
    };
  },
  methods: {
    newToSp(tag) {
      this.goTo("news-id", { id: tag });
    },
  },
};
</script>