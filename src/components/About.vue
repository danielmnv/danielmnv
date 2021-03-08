<template>
    <v-card flat outlined class="about-in-code elevation-2">
        <!-- Ide window -->
        <div class="d-flex flex-column justify-space-around pl-5">
            <div class="pa-2">
                <div class="circle close"></div>
                <div class="circle maximize"></div>
                <div class="circle minimize"></div>
            </div>
            <!-- File -->
            <div class="pa-2">
                <span class="font-italic font-weight-light">
                    <v-icon color="blue darken-2" left>mdi-language-typescript</v-icon>resume.ts
                </span>
            </div>
        </div>
        <v-divider></v-divider>

        <!-- Snapshot -->
        <pre>
        <!-- Code -->
        <span class="reserved-word">import</span> { <span class="property">Resume</span> } <span class="reserved-word">from</span> <span class="string">'work'</span>;

        <span class="reserved-word">export default class</span> <span class="type">DM</span> <span class="reserved-word">extends</span> <span class="type">Resume</span> {
            <span class="property">name</span>: <span class="type">String</span>;
            <span class="property">profile</span>: <span class="type">String</span>;

            <span class="reserved-word">constructor()</span> {
                <span class="type">super</span><span class="reserved-word">()</span>;
                <span class="type">this</span>.<span class="property">name</span> = <span class="string">"Daniel Molina"</span>;
                <span class="type">this</span>.<span class="property">profile</span> = <span class="string">"Full-stack web developer"</span>;
            }

            <span class="reserved-word">get</span> <span class="function">education</span><span class="reserved-word">()</span>: <span class="type">Object</span> {
                <span class="reserved-word">return</span> { 
                    <span class="property">university</span>: <span class="string">"Universidad Autónoma de Aguascalientes"</span>,
                    <span class="property">career</span>: <span class="string">"Computer Systems Engineering"</span>,
                    <span class="property">period</span>: {
                        <span class="property">start</span>: <span class="string">"August 2016"</span>,
                        <span class="property">end</span>: <span class="string">"December 2020"</span>
                    }
                }
            }
        }
        </pre>    
        <!-- End Snapshot -->
    </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>

<style scoped>
/* About in code */
.about-in-code { 
    font-weight: bold;
    border-radius: 12px !important;
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
}

/* Window */
.about-in-code div.circle {
    display: inline-block;
    border-radius: 50%;
    margin-right: 0.2rem;
    width: 10px;
    height: 10px;
}
.about-in-code div.close { background: #fe6152; }
.about-in-code div.maximize { background: #ffbc07; }
.about-in-code div.minimize { background: #16cd37; }

/* Snapshot */
.about-in-code pre {
    overflow: auto;
    white-space: pre;       /* Since CSS 2.1 */
    white-space: -moz-pre;  /* Mozilla, since 1999 */
    white-space: -pre;      /* Opera 4-6 */
    white-space: -o-pre;    /* Opera 7 */
    word-wrap: normal;       /* Internet Explorer 5.5+ */
}

/* Code stylish */
.about-in-code pre span.reserved-word {
    color: #b877db;
    font-weight: bolder !important;
}
.about-in-code pre span.property { color: #e95678; }
.about-in-code pre span.function { color: #25b0bc; }
.about-in-code pre span.type { color: #03A9F4; }
.about-in-code pre span.string { color: #569a66; }
</style>