<template>
    <div>
        <!-- Introduction -->
        <indtroduction />

        <!-- Welcome -->
        <section :class="dividerText" :style="dividerColor">
            <v-container class="text-center">
                <h6 class="text-h4 font-weight-black">Hi, I'm Daniel Molina!</h6>
                <p class="text-subtitle-1 mt-10">
                    I'm a full stack web developer. I have the passion to create an intuitive and beautiful front for the users, I also write an efficient back-end with the logic and optimization that the server needs to run faster for the user.
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus laudantium neque velit, debitis ab voluptatibus sint eveniet, dignissimos provident similique accusamus labore itaque quod accusantium adipisci! Animi voluptates modi minus!
                </p>
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

@Component({
    metaInfo(): MetaInfo {
        return {
            title: "Resume | DM",
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