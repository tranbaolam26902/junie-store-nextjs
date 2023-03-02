/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-myriad-pro)'],
            },
            colors: {
                primary: 'rgb(var(--color-primary))',
                secondary: 'rgb(var(--color-secondary))',
                accent: 'rgb(var(--color-accent))',
                red: 'rgb(var(--color-red))',
                green: 'rgb(var(--color-green))',
            },
            keyframes: {
                'slide-in': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'slide-out': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                'fade-out': {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
            },
            animation: {
                'slide-in': 'slide-in 0.5s ease-in-out',
                'slide-out': 'slide-out 0.5s ease-in-out',
                'fade-in': 'fade-in 0.5s ease-in-out',
                'fade-out': 'fade-out 0.5s ease-in-out',
            },
        },
    },
    plugins: [],
};
