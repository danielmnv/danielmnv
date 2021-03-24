<template>
    <v-hover v-slot="{ hover }">
        <v-card rounded="lg" class="mx-2 elevation-2">
            <!-- Background -->
            <v-img
                :class="isMdScreen ? 'align-center text-center' : 'rounded-lg'"
                :src="require('@/assets/experience/' + project.img)"
                lazy-src="@/assets/experience/skeleton.jpg"
            >
                <!-- Loading image -->
                <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular
                            indeterminate
                            color="grey lighten-3"
                        ></v-progress-circular>
                    </v-row>
                </template>

                <!-- Button to represent that the user can touch the card and the content will appear (only phones & tablets) -->
                <v-btn 
                    fab
                    x-small 
                    color="accent"
                    class="mx-auto"
                    v-show="isMdScreen && !hover"
                >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </v-img>

            <!-- Title for phones & tablets -->
            <v-card-title v-if="isMdScreen">{{ project.name }}</v-card-title>
            
            <!-- Content -->
            <v-fade-transition origin="top center 0">
                <v-overlay
                    absolute
                    color="overlay"
                    v-if="hover"
                    opacity="0.9"
                >
                    <v-card-text>
                        <!-- Title for desktop -->
                        <span class="text-h6" v-if="!isMdScreen">{{ project.name }}</span>

                        <!-- Short description -->
                        <p class="text-body-2 my-6">{{ project.text }}</p>

                        <!-- Languages / Frameworks -->
                        <div class="d-flex flex-wrap justify-center pb-3">
                            <v-chip
                                v-for="(tool, index) in project.tools"
                                :key="index"
                                :color="tool.color"
                                :small="isMdScreen"
                                class="ma-1"
                                label
                            >
                                <!-- Icon/avatar -->
                                <template v-if="tool.name == 'Prestashop'">
                                    <v-avatar left>
                                        <img :src="require('@/assets/icons/' + tool.avatar)" :alt="tool.name" />
                                    </v-avatar>
                                </template>
                                <template v-else>
                                    <v-icon dark left >{{ tool.icon }}</v-icon>
                                </template>
                                {{ tool.name }}
                            </v-chip>
                        </div>
                    </v-card-text>
                </v-overlay>
            </v-fade-transition>
        </v-card>
    </v-hover>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ExperienceProject extends Vue {
    @Prop({ required: true }) readonly project!: object;
    @Prop({ default: true }) readonly width!: boolean;

     // Is middle screen or not
    get isMdScreen(): boolean {
        return this.$vuetify.breakpoint.mdAndDown;
    }

    // Is theme dark active?
    get isThemeDark(): boolean {
		return this.$vuetify.theme.dark;
	}

}
</script>