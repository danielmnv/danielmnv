<template>
    <div>
        <!-- Introduction -->
        <indtroduction />

        <!-- Welcome -->
        <section :class="dividerText" :style="dividerColor">
            <v-container class="text-center">
                <h6 class="text-h4 font-weight-black">Hi, I'm Daniel Molina!</h6>
                <p class="text-subtitle-1 mt-10">
                    I'm a full-stack web developer and I'm passionate about creating intuitive and beautiful designs for the user. <br>
                    
                    I also develop efficient back-end solutions with the logic and optimization that the server needs to run flawlessly. Though I'm a full-stack developer I'm also proficient both in front-end and back-end development.
                </p>
            </v-container>
        </section>

        <!-- Skills & Knowledge-->
        <v-container :style="dividerMargin">
            <skills />
            <knowledge />
        </v-container>

        <!-- About -->
        <section :class="dividerText" :style="dividerColor">
            <v-container class="text-center">
                <h6 class="text-h4 font-weight-black">About Me</h6>
                <p class="text-subtitle-1 mt-10">
                    I've been developing lots of projects for years, some of which have become remarkable websites. <br>
                    I can turn a thought into a powerful project and communicate that vision to my teammates. Thus, being an acertive workteam leader is something I can do well. <br>
                    I'm a quick learner because I've always searched for knowledge by my own. I also like to discover new features, frameworks and languages, therefore I'd be able to work within any environment.
                </p>
                <!-- Resume file -->
                <v-btn 
                    rounded 
                    dark 
                    width="250px" 
                    color="blue-grey darken-4"
                    target="_blank"
                    href="Carlos Daniel Molina Vargas.pdf"
                    download
                    :block="mobile" 
                >
                    Resume
                    <v-icon right>mdi-cloud-download</v-icon>
                </v-btn>
            </v-container>
        </section>
        
        <!-- About in code -->
        <v-container :style="dividerMargin">
            <about />
        </v-container>
    </div>
</template>

<script lang="ts">
import { MetaInfo } from "vue-meta";
import { Component, Vue } from "vue-property-decorator";
import Indtroduction from "@/components/Introduction.vue";
import Skills from "@/components/Skills.vue";
import Knowledge from "@/components/Knowledge.vue";
import About from "@/components/About.vue";

import firebase from "firebase/app";

@Component({
    metaInfo(): MetaInfo {
        firebase.analytics().logEvent("page_view");
        firebase.analytics().logEvent("screen_view", {
            'app_name': process.env.VUE_APP_PROJECT,
            'app_type': process.env.VUE_APP_TYPE,
            'screen_name': 'Home',
            'app_version': process.env.VUE_APP_VERSION
        });

        return {
            title: "Home",
        };
    },

    components: {
        Indtroduction,
        Skills,
        Knowledge,
        About
    }
})
export default class Home extends Vue {
    loading = true;

    mounted() {
        setTimeout(() => this.loading = false, 600);
    }

    // Is mobile or not
    get mobile(): boolean {
        return this.$vuetify.breakpoint.smAndDown;
    }

    get dividerText(): string {
        if (this.$vuetify.breakpoint.lgAndUp)
            return 'welcome-text-lg';
        else if (this.$vuetify.breakpoint.mdOnly)
            return 'welcome-text-md';
        else
            return 'welcome-text-sm';
    }

    get dividerMargin(): string {
        if (this.$vuetify.breakpoint.smAndDown)
            return 'margin-top: -9rem;'
        
        return 'margin-top: -16rem;';
    }

    get dividerColor(): string {
        return `background-color: ${this.$vuetify.theme.currentTheme.accent};`;
    }
}
</script>

<style scoped>
/* Welcome text */
.welcome-text-lg {
    padding: 9rem 1.5rem;
    padding-bottom: 18rem;
    width: 100%;
}

.welcome-text-md {
    padding: 9rem 1.5rem;
    padding-bottom: 16rem;
    width: 100%;
}

.welcome-text-sm {
    padding: 5rem 1.5rem;
    padding-bottom: 9rem;
    width: 100%;
}
</style>