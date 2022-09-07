<template>
    <div class="header-wrapper">
        <div class="top-header">
            <div class="container logo-and-title">
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
                            <a href="#">events</a>
                        </div>
                        <div class="nav-items">
                            <a href="#">BARANGAYs</a>
                        </div>
                        <div class="nav-items">
                            <a href="#">pages</a>
                        </div>
                        <div class="nav-items">
                            <a href="#">contact</a>
                        </div>
                        <div class="nav-items" id="h-search-bar">
                            <form action="#">
                                <div class="search-wrapper">
                                    <button type="submit">
                                        <img :src="require('~/static/images/icon-search.png')">
                                    </button>
                                    <input type="text" class="search-input">
                                </div>
                            </form>
                        </div>
                    </nav>
            </div>
        </div>
    </div>
</template>

