<template>
    <!-- Init -->
    <v-container fluid id="introduction" class="d-flex flex-column align-center justify-space-around" :style="fullHeight">
        <!-- Avatar -->
        <v-avatar size="150px" class="static-el elevation-5 pa-2">
            <img src="@/assets/me.jpg" alt="Daniel Molina" />
        </v-avatar>

        <!-- Typed text -->
        <div class="static-el text-center">
            <span id="typed" class="text-h4"></span>
        </div>
        <div id="typed-strings">
            <p>Programming Lover <v-icon color="red" large>mdi-heart</v-icon></p>
            <p>Full stack Web Developer <v-icon color="primary" large>mdi-code-tags</v-icon></p>
            <p>Mobile Developer <v-icon color="blue darken-1" large>mdi-cellphone</v-icon></p>
        </div>

        <!-- Legend -->
        <p class="static-el text-subtitle-1 mt-5 text-center">
            I love to code beautiful and efficient websites and applications
        </p>

        <!-- Animated background -->
        <particles-bg 
            id="animated_polygons" 
            type="polygon"
            color="#6A1B9A"
            :num="mobile ? 1 : 2" 
        />
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ParticlesBg } from "particles-bg-vue";
import Typed from "typed.js"

@Component({
    components: {
        ParticlesBg
    }
})
export default class Introduction extends Vue {

    mounted() {
        new Typed('#typed', {
            loop: true,
            typeSpeed: 70,
            backSpeed: 30,
            backDelay: 1500,
            startDelay: 1500,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '_',
            stringsElement: '#typed-strings'
        });
    }

    // Is mobile or not
    get mobile(): boolean {
        return this.$vuetify.breakpoint.smAndDown;
    }

    get fullHeight(): string {
        if (this.$vuetify.breakpoint.smAndDown)
            return 'height: calc(100vh - 100px);'
        
        return 'height: 100vh;';
    }
}
</script>

<style>
/* Component's container */
#introduction { position: relative; }

/* Static elements */
#introduction .static-el { z-index: 10; }

/* Animated background */
#introduction #animated_polygons {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
}
</style>