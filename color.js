// extract color literals from above and export them
const variables = {
  'gray-50': '#f6f6f9',
  'gray-100': '#eaeaf0',
  'gray-200': '#d1d1db',
  'gray-300': '#a9a9bc',
  'gray-400': '#8a8aa3',
  'gray-500': '#6c6c89',
  'gray-600': '#55556d',
  'gray-700': '#3f3f50',
  'gray-800': '#282833',
  'gray-900': '#121217',
  'white-50': 'rgba(255, 255, 255, 0.05)',
  'white-60': 'rgba(255, 255, 255, 0.06)',
  'white-100': 'rgba(255, 255, 255, 0.1)',
  'white-200': 'rgba(255, 255, 255, 0.2)',
  'white-300': 'rgba(255, 255, 255, 0.3)',
  'white-400': 'rgba(255, 255, 255, 0.4)',
  'white-500': 'rgba(255, 255, 255, 0.5)',
  'white-600': 'rgba(255, 255, 255, 0.6)',
  'white-700': 'rgba(255, 255, 255, 0.7)',
  'white-800': 'rgba(255, 255, 255, 0.8)',
  'white-900': 'rgba(255, 255, 255, 0.9)',
  white: '#ffffff',
  'band-50': '#f4f1fd',
  'band-100': '#e5dfff',
  'band-200': '#cac0ff',
  'band-300': '#b0a0ff',
  'band-400': '#9581ff',
  'band-500': '#7b61ff',
  'band-600': '#624ecc',
  'band-700': '#4a3a99',
  'band-800': '#312766',
  'band-900': '#191333',
  'band-disabled': 'rgba(149, 129, 255, 50%)',
  'red-50': '#fef0f4',
  'red-100': '#fdd8e1',
  'red-200': '#fbb1c4',
  'red-300': '#f98ba6',
  'red-400': '#f76489',
  'red-500': '#f53d6b',
  'red-600': '#f3164e',
  'red-700': '#d50b3e',
  'red-800': '#af0932',
  'red-900': '#880727',
  'red-disabled': 'rgba(245, 61, 107, 50%)',
  'yellow-50': '#fff9eb',
  'yellow-100': '#fff3d6',
  'yellow-200': '#ffe7ad',
  'yellow-300': '#ffda85',
  'yellow-400': '#ffce5c',
  'yellow-500': '#ffc233',
  'yellow-600': '#faaf00',
  'yellow-700': '#c28800',
  'yellow-800': '#8a6100',
  'yellow-900': '#523900',
  'green-50': '#eefbf4',
  'green-100': '#dff8ea',
  'green-200': '#b2eecc',
  'green-300': '#84e4ae',
  'green-400': '#56d990',
  'green-500': '#2dca72',
  'green-600': '#26a95f',
  'green-700': '#1e874c',
  'green-800': '#17663a',
  'green-900': '#0f4527',
  'orange-50': '#fff2ee',
  'orange-100': '#ffe8e1',
  'orange-200': '#ffcdbd',
  'orange-300': '#ffb399',
  'orange-400': '#ff9876',
  'orange-500': '#ff7d52',
  'orange-600': '#ff571f',
  'orange-700': '#eb3a00',
  'orange-800': '#b82e00',
  'orange-900': '#852100',
  'pink-50': '#feecfb',
  'pink-100': '#fdddf8',
  'pink-200': '#fcc5f3',
  'pink-300': '#fa99ea',
  'pink-400': '#f87ce4',
  'pink-500': '#f75fde',
  'pink-600': '#f42ad3',
  'pink-700': '#db0bb9',
  'pink-800': '#a5088c',
  'pink-900': '#70065f',
  'blue-50': '#f0faff',
  'blue-100': '#dbf3ff',
  'blue-200': '#ade4ff',
  'blue-300': '#70d1ff',
  'blue-400': '#38beff',
  'blue-500': '#00acff',
  'blue-600': '#0090d6',
  'blue-700': '#0075ad',
  'blue-800': '#005985',
  'blue-900': '#003e5c'
}

const genColorWithVar = (color, shade) => `var(--hp-${color}-${shade}, ${variables[`${color}-${shade}`]})`

// export colors with variables
export const gray = {
  50: genColorWithVar('gray', 50),
  100: genColorWithVar('gray', 100),
  200: genColorWithVar('gray', 200),
  300: genColorWithVar('gray', 300),
  400: genColorWithVar('gray', 400),
  500: genColorWithVar('gray', 500),
  600: genColorWithVar('gray', 600),
  700: genColorWithVar('gray', 700),
  800: genColorWithVar('gray', 800),
  900: genColorWithVar('gray', 900)
}

export const white = {
  50: genColorWithVar('white', 50),
  60: genColorWithVar('white', 60),
  100: genColorWithVar('white', 100),
  200: genColorWithVar('white', 200),
  300: genColorWithVar('white', 300),
  400: genColorWithVar('white', 400),
  500: genColorWithVar('white', 500),
  600: genColorWithVar('white', 600),
  700: genColorWithVar('white', 700),
  800: genColorWithVar('white', 800),
  900: genColorWithVar('white', 900),
  DEFAULT: variables.white
}

export const band = {
  50: genColorWithVar('band', 50),
  100: genColorWithVar('band', 100),
  200: genColorWithVar('band', 200),
  300: genColorWithVar('band', 300),
  400: genColorWithVar('band', 400),
  500: genColorWithVar('band', 500),
  600: genColorWithVar('band', 600),
  700: genColorWithVar('band', 700),
  800: genColorWithVar('band', 800),
  900: genColorWithVar('band', 900),
  Disabled: variables['band-disabled']
}

export const red = {
  50: genColorWithVar('red', 50),
  100: genColorWithVar('red', 100),
  200: genColorWithVar('red', 200),
  300: genColorWithVar('red', 300),
  400: genColorWithVar('red', 400),
  500: genColorWithVar('red', 500),
  600: genColorWithVar('red', 600),
  700: genColorWithVar('red', 700),
  800: genColorWithVar('red', 800),
  900: genColorWithVar('red', 900),
  Disabled: variables['red-disabled']
}

export const yellow = {
  50: genColorWithVar('yellow', 50),
  100: genColorWithVar('yellow', 100),
  200: genColorWithVar('yellow', 200),
  300: genColorWithVar('yellow', 300),
  400: genColorWithVar('yellow', 400),
  500: genColorWithVar('yellow', 500),
  600: genColorWithVar('yellow', 600),
  700: genColorWithVar('yellow', 700),
  800: genColorWithVar('yellow', 800),
  900: genColorWithVar('yellow', 900)
}

export const green = {
  50: genColorWithVar('green', 50),
  100: genColorWithVar('green', 100),
  200: genColorWithVar('green', 200),
  300: genColorWithVar('green', 300),
  400: genColorWithVar('green', 400),
  500: genColorWithVar('green', 500),
  600: genColorWithVar('green', 600),
  700: genColorWithVar('green', 700),
  800: genColorWithVar('green', 800),
  900: genColorWithVar('green', 900)
}

export const orange = {
  50: genColorWithVar('orange', 50),
  100: genColorWithVar('orange', 100),
  200: genColorWithVar('orange', 200),
  300: genColorWithVar('orange', 300),
  400: genColorWithVar('orange', 400),
  500: genColorWithVar('orange', 500),
  600: genColorWithVar('orange', 600),
  700: genColorWithVar('orange', 700),
  800: genColorWithVar('orange', 800),
  900: genColorWithVar('orange', 900)
}

export const pink = {
  50: genColorWithVar('pink', 50),
  100: genColorWithVar('pink', 100),
  200: genColorWithVar('pink', 200),
  300: genColorWithVar('pink', 300),
  400: genColorWithVar('pink', 400),
  500: genColorWithVar('pink', 500),
  600: genColorWithVar('pink', 600),
  700: genColorWithVar('pink', 700),
  800: genColorWithVar('pink', 800),
  900: genColorWithVar('pink', 900)
}

export const blue = {
  50: genColorWithVar('blue', 50),
  100: genColorWithVar('blue', 100),
  200: genColorWithVar('blue', 200),
  300: genColorWithVar('blue', 300),
  400: genColorWithVar('blue', 400),
  500: genColorWithVar('blue', 500),
  600: genColorWithVar('blue', 600),
  700: genColorWithVar('blue', 700),
  800: genColorWithVar('blue', 800),
  900: genColorWithVar('blue', 900)
}

export const palette = {
  white,
  black: {
    DEFAULT: '#000000'
  },
  blue,
  gray,
  green,
  orange,
  pink,
  purple: band,
  red,
  yellow
}

/* -------------------------------------------------------------------------- */
export const themableColorsLight = {
  background: '#FFFFFF',
  foreground: palette.gray[900],

  primary: {
    ...palette.purple,
    DEFAULT: palette.purple[500]
  },

  secondary: {
    ...palette.gray,
    DEFAULT: palette.gray[900]
  },

  surface: {
    ...palette.gray,
    DEFAULT: palette.gray[50]
  },

  destructive: {
    ...palette.red
  }
}

export const themableColorsDark = {
  background: palette.gray[900],
  foreground: '#FFFFFF',

  primary: {
    ...palette.purple,
    DEFAULT: palette.purple[400],
    600: palette.purple[500]
  },

  secondary: {
    ...palette.white,
    900: palette.gray[900],
    DEFAULT: palette.white[900]
  },

  surface: {
    50: 'rgba(255,255,255, 0.1)',
    100: 'rgba(255,255,255, 0.2)',
    200: 'rgba(255,255,255, 0.3)',
    300: 'rgba(255,255,255, 0.4)',
    400: 'rgba(255,255,255, 0.5)',
    500: 'rgba(255,255,255, 0.5)',
    600: 'rgba(255,255,255, 0.7)',
    700: 'rgba(255,255,255, 0.8)',
    800: 'rgba(255,255,255, 0.9)',
    900: '#FFFFFF',
    DEFAULT: 'rgba(255,255,255, 0.1)'
  },

  destructive: {
    ...palette.red
  }
}

export const themableColors = {
  light: themableColorsLight,
  dark: themableColorsDark
}
