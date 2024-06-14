/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-green': '#58ac84',
            },
            fontFamily: {
                montserrat: "'Montserrat', sans-serif",
            },
            container: {
                center: true,
                padding: '1.5em',
            },
        },
    },
    plugins: [],
}
