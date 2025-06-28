// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      screen:{
            },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
        pacifico: ['Pacifico', 'cursive'],
      },
      boxShadow: {
        'inner-top': 'inset 0 6px 6px -4px rgba(0, 0, 0, 0.3)', // 👈 top inner shadow
      },
      
    },
  },
  plugins: [],
}
