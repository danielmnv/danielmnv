<template>
    <section class="knowledge-section">
        <h6 class="text-h4 font-weight-black knowledge-title">Title</h6>

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
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quisquam itaque repudiandae et optio. Nisi quos reprehenderit ducimus incidunt similique eos, explicabo possimus ad quia doloremque dolor distinctio ratione optio?',
            tools: [
                { name: "Debian", icon: 'mdi-debian', color: 'pink darken-3' },
                { name: "Arch Linux", icon: 'mdi-arch', color: 'blue darken-2' },
                { name: "Red Hat", icon: 'mdi-redhat', color: 'red darken-4' },
            ]
        },
        {
            name: 'Git',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quasi quia mollitia pariatur sit, eius error accusamus praesentium tempora, sapiente maxime laudantium, quibusdam nobis. Similique recusandae ratione reiciendis adipisci debitis?',
            tools: [
                { name: "GitHub", icon: 'mdi-github' },
                { name: "Git", icon: 'mdi-git', color: 'orange darken-4' },
                { name: "GitLab", icon: 'mdi-gitlab', color: 'orange darken-1' },
            ]
        },
        {
            name: 'Mobile',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nostrum sit ea quasi, dicta similique illum voluptatibus dolorum itaque voluptas beatae quo excepturi consectetur iusto delectus? Recusandae fugiat maiores nemo!',
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