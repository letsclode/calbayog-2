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
                <div class="header">
                    <h4 class="title">Departments</h4>
                    <form action="#">
                        <div class="search-wrapper">
                            <input type="text" class="search-input" placeholder="Search Departments">
                            <button type="submit">
                                <img :src="require('~/static/images/Icon awesome-search.png')">
                            </button>
                        </div>
                    </form>
                </div>
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
                        title: 'City Vice - Mayor Office',
                        oic: 'Rex M. Daguman',
                        position: 'CITY VICE - MAYOR',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Administrator Office',
                        oic: 'Augusto L. Magdaraog, JD',
                        position: 'DEPARTMENT HEAD',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'City Accountant Office',
                        oic: 'Atty. Isagani G. Togonon, CPA',
                        position: 'DEPARTMENT HEAD',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'Assesor`s Office',
                        oic: 'Joselito A. Montealto, JD',
                        position: 'DEPARTMENT HEAD',
                        logo: '/images/City_seal.png',
                    },
                    {
                        title: 'BPLO',
                        oic: 'Leonardo A. Bedio',
                        position: 'DEPARTMENT HEAD',
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