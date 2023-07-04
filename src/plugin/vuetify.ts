import { ThemeDefinition, createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'


export const light: ThemeDefinition = {
    dark: false,
    colors: {
        background: "#ffffff",
        surface: "#FFFFFF",
        primary: "#FF8551",
        secondary: "#bdbdbd",
        overlay: "#E0F2FE",
        textOverlay: "#0369A1",
        error: "#c62828",
        info: "#2196F3",
        success: "#00897b",
        successBorder: "#90fff3",
        warning: "#303f9f",
        border: "#e0e0e0",
        grey: "#616161",
        shadow: "#d9e2ec"
    },
};
export const dark: ThemeDefinition = {
    dark: true,
    colors: {
        background: "#15202b",
        surface: "#121212",
        primary: "#FF8551",
        secondary: "#bdbdbd",
        overlay: "#0369A1",
        textOverlay: "#E0F2FE",
        error: "#c62828",
        info: "#2196F3",
        success: "#00897b",
        successBorder: "#90fff3",
        warning: "#303f9f",
        border: "#616161",
        grey: "#e0e0e0",
        shadow: "#3b3b3b"
    },
};

export default createVuetify({
    theme: {
        defaultTheme: "dark",
        variations: {
            colors: [
                "background",
                "surface",
                "primary",
                "overlay",
                "textOverlay",
                "grey",
                "shadow",
                "successBorder"
            ],
            lighten: 1,
            darken: 2,
        },
        themes: {
            light,
            dark,
        },
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
})