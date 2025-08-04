/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f8f8',
          100: '#f1f1f1',
          200: '#dedddd',
          300: '#cac9c9',
          400: '#a3a1a1',
          500: '#7c7979',
          600: '#666666',
          700: '#525252',
          800: '#3d3d3d',
          900: '#2b2b2b',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        accent: {
          50: '#f8f8f8',
          100: '#f1f1f1',
          200: '#dedddd',
          300: '#cac9c9',
          400: '#a3a1a1',
          500: '#7c7979',
          600: '#666666',
          700: '#525252',
          800: '#3d3d3d',
          900: '#2b2b2b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #f8f8f8 0%, #666666 100%)',
        'gradient-accent': 'linear-gradient(135deg, #666666 0%, #3d3d3d 100%)',
        'gradient-hero':
          'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 50%, #f8f8f8 100%)',
      },
    },
  },
  plugins: [],
};
