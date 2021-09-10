module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://res.cloudinary.com/zada/image/upload/v1631261099/HXOllTSwrpM_wr2lo9.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
