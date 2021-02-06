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

                <p class="headline">Lion Systems Solutions <span class="yellow--text text--darken-4 font-weight-bold">2019 - Today</span></p>

                <v-container>
                    <v-row>
                        <!-- Dashboard -->
                        <v-col cols="12" sm="6" md="4">
                            <v-card class="mt-5 elevation-2">
                                <v-card-title>Dashboard</v-card-title>

                                <v-card-text>
                                    <p>Desarrollo de interfaces alimentadas con API's procedentes de un concentrador de datos</p>
                                </v-card-text>

                                <!-- Languages / Frameworks -->
                                <v-container>
                                    <v-row>
                                        <v-chip small outlined class="ma-1" color="red">
                                            <v-icon dark left>mdi-laravel</v-icon>
                                            Laravel
                                        </v-chip>

                                        <v-chip small outlined class="ma-1" color="brown lighten-2">
                                            <v-icon dark left>mdi-api</v-icon>
                                            API
                                        </v-chip>

                                        <v-chip small outlined class="ma-1" color="yellow darken-2">
                                            <v-icon dark left>mdi-language-python</v-icon>
                                            Python
                                        </v-chip>

                                        <v-chip small outlined class="ma-1" color="green darken-1">
                                            <v-icon dark left>mdi-vuejs</v-icon>
                                            Vue
                                        </v-chip>

                                        <v-chip small outlined class="ma-1" color="blue darken-1">
                                            <v-icon dark left>mdi-vuetify</v-icon>
                                            Vuetify
                                        </v-chip>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>

                        <!-- Prestashop -->
                        <v-col cols="12" sm="6" md="4">
                            <v-card class="mt-5 elevation-2">
                                <v-card-title>Store Online</v-card-title>

                                <v-card-text>
                                    <p>Desarrollo de tiendas online con Prestashop implementando contenedores Docker</p>
                                </v-card-text>

                                <!-- Languages / Frameworks -->
                                <v-container>
                                    <v-row>
                                        <v-chip small outlined class="ma-1" color="pink">
                                            <v-avatar left>
                                                <img src="@/assets/tools/prestashop.png">
                                            </v-avatar>
                                            Prestashop
                                        </v-chip>

                                        <v-chip small outlined class="ma-1" color="cyan">
                                            <v-icon dark left>mdi-docker</v-icon>
                                            Docker
                                        </v-chip>

                                        <v-chip small outlined class="ma-1" color="orange darken-3">
                                            <v-icon dark left>mdi-gitlab</v-icon>
                                            DevOps
                                        </v-chip>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>

                        <!-- ERP & CRM -->
                        <v-col cols="12" sm="6" md="4">
                            <v-hover v-slot="{ hover }">
                                <v-card elevation="2">
                                    <v-card-title>ERP's & CRM's Systems</v-card-title>
                                    <v-card-text>
                                        <p>Levantamiento y desarrollo de de sistemas web ERP's & CRM's implementados con PHP.</p>
                                        <p>Desarrollo de módulos para dichos sistemas, tales como un módulo de firma digital para los documentos generados (facturas, cotizaciones, expediciones, etc.)</p>
                                    </v-card-text>
                                    
                                    <!-- Languages / Frameworks -->
                                    <v-expand-transition>
                                        <div
                                            v-if="hover"
                                            class="transition-fast-in-fast-out v-card--reveal"
                                        >
                                            <v-container>
                                                <v-row>
                                                    <v-chip small outlined class="ma-1" color="indigo">
                                                        <v-icon dark left>mdi-language-php</v-icon>
                                                        PHP
                                                    </v-chip>

                                                    <v-chip small outlined class="ma-1" color="yellow darken-3">
                                                        <v-icon dark left>mdi-language-javascript</v-icon>
                                                        Javascript
                                                    </v-chip>

                                                    <v-chip small outlined class="ma-1" color="white">
                                                        <v-icon dark left>mdi-database</v-icon>
                                                        SQL
                                                    </v-chip>

                                                    <v-chip small outlined class="ma-1" color="pink darken-2s">
                                                        <v-icon dark left>mdi-slack</v-icon>
                                                        Slack
                                                    </v-chip>
                                                </v-row>
                                            </v-container>
                                        </div>
                                    </v-expand-transition>
                                </v-card>

                            </v-hover>
                        </v-col>

                        <!-- Web site -->
                        <v-col cols="12" sm="6" md="4">
                            <v-card class="mt-5 elevation-2">
                                <v-card-title>Company web site</v-card-title>

                                <v-card-text>
                                    <p>Pagina web de la empresa</p>
                                </v-card-text>

                                <!-- Languages / Frameworks -->
                                <v-container>
                                    <v-row>
                                        <v-chip small outlined class="ma-1" color="orange">
                                            <v-icon dark left>mdi-language-html5</v-icon>
                                            HTML
                                        </v-chip>

                                        <v-chip small outlined class="ma-1" color="blue lighten-1">
                                            <v-icon dark left>mdi-language-css3</v-icon>
                                            CSS
                                        </v-chip>

                                        <v-chip small outlined class="ma-1" color="indigo lighten-1">
                                            <v-icon dark left>mdi-jquery</v-icon>
                                            JQuery
                                        </v-chip>

                                        <v-chip small outlined class="ma-1" color="deep-purple darken-1">
                                            <v-icon dark left>mdi-bootstrap</v-icon>
                                            Bootstrap
                                        </v-chip>

                                        <v-chip small outlined class="ma-1" color="pink darken-2">
                                            <v-icon dark left>mdi-alpha-a-box</v-icon>
                                            AFrame
                                        </v-chip>
                                    </v-row>
                                </v-container>
                            </v-card>
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
    // Is mobile or not
    get mobile(): boolean {
        return this.$vuetify.breakpoint.smAndDown;
    }
}
</script>

<style scoped>
#lss {
    filter: invert(48%) sepia(80%) saturate(381%) hue-rotate(4deg) brightness(92%) contrast(88%);
}

.cardProjectHover {
    opacity: 0.4;
} 

.languages-frameworks {
    position: absolute;
    opacity: 1;
    top: 0;
    display: none;
}

.showDetails {
    display: block;
}
</style>