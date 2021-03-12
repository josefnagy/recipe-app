module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            fontFamily: {
                body: ['Open Sans Condensed', 'sans-serif'],
                heading: ['Josefin Sans', 'sans-serif'],
            },
            colors: {
                primary: '#279037',
                secondary: '#040F0F',
                tertiary: '#E5E5E5',
            },
            margin: {
                84: '21rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
