<template>
    <div>
        <!-- <div class="search-bar-section">
            <div class="container">
                <form action="#" class="search-bar">
                    <div class="sb-wrapper">
                        <button type="submit">
                            <img :src="require('~/static/images/icon-search.png')">
                        </button>
                        <input type="text" class="search-dept-input">
                    </div>
                </form>
            </div>
        </div> -->
        <div class="dept-section">
            <div class="container">
                <div class="dept-wrapper">
                    <div class="dept-info" v-for="(dept, index) in departments" :key="index">
                        <div class="inner-info">
                            <div class="dept-logo">
                                <img :src="dept.logo" :alt="dept.title">
                            </div>
                            <div class="dept-content">
                                <p class="dept-title">{{dept.title}}</p>
                                <p class="oic">{{dept.oic}}</p>
                                <v-divider></v-divider>
                                <span class="position">{{dept.position}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'About',
        layouts: 'default',
        data () {
            return {
                departments:[
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Mayors Office',
                        oic: 'Raymund C. Uy',
                        position: 'CITY MAYOR',
                        logo: '/images/City_seal.png',
                    },
                ]
            }
        }      
    }
    </script>