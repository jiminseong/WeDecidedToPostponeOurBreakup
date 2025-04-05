import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './views/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './widgets/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Pretendard', 'sans-serif'], // Pretendard를 기본 sans 폰트로 설정
        },

        fontSize: {
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
        },
        extend: {
            colors: {
                jwhite: '#FCFFF8',
                jbackground: '#FCFFF8',
                jgreen: '#77B72D',
                jblue: '#009FE0',
                jorange: '#EC6A24',
                lightGreen: '#8ADF28',
                black: '#030303',
                grey: '#4D4D4D',
                lightgrey: '#C1C1C1',
                lightgrey2: '#E3E3E3',
            },
            boxShadow: {
                custom: '0px -2px 10px rgba(3, 3, 3, 0.1)', // 원하는 box-shadow 추가
            },
        },
    },
    plugins: [],
};
export default config;
