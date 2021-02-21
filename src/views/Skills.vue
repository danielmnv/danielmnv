<template>
    <v-container fluid :class="!mobile? 'fill-height' : 'full-height-percent'">
        <v-row :class="{ 'full-height-percent' : mobile }">
            <v-col cols="12" md="5" offset-md="1" :class="`d-flex align-start flex-column justify-${mobile? 'start' : 'center'}`">
                <p class="text-h2">Skills</p>
                <v-card flat>
                    <v-card-text>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga delectus sunt libero magnam, aliquid illo voluptas expedita neque sit. Sit autem esse nihil tenetur soluta! Qui quia aperiam nesciunt unde?</p>
                        <v-tabs
                            fixed-tabs
                            color="primary"
                            background-color="transparent"
                            v-model="activeTab"
                            :vertical="!mobile"
                        >
                            <v-tab @click="animateLangs">Langs</v-tab>
                            <v-tab @click="animateFront">Front</v-tab>
                            <v-tab @click="animateBack">Back</v-tab>
                            <v-tab @click="animateOthers">Others</v-tab>
                            
                            <v-tab-item v-for="item in [1,2,3,4]" :key="item">
                                <v-card flat>
                                    <v-card-text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur fuga consequuntur rem fugit. Commodi numquam nulla eos maiores, eveniet omnis error iusto voluptatibus perspiciatis sequi sed. At, incidunt quaerat!
                                        
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs>

                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="5" :class="{ 'mobileCanvas': mobile }">
                <!-- Languages -->
                <div v-if="activeTab == 0" class="section">
                    <span class="language" v-for="(item, i) in skills.languages" :key="item.icon">
                        <v-icon x-large right :class="`animatedIcon icon-${i}`" :color="item.color">{{ item.icon }}</v-icon>
                    </span>
                </div>

                <!-- Front -->
                <div v-if="activeTab == 1" class="section">
                    <span class="front-end" v-for="(item, i) in skills.front" :key="item.icon">
                        <v-icon x-large right :class="`animatedIcon icon-${i}`" :color="item.color">{{ item.icon }}</v-icon>
                    </span>
                </div>

                <!-- Back -->
                <div v-if="activeTab == 2" class="section">
                    <span class="back-end" v-for="(item, i) in skills.back" :key="item.icon">
                        <v-icon x-large right :class="`animatedIcon icon-${i}`" :color="item.color">{{ item.icon }}</v-icon>
                    </span>
                </div>

                <!-- Others -->
                <div v-if="activeTab == 3" class="section">
                    <span class="others" v-for="(item, i) in skills.others" :key="i">
                        <template v-if="item.icon">
                            <v-icon x-large right :class="`animatedIcon icon-${i}`" :color="item.color">{{ item.icon }}</v-icon>
                        </template>
                        <template v-else>
                            <v-img :class="`animatedIcon icon-${i}`" width="30" :src="require('@/assets/icons/' + item.src)"></v-img>
                        </template>
                    </span>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { MetaInfo } from "vue-meta";
import { Component, Vue } from "vue-property-decorator";
import anime from "animejs/lib/anime.es";

@Component({
    metaInfo(): MetaInfo {
        return {
            title: 'Contact | DM'
        };
    }
})
export default class Skills extends Vue {
    activeTab = 0;

    skills = {
        languages: [
            { icon: 'mdi-language-php', color: 'indigo' },
            { icon: 'mdi-language-typescript', color: 'blue darken-2' },
            { icon: 'mdi-language-javascript', color: 'yellow darken-3' },
            { icon: 'mdi-language-java', color: 'red darken-1' },
            { icon: 'mdi-language-python', color: 'yellow darken-2' },
            { icon: 'mdi-language-c', color: 'blue darken-1' },
            { icon: 'mdi-language-cpp', color: 'blue darken-1' },
            { icon: 'mdi-language-csharp', color: 'deep-purple' },
        ],
    
        front: [
            { icon: 'mdi-angularjs', color: 'red' },
            { name: 'JQuery', icon: 'mdi-jquery', color: 'indigo lighten-1' },
            { name: 'Bootstrap', icon: 'mdi-bootstrap', color: 'deep-purple darken-1' },
            { icon: 'mdi-vuejs', color: 'green darken-1' },
            { name: 'HTML 5', icon: 'mdi-language-html5', color: 'orange' },
            { name: 'CSS', icon: 'mdi-language-css3', color: 'blue lighten-1' },
            { name: 'Sass', icon: 'mdi-sass', color: 'pink lighten-2' },
        ],

        back: [
            { name: 'Laravel', icon: 'mdi-laravel', color: 'red' },
            { icon: 'mdi-nuxt', color: 'green darken-1' },
            { icon: 'mdi-code-json', color: 'yellow darken-3' },
            { icon: 'mdi-nodejs', color: 'green' },
            { icon: 'mdi-database-outline', color: '' },
            { icon: 'mdi-api', color: 'brown lighten-1' },
            { icon: 'mdi-server-network', color: '' },
        ],

        others: [
            { icon: 'mdi-android', color: 'green' },
            { icon: 'mdi-firebase', color: 'yellow' },
            { icon: false, src: 'flutter.svg'},
            { icon: 'mdi-arch', color: 'blue darken-2' },
            { icon: false, src: 'ionic.png'},
            { icon: 'mdi-git', color: 'orange darken-4' },
            { name: 'Docker', icon: 'mdi-docker', color: 'cyan' },
        ]
    };

    // Is mobile or not
    get mobile(): boolean {
        return this.$vuetify.breakpoint.smAndDown;
    }

    mounted() {
        this.animateLangs();
    }

    animateLangs(): void {
        setTimeout(() => {
            // Left icons
            anime
                .timeline({
                    targets: '.language:nth-child(odd) .animatedIcon',
                    delay: anime.stagger(100, {from: 'first'}),
                    easing: 'easeInOutCirc',
                    loop: true,
                    direction: 'alternate',
                    duration: 1500
                })
                .add({
                    opacity: 0.9,
                    translateX: 200,
                    translateY: -25
                })
                .add({
                    translateY: 25,
                    rotate: 360
                })
                .add({
                    translateX: 0
                })
                .add({
                    translateY: 0,
                    opacity: 0.1
                });

            // Right icons
            anime
                .timeline({
                    targets: '.language:nth-child(even) .animatedIcon',
                    delay: anime.stagger(100, {from: 'last'}),
                    easing: 'easeInOutCirc',
                    loop: true,
                    direction: 'alternate',
                    duration: 1500
                })
                .add({
                    opacity: 0.9,
                    translateX: -200,
                    translateY: 25
                })
                .add({
                    translateY: -25,
                    rotate: -360
                })
                .add({
                    translateX: 0
                })
                .add({
                    translateY: 0,
                    opacity: 0.1
                });
        }, 100);
    }

    animateFront(): void {
        setTimeout(() => {
            anime({
                targets: '.front-end .animatedIcon',
                delay: anime.stagger(150, {from: 'center'}),
                rotate: -360,
                // scale: 1.5,
                opacity: 0.9,
                easing: 'easeOutElastic(1, .6)',
                loop: true,
                direction: 'alternate',
                duration: 1500
            })
        }, 100);
    }

    animateBack(): void {
        setTimeout(() => {
            anime({
                targets: '.back-end .animatedIcon.icon-0',
                opacity: 0.9,
                rotate: 360,
                loop: true,
                direction: 'alternate',
                easing: 'easeOutElastic(1, .8)',
                duration: 2000
            });

            anime({
                targets: '.back-end .animatedIcon:not(.icon-0)',
                translateX: anime.stagger(100, {grid: [3, 2], from: 'center', axis: 'x'}),
                translateY: anime.stagger(100, {grid: [3, 2], from: 'center', axis: 'y'}),
                rotateZ: anime.stagger([0, 360], {grid: [3, 2], from: 'center', axis: 'x'}),
                delay: anime.stagger(300, {grid: [3, 2], from: 'center'}),
                easing: 'easeInOutQuad',
                loop: true,
                direction: 'alternate',
                duration: 2000
            });
        }, 100);
    }

    animateOthers(): void {
        setTimeout(() => {
            // Left icons
            anime({
                targets: '.others:nth-child(odd) .animatedIcon:not(.icon-6)',
                translateX: 170,
                translateY: -25,
                rotate: anime.stagger(360, { from: 'last'}),
                delay: anime.stagger(150, {from: 'center'}),
                direction: 'alternate',
                loop: true,
                duration: 2000,
                easing: 'easeInOutElastic(1, .7)'
            });

            // Right icons
            anime({
                targets: '.others:nth-child(even) .animatedIcon',
                translateX: -170,
                translateY: 25,
                rotate: anime.stagger(-360, { from: 'last'}),
                delay: anime.stagger(150, {from: 'center'}),
                direction: 'alternate',
                loop: true,
                duration: 2000,
                easing: 'easeInOutElastic(1, .7)'
            });

            // Center icon
            anime({
                targets: '.others .animatedIcon.icon-6',
                translateY: 170,
                rotate: 360,
                direction: 'alternate',
                loop: true,
                duration: 2100,
                easing: 'easeInOutElastic(1, .7)'
            });
        }, 100);
    }
}
</script>
<style scoped>
.customPadding {
    padding: 0 5rem;
}

/* Canvas area */
.mobileCanvas {
    height: 40vh;
}

/* Section of icons */
.section {
    position: relative;
    height: 100%;
}

/* Icon */
.animatedIcon {
    opacity: 0;
    position: absolute;
}

/** LANGUAGES & OTHERS */
.language .animatedIcon { opacity: 0.1; }
.language:nth-child(odd) .animatedIcon, .others:nth-child(odd) .animatedIcon:not(.icon-6) {
    left: 10%;
}
.language:nth-child(even) .animatedIcon, .others:nth-child(even) .animatedIcon {
    right: 10%;
}
.language .icon-0, .language .icon-1 { top: 0%; }
.language .icon-2, .language .icon-3 { top: 25%; }
.language .icon-4, .language .icon-5 { top: 50%; }
.language .icon-6, .language .icon-7 { top: 75%; }

/* FRONT */
.front-end .icon-0 {
    right: 10%;
    top: 50%;
}
.front-end .icon-1 {
    right: 26%;
    top: 15%;
}
.front-end .icon-2 {
    right: 66%;
    top: 15%;
}
.front-end .icon-3 {
    right: 45%;
    top: 50%;
}
.front-end .icon-4 {
    right: 26%;
    top: 85%;
}
.front-end .icon-5 {
    right: 66%;
    top: 85%;
}
.front-end .icon-6 {
    right: 80%;
    top: 50%;
}

/* BACK */
.back-end .animatedIcon { opacity: 0.9; }
.back-end .icon-0 {
    opacity: 0;
    right: 45%;
    top: 50%;
}
.back-end .icon-1 {
    right: 60%;
    top: 35%;
}
.back-end .icon-2 {
    right: 45%;
    top: 35%;
}
.back-end .icon-3 {
    right: 30%;
    top: 35%;
}
.back-end .icon-4 {
    right: 60%;
    top: 65%;
}
.back-end .icon-5 {
    right: 45%;
    top: 65%;
}
.back-end .icon-6 {
    right: 30%;
    top: 65%;
}

/* OTHERs */
.others .animatedIcon { opacity: 0.9; }
.others .icon-0 { left: 7% !important; }
.others .icon-0, .others .icon-1 { top: 10%; }
.others .icon-2, .others .icon-3 { top: 35%; }
.others .icon-4, .others .icon-5 { top: 60%; }
.others .icon-6 { top: 35%; left: 45%; transform: translate(-50%, -50%); }
</style>