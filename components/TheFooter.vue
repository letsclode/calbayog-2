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
        <div class="mid-footer" >
            <div class="container">
                <div class="midf-content">
                    <div class="m-content logo">
                        <img :src="require('~/static/images/City_seal.png')" alt="">
                        <!-- <p>Calbayog city</p> -->
                    </div>
                    <div class="m-content fm1">
                        <div class="info-content">
                            <p>Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.</p>
                        </div>
                    </div>
                    <div class="m-content fm2">
                        <h6>Contact / Address</h6>
                        <div class="info-content">
                            <a href="#">Calbayog City, Western Samar</a>
                            <a href="#">JD. Avelino St. Calbayog City</a>
                            <a href="#">09- 261-954-254</a>
                            <a href="#">lgucalbayog@gmail.com</a>
                        </div>
                    </div>
                    <div class="m-content fm3">
                        <h6>MENU'S</h6>
                        <div class="info-content menu-footer">
                           <div class="col1-info">
                            <NuxtLink to="/">Home</NuxtLink>
                            <NuxtLink to="/about">About</NuxtLink>
                            <NuxtLink to="/departments">Departments</NuxtLink>
                           </div>
                           <div class="col1-info">
                            <NuxtLink to="/news">News</NuxtLink>
                            <a href="#">Page</a>
                            <NuxtLink to="/contact">contact</NuxtLink>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-footer">
            <div class="container bf-inner">
                <a href="#">Calbayogcity.gov.ph</a>
                <div class="social-icons">
                    <a class="social-item" href="https://www.facebook.com/" target="_blank">
                        <img :src="require('~/static/images/fb.png')" alt="">
                    </a>
                    <a class="social-item" href="https://twitter.com/" target="_blank">
                        <img :src="require('~/static/images/twitter.png')" alt="">
                    </a>
                    <a class="social-item" href="https://www.instagram.com/" target="_blank">
                        <img :src="require('~/static/images/ig.png')" alt="">
                    </a>
                    <a class="social-item" href="https://www.youtube.com/" target="_blank">
                        <img :src="require('~/static/images/youtube.png')" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        // data () {
        //     return {
        //        hid: false,
        //     }
        // },
        // mounted() {
        //     if(this.$route.path == '/contact'){
        //         this.hid = true;
        //     }
        // },
    }
</script>