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
          <h3>{{selected_event.title}}</h3>
        </div>
        <div class="nsp-content">
          <div
            class="full-img"
            id="events-sp-img"
          >
            <img
              :src="selected_event.cover"
              @click="newsShowPopup"
            >
          </div>
          <div class="nsp-articles">
            <div class="desc">
              <p>{{selected_event.description}}
              </p>
            </div>
          </div>

        </div>
        <!-- <div class="next-prev-w" id="events-sp-nextprev">
                <v-btn elevation="1" class="n-slider-btn"><span class="mdi mdi-chevron-left"></span></v-btn>
                <a href="sid2"><v-btn elevation="1" class="n-slider-btn"><span class="mdi mdi-chevron-right"></span></v-btn></a>
            </div> -->
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
                v-for="(item,i) in selected_event.images"
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
                {{selected_event.title}}
              </h3>
            </div>
            <div class="news-modal-content">
              <div class="news-description">
                <p>
                  {{selected_event.description}}
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
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "IndexPage",
  layouts: "default",
  components: { VueSlickCarousel },
  data() {
    return {
      eventGallery: [
        {
          tag: 1,
          title: "October",
          description:
            "Keep track of fun and memorable moments on the tourism calendar as we give you exciting activities, events, and promotions as we embrace the Tourism Week Celebration of our beautiful city Calbayog.  Here is the Schedule of activities and competitions for the Tourism Week Celebration. Be first to register by following and resharing! See you soon, Calbayognon! #sparkcalbayog #RethinkingTourism #WorldTourismWeek",
          images: [
            {
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assets%2Fspark-oct.jpg?alt=media&token=464db337-4bce-4487-b73a-c11ba269d823",
            },
            {
              img: "/images/october-v.jpg",
            },
          ],
          cover:
            "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assets%2Fspark-oct.jpg?alt=media&token=464db337-4bce-4487-b73a-c11ba269d823",
        },
        {
          tag: 2,
          title: "September",
          description:
            "Mark your calendars for the exciting events this coming Calbayog City fiesta! Here is the schedule of activities in celebration of the Sarakiki-Hadang Festival 2022. This weeklong activity is brought to you by the Local Government Unit of Calbayog thru the City Arts and Culture Office. Maupay nga Patron, Calbayog! Viva Nuestra Señora de la Natividad!",
          images: [
            {
              img: "/images/sept.png",
            },
            {
              img: "/images/302090420_126406180136397_4216193573638826460_n (1).png",
            },
          ],
          cover: "/images/sept.png",
        },
        {
          tag: 3,
          title: "August",
          description:
            "The Samar Day festivities are on! Let`s Celebrate as ONE! #SparkSamar #OnePeopleOneSamar #SamarDayCelebration2022",
          images: [
            {
              img: "/images/aug.png",
            },
            {
              img: "/images/aug2.png",
            },
            {
              img: "/images/aug3.png",
            },
            {
              img: "/images/aug4.png",
            },
          ],
          cover: "/images/aug.png",
        },
        {
          tag: 4,
          title: "July",
          description:
            "THE INAUGURATION & OATH-TAKING CEREMONY OF THE NEWLY ELECTED OFFICIALS IN THE CITY OF CALBAYOG",
          images: [
            {
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assets%2Fjuly1.png?alt=media&token=2c5b9406-0414-4468-a177-1fe9c39d6a1f",
            },
            {
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assets%2Fjuly2.png?alt=media&token=45105f1d-c2d1-4c42-8164-663f56f14142",
            },
          ],
          cover:
            "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assets%2Fjuly1.png?alt=media&token=2c5b9406-0414-4468-a177-1fe9c39d6a1f",
        },
        {
          title: "June",
          images: [
            {
              img: "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assets%2F2378565_orig.png?alt=media&token=6f5758eb-37db-41df-a7f0-2daf70890804",
            },
          ],
          cover:
            "https://firebasestorage.googleapis.com/v0/b/calbayogapp.appspot.com/o/assets%2Fspark-oct.jpg?alt=media&token=464db337-4bce-4487-b73a-c11ba269d823",
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
      selected_event: {},
    };
  },
  mounted() {
    this.filterEvents();
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
    filterEvents() {
      this.eventGallery.forEach((eventGallery) => {
        if (eventGallery.tag == this.$route.params.id) {
          this.selected_event = eventGallery;
          console.log(this.selected_event, "news");
        }
      });
    },
  },
};
</script>