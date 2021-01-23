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
                    appear-active-class="flipInX"
                >
                    <img id="logoBackground" src="@/assets/dm.svg">
                </transition>

                <!-- Avatar, social media & name -->
                <v-container fluid>
                    <v-row
                        :no-gutters="mobile"
                        :class="`${!mobile ? 'full-height-vh' : ''}`"
                        align="center"
                        justify="center"
                    >
                        <v-col cols="12" md="5" lg="4">
                            
                            <div :class="classAvatar">
                                <!-- Avatar -->
                                <transition
                                    appear
                                    appear-active-class="flipInY"
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
                                    appear-active-class="flipInY"
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
                        <v-col cols="12" md="7" offset-md="1">
                            <transition
                                appear
                                appear-active-class="bounceInRight"
                            >
                                <p id="myName">Daniel Molina</p>
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

        // Class for avatar space
        classAvatar() {
            if (!this.mobile)
                return "d-flex justify-end"
            
            return "d-flex flex-column align-center pt-10";
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

#myName {
    font-size: 4rem !important;
    font-weight: 200;
    line-height: 5rem;
    letter-spacing: 0.1666666667em;
    text-transform: uppercase;
}

#logoBackground {
    height: 12vh;
    position: absolute;
    top: 1rem;
    right: 5.5rem;
}
</style>