<template>
    <div>
        <!-- Full background -->
        <v-img
            class="full-height-vh white--text"
            src="@/assets/background.jpg"
        >
            <div v-if="!loading">
                <!-- Logo -->
                <transition
                    appear
                    :appear-active-class="mobile? 'bounceInLeft' : 'flipInX'"
                >
                    <div>
                        <img :class="`logo ${logoClass}`" src="@/assets/dm.svg">

                    </div>
                </transition>

                <!-- Avatar, social media & name -->
                <v-container fluid>
                    <v-row
                        class="full-height-vh"
                        align="center"
                        justify="center"
                    >
                        <v-col cols="12" md="5" lg="4">
                            
                            <div :class="avatarClass">
                                <!-- Avatar -->
                                <transition
                                    appear
                                    :appear-active-class="mobile? 'zoomIn' : 'flipInY'"
                                >
                                    <v-avatar
                                        :size="!mobile ? '250px' : '170px'"
                                        class="elevation-1 pa-2"
                                    >
                                        <img src="@/assets/me.jpg" alt="Daniel Molina" />
                                    </v-avatar>
                                </transition>
                                <!-- Social Media -->
                                <transition
                                    appear
                                    :appear-active-class="mobile? 'flipInX' : 'flipInY'"
                                >
                                    <div :class="`pa-2 ${!mobile ? 'ml-5' : ''}`">
                                        <div
                                            :class="`full-height-percentage d-flex ${mobile ? 'flex-row' : 'flex-column'} justify-center`"
                                        >
                                            <!-- Linked In -->
                                            <v-btn
                                                fab
                                                small
                                                dark
                                                class="pa-2 ma-2"
                                                color="blue darken-4"
                                                href="https://www.linkedin.com/in/daniel-molina-469668194/"
                                                target="_blank"
                                            >
                                                <v-icon>mdi-linkedin</v-icon>
                                            </v-btn>
                                            <!-- GitHub -->
                                            <v-btn
                                                fab
                                                small
                                                dark
                                                class="pa-2 ma-2"
                                                color="blue-grey darken-4"
                                                href="https://github.com/danielmnv"
                                                target="_blank"
                                            >
                                                <v-icon>mdi-github</v-icon>
                                            </v-btn>
                                            <!-- Gmail -->
                                            <v-btn
                                                fab
                                                small
                                                dark
                                                class="pa-2 ma-2"
                                                color="red"
                                                href="mailto:danmnvx@gmail.com"
                                                target="_blank"
                                            >
                                                <v-icon>mdi-gmail</v-icon>
                                            </v-btn>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </v-col>

                        <!-- Name -->
                        <v-col cols="12" md="7" lg="8">
                            <transition
                                appear
                                :appear-active-class="mobile? 'bounceInUp' : 'bounceInRight'"
                            >
                                <p id="myName" class="text-center">Daniel Molina</p>
                            </transition>
                        </v-col>
                    </v-row>
                </v-container>

            </div>
        </v-img>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data: () => ({
        loading: true
    }),

    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 500);
    },

    computed: {
        // Is mobile or not
        mobile() {
            return this.$vuetify.breakpoint.smAndDown;
        },

        // Class for logo
        logoClass() {
            if (this.$vuetify.breakpoint.lgAndUp)
                return 'logoDesktop';
            else if (this.$vuetify.breakpoint.mdOnly)
                return 'logoTablet';
            
            return 'logoMobile';
        },

        // Class for avatar space
        avatarClass() {
            if (!this.mobile)
                return "d-flex justify-end"
            
            return "d-flex flex-column align-center";
        },
    }
});
</script>

<style scoped>
/* Full viewport height */
.full-height-vh {
    height: 100vh;
}

/* Full parent height */
.full-height-percentage {
    height: 100%;;
}

/* Name */
#myName {
    font-size: 4rem !important;
    font-weight: 200;
    line-height: 5rem;
    letter-spacing: 0.1666666667em;
    text-transform: uppercase;
}

/**
*   Logos
*/
.logo {
    position: absolute;
    top: 1rem;
}

.logoDesktop {
    height: 12vh;
    right: 5.5rem;
}

.logoTablet {
    height: 10vh;
    left: 50%;
    transform: translate(-50%, 0);
}

.logoMobile {
    height: 5vh;
    left: 2rem;
}
</style>