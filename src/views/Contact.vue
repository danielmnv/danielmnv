<template>
    <div>
        <gmap-map
            :center="center"
            :zoom="5"
            :options="{
                disableDefaultUI: true,
                styles: activeTheme
            }"
            style="width:100%;  height: 100vh;"
        >
            <gmap-marker
                :position="center"
                :icon="{ 
                    url: require('@/assets/dm.svg'),
                    scaledSize: {width: 42, height: 42},
                    iconOrigin: {x: 96, y: -100}
                }"
            ></gmap-marker>
        </gmap-map>
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

    // Current theme
    get activeTheme(): Array<{}> {
		return (this.$vuetify.theme.dark) ? [...this.darkStyle, ...this.defaultStyle] : [...this.lightStyle, ...this.defaultStyle];
	}
}
</script>