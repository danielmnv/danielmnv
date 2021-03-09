<template>
    <div>
        <section class="mt-16">
            <v-container class="text-center">
                <!-- Logo -->
                <v-img width="100" :class="lionLogo" src="@/assets/experience/lss.svg"></v-img>
                <!-- Company -->
                <h6 class="text-h4 font-weight-black mt-10">
                    Lion Systems Solutions
                </h6>
                <!-- Period -->
                <h6 class="text-overline">AUGUST 2016 - To date</h6>
                <p class="text-subtitle-1 mt-10">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio blanditiis eligendi neque, repellendus deserunt provident? Perferendis iusto, omnis porro ea, perspiciatis debitis incidunt, temporibus voluptatem dicta optio impedit. Veritatis, commodi?
                </p>

                <v-row>
                    <v-col 
                        cols="12" sm="6"
                        v-for="project in lssProjects"
                        :key="project.name"
                    >
                        <experience-project class="fill-height" :project="project" />
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script lang="ts">
import { MetaInfo } from "vue-meta";
import { Component, Vue } from "vue-property-decorator";
import ExperienceProject from "@/components/ExperienceProject.vue";

@Component ({
    metaInfo(): MetaInfo {
        return {
            title: 'Experience | DM'
        };
    },

    components: {
        ExperienceProject
    },
})
export default class Experience extends Vue {
    lssProjects = [
        {
            name: 'Dashboard',
            text: [
                "Desarrollo de interfaces alimentadas con API's procedentes de un concentrador de datos",
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quidem ipsa tempora magni at eos iste repellendus quibusdam enim dolor eius ipsum, ut eveniet dolores sed facere reiciendis ullam! Magni?"
            ],
            tools: [
                { name: 'Laravel', icon: 'mdi-laravel', color: 'red' },
                { name: 'Vue', icon: 'mdi-vuejs', color: 'green darken-1' },
                { name: 'Vuetify', icon: 'mdi-vuetify', color: 'blue darken-1' },
                { name: 'Python', icon: 'mdi-language-python', color: 'yellow darken-2' },
                { name: 'API Development', icon: 'mdi-api', color: 'brown lighten-2' },
            ]
        },

        {
            name: 'Store Online',
            text: [
                "Desarrollo de tiendas online con Prestashop implementando contenedores Docker",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eius sunt itaque culpa. Architecto hic quae ab laboriosam eaque, adipisci soluta nam quasi nesciunt illum quia sequi doloremque autem ex!"
            ],
            tools: [
                { name: 'Prestashop', avatar: 'prestashop.png', color: 'pink' },
                { name: 'Docker', icon: 'mdi-docker', color: 'cyan' },
                { name: 'GitLab DevOps ', icon: 'mdi-gitlab', color: 'orange darken-3' },
                { name: 'PHP', icon: 'mdi-language-php', color: 'indigo' },
            ]
        },

        {
            name: "ERP's & CRM's Systems",
            text: [
                "Levantamiento y desarrollo de de sistemas web ERP's & CRM's implementados con PHP.",
                "Desarrollo de módulos para dichos sistemas, tales como un módulo de firma digital para los documentos generados (facturas, cotizaciones, expediciones, etc.)"
            ],
            tools: [
                { name: 'Javascript', icon: 'mdi-language-javascript', color: 'yellow darken-3' },
                { name: 'SQL', icon: 'mdi-database', color: 'blue lighten-3' },
                { name: 'Slack', icon: 'mdi-slack', color: 'pink darken-2' }
            ]
        },

        {
            name: "Company web site",
            text: [
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam tempora distinctio vero nostrum, eum commodi molestias cupiditate omnis sit veritatis alias dolorum incidunt at enim ipsam cumque consectetur, dolor laborum!",
            ],
            tools: [
                { name: 'HTML 5', icon: 'mdi-language-html5', color: 'orange' },
                { name: 'CSS', icon: 'mdi-language-css3', color: 'blue lighten-1' },
                { name: 'JQuery', icon: 'mdi-jquery', color: 'indigo lighten-1' },
                { name: 'Bootstrap', icon: 'mdi-bootstrap', color: 'deep-purple darken-1' },
                { name: 'AFrame', icon: 'mdi-alpha-a-box', color: 'pink darken-2' }
            ],
        }
    ];

    // Is mobile or not
    get mobile(): boolean {
        return this.$vuetify.breakpoint.smAndDown;
    }

    get isThemeDark(): boolean {
		return this.$vuetify.theme.dark;
	}

    get lionLogo(): string {
        return `mx-auto ${this.isThemeDark ? 'dark' : 'light'}-logo`;
    }
}
</script>

<style scoped>
.light-logo {
    filter: invert(48%) sepia(80%) saturate(381%) hue-rotate(4deg) brightness(92%) contrast(88%);
}

.dark-logo {
    filter: invert(100%)
}

</style>