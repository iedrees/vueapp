const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./webapp/**/*.vue', './resources/**/*.php'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            blue: colors.blue,
            white: colors.white,
            'cool-gray': colors.coolGray,

            gray: colors.gray,
            maincolor: colors.teal,
            teal: colors.teal,
            indigo: colors.indigo,
            rose: colors.rose,
            red: colors.rose,
            green: colors.green,
           
        },
        extend: {
            fontFamily: {
                sans: ['samim', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        extend: {
            animation: ['responsive', 'motion-safe', 'motion-reduce'],
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/typography'), require('tailwindcss-rtl'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};