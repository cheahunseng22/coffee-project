//  @type {import('tailwindcss').Config} 
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: 'rgb(28, 115, 115)',    
      },
      screens: {
        // Max-width media queries
        'max-xss': { 'max': '439px' },
        'max-xs': { 'max': '539px' },
        'max-sm': { 'max': '640px' }, // For screens smaller than 640px
        'max-md': { 'max': '767px' },// tablate
        'max-mdd': { 'max': '839px' },//tablate
        'max-mddd': { 'max': '940px' },//tablate
        'max-lg': { 'max': '1024px' }, // labtop
        'max-xl': { 'max': '1279px' }, // For screens smaller than 1280px
        'max-2xl': { 'max': '1535px' }, // For screens smaller than 1536px
      }
   
      
     
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-red': {
          'text-shadow': '2px 2px 4px rgba(255, 0, 0, 0.75)',
        },
        '.text-shadow-green': {
          'text-shadow': '2px 2px 4px rgba(0, 255, 0, 0.75)',
        },
        '.text-shadow-blue': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 255, 0.75)',
        },
        '.text-shadow-main': {
          'text-shadow': '0px 0px 10px  rgb(28, 115, 115)',
        },
      };

      addUtilities(newUtilities);
    }
  ],
}

