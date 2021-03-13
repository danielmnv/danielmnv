<template>
    <v-bottom-navigation
        background-color="background"
        color="primary"
        shift
        grow
        dark
        app
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class AppBottomNav extends Vue {
    @Prop({ required: true }) readonly routes!: Array<object>;
}
</script>