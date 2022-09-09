<template>
    <div>
        
        <div class="about-section">
            <div class="container">
                <h4 class="title">
                    About Us
                </h4>
                <div class="desc">
                    <p>
                        Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.
                    </p>
                </div>
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
                            <p>Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.</p>
                        </div>
                    </div>
                </div>
                <div class="left-content gallery-content">
                    <div class="left-gallery">
                        <div class="img-wrapper" v-for="(img, index) in galleryMisiion" :key="index">
                            <img :src="img.img" :alt="img.title"  class="about-gallery-imgs">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vision-section mission-visons-sections">
            <div class="container">
                <div class="right-content gallery-content">
                    <div class="left-gallery">
                        <div class="img-wrapper" v-for="(img, index) in galleryMisiion" :key="index">
                            <img :src="img.img" :alt="img.title"  class="about-gallery-imgs" @click="getImg(img.title)">
                        </div>
                    </div>
                </div>
                <div class="left-content text-content">
                    <div class="inner-r-con">
                        <h5 class="title">
                            Our Vision
                        </h5>
                        <div class="content">
                            <p>Our aim to provide transparency and accountability to our constituents and to others who take interest in our beloved City is further extended in this website. As Calbayog consistently delivers good governance and is an emporium of natural attractions, we are indeed dubbed as a City “Where Good Things Happen”.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="official-section">
            <div class="container">
                <h4 class="title" id="about-ocf-title">
                    Our City Officials
                </h4>
                <Officials/>
            </div>
        </div>
        <modal name="imgpop" width="600px" height="600px">
            <div class="imagepop">
                <img :src="require('~/static/images/about1.png')">
            </div>
        </modal>
    </div>
</template>
<script>
export default {
    name: 'About',
    layouts: 'default',
    data () {
        return {
            galleryMisiion:[
                {
                    title: 'img1',
                    img: '/images/about1.png',
                },
                {
                    title: 'img2',
                    img: '/images/about2.png',
                },
                {
                    title: 'img3',
                    img: '/images/about3.png',
                }
            ]
        }
    },
    methods:{
        getImg(val){
            this.$modal.show('imgpop');
        },  
       
    }      
}
</script>