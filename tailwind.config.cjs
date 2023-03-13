const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'baby': ['Whale I Tried', 'Comic Sans MS', 'Arial', 'sans-serif'],
        'baby-block': ['Baby Blocks', 'Comic Sans MS', 'Arial', 'sans-serif']
      },
      transitionProperty: {
        'transform-colors': 'color, transform',
        'filter': 'filter',
        'filter-transform': 'filter transform',
        'width': 'width'
      },
      blur: {
        xs: '2px',
        '2xs': '1px'
      },
      rotate: {
        '28': '28deg'
      },
      transitionTimingFunction: {
        'in-out-back': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        'in-back': 'cubic-bezier(0.6, -0.28, 0.74, 0.05)'
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      spacing: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      animation: {
        'reverse-spin': 'reverse-spin 1s linear infinite',
        'reverse-spin-slow': 'reverse-spin 3s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1.8s cubic-bezier(0.22, 0.61, 0.36, 1) infinite',
        'bounce-spring': 'bounce-spring 1.6s cubic-bezier(0.280, 0.840, 0.420, 1) infinite'
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        },
        'wiggle': {
          '0%, 100%': {
            transform: 'rotate(-12deg)'
          },
          '50%': {
            transform: 'rotate(12deg)'
          },
        },
        'bounce-spring': {
          "0%": {
            transform: "scale(1,1) translateY(0);"
          },
          "20%": {
            transform: "scale(1.1,.8) translateY(0);"
          },
          "28%": {
            transform: "scale(.95,1.1) translateY(-19px);"
          },
          "40%": {
            transform: "scale(1.05,.95) translateY(0);"
          },
          "45%": {
            transform: "scale(1,1) translateY(-2px);"
          },
          "50%": {
            transform: "scale(1.05,1) translateY(0);"
          },
          "60%": {
            transform: "scale(0.99,1) translateY(-1px);"
          },
          "65%": {
            transform: "scale(1,1) translateY(0);"
          },
          "100%": {
            transform: "scale(1,1) translateY(0);"
          }
        }
      }
    },
    strokeMiterlimit: {
      1: '1',
      2: '2',
      4: '4',
      6: '6',
      8: '8',
      10: '10',
      12: '12',
    },
    strokeDasharray: {
      1: '1',
    },
    strokeDashoffset: {
      1: '1',
    },
    screens: {
      '2xs': '320px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },

  safelist: [{
      pattern: /gap-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|[5-9]{1}|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/
    }, {
      pattern: /text-(fuchsia|yellow|teal|blue|rose|lime|pink|cyan)-(2|3)00/
    },
    'animate-wiggle',
    'animate-bounce-spring'
  ],
  plugins: [
    require("daisyui"),
    function({addVariant}) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant('child-hover-siblings', '&:has(*:hover) > *:not(:hover)');
      addVariant('grand-child-hover-siblings', '&:has(* > *:hover) > * > *:not(:hover)');
    },
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          ['stroke-miterlimit']: (value) => ({
            strokeMiterlimit: value,
          }),
        },
        { values: theme('strokeMiterlimit') }
      )
      matchUtilities({
        ['stroke-dasharray']: (value) => ({
          strokeDasharray: value,
        }),
      })
      matchUtilities({
        ['stroke-dashoffset']: (value) => ({
          strokeDashoffset: value,
        }),
      })
    })
  ],
}
