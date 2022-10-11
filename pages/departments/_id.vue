<template>
  <div v-if="$route.params.id">
    <div class="banner-wrapper small-banner">
      <VueSlickCarousel
        v-bind="sliderHeader"
        class="officials-slider"
      >
        <img
          :src="selected_department.banner"
          alt=""
          v-if="selected_department.banner"
        >
        <img
          v-else
          :src="item.img"
          alt=""
          v-for="(item,i) in headerCarousel"
          :key="i"
        >
      </VueSlickCarousel>
    </div>
    <div class="section-dept-sp">
      <div
        class="welcome-text-section"
        id="dept-sp-welcome"
      >
        <div class="container wt-container">
          <div class="wt-wrapper">
            <!-- header -->
            <div
              class="img-holder"
              style=" background-image: url('/images/bg-logo.jpg'); background-size: cover; background-position: center -3px;"
            >
              <!-- <img :src="require('~/static/images/Mayor12 – 10.jpg')" alt=""> -->
              <img
                :src="selected_department.img"
                alt=""
              >
              <!--leader pic-->
            </div>
            <div class="wt-content">
              <div class="wtc-inner">
                <h4>{{ 'Welcome to the '+selected_department.title }}</h4>
                <span
                  v-if="selected_department.welcome"
                  style="color:white"
                  v-html="selected_department.welcome"
                ></span>
                <span v-else>No data yet</span>
                <!--panhumalatag-->
                <!-- <p>
                              Welcome to the official website of the City Government of Calbayog!
                              </p>
                              <br>
                              <p>
                              Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                              </p>
                              <div class="hid-message-welcome" :class="{animate : showWelcomeMesDept}">
                                  <p>
                                      Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                                  </p>
                                  <p>
                                      Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                                  </p>
                              </div> -->
              </div>
              <!-- <button class="read-more" @click="readMoreWelcome" :class="{animate : showWelcomeMesDept}">READ MORE</button> -->
            </div>
          </div>
          <div class="mobile-wt-wrapper">
            <div
              class="img-holder"
              style=" background-image: url('/images/bg-logo.jpg'); background-size: cover; background-position: center -3px;"
            >
              <!-- <img
                :src="require('~/static/images/Mayor12 – 10.jpg')"
                alt=""
              > -->
              <img
                :src="selected_department.img"
                alt=""
              >
            </div>
            <div class="wtc-inner">
              <h4>{{ 'Welcome to the '+selected_department.title }}</h4>
              <span
                style="color:white"
                v-html="selected_department.welcome"
              ></span>
              <!-- <div
                class="hid-message-welcome"
                :class="{animate : showWelcomeMesDept}"
              >
                <p>
                  Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                </p>
                <p>
                  Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                </p>
              </div> -->
            </div>
            <!-- <button
              class="read-more"
              @click="readMoreWelcome"
              :class="{animate : showWelcomeMesDept}"
            >READ MORE</button> -->
          </div>
        </div>
      </div>
      <div
        class="city-news-section"
        id="dept-sp-desc"
      >
        <div class="container dept-sp-con">
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
          </a>
        </div>
      </div>
      <div
        class="news-single-wrapper"
        id="accomp"
        v-if="selected_activity.title != ''"
      >
        <div class="container">
          <div class="title-search-wrapper">
            <h3>Activity Post</h3>
          </div>
          <div class="nsp-content">
            <div
              class="full-img"
              @click="jobsModal(selected_activity)"
            >
              <!-- <img
                :src="require('~/static/images/300819481_120140560796856_1936510054696472107_n.png')"
                @click="jobsModal"
              > -->
              <img :src="selected_activity.cover">
            </div>
            <!-- <div class="grid-img">
              <div class="nsp-imgs">
                <img
                  :src="require('~/static/images/301651196_120137000797212_6510033162591886582_n.png')"
                  @click="jobsModal"
                >
              </div>
              <div class="nsp-imgs">
                <img
                  :src="require('~/static/images/301170044_120137067463872_2606454796904951662_n.png')"
                  @click="jobsModal"
                >
              </div>
              <div class="nsp-imgs">
                <img
                  :src="require('~/static/images/299932715_120137040797208_2127528906162976991_n.png')"
                  @click="jobsModal"
                >
                <p
                  class="more-img-jobs"
                  @click="jobsModal"
                >25+</p>
              </div>
            </div> -->
            <div class="nsp-articles">
              <div
                class="desc"
                v-html="selected_activity.description"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="news-single-wrapper"
        id="accomp"
        v-else
      >
        <div class="container">
          <div class="title-search-wrapper">
            <h3>No Activity Post</h3>
          </div>

        </div>
      </div>
    </div>
    <div class="mandate-section">
      <div class="container">
        <h4 class="title">Programs and Accomplishments</h4>
        <div
          v-if="selected_programs"
          class="mandate-gal"
          id="manadte-scroll"
        >
          <div
            class="img-gal-wrapper"
            v-for="(item, index) in selected_programs"
            :key="index"
            @click="programmesModal(item)"
          >
            <img :src="item.img">
            <p class="title-m">{{item.title}}</p>
          </div>
        </div>
        <div v-else>On development</div>
      </div>
    </div>
    <div class="mission-section mission-visons-sections">
      <div class="container">
        <div class="right-content text-content">
          <div class="inner-r-con">
            <h5 class="title">
              Our Mission
            </h5>
            <div class="content">
              <p>{{ selected_department.mission ?selected_department.mission : 'No data yet' }}</p>
            </div>
          </div>
        </div>
        <div class="left-content gallery-content">
          <div class="left-gallery">
            <div
              class="img-wrapper"
              v-for="(img, index) in galleryMisiion"
              :key="index"
            >
              <img
                :src="img.url"
                class="about-gallery-imgs"
                @click="getImg(img.url)"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vision-section mission-visons-sections">
      <div class="container">
        <div class="right-content gallery-content">
          <div class="left-gallery">
            <div
              class="img-wrapper"
              v-for="(img, index) in galleryMisiion"
              :key="index"
            >
              <img
                :src="img.url"
                :alt="img.title"
                class="about-gallery-imgs"
                @click="getImg(img.url)"
              >
            </div>
          </div>
        </div>
        <div class="left-content text-content">
          <div class="inner-r-con">
            <h5 class="title">
              Our Vision
            </h5>
            <div class="content">
              <p>{{ selected_department.vision ? selected_department.vision : 'No data yet' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="official-section">
      <div class="container">
        <h4 class="title">
          Department Employees
        </h4>
        <!-- <div class="officials-wrapper">
                  <VueSlickCarousel v-bind="sliderSettings" class="officials-slider">
                      <div class="official" v-for="(official, index) in officials" :key="index" @click="officialShowPopup(index)" :id="index">
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
              </div> -->
        <!-- <div
          class="officials-wrapper"
            v-if="selected_department.employees"
          >
          <VueSlickCarousel
          v-bind="sliderSettings"
            class="officials-slider"
          >
            <div
              class="official"
              v-for="(official, index) in selected_department.employees"
              :key="index"
              @click="officialShowPopup(index)"
              :id="index"
            >
              <v-avatar
                class="profile"
                height="117"
                width="117"
                rounded="true"
              >
                <img :src="official.img">
              </v-avatar>
              <div class="name-and-position">
                <p>{{official.img ? 'Employee': 'No data yet' }}</p>
                <v-divider class="line"></v-divider>
                <span>{{official.position ?? ''}}</span>
              </div>
            </div>
          </VueSlickCarousel>
        </div> -->
        <div
          class="image-banner-employee"
          v-for="(allemp, index) in selected_department.allEmp"
          :key="index"
        >
          <img
            style="margin-bottom: 10px"
            :src="allemp.allinImg"
          >
        </div>
      </div>
    </div>
    <modal
      name="jobsModal"
      width="100%"
      height="100%"
    >
      <div class="newspopup">
        <div class="images-slider">
          <v-carousel class="news-slider-img">
            <v-carousel-item
              v-for="(item,i) in activity_modal"
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
              Activity Post
            </h3>
          </div>
          <div class="news-modal-content">
            <div class="news-description">
              <span v-html="activity_modal_desc">
              </span>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <modal
      name="progModal"
      width="100%"
      height="100%"
    >
      <div
        class="newspopup"
        id="idmo"
      >
        <div class="images-slider">
          <v-carousel
            class="news-slider-img"
            v-bind="progslider"
          >
            <v-carousel-item
              v-for="(item,i) in programs_clicked_item"
              :key="i"
              :src="item.img"
            ></v-carousel-item>
          </v-carousel>
        </div>
        <div class="right-content">
          <div class="close">
            <v-icon
              @click="closeProgrammesModal"
              class="x-close"
            >mdi-close</v-icon>
          </div>
          <div class="title-close-wrapper">
            <h3 class="title">
              Programs and Accomplishment
            </h3>
          </div>
          <div class="news-modal-content">
            <div class="news-description">
              <span v-html="programs_clicked_item_description"></span>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <modal
      name="imgpop"
      width="600px"
      height="600px"
    >
      <div class="imagepop">
        <img :src="imgUrl">
      </div>
    </modal>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import department_datas from "~/components/json/department/departments.json";
import department_programs_accomplishments from "~/components/json/department/programs_accomplishment.json";
import activity_post2 from "~/components/json/department/activity_post2.json";
import officials_data from "~/components/json/officials.json";
export default {
  name: "About",
  layouts: "default",
  components: { VueSlickCarousel },
  // async asyncData({ $axios }) {
  //   const ip = await $axios.$get(
  //     "https://gist.githubusercontent.com/letsclode/139c94dccc0dab994c243cfb9bb411bf/raw/3213c47176402fc2c6b25c9cdb31daf208f6f830/departments.json"
  //   );

  //   const ip2 = await $axios.$get(
  //     "https://gist.githubusercontent.com/letsclode/73378e946e223814e018ea91a1013b6f/raw/3861d7bf6982a2e1a73a43e2b17525b15ec7a288/programs.json"
  //   );

  //   const ip3 = await $axios.$get(
  //     "https://gist.githubusercontent.com/letsclode/130811607f5377fc4392b4232c1083c9/raw/d5a6a84d405fe711f81ceaa6acfa523427d1dac4/activity.json"
  //   );
  //   return { departments: ip, department_programs: ip2, activity_post: ip3 };
  // },

  data() {
    return {
      departments: department_datas,
      department_programs: department_programs_accomplishments,
      activity_post: activity_post2,
      officialIndex: "",
      showWelcomeMesDept: false,
      imgUrl: "",
      galleryMisiion: [
        {
          title: "img1",
          url: "/images/about1.png",
        },
        {
          title: "img2",
          url: "/images/about2.png",
        },
        {
          title: "img3",
          url: "/images/about3.png",
        },
      ],
      jobs: [
        {
          title: "img1",
          img: "/images/300819481_120140560796856_1936510054696472107_n.png",
        },
        {
          title: "img2",
          img: "/images/301651196_120137000797212_6510033162591886582_n.png",
        },
        {
          title: "img3",
          img: "/images/301170044_120137067463872_2606454796904951662_n.png",
        },
        {
          title: "img4",
          img: "/images/299932715_120137040797208_2127528906162976991_n.png",
        },
        {
          title: "img5",
          img: "/images/301170044_120137067463872_2606454796904951662_n.png",
        },
      ],
      officials: officials_data,
      servicesArray: [
        {
          url: "https://www.bir.gov.ph/",
          icon: "/images/Bureau_of_Internal_Revenue_(BIR).svg.png",
        },
        { url: "https://www.prc.gov.ph/", icon: "/images/g7646.png" },
        {
          url: "https://www.gsis.gov.ph/",
          icon: "/images/Government_Service_Insurance_System_(Philippines)_(logo).svg.png",
        },
        {
          url: "http://www.csc.gov.ph/",
          icon: "/images/Civil_Service_Commission.svg.png",
        },
        { url: "https://www.sss.gov.ph/", icon: "/images/sss-logo-medium.png" },
        {
          url: "https://www.philhealth.gov.ph/",
          icon: "/images/Www.philhealth.gov.ph.png",
        },
      ],
      mandates: [
        { img: "/images/about1.png", title: "Sample title" },
        { img: "/images/about2.png", title: "Sample title" },
        { img: "/images/news5.png", title: "Sample title" },
        { img: "/images/news4.png", title: "Sample title" },
        { img: "/images/news3.png", title: "Sample title" },
        { img: "/images/news2.png", title: "Sample title" },
        { img: "/images/news1.png", title: "Sample title" },
        { img: "/images/mutyahansamar2019.png", title: "Sample title" },
        { img: "/images/Civic-Parade1.png", title: "Sample title" },
      ],
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
            breakpoint: 500,
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
        ],
      },
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
      progslider: {
        dots: false,
        arrows: false,
      },
      selected_department: {},
      selected_programs: [],
      programs_clicked_item: [],
      programs_clicked_item_description: "",
      selected_activity: {},
      activity_modal: [],
      activity_modal_desc: [],
    };
  },
  mounted() {
    this.filterDepartments();
    this.filterPrograms();
    this.filterActivities();
  },
  methods: {
    // getImg(val){
    //     this.$modal.show('imgpop');
    // },
    officialShowPopup(index) {
      // this.$modal.show('officialModal');
    },
    readMoreWelcome() {
      this.showWelcomeMesDept = !this.showWelcomeMesDept;
    },
    jobsModal(val) {
      this.activity_modal = [];
      this.activity_modal = val.images;
      this.activity_modal_desc = val.description;
      console.log(this.activity_modal, "test");
      this.$modal.show("jobsModal");
    },
    closeNewsModal() {
      this.$modal.hide("jobsModal");
    },
    programmesModal(val) {
      this.programs_clicked_item = [];
      this.programs_clicked_item.push(val);
      this.programs_clicked_item_description = val.description;
      console.log(this.programs_clicked_item, "test");
      this.$modal.show("progModal");
    },
    // programmesModal() {
    //   this.$modal.show("progModal");
    // },
    closeProgrammesModal() {
      this.$modal.hide("progModal");
    },
    getImg(url) {
      this.imgUrl = url;
      this.$modal.show("imgpop");
    },
    filterDepartments() {
      this.departments.forEach((department) => {
        if (department.tag == this.$route.params.id) {
          this.selected_department = department;
          console.log(this.selected_department, "department");
        }
      });
    },
    filterPrograms() {
      this.selected_programs = this.department_programs.filter((x) => {
        if (x.tag == this.$route.params.id) return x;
      });
      console.log(this.selected_programs, "programs");
    },
    filterActivities() {
      this.activity_post.forEach((activity_post) => {
        if (activity_post.tag == this.$route.params.id) {
          this.selected_activity = activity_post;
          console.log(this.selected_activity, "activiies");
        }
      });
    },
  },
};
</script>

<style scoped>
#idmo .images-slider .news-slider-img .v-window__container .v-window__prev {
  display: none !important;
}
</style>