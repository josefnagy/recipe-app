module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            fontFamily: {
                body: ['Lato', 'sans-serif'],
                heading: ['Newsreader', 'serif'],
            },
            colors: {
                primary: '#279037',
                secondary: '#040F0F',
                tertiary: '#E5E5E5',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
