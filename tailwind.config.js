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
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['"Inter"', '"Outfit"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'monospace']
      },
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        sage: {
          50: '#f4f6f4',
          100: '#e5ebe5',
          200: '#ccd8cc',
          300: '#a8bea8',
          400: '#809e80',
          500: '#608060',
          600: '#4a654a',
          700: '#3e513e',
          800: '#334233',
          900: '#2a362a',
        },
        clay: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#a38a80',
          600: '#8a7168',
          700: '#6f574f',
          800: '#5c4740',
          900: '#4c3933',
        }
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate.700'),
            '--tw-prose-headings': theme('colors.slate.900'),
            '--tw-prose-links': theme('colors.sage.600'),
            '--tw-prose-bold': theme('colors.slate.900'),
            '--tw-prose-counters': theme('colors.slate.500'),
            '--tw-prose-bullets': theme('colors.slate.400'),
            '--tw-prose-hr': theme('colors.slate.200'),
            '--tw-prose-quotes': theme('colors.slate.800'),
            '--tw-prose-quote-borders': theme('colors.sage.300'),
            '--tw-prose-code': theme('colors.sage.600'),
            '--tw-prose-pre-bg': theme('colors.slate.900'),
            '--tw-prose-pre-code': theme('colors.slate.100'),
            fontFamily: theme('fontFamily.sans').join(','),
            fontSize: '1.0625rem',
            lineHeight: '1.7',
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.display').join(','),
              fontWeight: '600',
              letterSpacing: '-0.01em'
            },
            a: {
              textDecoration: 'none',
              transitionProperty: 'all',
              transitionDuration: '300ms',
              '&:hover': {
                color: theme('colors.sage.700')
              }
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
