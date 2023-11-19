/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#4364EF",
                secondary: "#D8E5FF",
                accent_text: '#FFE993',
                accent_yellow: "#F6E049",
                accent_pink: "#F9D9EB",
            }
        },
    },
    plugins: [],
}
