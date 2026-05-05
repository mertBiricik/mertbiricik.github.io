/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,html,js}",
    "./.eleventy.js"
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    // Override defaults to match brutalist sensibility.
    borderRadius: {
      none: '0',
      DEFAULT: '0',
      sm: '0',
      md: '0',
      lg: '0',
      xl: '0',
      '2xl': '0',
      '3xl': '0',
      full: '9999px'
    },
    boxShadow: {
      none: 'none',
      DEFAULT: '6px 6px 0 0 #0a0a0a',
      lg: '10px 10px 0 0 #0a0a0a',
      brutal: '6px 6px 0 0 #0a0a0a',
      'brutal-lg': '10px 10px 0 0 #0a0a0a',
      'brutal-blood': '6px 6px 0 0 #5b0e0e',
      inner: 'inset 0 2px 0 0 rgba(0,0,0,0.08)'
    },
    extend: {
      fontFamily: {
        // Display: blackletter for ornaments, drop caps, hero accent
        blackletter: ['"UnifrakturMaguntia"', 'serif'],
        // Display serif: gothic-leaning high-contrast for h1/h2
        display: ['"Cormorant Garamond"', '"EB Garamond"', 'Georgia', 'serif'],
        // Body serif
        serif: ['"EB Garamond"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        // Labels, eyebrows, code
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        // Fallback sans for utilities (rare)
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        bone: {
          50:  '#fbf8f1',
          100: '#f5f1e8',
          200: '#ece6d4',
          300: '#dcd2b6',
          400: '#bbac82',
          500: '#8a7e5a'
        },
        ink: {
          50:  '#f5f5f0',
          100: '#e8e6dd',
          200: '#cfcdc1',
          300: '#9c9a8e',
          400: '#6b6a60',
          500: '#3d3c36',
          600: '#26251f',
          700: '#161510',
          800: '#0a0a08',
          900: '#000000'
        },
        blood: {
          400: '#a32424',
          500: '#841b1b',
          600: '#6b1212',
          700: '#5b0e0e',
          800: '#3d0808',
          900: '#1f0303'
        },
        ash: {
          100: '#1a1a17',
          200: '#13130f',
          300: '#0a0a08'
        }
      },
      letterspacing: {
        widest: '0.25em'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink.700'),
            '--tw-prose-headings': theme('colors.ink.900'),
            '--tw-prose-links': theme('colors.blood.700'),
            '--tw-prose-bold': theme('colors.ink.900'),
            '--tw-prose-counters': theme('colors.ink.500'),
            '--tw-prose-bullets': theme('colors.ink.400'),
            '--tw-prose-hr': theme('colors.ink.900'),
            '--tw-prose-quotes': theme('colors.ink.800'),
            '--tw-prose-quote-borders': theme('colors.blood.700'),
            '--tw-prose-code': theme('colors.blood.700'),
            '--tw-prose-pre-bg': theme('colors.ink.900'),
            '--tw-prose-pre-code': theme('colors.bone.100'),
            fontFamily: theme('fontFamily.serif').join(','),
            fontSize: '1.0625rem',
            lineHeight: '1.7',
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.display').join(','),
              fontWeight: '700',
              letterSpacing: '-0.01em'
            },
            a: {
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
              fontWeight: '600'
            },
            blockquote: {
              borderLeftWidth: '4px',
              fontStyle: 'italic'
            },
            code: {
              fontWeight: '500'
            }
          }
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.bone.200'),
            '--tw-prose-headings': theme('colors.bone.50'),
            '--tw-prose-links': theme('colors.blood.400'),
            '--tw-prose-bold': theme('colors.bone.50'),
            '--tw-prose-counters': theme('colors.bone.300'),
            '--tw-prose-bullets': theme('colors.bone.500'),
            '--tw-prose-hr': theme('colors.bone.100'),
            '--tw-prose-quotes': theme('colors.bone.100'),
            '--tw-prose-quote-borders': theme('colors.blood.400'),
            '--tw-prose-code': theme('colors.blood.400'),
            '--tw-prose-pre-bg': theme('colors.ash.300'),
            '--tw-prose-pre-code': theme('colors.bone.100')
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
