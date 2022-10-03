<template>
  <v-app>
    <div
      class="banner-wrapper small-banner"
      id="about-banner"
    >
      <!-- <img :src="require('~/static/images/Calbayog.png')"  alt=""> -->
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
      <p class="banner-title">Facebook Pages</p>
    </div>
    <div class="dept-section">
      <div class="container">
        <div class="header">
          <h4
            class="title v-app-title"
            style="font-size: 2.25rem !important; font-weight: 700;"
          >Facebook Pages</h4>
          <form action="departments/_id">
            <div class="search-wrapper">
              <!-- <input type="text" class="search-input" placeholder="Search Departments"> -->
              <v-autocomplete
                v-model="value"
                :items="items"
                class="search-autocom"
                dense
                placeholder="Search FB Pages"
              ></v-autocomplete>
              <button type="submit">
                <img :src="require('~/static/images/Icon awesome-search.png')">
              </button>
            </div>
          </form>
        </div>
        <div class="dept-wrapper">
          <div
            class="dept-info fb-info"
            v-for="(fb, index) in fblinks"
            :key="index"
          >
            <a :href="fb.fblink">
              <div class="inner-info">
                <div class="dept-logo">
                  <img
                    :src="fb.logo"
                    :alt="fb.title"
                  >
                </div>
                <div class="dept-content">
                  <p class="dept-title">{{fb.title}}</p>
                  <!-- <p class="oic">{{dept.oic}}</p> -->
                  <v-divider></v-divider>
                  <a
                    :href="fb.fblink"
                    class="position"
                  >{{fb.fblink}}</a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  </v-app>

</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "fb",
  layouts: "default",
  components: { VueSlickCarousel },
  data() {
    return {
      fblinks: [
        {
          title: "City Mayors Office",
          fblink:
            "https://www.facebook.com/people/City-Mayors-Office-Calbayog-City/100083591768956",
          logo: "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/292955720_100527139410467_6836119874521204716_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ED7SO7Yp7e4AX9RWJ6k&_nc_ht=scontent.fceb2-2.fna&oh=00_AT_Wx___tA8vIF53Sqw-ovd9kchk96HJwCc-Q4FXdgCTog&oe=633F3A71",
        },
        {
          title: "Local Civil Registry Office",
          fblink: "https://www.facebook.com/lcrocalbayog",
          logo: "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/306084084_120830067398840_5649011347214634848_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YEYz6suec_gAX_xAeWu&_nc_ht=scontent.fceb2-2.fna&oh=00_AT-1YdoBJOnryj1e6UNVpjyt6kNuLxC_6JHgfAPxwdOQ6A&oe=633F4C95",
        },
        {
          title: "Calbayog Veterinary Office",
          fblink: "https://www.facebook.com/CalbayogVetOffice",
          logo: "/images/facebook-f-logo-2019.png",
        },
        {
          title: "City Health Office",
          fblink: "https://www.facebook.com/chocalbayogcity/",
          logo: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/287375062_109078708507101_4106473563747323583_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pTX6_W2_VP4AX_QlIww&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-1psfNfmwp-optHemIOBFkuPnO-F3ZdZP_C6M1js8aDg&oe=633FDEE2",
        },
        {
          title: "City Arts and Culture Office",
          fblink: "https://www.facebook.com/profile.php?id=100083172827129",
          logo: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/292475718_105720068871675_4282106955873858687_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FbF4QB23RpEAX8-HbG-&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-K3WdGKBsTLownYVK-7gdWKVuqlXJ5H47ge6vTpMalyA&oe=63400A53",
        },
        {
          title: "City Human Resource Management Office",
          fblink: "https://www.facebook.com/chrmocalbayog22",
          logo: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/295105916_101251259352453_2864598862821122362_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Enk2IECy52MAX-Vt7hj&_nc_ht=scontent.fceb2-1.fna&oh=00_AT_IdDKiOMVlgDpf6Eq9tKqeaBCMPSyQKp4sck_nTNYyUg&oe=63400B8E",
        },
        {
          title: "Calbayog City Legal Office",
          fblink: "https://www.facebook.com/profile.php?id=100085352646439",
          logo: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/301772626_110990528404758_5870380231198349473_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HloZrRRtdpUAX-eDW5b&_nc_ht=scontent.fceb2-1.fna&oh=00_AT9q7_uyu0eoT0uRFNohIPld9D9nQNinWHql9QPzS-bydQ&oe=6340A07E",
        },
        {
          title: "Calbayog City Solid Waste Management Office",
          fblink: "https://www.facebook.com/cswmo/",
          logo: "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/282036522_3221640744746401_8865543389040696962_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=e0hQ56McdKIAX9GSgIR&_nc_ht=scontent.fceb2-2.fna&oh=00_AT_fLroyUFfGJ2eDko2AIB14q3Xfo8kjtDlC33EO7LGHPQ&oe=633F9110",
        },
        {
          title: "Calbayog City General Services Office",
          fblink: "https://www.facebook.com/profile.php?id=100064686970248",
          logo: "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/308862075_462793405886888_1151219921990623863_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vtPlBC0yIWIAX8qyEkk&_nc_ht=scontent.fceb2-2.fna&oh=00_AT_KApzwfN-Db1RR6q2U-bdjVeJrgfkpY9duGb7NB-AKEw&oe=63400039",
        },
        {
          title: "Calbayog City Public Library and Tech4ED Center",
          fblink: "https://www.facebook.com/profile.php?id=100068868825858",
          logo: "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/306763774_400290882276536_7087264553207868815_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2AMkv3O4ovsAX_B1j8O&_nc_ht=scontent.fceb2-2.fna&oh=00_AT8gtLzLBnrtJdyVHRaS89wReGY_fAryyxlXJq1s6xbR0w&oe=63409B05",
        },
        {
          title: "Office of the City Accountant",
          fblink: "https://www.facebook.com/ocacalbayog2022/",
          logo: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/294994692_100113406136498_8017456068434225646_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FW10FGQ-XkwAX_0y5S2&_nc_ht=scontent.fceb2-1.fna&oh=00_AT8U2YKrHCK3pfIzvXsOcxxnVi4VmYuflBeuscqfUoGF8A&oe=633F5BD0",
        },
        {
          title: "City Housing Development Office",
          fblink: "https://www.facebook.com/chdo7279/",
          logo: "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/296919193_105540838924570_6386432238821496973_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BC8jqzl-WIYAX-XId-d&_nc_ht=scontent.fceb2-2.fna&oh=00_AT9OsuDaTkPjI4d3wKZVtC2FySaUs1nXGZjAprRhARlUSA&oe=633F1E12",
        },
        {
          title: "City Disaster Risk Reduction and Management Office",
          fblink: "https://www.facebook.com/CDRRMOCalbayogCity",
          logo: "/images/facebook-f-logo-2019.png",
        },
        {
          title: "Calbayog City Environment and Natural Resources Office",
          fblink: "https://www.facebook.com/CityENROfficeCALBAYOG/",
          logo: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/294984917_110385098422049_8857011388558734391_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=j2FFlJaS9XUAX8JPti2&_nc_ht=scontent.fceb2-1.fna&oh=00_AT8419awJEc27IuLqjt12Oryq3zU89PQncPqslUYWRYPng&oe=6340C4AF",
        },
        {
          title: "Calbayog City Drug Abuse Prevention & Rehabilitation Office",
          fblink: "https://www.facebook.com/cdapro2001/",
          logo: "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/295138654_1788077691534252_3421532450285935605_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=noUYDVW2i9UAX9kbWHi&_nc_ht=scontent.fceb2-2.fna&oh=00_AT8W1SKsahXAM9H3zrzfXpI_y--mFRu6krR7RmecTQdrEA&oe=633FCE03",
        },
        {
          title: "Calbayog City Population Office",
          fblink: "https://www.facebook.com/CalbayogCityPopulationOffice/",
          logo: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/276160988_106213382039629_2881620340512268458_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=b1wAsLNJhN4AX9EYGba&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-yQoj5aDRsot7WjYIDKF9ZIfWCLhATlJs_XKD2jTn-hg&oe=633F40AE",
        },
        {
          title: "City Agriculture Office",
          fblink: "https://www.facebook.com/profile.php?id=100076221182504",
          logo: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/306671788_180568281160544_4709073224158492557_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RR2ntS3ckTQAX9nO2YN&_nc_ht=scontent.fceb2-1.fna&oh=00_AT9Jv_W1WtQHpN--ORD445db_NQlgJLIW1uDg4pLq6RYaQ&oe=633F6DE5",
        },
        {
          title: "City Cooperatives Office",
          fblink: "https://www.facebook.com/calbayogcitycoop",
          logo: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/243550590_231855162313860_3226468094669689728_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aNLUYJ8TO_EAX_T-MGc&_nc_ht=scontent.fceb2-1.fna&oh=00_AT8EZNHVtRchzhG0ybMd9sjHe36dGEQmvqT3VgFoQatWeQ&oe=634077F8",
        },
        {
          title: "Calbayog City Nutrition Council",
          fblink: "https://www.facebook.com/CalbayogCNC",
          logo: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/243027320_162911592681143_6671997828696323685_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PVeGJfX2hscAX8xlOaY&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-BaPYcRB30HteJn01LViAGE7Jp3hRykpgEBXjdRN3GsQ&oe=633FAECC",
        },
        {
          title: "Calbayog Sangguniang Panlungsod",
          fblink:
            "https://scontent.fceb2-1.fna.fbcdn.net/v/t1.18169-9/10639714_274422119424344_978357608409355447_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rR0Y1gALphIAX_0IMT0&_nc_ht=scontent.fceb2-1.fna&oh=00_AT9wafP8vTf9dSi4q1hle__JkkPX0NbhjcnYUkr3am56pw&oe=635F34B1",
          logo: "/images/facebook-f-logo-2019.png",
        },
      ],
      items: [
        "City Mayors Office",
        "City Vice - Mayor Office",
        "City Administrator Office",
        "City Accountant Office",
        "Assesor`s Office",
        "BPLO",
      ],
      value: null,
      headerCarousel: [
        { title: "Cathedral", img: "/images/Calbayog.png" },
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
    };
  },
};
</script>