<template>
    <v-hover v-slot="{ hover }">
        <v-card outlined tile class="mx-2 project-card elevation-2">
            <v-img
                class="blurr-img"
                src="@/assets/experience/dashboard.png"
            >
            </v-img>
            <!-- Languages / Frameworks -->
            <template v-if="!mobile">
                <v-fade-transition origin="top center 0">
                    <v-overlay
                        v-if="hover"
                        absolute
                        color="accent"
                        :opacity="isThemeDark ? 0.9 : 0.8"
                    >
                        <v-container>
                            <v-card-title>{{ project.name }}</v-card-title>

                            <v-card-text>
                                <p v-for="(paragraph, index) in project.text" :key="index">
                                    {{ paragraph }}
                                </p>
                            </v-card-text>
                            <!-- <v-list dense color="transparent">
                                <v-list-item
                                    v-for="tool in project.tools"
                                    :key="tool.name"
                                >
                                    <v-list-item-avatar
                                        :color="tool.color"
                                        size="35"
                                    >
                                        <template v-if="tool.name == 'Prestashop'">
                                            <img :src="require('@/assets/icons/' + tool.avatar)" :alt="tool.name"/>
                                        </template>
                                        <template v-else>
                                            <v-icon v-text="tool.icon"></v-icon>
                                        </template>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            v-text="tool.name"
                                        ></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list> -->
                        </v-container>
                    </v-overlay>
                </v-fade-transition>
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
                                <img :src="require('@/assets/icons/' + tool.avatar)" :alt="tool.name" />
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ExperienceProject extends Vue {
    @Prop({ required: true }) readonly project!: object;
    @Prop({ default: true }) readonly width!: boolean;

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
.project-card {
    border-radius: 12px !important;
}

.blurr-img {
    filter: blur(1px);
    -webkit-filter: blur(1px);
}
</style>