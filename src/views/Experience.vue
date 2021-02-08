<template>
    <v-container>
        <v-timeline dense align-top>
            <!-- Lion Systems Solutions -->
            <v-timeline-item
                color="white"
                fill-dot
                large
            >
                <template v-slot:icon>
                    <v-avatar>
                        <img id="lss" src="@/assets/experience/lss.svg">
                    </v-avatar>
                </template>

                <p class="headline">Lion Systems Solutions <span class="brown--text text--lighten-1 font-weight-bold">2019 - Today</span></p>

                <v-container fluid>
                    <v-row justify="center">
                        <!-- Project -->
                        <v-col v-for="(project, index) in lssProjects" :key="index" cols="12" sm="6" md="6" lg="4">
                            <v-hover v-slot="{ hover }">
                                <v-card class="elevation-2">
                                    <v-card-title>{{ project.name }}</v-card-title>

                                    <v-card-text>
                                        <p v-for="(paragraph, index) in project.text" :key="index">{{ paragraph }}</p>
                                    </v-card-text>

                                    <!-- Languages / Frameworks -->
                                    <template v-if="!mobile">
                                        <v-scroll-y-transition origin="top center 0">
                                            <v-overlay
                                                v-if="hover"
                                                absolute
                                                :opacity="isThemeDark? 0.9 : 0.6"
                                            >
                                                <v-container>
                                                    <v-list dense color="transparent">
                                                        <v-list-item
                                                            v-for="tool in project.tools"
                                                            :key="tool.name"

                                                        >
                                                            <v-list-item-avatar :color="tool.color" size="35">
                                                                <template v-if="tool.name == 'Prestashop'">
                                                                    <img :src="require('@/assets/' + tool.avatar)" :alt="tool.name">
                                                                </template>
                                                                <template v-else>
                                                                    <v-icon v-text="tool.icon"></v-icon>
                                                                </template>
                                                            </v-list-item-avatar>
                                                            <v-list-item-content>
                                                                <v-list-item-title v-text="tool.name"></v-list-item-title>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-container>
                                            </v-overlay>
                                        </v-scroll-y-transition>
                                    </template>

                                    <template v-else>
                                        <div class="d-flex flex-wrap justify-center pb-3">
                                            <v-chip
                                                v-for="(tool, index) in project.tools"
                                                :key="index"
                                                :color="tool.color"
                                                class="ma-1"
                                                small
                                                outlined
                                            >
                                                <template v-if="tool.name == 'Prestashop'">
                                                    <v-avatar left>
                                                        <img :src="require('@/assets/' + tool.avatar)" :alt="tool.name">
                                                    </v-avatar>
                                                </template>
                                                <template v-else>
                                                    <v-icon dark left>{{ tool.icon }}</v-icon>
                                                </template>
                                                {{ tool.name }}
                                            </v-chip>
                                        </div>
                                    </template>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-container>
            </v-timeline-item>

            <v-timeline-item
                color="white"
                fill-dot
                large
            >
                <template v-slot:opposite>
                    <span class="headline font-weight-bold" style="color: #0c0fad">2019</span
                    >
                </template>
                <template v-slot:icon>
                    <v-avatar>
                        <img src="@/assets/experience/inegi.png">
                    </v-avatar>
                </template>
                <v-card class="elevation-2">
                    <v-card-title class="headline">INEGI</v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, no nam oblique veritus.
                        Commune scaevola imperdiet nec ut, sed euismod convenire
                        principes at. Est et nobis iisque percipit, an vim zril
                        disputando voluptatibus, vix an salutandi sententiae.
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script lang="ts">
import { MetaInfo } from "vue-meta";
import { Component, Vue } from "vue-property-decorator";

@Component ({
    metaInfo(): MetaInfo {
        return {
            title: 'Experience | DM'
        };
    }
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
                { name: 'Prestashop', avatar: 'tools/prestashop.png', color: 'pink' },
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
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, amet rem? Molestiae distinctio autem facere optio repellendus eveniet dolorem tempora quaerat sunt magnam nesciunt exercitationem ad, possimus eligendi quam aperiam?"
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
}
</script>

<style scoped>
#lss {
    filter: invert(48%) sepia(80%) saturate(381%) hue-rotate(4deg) brightness(92%) contrast(88%);
}

</style>