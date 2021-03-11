<template>
    <v-app>
		<!-- App drawer -->
        <app-side-nav class="persistent-nav" :routes="routes"></app-side-nav>

		<v-main>
			<transition :enter-active-class="`animate__animated animate__${mobile ? 'slideInUp' : 'fadeInRight'}`">
				<router-view></router-view>
			</transition>
		</v-main>
	
		<!-- Mobile bottom navigation -->
		<app-bottom-nav v-if="mobile" class="persistent-nav" :routes="routes"></app-bottom-nav>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppSideNav from "@/components/AppSideNav.vue";
import AppBottomNav from "@/components/AppBottomNav.vue";

@Component ({
	components: {
		AppSideNav,
		AppBottomNav
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
}
</script>

<style scoped>
.persistent-nav { z-index: 100; }
</style>
