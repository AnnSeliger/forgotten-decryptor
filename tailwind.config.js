/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // Градиенты
    'bg-gradient-to-br',
    'from-gray-900',
    'via-black',
    'to-gray-800',

    // Цвета фона
    'bg-cyan-600',
    'hover:bg-cyan-500',
    'focus:ring-cyan-400',

    // Текст
    'text-white',
    'text-center',
    'text-4xl',
    'font-bold',

    // Модификаторы hover и focus
    'hover:bg-cyan-500',
    'focus:outline-none',
    'focus:ring-2',

    // Остальные важные классы
    'min-h-screen',
    'flex',
    'items-center',
    'justify-center',
    'px-4',
    'w-full',
    'p-3',
    'rounded-lg',
    'border',
    'border-gray-600',
    'backdrop-blur',
    'space-y-6',
    'bg-white/5',
    'p-8',
    'transition',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};