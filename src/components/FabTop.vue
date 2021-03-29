<template>
    <!-- Go to top -->
    <v-fab-transition>
        <v-btn
            fab
            fixed
            bottom
            right
            color="primary"
            :class="{ 'mobileFab': mobile, 'persistent-nav': true }"
            v-scroll="onScroll"
            v-show="fabTop"
            @click="$vuetify.goTo(0)"
        >
            <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
    </v-fab-transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FabTop extends Vue {
    fabTop = false;

    // Displays button if the user has scrolled
    onScroll(e): void {
        if (typeof window === 'undefined') return;
        const top = window.pageYOffset ||   e.target.scrollTop || 0;
        this.fabTop = top > 200;
    }

    // Is mobile or not
    get mobile(): boolean {
        return this.$vuetify.breakpoint.smAndDown;
	}
}
</script>

<style>
.mobileFab {
    bottom:72px !important;
}
</style>