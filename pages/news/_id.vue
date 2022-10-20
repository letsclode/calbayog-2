<template>
  <div v-if="$route.params.id">
    <div class="banner-wrapper small-banner">
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
    </div>
    <div class="news-single-wrapper">
      <div class="container">
        <div class="title-search-wrapper">
          <h3>Activities Post</h3>
        </div>
        <div class="nsp-content">
          <div class="full-img">
            <img
              :src="selected_news.cover"
              @click="newsShowPopup"
            >
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
      <modal
        name="newsModal"
        width="100%"
        height="100%"
      >
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
              <v-icon
                @click="closeNewsModal()"
                class="x-close"
              >mdi-close</v-icon>
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "IndexPage",
  layouts: "default",
  components: { VueSlickCarousel },
  data() {
    return {
      newsArray: [
        {
          tag: 1,
          title: "SAN JUANICO BRIDGE LIGHTING CEREMONY WITH PBBM",
          date: "October 19, 2022",
          description:
            "Kasama ang ilang mga ahensya, mga opisyales at si President Ferdinand Bongbong Marcos Jr. pormal ng binuksan ngayong gabi ang San Juanico Aesthetic Lights and Sounds. 🇵🇭\nSa pagbubukas ng kinikilalang mahabang tulay sa Pilipinas na puno ng kulay inaasahan ng Department of Tourism, Lokal na Probinsya ng Samar at mga mamamayan na magdadala ito ng magandang epekto sa pag akit ng mga torista sa rehiyon.\nKasama din natin ang ilang mga Kabataan, mga kaibigan at ang GlamTeam.Ph sa mismong tulay para sa opening ceremony na pinangunahan ng ating mahal na pangulong Ferdinand Romualdez Marcos Jr. 🇵🇭✨",
            image: [
            {
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/news%2Fsanjuanico%2F307879117_465627678718110_2203915891287451119_n.jpg?alt=media&token=e526e24a-2eb6-497e-a4b6-ebd455d715df",
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/news%2Fsanjuanico%2F311691850_5997373400329643_1084227479590211770_n.jpg?alt=media&token=2aa61ad3-17ed-4072-930e-1f2641645e87",
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/news%2Fsanjuanico%2F311977973_210436914670606_1853168284410122316_n.jpg?alt=media&token=523c70e9-488c-46b4-bdb3-4b30ecefffb4",
            },
          ],
          cover: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/news%2Fsanjuanico%2F307879117_465627678718110_2203915891287451119_n.jpg?alt=media&token=e526e24a-2eb6-497e-a4b6-ebd455d715df"
        },
        {
          tag: 2,
          title: "CALBAYOG CITY MAYOR, GINPRESENTAR AN IYA MGA ACCOMPLISHMENTS HA IYA 1ST 100 DAYS.",
          date: "October 16, 2022",
          description:
            "Igin-report ni Calbayog City Mayor Raymund Uy an mga accomplishments han iya administrasyon ha iya 1st 100 days kumo alkalde ha syudad han Calbayog ipinaagi han pagdumara han iya pinaka-una nga State of the City Address (SOCA) kakulop, October 16, 2022 ha Calbayog City Sports Center.\nIginpresentar ni Mayor Uy an Social, Economic, Environmental, Infrastructure, ngan Institutional Development ha ilarom han iya pamumuno.\nHa gin dumara nga SOCA, iginparayaw han alkalde an pagkaada hin City Drug Abuse Prevention and Rehabilitation Office kun diin ha bug-os nga rehiyon otso an Calbayog City la an mayda day-time rehabilitation center.\nGinpatapod naman ni Uy an padayon nga pagsuporta han iya pamunuan ha peace keeping mission han magkalainlain nga local nga awtoridad lakip na an pag dumara hin Serbisyo Caravan para ha mga residente han Calbayog ha ilarom han Retooled Community Swevice Program han PNP.\nIginpapatuman na gihapon an mga housing projects kun diin maabot ha 3000 nga nanginginahanglan nga Calbayognon an gin lalauman nga marelocate.\nIginpasabot gihapon an paghataas han COVID-19 accomplishment rate kun diin umabot na ha 78% o 134,699 nga mga Calbayognon an nabakunahan.\nNagdonar naman an City Gov’t han Calbayog hin tuna nga pagtitindogan han level 3 hospital nga Samar Island Medical Center kun diin nagbutang hin P100-million nga budget para han site development project han SIMC ha Brgy Gadgaran Calbayog City.\nNaghatag hin maabot P10-milyones nga subsidiya an Calbayog LGU ha Calbayog District Hospital kumo kabalyo han pira katuig nga serbisyo ha mga Calbayognon.\nLivelihood assistance grant naman an ginhatag han LGU ha magkalainlain nga farmers association ha syudad.\nSamtang, maabot ha 560 an bag-o nga negosyo nga gintindog ha Calbayog kun diin umabot na ha 3,034 nga mga mayor’s and business permit an na-issue han LGU.\nIginpasabot gihapon ni Uy an paghataas han real property tax collection ha Calbayog kun diin umabot ha 30,888,647.34 an kabug-osan nga nakolektar kun diin harani P7-milyones an gindak-an kumpara han naglabay nga tuig.\nNagbuhat naman hin Disaster Risk Reduction Management Plan 2022-2027, paghatag hin basic life support trainings, pagbutang hin kadugangan nga rescue teams ngan pagpatuman hin helmet law ha sulod han syudad.\"Change is a process. There are a lot of changes that we need to learn and follow. And I would like to take it one at a time\"\\“The 1st 100 days presented has a lot of challenges, ine nga 100 days amo ine an magigin pondasyon,” sumala kan Mayor Uy.Iya naman ginpasalamatan an provincial government han Samar ipinaagi kan Samar Governor Sharee Ann Tan sugad man kan Samar 1st District Congressman Jimboy Tan ha padayon nga suporta ha syudad han Calbayog.Labot la han 1st 100 days, gin seselebrar gihapon ha Calbayog City an ika-74 nga Charter Day.",
            image: [
            {
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/news%2Fcharter%2F310398273_1483909582017558_8253559385598990816_n.jpg?alt=media&token=7a66577a-8339-44b9-b945-935ed7349589",
            },
          ],
          cover: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/news%2Fcharter%2F310398273_1483909582017558_8253559385598990816_n.jpg?alt=media&token=7a66577a-8339-44b9-b945-935ed7349589"
        },
        {
          tag: 3,
          title: "Meeting with the Federation of Pedicab Drivers of Calbayog",
          date: "October 1, 2022",
          description:
            "The members of the federation expressed their willingness to join the city in commemorating its Charter Day in October 16, 2022. They will celebrate Pedicab Drivers Day in October 14, 2022 with some series of activities. Also present during the meeting was Hon. Rosendo A. Morales, SP Chairman of the Committee on Transportation and Communications",
          image: [
            {
              img: "/images/news1.jpg",
            },
          ],
          cover: "/images/news1.jpg",
        },
        {
          tag: 4,
          title: "COA EXIT CONFERENCE for 60 Barangays",
          date: "September 30, 2022",
          description:
            "COA EXIT CONFERENCE for 60 Barangays CY 2019-2021 @Baypark Hotel, Calbayog City",
          image: [
            {
              img: "/images/news2.jpg",
            },
            {
              img: "/images/news2-min.jpg",
            },
          ],
          cover: "/images/news2.jpg",
        },
        {
          tag: 5,
          title:
            "The 3-Year (2022-2025) Executive-Legislative Agenda (ELA) Conference.",
          date: "September 21, 2022",
          description:
            "The ELA was derived from the series of workshops previously conducted by the Technical Working Group Sectoral Teams with  their PPAs, Goals and Objectives.",
          image: [
            {
              img: "/images/news3-min.jpg",
            },
            {
              img: "/images/news3-1-min.jpg",
            },
            {
              img: "/images/news3-2-min.jpg",
            },
            {
              img: "/images/news3-3-min.jpg",
            },
            {
              img: "/images/news3-5-min.jpg",
            },
            {
              img: "/images/news3-6jpg-min.jpg",
            },
          ],
          cover: "/images/news3-min.jpg",
        },
      ],
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
      selected_news: {},
    };
  },
  mounted() {
    this.filterNews();
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
    filterNews() {
      this.newsArray.forEach((newsArray) => {
        if (newsArray.tag == this.$route.params.id) {
          this.selected_news = newsArray;
          console.log(this.selected_news, "news");
        }
      });
    },
  },
};
</script>