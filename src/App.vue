<template>
    <v-app>
		<!-- App drawer -->
        <app-side-nav class="persistent-nav" :routes="routes"></app-side-nav>

		<v-main :style="backgroundColor">
			<transition 
				mode="out-in"
				enter-active-class="animate__animated animate__fadeInRight" 
				leave-active-class="animate__animated animate__fadeOutLeft"
			>
				<router-view></router-view>
			</transition>
		</v-main>

		<!-- Go to top -->
		<fab-top />
	
		<!-- Mobile bottom navigation -->
		<app-bottom-nav v-if="mobile" class="persistent-nav" :routes="routes"></app-bottom-nav>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppSideNav from "@/components/AppSideNav.vue";
import AppBottomNav from "@/components/AppBottomNav.vue";
import FabTop from "@/components/FabTop.vue";

@Component ({
	components: {
		AppSideNav,
		AppBottomNav,
		FabTop
	}
})
export default class App extends Vue {
	routes = [
		{ title: 'Home', icon: 'mdi-home-roof', to: '/' },
		// { title: 'Education', icon: 'mdi-school-outline', to: '/education' },
		{ title: 'Experience', icon: 'mdi-briefcase-outline', to: '/experience' },
		{ title: 'Contact', icon: 'mdi-email-variant', to: '/contact' }
	];

	// Is mobile or not
    get mobile(): boolean {
        return this.$vuetify.breakpoint.smAndDown;
	}

	// Is theme dark active?
    get isThemeDark(): boolean {
		return this.$vuetify.theme.dark;
	}

	get backgroundColor(): string {
		return `background-color: ${this.isThemeDark ? '#121212' : '#f4f6f9'}`;
	}
}
</script>

<style scoped>
.persistent-nav { z-index: 100; }
</style>
