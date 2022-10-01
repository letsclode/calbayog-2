<template>
    <div class="header-wrapper">
        <div class="top-header">
            <div class="container logo-and-title">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="nav-burger"></v-app-bar-nav-icon>
                <v-navigation-drawer
                v-model="drawer"
                absolute
                left
                temporary
                class="list-mobile-nav"
                >
                <nav class="navigation">
                        <div class="nav-items">
                            <NuxtLink to="/">Home</NuxtLink>
                        </div>
                        <div class="nav-items">
                            <NuxtLink to="/about">About</NuxtLink>
                        </div>
                        <div class="nav-items">
                            <NuxtLink to="/departments">Departments</NuxtLink>
                        </div>
                        <div class="nav-items">
                            <NuxtLink to="/news">News</NuxtLink>
                        </div>
                        <div class="nav-items">
                            <NuxtLink to="/fb">Facebook Pages</NuxtLink>
                        </div>
                        <div class="nav-items">
                            <NuxtLink to="/contact">contact</NuxtLink>
                        </div>
                </nav>
                </v-navigation-drawer>
                <div class="logo">
                    <img :src="require('~/static/images/City_seal.png')" alt="City Official Seal">
                </div>
                <div class="header-title">
                    <h2>Republic of the Philippines</h2>
                    <hr>
                    <h1>CITY GOVERNMENT OF CALBAYOG</h1>
                    <p>Province of Samar</p>
                </div>
            </div>
        </div>
        <div class="bottom-header">
            <div class="container nav-wrapper">
                <nav class="navigation">
                        <div class="nav-items">
                            <NuxtLink to="/">Home</NuxtLink>
                        </div>
                        <div class="nav-items">
                            <NuxtLink to="/about">About</NuxtLink>
                        </div>
                        <div class="nav-items">
                            <NuxtLink to="/departments">Departments</NuxtLink>
                        </div>
                        <div class="nav-items">
                            <NuxtLink to="/news">News</NuxtLink>
                        </div>
                        <div class="nav-items">
                            <NuxtLink to="/fb">Facebook Pages</NuxtLink>
                        </div>
                        <div class="nav-items">
                            <NuxtLink to="/contact">contact</NuxtLink>
                        </div>
                        <div class="nav-items" id="h-search-bar">
                            <form action="news/_id">
                                <div class="search-wrapper">
                                    <button type="submit">
                                        <img :src="require('~/static/images/Icon-search.png')">
                                    </button>
                                    <!-- <input type="text" class="search-input" placeholder="Search for News, Events and Departments"> -->
                              
                                </div>
                            </form>
                            <button class="search-btn-nav" @click="showSearch()">
                                <img :src="require('~/static/images/Icon-search.png')">
                            </button>
                        </div>
                </nav>
            </div>
        </div>
        <transition name="fade">
        <div class="search-bar-wrapper" v-if="showSearchform">
            <div class="container">
                <div class="search-wrapper">
                        <div class="close-search-form">
                            <span class="mdi mdi-close-thick" @click="showSearch()"></span>
                        </div>
                        <v-app class="search-form">
                            <form action="news/_id">
                                <!-- <input type="text" class="search-bar-input" placeholder="Search for News, Events and Departments"> -->
                                <v-autocomplete
                                    v-model="value"
                                    :items="items"
                                    class="search-bar-input"
                                    placeholder="Search for News, Events and Departments"
                                ></v-autocomplete>
                                <button class="search-btn"> 
                                    <img :src="require('~/static/images/Icon-search.png')">
                                </button>
                            </form>
                        </v-app>
                </div>
            </div>
        </div>
        </transition>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        showSearchform: false,
        drawer: false,
        group: null,
        items: ['Graduation Ceremony', 'September Activities', 'BPLO', 'City Mayors Office'],
        value: null,
      }
    },
    watch: {
      group () {
        this.drawer = false
      },
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods:{
        showSearch(){
            this.showSearchform = !this.showSearchform;
        },
        querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    }
  }
</script>
<style>
    .page-enter-active,
    .page-leave-active {
      transition: opacity 0.5s;
    }
    .page-enter,
    .page-leave-to {
      opacity: 0;
    }
    .layout-enter-active,
    .layout-leave-active {
      transition: opacity 0.5s;
    }
    .layout-enter,
    .layout-leave-to {
      opacity: 0;
    }
    a.nuxt-link-exact-active {
      color: #00c58e;
    }
    
    </style>