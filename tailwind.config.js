/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#e50914', // 229 9 20
                'primary-hv': '#ab0009',
                'secondary': '#0ea5e9',

                'background': '#1a1a1a',
                'section-bg': '#262525',

                'border': '#DEE7F5',
                'divider': '#6f6f6f',

                'heading': '#F4F4F4',
                'subheading': '#9f9f9f',
                'text': '#ced6df',
            },
        },
    },
    plugins: [],
}
