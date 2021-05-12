<template>
    <v-container fluid>
        <!-- Skills -->
        <div class="skills-section elevation-2">
            <v-row dense no-gutters>
                <v-col
                    v-for="(group, index) in skills"
                    :key="index"
                    cols="12"
                    md="4"
                    :order="group.mobileOrder"
                    :order-md="index"
                >
                    <skill-group
                        :icon="group.icon"
                        :title="group.title"
                        :subtitle="group.subtitle"
                        :text="group.text"
                        :tools="group.tools"
                    />
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SkillGroup from "@/components/SkillGroup.vue";


@Component({
    components: {
        SkillGroup,
    }
})
export default class Skills extends Vue {
    skills = [
        {
            mobileOrder: 2,
            title: 'front-end',
            subtitle: 'Things to do beautiful interfaces:',
            icon: 'mdi-pencil-ruler',
            text: "Within the past couple of years I've developed a ton of projects using modern javascript frameworks like Vue and Angular although it's worth to mention that my experience with HTML, CSS and Javascript goes up to 4 years now.",
            tools: [
                { name: 'Vue', icon: 'mdi-vuejs', color: 'green darken-1' },
                { name: 'Angular', icon: 'mdi-angularjs', color: 'red' },
                { name: 'React', icon: 'mdi-react', color: 'cyan lighten-1' },
                { name: 'HTML 5', icon: 'mdi-language-html5', color: 'orange' },
                { name: 'CSS', icon: 'mdi-language-css3', color: 'blue lighten-1' },
                { name: 'Sass', icon: 'mdi-sass', color: 'pink lighten-2' },
                { name: 'JQuery', icon: 'mdi-jquery', color: 'indigo lighten-1' },
            ],
        },

        {
            mobileOrder: 1,
            title: 'languages',
            subtitle: 'Languages I know:',
            icon: 'mdi-code-json',
            text: "Since I've decided to become a programmer 6 years ago I've learned a lot of languages and I still doing it, because I'm curious and I love to discover the features that every language has.",
            tools: [
                { name: 'PHP', icon: 'mdi-language-php', color: 'indigo' },
                { name: 'Python', icon: 'mdi-language-python', color: 'yellow darken-2' },
                { name: 'Typescript', icon: 'mdi-language-typescript', color: 'blue darken-2' },
                { name: 'Javascript', icon: 'mdi-language-javascript', color: 'yellow darken-3' },
                { name: 'Java', icon: 'mdi-language-java', color: 'red darken-1' },
                { name: 'C', icon: 'mdi-language-c', color: 'blue darken-1' },
                { name: 'C++', icon: 'mdi-language-cpp', color: 'blue darken-1' },
                { name: 'C#', icon: 'mdi-language-csharp', color: 'deep-purple' },
                { name: 'Bash', icon: 'mdi-bash', color: 'pink darken-2' },
            ],
        },

        {
            mobileOrder: 3,
            title: 'back-end',
            subtitle: 'Tools with which I break my mind:',
            icon: 'mdi-server',
            text: "The amount of DB's, frameworks and tool to create the perfect server for an application is too high but that is not a problem for me. I know how to choose the proper DB, language and environment for a specific project.",
            tools: [
                { name: 'Django / DRF', icon: false, prefix: 'dj', src: 'django.svg' },
                { name: 'Laravel', icon: 'mdi-laravel', color: 'red' },
                { name: 'Nuxt', icon: 'mdi-nuxt', color: 'green darken-1' },
                { name: 'NodeJS', icon: 'mdi-nodejs', color: 'green' },
                { name: 'MongoDB / Mongoose', icon: 'mdi-code-braces', color: 'yellow darken-3' },
                { name: 'SQL', icon: 'mdi-database-outline' },
                { name: 'API Development', icon: 'mdi-api', color: 'brown lighten-1' },
                { name: "Firebase", icon: 'mdi-firebase', color: 'yellow darken-3' },
                { name: 'Docker', icon: 'mdi-docker', color: 'cyan' }
            ]
        },
    ];
}
</script>

<style scoped>
/* Skills section */
.skills-section { border-radius: 12px; }
</style>