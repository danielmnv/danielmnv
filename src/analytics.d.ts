import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        $analytics: any; // FIXME: add firebase.analytics.Analytics type
    }
}