/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // ���������
    'bg-gradient-to-br',
    'from-gray-900',
    'via-black',
    'to-gray-800',

    // ����� ����
    'bg-cyan-600',
    'hover:bg-cyan-500',
    'focus:ring-cyan-400',

    // �����
    'text-white',
    'text-center',
    'text-4xl',
    'font-bold',

    // ������������ hover � focus
    'hover:bg-cyan-500',
    'focus:outline-none',
    'focus:ring-2',

    // ��������� ������ ������
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