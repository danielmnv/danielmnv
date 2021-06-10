<template>
    <div>
        <!-- Desktop drawer -->
        <template v-if="!mobile">
            <v-navigation-drawer
                color="background"
                mini-variant
                permanent
                dark
                app
            >
                <v-layout column fill-height>
                    <!-- Logo -->
                    <v-list>
                        <v-list-item class="px-2">
                            <v-list-item-avatar>
                                <v-img
                                    src="@/assets/dm.svg"
                                ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-title>Daniel Molina</v-list-item-title>
                        </v-list-item>
                    </v-list>

                    <v-spacer></v-spacer>

                    <!-- Nav -->
                    <v-list nav flat>
                        <template v-for="route in routes">
                            <!-- Route title tooltip -->
                            <v-tooltip :key="route.title" transition="slide-x-transition" color="primary" right>
                                <template v-slot:activator="{ on, attrs }">
                                    <!-- Item content -->
                                    <v-list-item v-bind="attrs" v-on="on"  :to="route.to" color="primary">
                                        <v-list-item-icon style="">
                                            <v-icon>{{ route.icon }}</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>{{ route.title }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </template>
                                <span>{{ route.title }}</span>
                            </v-tooltip>
                        </template>
                    </v-list>

                    <v-spacer></v-spacer>

                    <!-- Toggle theme -->
                    <v-list nav flat>
                        <v-list-item @click="toggleTheme">
                            <v-list-item-icon>
                                <v-icon :color="themeIconColor">mdi-theme-light-dark</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>Theme</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                </v-layout>
            </v-navigation-drawer>
        </template>

        <!-- Mobile bar -->
        <template v-else>
            <v-app-bar
                app
                dark
                dense
                fixed
                elevate-on-scroll
                color="background"
            >
                <v-avatar size="40">
                    <img src="@/assets/dm.svg">
                </v-avatar>

                <v-spacer></v-spacer>

                <!-- Item -->
                <v-btn icon @click="toggleTheme">
                    <v-icon :color="themeIconColor">mdi-theme-light-dark</v-icon>
                </v-btn>
            </v-app-bar>
        </template>

        <v-snackbar
            text
            rounded="lg"
            :top="mobile"
            :left="!mobile"
            :light="!isThemeDark"
            :class="{ 'snackbar-offset': !mobile }"
            :transition="`scroll-${mobile ? 'y' : 'x'}-transition`"
            v-model="chosenSideSanck"
        >
            You choose {{ isThemeDark ? 'dark' : 'light' }} side
            <template v-slot:action="{ attrs }">
                <v-btn icon  @click="chosenSideSanck = false">
                    <v-icon
                        v-bind="attrs"
                        v-text="themeIcon"
                        :color="themeIconColor"
                    />
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AppSideNav extends Vue {
    chosenSideSanck = false;

    @Prop({ required: true }) readonly routes!: Array<object>;

    // Is mobile or not
    get mobile(): boolean {
        return this.$vuetify.breakpoint.smAndDown;
	}

    // Is theme dark active?
    get isThemeDark(): boolean {
		return this.$vuetify.theme.dark;
	}

    get themeIcon(): string {
        return `mdi-${this.isThemeDark ? 'moon-waning-crescent' : 'white-balance-sunny'}`
    }

    get themeIconColor(): string {
        return this.isThemeDark ? '' : 'yellow darken-3';
    }

    toggleTheme(): void {
        this.chosenSideSanck = true;
		this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        localStorage.setItem('light', (!this.$vuetify.theme.dark).toString());
        this.$analytics.logEvent("toggle_theme", {
            'dark': this.$vuetify.theme.dark.toString()
        });

    }
}
</script>

<style scoped>
.v-tooltip__content {
	font-weight: 800;
	letter-spacing: 0.1666666667em;
    text-transform: uppercase !important;
}

.snackbar-offset {
    margin-left: 56px;
}
</style>