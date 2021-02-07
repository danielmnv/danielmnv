<template>
    <v-app>
		<!-- Desktop drawer -->
        <app-drawer v-if="!mobile" :routes="routes"></app-drawer>

		<v-main>
			<transition :enter-active-class="`animate__animated animate__${mobile ? 'slideInUp' : 'fadeInRight'}`">
				<router-view></router-view>
			</transition>
		</v-main>
	
		<!-- Mobile bottom navigation -->
		<app-bottom-nav v-if="mobile" :routes="routes"></app-bottom-nav>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppDrawer from "@/components/app-drawer.vue";
import AppBottomNav from "@/components/app-bottom-nav.vue";

@Component ({
	components: {
		AppDrawer,
		AppBottomNav
	}
})
export default class App extends Vue {
	routes = [
		{ title: 'Home', icon: 'mdi-home-roof', to: '/' },
		{ title: 'Skills', icon: 'mdi-code-json', to: '/skills' },
		{ title: 'Education', icon: 'mdi-school-outline', to: '/education' },
		{ title: 'Experience', icon: 'mdi-briefcase-outline', to: '/experience' },
		{ title: 'Contact', icon: 'mdi-email-variant', to: '/contact' }
	];

	// Is mobile or not
    get mobile(): boolean {
        return this.$vuetify.breakpoint.smAndDown;
	}
}
</script>
