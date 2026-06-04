/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,html,js}",
    "./.eleventy.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'monospace']
      },
      colors: {
        cyber: {
          50: '#e0fbfc',
          100: '#b2f0f4',
          200: '#84e5ec',
          300: '#56dae4',
          400: '#28cfdc',
          500: '#00c4d4', // Cyber Cyan
          600: '#009da9',
          700: '#00757f',
          800: '#004e54',
          900: '#00272a',
        },
        void: {
          50: '#f4f5f6',
          100: '#e9ebed',
          200: '#c8cdd4',
          300: '#a6afba',
          400: '#64748b', // slate-500
          500: '#334155',
          600: '#1e293b',
          700: '#0f172a', // deep slate
          800: '#090e1a', // void midnight
          900: '#04070d', // pure void
        },
        alert: {
          500: '#ff3366', // neon crimson
        }
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.void.300'),
            '--tw-prose-headings': theme('colors.void.50'),
            '--tw-prose-links': theme('colors.cyber.500'),
            '--tw-prose-bold': theme('colors.void.50'),
            '--tw-prose-counters': theme('colors.cyber.600'),
            '--tw-prose-bullets': theme('colors.cyber.600'),
            '--tw-prose-hr': theme('colors.void.700'),
            '--tw-prose-quotes': theme('colors.void.200'),
            '--tw-prose-quote-borders': theme('colors.cyber.500'),
            '--tw-prose-code': theme('colors.cyber.400'),
            '--tw-prose-pre-bg': theme('colors.void.900'),
            '--tw-prose-pre-code': theme('colors.void.100'),
            fontFamily: theme('fontFamily.sans').join(','),
            fontSize: '1rem',
            lineHeight: '1.7',
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.display').join(','),
              fontWeight: '600',
              letterSpacing: '-0.02em',
              color: theme('colors.void.50')
            },
            a: {
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.cyber.500')}`,
              transitionProperty: 'all',
              transitionDuration: '300ms',
              '&:hover': {
                color: theme('colors.void.50'),
                backgroundColor: theme('colors.cyber.500')
              }
            },
            code: {
              fontFamily: theme('fontFamily.mono').join(','),
              fontWeight: '500'
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
