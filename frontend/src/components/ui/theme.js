import { createTheme } from "@material-ui/core/styles"

const lightGrey = "#f7f8fa"
const tan = "#FECEA8"
const lightRed = "#FF847C"
const red = "#E84A5F"
const offBlack = "#2A363B"
const grey = "#747474"
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
    },
    textPrimary: {
      white,
    },
  },
  typography: {
    h1: {
      fontSize: "4.5rem",
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700,
      color: black,
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "3rem",
      fontWeight: 500,
      color: black,
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "2rem",
      fontWeight: 300,
      color: black,
    },
    h4: {
      fontFamily: "Helvetica",
      fontStyle: "regular",
      fontWeight: 700,
      fontSize: "3rem",
      color: black,
    },
    h5: {
      fontFamily: "Philosopher",
      fontSize: "2rem",
      fontWeight: 700,
      fontStyle: "italic",
      color: black,
    },
    h6: {
      fontFamily: "Helvetica",
      fontSize: "2rem",
      fontWeight: 700,
      fontStyle: "regular",
      color: white,
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      color: grey,
    },
    body2: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      color: black,
    },
    inherit: {
      fontFamily: "Helvetica",
      fontStyle: "regular",
      fontWeight: 700,
      fontSize: "3rem",
      color: darkGrey,
    },
  },
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: black,
      },
      label: {
        fontFamily: "Montserrat",
        fontSize: "1.5rem",
        color: white,
        fontWeight: 400,
      },
    },
  },
})

export default theme
