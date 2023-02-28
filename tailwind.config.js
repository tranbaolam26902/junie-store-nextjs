/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-myriad-pro)'],
            },
            colors: {
                primary: '#ffffff',
                secondary: '#282828',
                accent: '#ffe501',
                red: '#b01a0b',
                green: '#065f46',
            },
        },
    },
    plugins: [],
};
