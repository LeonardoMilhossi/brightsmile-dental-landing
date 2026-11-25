// Configuração personalizada do Tailwind (CDN): fonte e cores da marca
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        brand: { DEFAULT: '#0d9488', dark: '#0f766e', light: '#f0fdfa' },
        cta: { DEFAULT: '#f97316', dark: '#ea580c' }
      }
    }
  }
};
