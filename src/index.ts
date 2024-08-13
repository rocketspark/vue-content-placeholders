import type { App } from "vue";
import ContentPlaceholders from './components/ContentPlaceholders.vue'
import ContentPlaceholdersHeading from './components/ContentPlaceholdersHeading.vue'
import ContentPlaceholdersImg from './components/ContentPlaceholdersImg.vue'
import ContentPlaceholdersText from './components/ContentPlaceholdersText.vue'

export default {
    install: (app: App,) => {
        app.component('ContentPlaceholders', ContentPlaceholders)
        app.component('ContentPlaceholdersHeading', ContentPlaceholdersHeading)
        app.component('ContentPlaceholdersImg', ContentPlaceholdersImg)
        app.component('ContentPlaceholdersText', ContentPlaceholdersText)
    },
};