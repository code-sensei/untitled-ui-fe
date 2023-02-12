/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#667085',
        'dark': '#344054',
        'primary': '#6941C6',
        'background': '#F5F5F5',
        'background-tint': '#F9FAFB',
        'input-border': '#D0D5DD'
      },
      fontSize: {
        'heading': ['30px', {
          lineHeight: '38px'
        }],
        'menu-item': ['16px', {
          lineHeight: '24px',
          fontWeight: '500'
        }],
        'base': ['16px', {
          lineHeight: '24px',
          fontWeight: '400'
        }],
        '14': ['14px', {
          lineHeight: '20px',
          fontWeight: '400'
        }],
        '18': ['18px', {
          lineHeight: '28px',
          fontWeight: '500'
        }]
      },
      fontWeight: {
        '400': 400,
        '500': 500,
      },
      gap: {
        'md': '32px',
        'base': '24px'
      },
      padding: {
        'md': '32px',
        'base': '24px',
        'input-x': '14px',
        'input-y': '12px'
      },
      dropShadow: {
        'xs': '0px 1px 2px rgba(16, 24, 40, 0.05)'
      }
    },
  },
  plugins: [],
}
