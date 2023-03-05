/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'baby': ['Whale I Tried', 'Comic Sans MS' ,'Arial', 'sans-serif'],
        'baby-block': ['Baby Blocks', 'Comic Sans MS', 'Arial', 'sans-serif']
      },
      transitionProperty: {
        'transform-colors': 'color, transform',
        'filter': 'filter',
        'filter-transform': 'filter transform'
      },
      blur: {
        xs: '2px',
        '2xs': '1px'
      }
    },
  },
  safelist: [
    {
      pattern: /gap-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|[5-9]{1}|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/
    },
    {
      pattern: /text-(fuchsia|yellow|teal|blue|rose|lime|pink|cyan)-(2|3)00/
    }
  ],
  plugins: [],
}