import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    primary: "#003366",
                    accent: "#00CCCC",
                    secondary: "#F8FAFC",
                    bridge: "#0055AA",
                },
                midnight: {
                    bg: "#020617",
                    surface: "#0F172A",
                    text: "#F8FAFC",
                    glow: "#00CCCC",
                },
            },
        },
    },

    plugins: [forms],
};
