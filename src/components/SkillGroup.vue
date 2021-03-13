<template>
    <v-card flat outlined tile :class="`card-${title} ${mobile ? 'mobile' : 'desktop'} text-center fill-height`">
        <v-icon x-large color="primary" class="py-8">{{ icon }}</v-icon>

        <p class="text-h5 font-weight-medium text-capitalize">{{ title }}</p>

        <v-card-text>
            {{ text }}

            <p class="text-subtitle-1 pa-3" :style="`color: ${$vuetify.theme.currentTheme.primary}`" v-text="subtitle"></p>

            <v-container>
                <v-row
                    dense
                    v-for="tool in tools"
                    :key="tool.name"
                    class="d-flex justify-space-around"
                >
                    <v-col>
                        <v-icon v-text="tool.icon"></v-icon>
                    </v-col>
                    <v-col>
                        <span v-text="tool.name"></span>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SkillGroup extends Vue {
    @Prop({ required: true }) readonly text!: string;
    @Prop({ required: true }) readonly title!: string;
    @Prop({ required: true }) readonly subtitle!: string;
    @Prop({ required: true }) readonly icon!: string;
    @Prop({ required: true }) readonly tools!: Array<object>;

    // Is mobile or not
    get mobile(): boolean {
        return this.$vuetify.breakpoint.smAndDown;
    }
}
</script>

<style scoped>
/* Front card*/
.card-front-end.desktop { 
    border-top-left-radius: 12px !important;
    border-bottom-left-radius: 12px !important; 
    border-right: none !important; 
}

/* Languages card */
.card-languages.mobile {
    border-top-left-radius: 12px !important;
    border-top-right-radius: 12px !important;
    border-bottom: none !important;
}

/* Back card */
.card-back-end { border-bottom-right-radius: 12px !important; }
.card-back-end.desktop { border-top-right-radius: 12px !important; border-left: none !important }
.card-back-end.mobile { border-bottom-left-radius: 12px !important; border-top: none !important; }
</style>