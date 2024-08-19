import type { App } from "vue";
import { ContentPlaceholders, ContentPlaceholdersHeading, ContentPlaceholdersImg, ContentPlaceholdersText } from './components';

export default {
    install: (app: App,) => {
        app.component('ContentPlaceholders', ContentPlaceholders)
        app.component('ContentPlaceholdersHeading', ContentPlaceholdersHeading)
        app.component('ContentPlaceholdersImg', ContentPlaceholdersImg)
        app.component('ContentPlaceholdersText', ContentPlaceholdersText)
    },
};

export {
    ContentPlaceholders,
    ContentPlaceholdersHeading,
    ContentPlaceholdersImg,
    ContentPlaceholdersText
}