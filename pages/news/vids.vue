<template>
    <div class="news-single-wrapper">
        <div class="container">
            <div class="title-search-wrapper">
                <h3>Activities Post</h3>
                <form action="#">
                    <div class="search-wrapper">
                        <button type="submit">
                            <img :src="require('~/static/images/Icon-search.png')">
                        </button>
                        <input type="text" class="search-input">
                    </div>
                </form>
            </div>
            <div class="nsp-content" id="vid-sp">
                <div class="news-vid-wrapper">
                    <div class="full-img">
                        <img :src="require('~/static/images/Mask Group 2.png')">
                    </div>
                    <div class="nsp-articles">
                        <div class="header">
                            <h5 class="title">Graduation Cerimony</h5>
                            <p class="date">15 JULY, 2022</p>
                        </div>
                        <div class="desc">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            </p>
                        </div>
                    </div>
                </div>
                <div class="grid-img">
                    <div class="nsp-imgs">
                        <img :src="require('~/static/images/news2.png')">
                    </div>
                    <div class="nsp-imgs">
                        <img :src="require('~/static/images/news3.png')">
                    </div>
                    <div class="nsp-imgs">
                        <img :src="require('~/static/images/news4.png')">
                    </div>
                    <div class="nsp-imgs">
                        <img :src="require('~/static/images/news4.png')">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>