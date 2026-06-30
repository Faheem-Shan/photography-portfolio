// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//           background: "#e9ede5",
//         card: "#FFFFFF",
//         text: "#373a39",
//         accent: "#6BAF92",
//         border: "#E5E7EB",
//       },
//       fontFamily: {
//         sans: ['Montserrat', 'system-ui', 'sans-serif'],
//         serif: ['"Times New Roman"', 'Times', 'serif'],
//       },
//       animation: {
//         'fade-in': 'fadeIn 1s ease-out forwards',
//         'fade-up': 'fadeUp 1.2s ease-out forwards',
//         'zoom-in': 'zoomIn 1.5s ease-out forwards',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         fadeUp: {
//           '0%': { opacity: '0', transform: 'translateY(30px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         zoomIn: {
//           '0%': { transform: 'scale(1.05)' },
//           '100%': { transform: 'scale(1)' },
//         }
//       }
//     },
//   },
//   plugins: [],
// }
/** /** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EDE8E4",
        card: "#FFFFFF",
        text: "#3A332E",
        heading: "#2A241F",
        accent: "#8D6613",
        accentSecondary: "#7A9B76",
        border: "#DCD5CC",
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['"Times New Roman"', 'Times', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 1.2s ease-out forwards',
        'zoom-in': 'zoomIn 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}