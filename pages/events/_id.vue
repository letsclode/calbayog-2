<template>
    <div class="news-single-wrapper">
        <div class="container">
            <div class="title-search-wrapper">
                <h3>SEPTEMBER</h3>
                <form action="#">
                    <div class="search-wrapper">
                        <button type="submit">
                            <img :src="require('~/static/images/Icon-search.png')">
                        </button>
                        <input type="text" class="search-input">
                    </div>
                </form>
            </div>
            <div class="nsp-content">
                <div class="full-img" id="events-sp-img">
                    <img :src="require('~/static/images/sept.png')">
                </div>
                <div class="nsp-articles">
                    <div class="desc">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                 
            </div>
            <div class="next-prev-w" id="events-sp-nextprev">
                <v-btn elevation="1" class="n-slider-btn"><span class="mdi mdi-chevron-left"></span></v-btn>
                <v-btn elevation="1" class="n-slider-btn"><span class="mdi mdi-chevron-right"></span></v-btn>
            </div>
        </div>
    </div>
</template>