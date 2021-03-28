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
                            <img :src="require('@/assets/icons/' + tool.src)" :alt="tool.name">
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
            text: "I'm a huge fan of Linux, I've been working with Linux distros for 4 years since I decided to switch from Windows. I've used distros based on Debian and derivates like Ubuntu, Deepin, Elementary, Mint, etcetera. In the previous year I used Fedora and CentOS. Right now I'm working with Arch and Manjaro and I won't change them in a long time because I love them.",
            tools: [
                { name: "Debian", icon: 'mdi-debian', color: 'pink darken-3' },
                { name: "Arch Linux", icon: 'mdi-arch', color: 'blue darken-2' },
                { name: "Red Hat", icon: 'mdi-redhat', color: 'red darken-4' },
            ]
        },
        {
            name: 'Git',
            text: "I have a lot of experience with git and platforms like GitHub/GitLab. I've lead small team works where I've managed the issues, pull(merge) requests, dev ops and deployments for the repositories",
            tools: [
                { name: "GitHub", icon: 'mdi-github' },
                { name: "Git", icon: 'mdi-git', color: 'orange darken-4' },
                { name: "GitLab", icon: 'mdi-gitlab', color: 'orange darken-1' },
            ]
        },
        {
            name: 'Mobile',
            text: "My secondary profile is mobile development, I've created some apps with native Android (Java) and also Flutter and Ionic for apps that works in iOS and Android devices, in every app I used firebase to store the data, process the auth and create a small functions working as API.",
            tools: [
                { name: "Flutter", icon: false, color: 'cyan darken-3', src: 'flutter.svg'},
                { name: "Android", icon: 'mdi-android', color: 'green' },
                { name: "Ionic", icon: false, color: 'deep-purple darken-3', src: 'ionic.png'},
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
</style>