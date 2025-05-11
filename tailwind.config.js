// filepath: c:\Users\Prateek\jatin\african_freelance_nextjs\my-nextjs-app\tailwind.config.js
module.exports = {
    darkMode: ['class'], // Enable dark mode with the 'class' strategy
    content: [
        './Components/**/*.{js,jsx,ts,tsx}', // Add Components directory
        './app/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}'
      ],
    theme: {
      extend: {
        colors: {
          'dark-walnut': '#3E2A47',
          'chestnut-brown': '#7B3F00',
          'light-oak': '#D1B49D',
          'creamy-beige': '#F1E2C6',
          'warm-taupe': '#C4A79C',
          'soft-sand': '#D9C1A3',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          chart: {
            '1': 'hsl(var(--chart-1))',
            '2': 'hsl(var(--chart-2))',
            '3': 'hsl(var(--chart-3))',
            '4': 'hsl(var(--chart-4))',
            '5': 'hsl(var(--chart-5))',
          },
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
      },
      fontFamily: {
        sans: ['Nexa', 'sans-serif'],
        regular: ['Nexa-Regular'],
        nexaBold: ['Nexa-Bold'],
        nexaBlack: ['Nexa-Black'],
        novem: ['Novem'],
        anton: ['Anton'],
        archivo: ['Archivo'],
      },
    },
    plugins: [require('tailwindcss-animate')],
  };