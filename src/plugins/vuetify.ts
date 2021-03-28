import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: colors.cyan.base,
                accent: colors.deepPurple.darken1,
                overlay: colors.blueGrey.darken3,
                background: colors.grey.darken4,
            },
            light: {
                primary: colors.deepPurple.lighten2,
                accent: colors.blue.lighten3,
                overlay: colors.blueGrey.darken3,
                background: colors.grey.darken4,
            }
        }
    }
});
