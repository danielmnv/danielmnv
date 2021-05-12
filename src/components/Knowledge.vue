<template>
    <section class="knowledge-section">
        <h6 class="text-h4 font-weight-black knowledge-title">Knowledge</h6>

        <article
            v-for="group in knowledge"
            :key="group.name"
            class="mb-10"
        >
            <p class="text-center" v-text="group.text"></p>

            <div class="d-flex flex-wrap justify-center pb-3">
                <v-chip
                    v-for="(tool, index) in group.tools"
                    :key="index"
                    :color="tool.color"
                    class="ma-1"
                    label
                    dark
                >
                    <template v-if="tool.name == 'Flutter' || tool.name == 'Ionic'">
                        <v-avatar left>
                            <img class="svg-icon" :src="require('@/assets/icons/' + tool.src)" :alt="tool.name">
                        </v-avatar>
                    </template>
                    <template v-else>
                        <v-icon dark left>{{ tool.icon }}</v-icon>
                    </template>
                    {{ tool.name }}
                </v-chip>
            </div>
        </article>

    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Knowledge extends Vue {
    knowledge = [
        {
            name: 'Linux',
            text: "I'm a huge Linux fan. I've been working with Linux distros for over 4 years, that started when I decided to switch from Windows. I've used several different distros, some were Debian based and other were derivates like Ubuntu, Deepin, Elementary, Mint, etcetera. Last year I was using Fedora and CentOS and now I'm working with Arch and Manjaro, I love them both so I'll continue using them for a long time.",
            tools: [
                { name: "Debian", icon: 'mdi-debian', color: 'pink darken-3' },
                { name: "Arch Linux", icon: 'mdi-arch', color: 'blue darken-2' },
                { name: "Red Hat", icon: 'mdi-redhat', color: 'red darken-4' },
            ]
        },
        {
            name: 'Git',
            text: "I have a lot of experience with git and platforms like GitHub/GitLab. I've lead small work teams where I've managed issues, pull(merge) requests, dev-ops and deployments for the repositories",
            tools: [
                { name: "GitHub", icon: 'mdi-github' },
                { name: "Git", icon: 'mdi-git', color: 'orange darken-4' },
                { name: "GitLab", icon: 'mdi-gitlab', color: 'orange darken-1' },
            ]
        },
        {
            name: 'Mobile',
            text: " My secondary profile is mobile development. I've created some apps with native Android (Java), also Flutter and Ionic for apps that work both in iOS and android devices. I've used firebase in every app to store the data, do authentication and to create small functions that work as an API.",
            tools: [
                { name: "Flutter", icon: false, color: 'cyan darken-3', src: 'flutter.svg'},
                { name: "Android", icon: 'mdi-android', color: 'green' },
                { name: "Ionic", icon: false, color: 'deep-purple darken-3', src: 'ionic.svg'},
            ]
        }
    ];
}
</script>

<style>
.knowledge-section {
    margin: 10rem 0 5rem;
}
.knowledge-title {
    text-align: center;
    margin-bottom: 5rem; 
}
.svg-icon {
    filter: invert(100%);
}
</style>