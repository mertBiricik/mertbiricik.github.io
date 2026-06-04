/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,html,js}",
    "./.eleventy.js"
  ],
  theme: {
    extend: {
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
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb', // Core Vercel/Stripe blue
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        display: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            a: {
              color: theme('colors.primary.600'),
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: theme('colors.primary.800'),
              },
            },
            h1: {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.slate.900'),
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h2: {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.slate.900'),
              fontWeight: '600',
              letterSpacing: '-0.01em',
            },
            h3: {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.slate.900'),
              fontWeight: '600',
            },
            strong: { color: theme('colors.slate.900'), fontWeight: '600' },
            code: {
              color: theme('colors.slate.800'),
              backgroundColor: theme('colors.slate.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.375rem',
              fontFamily: theme('fontFamily.mono').join(', '),
              fontSize: '0.875em',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            blockquote: {
              color: theme('colors.slate.600'),
              borderLeftColor: theme('colors.primary.200'),
              borderLeftWidth: '4px',
              fontStyle: 'normal',
              paddingLeft: '1rem',
            },
            hr: {
              borderColor: theme('colors.slate.200'),
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
