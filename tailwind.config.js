const screens = {}
for (let i = 1440; i >= 320; i--) {
  screens[`-${i}`] = { max: `${i}px` }
}

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Mont: ['Mont'],
        Inter: ['Inter'],
      },
    },
    screens: {
      sm: '640px',
      md: '860px',
      lg: '1024px',
      xl: '1280px',
      ...screens,
    },
  },
}
