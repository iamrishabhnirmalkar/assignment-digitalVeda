import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}' // This will cover all files within src and its subdirectories
    ],
    theme: {
        container: {
            center: true, // center the container
            padding: '1rem', // optional: some left/right padding
            screens: {
                DEFAULT: '100%',
                lg: '1140px' // your max-width
            }
        },
        extend: {
            colors: {
                background: '#e3e3e3', // light background color
                foreground: '#000000', // dark text color
                darkBackground: '#e3e3e3', // dark mode background color
                darkForeground: '#000000' // dark mode text color
            },
            screens: {
                mobile: '576px',
                tablet: '960px',
                desktop: '1440px'
            },
            spacing: {
                '128': '32rem',
                '144': '36rem'
            }
        }
    },
    plugins: []
} satisfies Config
