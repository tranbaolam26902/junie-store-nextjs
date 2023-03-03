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
            },
            animation: {
                'slide-in-left': 'slide-in-left 200ms ease-in-out',
                'slide-out-left': 'slide-out-left 200ms ease-in-out',
                'slide-out-left-hidden': 'slide-out-left 300ms ease-in-out forwards',
                'fade-in': 'fade-in 200ms ease-in-out',
                'fade-out': 'fade-out 200ms ease-in-out',
                'slide-fade-in-left-1': 'slide-fade-in-left 300ms ease-in-out',
                'slide-fade-in-left-2': 'slide-fade-in-left 400ms ease-in-out',
                'slide-fade-in-left-3': 'slide-fade-in-left 500ms ease-in-out',
                'slide-fade-in-left-4': 'slide-fade-in-left 600ms ease-in-out',
                'slide-fade-in-left-5': 'slide-fade-in-left 700ms ease-in-out',
                'slide-fade-in-left-6': 'slide-fade-in-left 800ms ease-in-out',
            },
        },
    },
    plugins: [],
};
