<template>
    <!-- Avatar, social media & name -->
    <div>
        <v-container class="d-flex flex-column align-center justify-space-around" :style="fullHeight">
            <v-avatar size="150px" class="elevation-5 pa-2">
                <img src="@/assets/me.jpg" alt="Daniel Molina" />
            </v-avatar>
            <h6 class="text-h3 text-center">
                Full-stack Developer
            </h6>
            <p class="text-subtitle-1 mt-5 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In velit quasi est nihil!
            </p>
        </v-container>

        <section :class="welcomeClass" :style="colorDivider">
            <v-container class="text-center">
                <h6 class="text-h4 font-weight-black">Hi, I'm Daniel Molina!</h6>
                <p class="text-subtitle-1 mt-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, perspiciatis necessitatibus mollitia iste nisi consequuntur iusto tenetur molestiae nesciunt fuga molestias laudantium atque illum eum expedita! Corporis nobis esse id!
                </p>
            </v-container>
        </section>

        <v-container :style="resumeMargin">
            <v-img src="@/assets/code.png" class="mx-auto" width="800px"></v-img>
        </v-container>
    </div>
</template>

<script lang="ts">
import { MetaInfo } from "vue-meta";
import { Component, Vue } from "vue-property-decorator";

@Component({
    metaInfo(): MetaInfo {
        return {
            title: "Resume | DM",
        };
    },
})
export default class Home extends Vue {
    loading = true;

    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 600);
    }

    // Is mobile or not
    get mobile(): boolean {
        return this.$vuetify.breakpoint.smAndDown;
    }

    get fullHeight(): string {
        if (this.$vuetify.breakpoint.smAndDown)
            return 'height: 90vh;'
        
        return 'height: 100vh';
    }

    get welcomeClass(): string {
        if (this.$vuetify.breakpoint.lgAndUp)
            return 'welcome-text-lg';
        else if (this.$vuetify.breakpoint.mdOnly)
            return 'welcome-text-md';
        else
            return 'welcome-text-sm';
    }

    get resumeMargin(): string {
        if (this.$vuetify.breakpoint.smAndDown)
            return 'margin-top: -8rem;'
        
        return 'margin-top: -14rem;';
    }

    get colorDivider(): string {
        return `background-color: ${this.$vuetify.theme.currentTheme.accent};`;
    }
}
</script>

<style scoped>
/* Full viewport height */
.full-height-vh {
    height: 100vh;
}

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

.resume-code {
    margin-top: -14rem;
}
</style>