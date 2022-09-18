<template>
    <div class="footer">
        <div class="top-footer">
            <div class="overlay">
                <div class="container newsletter-wrapper">
                    <h3>Receive our newsletter</h3>
                    <p>
                        Subscribe to our newsletter and be informed, before everyone else, of our news, promotions and favorites.
                    </p>
                    <div class="email-wrapper">
                        <form>
                            <div class="input-wrapper">
                                <div class="input-and-icon">
                                    <input type="email" placeholder="Email">
                                    <span class="email-icon">
                                        <img :src="require('~/static/images/ic-contact-mail.png')" >
                                        <!-- <span class="mdi mdi-email-outline"></span> -->
                                    </span>
                                </div>
                                <button type="submit" class="newsletter-btn">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="mid-footer">
            <div class="container">
                <div class="midf-content">
                    <div class="m-content logo">
                        <img :src="require('~/static/images/City_seal.png')" alt="">
                        <!-- <p>Calbayog city</p> -->
                    </div>
                    <div class="m-content fm1">
                        <div class="info-content">
                            <a href="#">Méditerranée International, marque Famous</a>
                            <a href="#">10 Rue Pierre Curie 93120 La courneuve France</a>
                            <a href="#">01 48 11 98 82</a>
                            <a href="#">commercial@famous-tm.com</a>
                        </div>
                    </div>
                    <div class="m-content fm2">
                        <h6>INFORMATION</h6>
                        <div class="info-content">
                            <a href="#">Legal Mentions</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Mediterranée International</a>
                        </div>
                    </div>
                    <div class="m-content fm3">
                        <h6>MENU'S</h6>
                        <div class="info-content">
                            <a href="#">Collection </a>
                            <a href="#">Offres Du Mois</a>
                            <a href="#">PRÉCOMMANDES</a>
                        </div>
                    </div>
                    <div class="m-content fm4">
                        <div class="info-content">
                            <a href="#">Collection </a>
                            <a href="#">Offres Du Mois</a>
                            <a href="#">PRÉCOMMANDES</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-footer">
            <div class="container bf-inner">
                <a href="#">Calbayogcity.gov.ph</a>
                <div class="social-icons">
                    <a class="social-item" href="#">
                        <img :src="require('~/static/images/fb.png')" alt="">
                    </a>
                    <a class="social-item" href="#">
                        <img :src="require('~/static/images/twitter.png')" alt="">
                    </a>
                    <a class="social-item" href="#">
                        <img :src="require('~/static/images/ig.png')" alt="">
                    </a>
                    <a class="social-item" href="#">
                        <img :src="require('~/static/images/youtube.png')" alt="">
                    </a>
                    <a class="social-item" href="#">
                        <img :src="require('~/static/images/linkedin.png')" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>