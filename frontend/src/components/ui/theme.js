import { createTheme } from "@material-ui/core/styles"

const lightGrey = "#f7f8fa"
const tan = "#FECEA8"
const lightRed = "#FF847C"
const red = "#E84A5F"
const offBlack = "#2A363B"
const grey = "#959595"
const darkGrey = "#666666"
const black = "#000000"
const white = "#ffffff"

const theme = createTheme({
  palette: {
    primary: {
      main: lightGrey,
    },
    secondary: {
      main: black,
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
      lightGrey,
      white,
      grey,
    },
    textPrimary: {
      white,
    },
  },
  typography: {
    h1: {
      fontSize: "4.5rem",
      fontFamily: "Anton",
      fontWeight: 700,
      color: black,
    },
    h2: {
      fontFamily: "Anton",
      fontSize: "3rem",
      fontWeight: 700,
      color: black,
    },
    h3: {
      fontFamily: "Anton",
      fontSize: "2rem",
      fontWeight: 300,
      color: black,
    },
    h4: {
      fontFamily: "Anton",
      fontWeight: 700,
      fontSize: "3rem",
      color: black,
    },
    h5: {
      fontFamily: "Anton",
      fontSize: "2rem",
      fontWeight: 700,
      color: black,
    },
    h6: {
      fontFamily: "Anton",
      fontSize: "2rem",
      fontWeight: 700,
      color: white,
    },
    body1: {
      fontFamily: "Anton",
      fontSize: "1.5rem",
      color: grey,
    },
    body2: {
      fontFamily: "Anton",
      fontSize: "1.5rem",
      color: black,
    },
    inherit: {
      fontFamily: "Anton",
      fontWeight: 700,
      fontSize: "3rem",
      color: lightGrey,
    },
  },
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: black,
      },
      label: {
        fontFamily: "Anton",
        fontSize: "1.5rem",
        color: white,
        fontWeight: 400,
      },
    },
  },
})

export default theme
