/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,html,js}",
    "./.eleventy.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FFFFFF',
          100: '#F5F5F3', // Creamy off-white
          200: '#E8E8E4',
          300: '#D8D8D4',
        },
        ink: {
          900: '#0A0A0A', // Deep black
          800: '#1C1C1C',
          700: '#333333',
          500: '#666666',
          400: '#999999',
        },
        accent: {
          500: '#D90429', // Striking MIT/Academic Red
          600: '#BA0424',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.800'),
            a: {
              color: theme('colors.ink.900'),
              textDecoration: 'none',
              borderBottom: `2px solid ${theme('colors.accent.500')}`,
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: theme('colors.accent.500'),
                color: theme('colors.paper.50'),
              },
            },
            h1: {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.ink.900'),
              fontWeight: '700',
            },
            h2: {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.ink.900'),
              fontWeight: '700',
              borderBottom: `2px solid ${theme('colors.ink.900')}`,
              paddingBottom: '0.5rem',
            },
            h3: {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.ink.900'),
              fontWeight: '600',
            },
            strong: { color: theme('colors.ink.900') },
            code: {
              color: theme('colors.ink.900'),
              backgroundColor: theme('colors.paper.200'),
              padding: '0.2em 0.4em',
              borderRadius: '0px',
              fontFamily: theme('fontFamily.mono').join(', '),
            },
            blockquote: {
              color: theme('colors.ink.700'),
              borderLeftColor: theme('colors.accent.500'),
              borderLeftWidth: '4px',
              fontStyle: 'italic',
            },
            hr: {
              borderColor: theme('colors.ink.900'),
              borderWidth: '2px',
            }
          },
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
