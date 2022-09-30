<template>
    <div class="contact-section">
        <div class="container">
            <div class="cs-row">
                <h2 class="cs-title">Contact Us</h2>
                <div class="contact-infos">
                    <div class="address">
                        <span class="mdi mdi-map-marker-radius-outline"></span>
                        <h6>Address:</h6>
                        <p>JD. Avelino St. Calbayog City, Western Samar</p>
                    </div>
                    <div class="phone">
                        <span class="mdi mdi-phone-outline"></span>
                        <h6>Phone:</h6>
                        <p>09- 261-954-254</p>
                    </div>
                    <div class="email">
                        <span class="mdi mdi-email-outline"></span>
                        <h6>Email:</h6>
                        <p>lgucalbayog@gmail.com</p>
                    </div>
                </div>
                <div class="contact-forms">
                    <h2 class="cs-title">Get in touch with us</h2>
                    <div class="cf-form">
                        <template>
                            <v-form
                                class="form-message"
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >
                                <v-text-field
                                v-model="name"
                                :rules="nameRules"
                                label="Name"
                                required
                                ></v-text-field>

                                <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                                ></v-text-field>

                                <v-text-field
                                v-model="subject"
                                :rules="subjectRules"
                                label="Subject"
                                required
                                ></v-text-field>
                                <v-textarea
                                label="Message"
                                ></v-textarea>
                                <v-btn
                                class="send-btn"
                                type="submit"
                                >
                                Send Message
                                </v-btn>
                            </v-form>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        // data () {
        //     return {
        //        hid: 'false',
        //     }
        // },
        // mounted() {
        //     if(this.$route.path == '/contact'){
        //         this.hid = 'true'
        //     }
        // }
    }
</script>