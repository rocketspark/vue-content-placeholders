import ContentPlaceholders from './components/ContentPlaceholders.vue'
import ContentPlaceholdersHeading from './components/ContentPlaceholdersHeading.vue'
import ContentPlaceholdersImg from './components/ContentPlaceholdersImg.vue'
import ContentPlaceholdersText from './components/ContentPlaceholdersText.vue'

export default {
  install: (app, options) => {
    app.component('content-placeholders-', ContentPlaceholders)
    app.component('content-placeholders-heading', ContentPlaceholdersHeading)
    app.component('content-placeholders-img', ContentPlaceholdersImg)
    app.component('content-placeholders-text', ContentPlaceholdersText)
  },
};
