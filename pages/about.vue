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
                            <p>The office of the mayor is tasked with promoting the general welfare of the city and its
constituents the efficient, effective, relevant and economical governance. It exercises general
supervision and control over all programs, projects, services and activities of the City
Government which aims to put emphasis on prioritizing the citizens&#39; needs at the core of the
development agenda. &quot;Tao ang una&quot;. The office serves as the coordinating body which goal is to
maximize the generation of resources and revenues and apply the same to the effective
implementation of development plans, programs, objectives and priorities to ensure</p>
                        </div>
                    </div>
                </div>
                <div class="left-content gallery-content">
                    <div class="left-gallery">
                        <div class="img-wrapper" v-for="(img, index) in galleryMisiion" :key="index">
                            <img :src="img.url" :alt="img.title"  class="about-gallery-imgs"  @click="getImg(img.url)">
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
                            <img :src="img.url" :alt="img.title"  class="about-gallery-imgs" @click="getImg(img.url)">
                        </div>
                    </div>
                </div>
                <div class="left-content text-content">
                    <div class="inner-r-con">
                        <h5 class="title">
                            Our Vision
                        </h5>
                        <div class="content">
                            <p>Good Governance, Better Quality life for empowered God Loving citizens and Private-
Public partnership for a sustainable economic development, entrepreneurship and self-reliance.</p>
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
                <img :src="imgUrl">
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
                    id: 1,
                    url: '/images/about1.png',
                },
                {
                    title: 'img2',
                    id: 2,
                    url: '/images/about2.png',
                },
                {
                    title: 'img3',
                    id: 3,
                    url: '/images/about3.png',
                }
            ],
            imgUrl:'',
        }
    },
    methods:{
        getImg(url){
           this.imgUrl = url
            this.$modal.show('imgpop');
        },  
       
    }      
}
</script>