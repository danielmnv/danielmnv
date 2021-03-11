<template>
    <div>
        <!-- Company -->
        <company 
            v-for="(company, i) in companies" 
            :key="company.prefix" 
            :company="company" 
            :class="{ 'my-16' : i > 0}"
        />
    </div>
</template>

<script lang="ts">
import { MetaInfo } from "vue-meta";
import { Component, Vue } from "vue-property-decorator";
import Company from "@/components/Company.vue";

@Component ({
    metaInfo(): MetaInfo {
        return {
            title: 'Experience | DM'
        };
    },

    components: {
        Company
    },
})
export default class Experience extends Vue {
    companies = [
        {
            prefix: 'lss',
            name: 'Lion Systems Solutions',
            img: 'lss.svg',
            periods: ['April 2019 - To date'],
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio blanditiis eligendi neque, repellendus deserunt provident? Perferendis iusto, omnis porro ea, perspiciatis debitis incidunt, temporibus voluptatem dicta optio impedit. Veritatis, commodi?',
            projects: [
                {
                    name: 'Dashboard',
                    img: 'dashboard.png',
                    text: "Desarrollo de interfaces alimentadas con API's procedentes de un concentrador de datos",
                    tools: [
                        { name: 'Laravel', icon: 'mdi-laravel', color: 'red' },
                        { name: 'Vue', icon: 'mdi-vuejs', color: 'green darken-1' },
                        { name: 'Vuetify', icon: 'mdi-vuetify', color: 'blue darken-1' },
                        { name: 'Python', icon: 'mdi-language-python', color: 'yellow darken-2' },
                        { name: 'API Development', icon: 'mdi-api', color: 'brown lighten-2' },
                    ]
                },

                {
                    name: 'Store Online',
                    img: 'store.png',
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam tempora distinctio vero nostrum, eum commodi molestias cupiditate omnis sit veritatis alias dolorum incidunt at enim ipsam cumque consectetur, dolor laborum!",
                    tools: [
                        { name: 'Prestashop', avatar: 'prestashop.png', color: 'pink' },
                        { name: 'Docker', icon: 'mdi-docker', color: 'cyan darken-1' },
                        { name: 'GitLab DevOps ', icon: 'mdi-gitlab', color: 'orange darken-3' },
                        { name: 'PHP', icon: 'mdi-language-php', color: 'indigo' },
                    ]
                },

                {
                    name: "ERP's & CRM's Systems",
                    img: 'erp.png',
                    text: "Desarrollo de módulos para dichos sistemas, tales como un módulo de firma digital para los documentos generados (facturas, cotizaciones, expediciones, etc.)",
                    tools: [
                        { name: 'PHP', icon: 'mdi-language-php', color: 'indigo' },
                        { name: 'Javascript', icon: 'mdi-language-javascript', color: 'yellow darken-3' },
                        { name: 'SQL', icon: 'mdi-database',  },
                        { name: 'Slack', icon: 'mdi-slack', color: 'pink darken-2' }
                    ]
                },

                {
                    name: "Company web site",
                    img: 'website.png',
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam tempora distinctio vero nostrum, eum commodi molestias cupiditate omnis sit veritatis alias dolorum incidunt at enim ipsam cumque consectetur, dolor laborum!",
                    tools: [
                        { name: 'HTML 5', icon: 'mdi-language-html5', color: 'orange' },
                        { name: 'CSS', icon: 'mdi-language-css3', color: 'blue darken-1' },
                        { name: 'JQuery', icon: 'mdi-jquery', color: 'indigo lighten-1' },
                        { name: 'Bootstrap', icon: 'mdi-bootstrap', color: 'deep-purple darken-3' },
                        { name: 'AFrame', icon: 'mdi-alpha-a-box', color: 'pink darken-2' }
                    ],
                }
            ]
        },
        {
            prefix: 'in',
            name: 'INEGI',
            img: 'inegi.png',
            periods: ['April 2015 - September 2015', 'March 2016 - June 2016'],
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio blanditiis eligendi neque, repellendus deserunt provident? Perferendis iusto, omnis porro ea, perspiciatis debitis incidunt, temporibus voluptatem dicta optio impedit. Veritatis, commodi?',
        }
    ];
}
</script>