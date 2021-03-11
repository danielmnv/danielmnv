<template>
    <!-- Company -->
    <v-container class="text-center">
        <!-- Logo -->
        <v-img width="100" :class="companyLogo" :src="require('@/assets/experience/' + company.img)"></v-img>
        <!-- Name -->
        <h6 class="text-h4 font-weight-black mt-5" v-text="company.name"></h6>
        <!-- Period -->
        <h6 class="text-overline" v-for="(period, i) in company.periods" :key="i" v-text="period"></h6>
        <!-- Description -->
        <p class="text-subtitle-1 mt-10" v-text="company.description"></p>

        <!-- Projects -->
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
        return `mx-auto rounded-lg ${this.company.prefix}-${this.isThemeDark ? 'dark' : 'light'}-logo`;
    }
}
</script>

<style>
/* LSS logo */
.lss-light-logo {
    filter: invert(48%) sepia(80%) saturate(381%) hue-rotate(4deg) brightness(92%) contrast(88%);
}

.lss-dark-logo {
    filter: invert(100%)
}

/* INGEGI logo */
.in-light-logo {
    background-color: transparent;
}

.in-dark-logo {
    background-color: #f5f5f5;
}
</style>