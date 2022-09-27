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
                            <a href="#">pages</a>
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
                            <a href="#">pages</a>
                        </div>
                        <div class="nav-items">
                            <NuxtLink to="/contact">contact</NuxtLink>
                        </div>
                        <div class="nav-items" id="h-search-bar">
                            <form action="#">
                                <div class="search-wrapper">
                                    <button type="submit">
                                        <img :src="require('~/static/images/icon-search.png')">
                                    </button>
                                    <input type="text" class="search-input" placeholder="Search for News, Events and Departments">
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
                        <div class="search-form">
                            <form action="#">
                                <input type="text" class="search-bar-input" placeholder="Search for News, Events and Departments">
                                <button class="search-btn"> 
                                    <!-- <img :src="require('~/static/images/icon-search.png')"> -->
                                </button>
                            </form>
                        </div>
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
      }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
    methods:{
        showSearch(){
            this.showSearchform = !this.showSearchform;
        }
    }
  }
</script>
