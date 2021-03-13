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
            text: "I've been developing a lot of projects in the last years with modern javascript frameworks like Vue and Angular. I have 6 years of experience with HTML, CSS and others tools, with which I've done so many websites with a beautiful responsive design",
            tools: [
                { name: 'Vue', icon: 'mdi-vuejs', color: 'green darken-1' },
                { name: 'Angular', icon: 'mdi-angularjs', color: 'red' },
                { name: 'HTML 5', icon: 'mdi-language-html5', color: 'orange' },
                { name: 'CSS', icon: 'mdi-language-css3', color: 'blue lighten-1' },
                { name: 'Sass', icon: 'mdi-sass', color: 'pink lighten-2' },
                { name: 'JQuery', icon: 'mdi-jquery', color: 'indigo lighten-1' },
            ],
        },

        {
            mobileOrder: 1,
            title: 'languages',
            subtitle: 'Languages that I speak:',
            icon: 'mdi-code-json',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates in labore optio eos molestiae beatae reprehenderit.',
            tools: [
                { name: 'PHP', icon: 'mdi-language-php', color: 'indigo' },
                { name: 'Typescript', icon: 'mdi-language-typescript', color: 'blue darken-2' },
                { name: 'Javascript', icon: 'mdi-language-javascript', color: 'yellow darken-3' },
                { name: 'Java', icon: 'mdi-language-java', color: 'red darken-1' },
                { name: 'Python', icon: 'mdi-language-python', color: 'yellow darken-2' },
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
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates in labore optio eos molestiae beatae reprehenderit.',
            tools: [
                { name: 'Laravel', icon: 'mdi-laravel', color: 'red' },
                { name: 'Nuxt', icon: 'mdi-nuxt', color: 'green darken-1' },
                { name: 'Express / Nest', icon: 'mdi-nodejs', color: 'green' },
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