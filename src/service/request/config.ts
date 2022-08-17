let BASE_URL: string
let BASE_NAME: string
const TIME_OUT = 1000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'https://coderwhy/org/dev'
  BASE_NAME = 'coderwhy'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://coderwhy/org/pro'
  BASE_NAME = 'coderczp'
} else {
  BASE_URL = 'https://coderwhy/org/test'
  BASE_NAME = 'coder'
}

export { BASE_URL, BASE_NAME, TIME_OUT }
