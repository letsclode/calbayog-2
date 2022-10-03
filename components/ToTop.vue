<template>
    <div class="tothetop" :class="{showMe : displayTop}">
        <v-btn
            class="btn-topup"
            elevation="8"
            fab
            small
            outlined
            raised
            @click="toTopScroll"
        >
            <span class="mdi mdi-arrow-up-circle"></span>
        </v-btn>
    </div>
</template>
<script>
    export default{
        data (){
            return{
                displayTop: false,
            }
        },
        mounted() {
            window.addEventListener("scroll", this.onScroll)
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.onScroll)
        },
        methods:{
            onScroll(e) {
            this.windowTop = window.top.scrollY
                if(this.windowTop >= 1150){
                    this.displayTop = true;
                }else{
                    this.displayTop = false;
                }
            },
            toTopScroll(){
                var element = window.top;
                var top = element.offsetTop;
                window.scrollTo(0, top);
            }
        }
    }
</script>