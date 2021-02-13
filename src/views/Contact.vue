<template>
    <div>
        <gmap-map
            :center="center"
            :zoom="mobile? 5 : 6"
            :options="{
                disableDefaultUI: true,
                styles: activeTheme
            }"
            :style="`width:100%;  height: ${mobile? '55vh' : '100vh'};`"
        >
            <gmap-marker
                :position="center"
                :icon="{ 
                    url: require('@/assets/marker.svg'),
                    scaledSize: {width: 55, height: 55}
                }"
            ></gmap-marker>
        </gmap-map>

        <v-container :class="{ 'infoCard' : !mobile }" fluid>
            <v-card :width="mobile? '500px' : '350px'" flat outlined :class="{ 'mx-auto' : mobile }">
                <v-card-title class="d-flex ml-3">
                    <v-avatar class="pa-2" size="25">
                        <img src="@/assets/mexico.png" alt="Mexico">
                    </v-avatar>
                    <span class="pa-2">México</span>
                </v-card-title>
                <v-card-subtitle class="ml-3">Aguascalientes, Ags.</v-card-subtitle>
                <v-card-text>
                    <v-row dense no-gutters>
                        <!-- Info -->
                        <v-col cols="12" md="10">
                            <div class="d-flex flex-column justify-end">
                                <!-- Address -->
                                <div class="pa-1 d-flex">
                                    <v-icon class="pa-2" color="primary">{{ `mdi-map-marker${$vuetify.theme.dark ? '-outline' : ''}` }}</v-icon>
                                    <div class="pa-2">
                                        <span>Paseo del Olivar Poniente #207. </span><br v-if="!mobile">
                                        <span>Nueva Alameda. CP 20164.</span>
                                    </div>
                                </div>

                                <!-- Phone -->
                                <div class="pa-1 d-flex align-center">
                                    <v-icon class="pa-2" color="primary">{{ `mdi-phone${$vuetify.theme.dark ? '-outline' : ''}` }}</v-icon>
                                    <div class="pa-2">
                                        +51 449 204 42 78
                                    </div>
                                </div>

                                <!-- Email -->
                                <div class="pa-1 d-flex align-center">
                                    <v-icon class="pa-2" color="primary">mdi-at</v-icon>
                                    <div class="pa-2">
                                        danmnvx@gmail.com
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <!-- Social Media -->
                        <v-col cols="12" md="2">
                            <div :class="`d-flex ${mobile ? 'flex-row justify-center mt-5' : 'flex-column justify-end'}`">
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
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script lang="ts">
import { MetaInfo } from "vue-meta";
import { Component, Vue } from "vue-property-decorator";

@Component ({
    metaInfo(): MetaInfo {
        return {
            title: 'Contact | DM'
        };
    }
})
export default class Contact extends Vue {
    center = { lat: 21.890546, lng: -102.271374 };
    
    defaultStyle = [
        /** ALL */
        {elementType: 'labels.text.stroke', stylers: [{visibility: 'off'}]},
        /** ADMINISTRATIVE */
        // Country
        {
            featureType: 'administrative.country',
            elementType: 'geometry',
            stylers: [{weight: '2'}, {color: '#006064'}]
        },
        // Province
        {
            featureType: 'administrative.province',
            elementType: 'geometry',
            stylers: [{color: '#005b63'}, {weight: '3'}] 
        },
        /** LANDSCAPE */
        {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [{color: '#00838f'}]
        },
        /** POI */
        {
            featureType: 'poi',
            elementType: 'all',
            stylers: [{visibility: 'off'}]
        },
        /** ROAD */
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#006064'}]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#000000'}, {saturation: '-1'}, {lightness: '-100'}]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.stroke',
            stylers: [{visibility: 'on'}, {color: '#76c1ca'}]
        },
        /** TRANSIT */
        {
            featureType: 'transit',
            elementType: 'all',
            styles: [{visibility: 'off'}]
        }
    ];

    darkStyle = [
        /** ALL */
        {elementType: 'geometry', stylers: [{color: '#081615'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#ffffff'}]},
        /** ADMINISTRATIVE */
        // Country
        {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f2f2f2'}]
        },
        // Province
        {
            featureType: 'administrative.province',
            elementType: 'labels.text.fill',
            stylers: [{color: '#bfbfbf'}]
        },
        // Locality
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f0f0f0'}]
        },
        // Neighborhood
        {
            featureType: 'administrative.neighborhood',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d8d8d8'}]
        },
    ];

    lightStyle = [
        /** ALL */
        {elementType: 'geometry', stylers: [{color: '#f5f8f8'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#000000'}]},
        /** ADMINISTRATIVE */
        // Country
        {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [{color: '#1d1d1d'}]
        },
        // Province
        {
            featureType: 'administrative.province',
            elementType: 'labels.text.fill',
            stylers: [{color: '#2d2d2d'}]
        },
        // Locality
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#000000'}]
        },
        // Neighborhood
        {
            featureType: 'administrative.neighborhood',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d8d8d8'}]
        },
    ];

    // Is mobile or not
    get mobile(): boolean {
        return this.$vuetify.breakpoint.smAndDown;
    }

    // Current theme
    get activeTheme(): Array<{}> {
		return (this.$vuetify.theme.dark) ? [...this.darkStyle, ...this.defaultStyle] : [...this.lightStyle, ...this.defaultStyle];
	}
}
</script>

<style scoped>
.infoCard {
    position: absolute;
    left: 5rem;
    bottom: 0;
}
</style>