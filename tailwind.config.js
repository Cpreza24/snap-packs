/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./views/**/*.{ejs,js}', './styles/**/*.{ejs,js}'],
    theme: {
        extend: {
            fontFamily: {
                anton: ['Anton', 'sans-serif'],
                marcellus: ['Marcellus', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
