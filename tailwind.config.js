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
                gray: 'rgb(var(--color-gray))',
            },
            keyframes: {
                'slide-in-left': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'slide-out-left': {
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
                'slide-fade-in-left': {
                    '0%': { transform: 'translateX(-100%)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 },
                },
                'slide-in-bottom': {
                    '0%': {
                        transform: 'translateY(25%)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: 1,
                    },
                },
                'slide-out-bottom': {
                    '0%': {
                        transform: 'translateY(0)',
                        opacity: 1,
                    },
                    '100%': {
                        transform: 'translateY(25%)',
                        opacity: 0,
                    },
                },
            },
            animation: {
                'slide-in-left': 'slide-in-left 200ms ease-in-out',
                'slide-out-left': 'slide-out-left 200ms ease-in-out',
                'fade-in': 'fade-in 200ms ease-in-out',
                'fade-out': 'fade-out 200ms ease-in-out',
            },
        },
    },
    plugins: [],
};
