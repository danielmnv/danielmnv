<template>
    <!-- Company -->
    <div>
        <!-- Logo -->
        <v-img :height="company.prefix == 'in' ? 90 : 120" contain :class="companyLogo" :src="require('@/assets/experience/' + company.img)"></v-img>

        <!-- Content -->
        <div :class="contentMargin" :style="dividerColor">
            <v-container class="text-center">
                <!-- Name -->
                <v-card outlined rounded="lg" class="mx-auto elevation-2 company-title-card" max-width="600px">
                    <h6 class="text-h4 font-weight-black pa-3" v-text="company.name"></h6>
                </v-card>
                <!-- Period -->
                <h6 class="text-overline" v-for="(period, i) in company.periods" :key="i" v-text="period"></h6>
                <!-- Description -->
                <p class="text-subtitle-1 mt-10" v-text="company.description"></p>
            </v-container>
        </div>

        <!-- Projects -->
        <v-container :style="projectsMargin">
            <v-row>
                <v-col 
                    cols="12" md="6"
                    v-for="project in company.projects"
                    :key="project.name"
                >
                    <company-project class="fill-height" :project="project" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CompanyProject from "@/components/CompanyProject.vue";

// Company interface
interface CompanyDto {
    prefix: string;
    name: string;
    img: string;
    periods: Array<string>;
    description: string;
    projects?: Array<object>;
}

@Component({
    components: {
        CompanyProject
    }
})
export default class Company extends Vue {
    @Prop({ required: true }) readonly company!: CompanyDto;

    // Is theme dark active?
    get isThemeDark(): boolean {
		return this.$vuetify.theme.dark;
	}

    // Get proper class
    get companyLogo(): string {
        return `mx-auto mt-2 rounded-lg ${this.company.prefix}-${this.isThemeDark ? 'dark' : 'light'}-logo`;
    }

    // Get divider background color
    get dividerColor(): string {
        return `background-color: ${this.$vuetify.theme.currentTheme.accent};`;
    }

    // Get margin of company content
    get contentMargin(): string {
        let classes = 'company-content';

        if (this.company.projects?.length) {
            classes += ' company-has-projects';
        }
        else if (this.company.prefix == 'in') {
            classes += ' last-company';
        }

        return classes;
    }

    // Get margin of company projects
    get projectsMargin(): string {
        if (this.$vuetify.breakpoint.smAndDown)
            return 'margin-top: -10rem;'
        
        return 'margin-top: -9rem;';
    }
}
</script>

<style>
/* LSS logo */
.lss-light-logo {
    filter: invert(48%) sepia(80%) saturate(381%) hue-rotate(4deg) brightness(92%) contrast(88%);
}
.lss-dark-logo { filter: invert(100%); }

/* INGEGI logo */
.in-light-logo { background-color: transparent; width: 110px; }
.in-dark-logo { background-color: #f5f5f5; width: 110px; }

/* Company content */
.company-title-card { margin-top: -3rem; }
.company-content {
    margin-top: 5rem;
    padding: 0 1.5rem 3rem;
    width: 100%;
}
.company-has-projects {
    padding-bottom: 9rem;
}
.last-company {
    padding-bottom: 6rem;
}
</style>