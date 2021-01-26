<template>
    <v-app>
		<!-- Desktop drawer -->
        <v-navigation-drawer
			v-if="!mobile"
            v-model="drawer"
			color="background"
            mini-variant
            permanent
			floating
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
                            <v-icon>mdi-invert-colors</v-icon>
                        </v-list-item-icon>

						<v-list-item-content>
							<v-list-item-title>Theme</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>

			</v-layout>
        </v-navigation-drawer>

		<v-main>
			<router-view></router-view>
		</v-main>
	
		<!-- Mobile bottom navigation -->
		<v-bottom-navigation
			v-if="mobile"
			background-color="background"
			color="primary"
			app
			shift
			grow
		>
			<!-- Item -->
			<v-btn
				color="background"
				style="height: 100%;"
				v-for="route in routes"
				:key="route.title"
				:value="route.title"
				:to="route.to"
			>
				<span>{{ route.title }}</span>
				<v-icon>{{ route.icon }}</v-icon>
			</v-btn>
		</v-bottom-navigation>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
	drawer = true;
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

	toggleTheme(): void {
		this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
}
</script>

<style>
.v-tooltip__content {
	font-weight: 800;
	letter-spacing: 0.1666666667em;
    text-transform: uppercase !important;
}
</style>
